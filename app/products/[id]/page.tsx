import { getProductById } from "@/lib/products";
import Image from "next/image";
import AddToCart from "@/app/components/addToCart";

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const { product } = await getProductById(id);
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-zinc-200 flex gap-4 py-14 pl-12">
      <div className="min-w-[60vw]">
        <h1 className="text-xl font-semibold mb-4">{product?.title}</h1>
        <p>{product?.description}</p>
        <div className="flex gap-4 mt-4 items-center">
          <AddToCart product={product!} />
        </div>
      </div>
      <div className="w-full h-56 relative mr-8">
        {product?.images && (
          <Image
            src={product.images[0]}
            fill
            priority={true}
            alt="feature"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
}
