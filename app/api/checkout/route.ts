import { createOrder, getOrders } from "@/lib/orders";
import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const orders = await getOrders();
  return new Response(JSON.stringify(orders), { status: 200 });
}
export async function POST(request: Request) {
  const body = await request.json();
  const order = await createOrder(body);
  //@ts-ignore
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const productPrice = 500;
  const quantity = 1;
  let line_items = [];
  for (const product of body.products) {
    line_items.push({
      quantity,
      price_data: {
        currency: "USD",
        product_data: { name: product },
        unit_amount: quantity * productPrice * 100,
        //unit_amount: quantity * productInfo.price * 100,
      },
    });
  }

  const session = await stripe.checkout.sessions.create({
    line_items,
    customer_email: body.email,
    mode: "payment",
    success_url: process.env.PUBLIC_URL + "/cart?success=1",
    cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
    metadata: { orderId: order.order.id, test: "ok" },
  });
  return NextResponse.json(session.url);
  //return new Response(JSON.stringify({ url: session.url }), { status: 200 });
}
