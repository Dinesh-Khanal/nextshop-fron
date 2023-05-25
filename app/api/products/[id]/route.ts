import { getProductById } from "@/lib/products";

interface IParams {
  params: { id: string };
}
export async function GET(request: Request, { params }: IParams) {
  const { id } = params;
  try {
    const { product } = await getProductById(id);
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ Error: "something went wrong" }), {
      status: 500,
    });
  }
}
