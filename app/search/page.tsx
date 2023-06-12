import { getProductsByCategory } from "@/lib/products";
import { getCategories } from "@/lib/categories";
import Product from "../components/product";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const { category } = searchParams;
  const { products } = await getProductsByCategory(category);
  const { categories } = await getCategories();
  const active = "text-white";
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center text-zinc-300">
        Select Products
      </h1>
      <div className="flex">
        <div className="w-1/2 md:w-1/4 bg-zinc-900 min-h-screen border border-zinc-500 rounded-xl mx-4 mb-2 mt-6">
          <h1 className="text-xl text-zinc-500 text-center p-2 border-b">
            Select category
          </h1>
          <ul className="list-none p-4">
            <li className="text-zinc-400 p-1 w-full text-center border-b border-zinc-700 hover:bg-zinc-700 hover:text-white cursor-pointer">
              <Link href="/products">All products</Link>
            </li>
            {categories?.map((ct) => (
              <li
                key={ct.id}
                className="text-zinc-400 p-1 w-full text-center border-b border-zinc-700 hover:bg-zinc-700 hover:text-white cursor-pointer"
              >
                <Link
                  href={`/search?category=${ct.id}`}
                  className={ct.id === category ? active : ""}
                >
                  {ct.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 p-6 gap-y-12 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6 list-none">
          {products &&
            products?.map((p) => (
              <li key={p.id}>
                <Product product={p} />
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}
