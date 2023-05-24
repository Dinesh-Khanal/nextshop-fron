import { getProducts } from "@/lib/products";

export async function GET() {
  const products = await getProducts();
  return new Response(JSON.stringify(products), { status: 200 });
}
