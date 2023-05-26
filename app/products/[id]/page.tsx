import { getProductById } from "@/lib/products";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { product } = await getProductById(id);
  return <div className="p-24 text-xl text-blue-900">{product?.title}</div>;
}
