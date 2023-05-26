import Image from "next/image";
import { getProductById } from "@/lib/products";
import AddToCart from "./addToCart";

async function FeaturedProduct() {
  const pid = "646ae56fae77a830b5e0309f";
  const { product } = await getProductById(pid);
  return (
    <div className="w-full bg-zinc-900 text-zinc-200 flex gap-4 py-4">
      <div className="min-w-[60vw]">
        <h1 className="text-3xl mb-4">{product?.title}</h1>
        <p>{product?.description}</p>
        <div className="flex gap-4 mt-4 items-center">
          <button className="border border-white p-1 rounded">Read more</button>
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
export default FeaturedProduct;
