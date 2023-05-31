import { createOrder, getOrders } from "@/lib/orders";

export async function GET(request: Request) {
  const orders = await getOrders();
  return new Response(JSON.stringify(orders), { status: 200 });
}
export async function POST(request: Request) {
  const body = await request.json();
  const order = await createOrder(body);
  return new Response(JSON.stringify(order), { status: 200 });
}
