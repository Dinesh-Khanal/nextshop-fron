import Stripe from "stripe";
import { headers } from "next/headers";
import { updateOrder } from "@/lib/orders";

export async function POST(request: Request) {
  const sig = headers().get("stripe-signature");

  let event;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;
  const body = await request.text();
  try {
    event = stripe.webhooks.constructEvent(body, sig as string, endpointSecret);
  } catch (error) {
    return new Response(`Webhook Error: ${error}`);
  }
  const session = event.data.object as Stripe.Checkout.Session;
  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const orderId = session.metadata?.orderId;
      const paid = session.payment_status === "paid";
      if (orderId && paid) {
        await updateOrder(orderId, paid);
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response(JSON.stringify({ status: "ok" }), { status: 200 });
}
