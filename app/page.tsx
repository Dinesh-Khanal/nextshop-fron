import { getProductById } from "@/lib/products";
import Image from "next/image";

export default async function Home() {
  const { product } = await getProductById("646ae56fae77a830b5e0309f");
  return (
    <main className="flex bg-zinc-900 min-h-screen flex-col items-center py-16 px-12">
      <div className="w-full text-zinc-200 flex gap-4">
        <div>
          <h1 className="text-2xl font-bold">Pro Anywhere</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            quasi! Esse voluptas consequatur similique, vel minus, blanditiis
            magni repudiandae labore quibusdam vitae, ea aperiam at quae.
            Beatae, non. Dolor, voluptatem!
          </p>
        </div>
        <div className="w-full h-72 relative mr-8">
          {product && (
            <Image
              src={product.images[0]}
              fill
              alt="feature"
              className="object-contain"
            />
          )}
        </div>
      </div>
    </main>
  );
}
