import { getProducts } from "@/lib/products";
import Product from "../components/product";

export default async function NewProducts() {
  const { products } = await getProducts();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center text-zinc-300">
        Select Products
      </h1>
      <div className="grid grid-cols-1 p-6 gap-y-12 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6 list-none">
        {products &&
          products?.map((p) => (
            <li key={p.id}>
              <Product product={p} />
            </li>
          ))}
      </div>
    </div>
  );
}
