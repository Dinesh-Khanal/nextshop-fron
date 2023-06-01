import { createOrder, getOrders } from "@/lib/orders";
import Stripe from "stripe";

export async function GET(request: Request) {
  const orders = await getOrders();
  return new Response(JSON.stringify(orders), { status: 200 });
}
export async function POST(request: Request) {
  const {
    title,
    pin,
    address,
    email,
    city,
    country,
    ammount,
    products,
    carts,
  } = await request.json();
  const orderInfo = {
    title,
    pin,
    address,
    email,
    city,
    country,
    products,
    ammount,
  };

  const order = await createOrder(orderInfo);

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });

  let line_items = [];
  for (const cart of carts) {
    line_items.push({
      quantity: cart.quantity,
      price_data: {
        currency: "USD",
        product_data: { name: cart.item.title },
        unit_amount: cart.quantity * cart.item.price * 100,
      },
    });
  }

  const session = await stripe.checkout.sessions.create({
    line_items,
    customer_email: email,
    mode: "payment",
    success_url: process.env.PUBLIC_URL + "/carts?success=1",
    cancel_url: process.env.PUBLIC_URL + "/carts?canceled=1",
    metadata: { orderId: order.order?.id as string, test: "ok" },
  });
  return new Response(JSON.stringify({ url: session.url }), { status: 200 });
}
