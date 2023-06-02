import React from "react";
import { getProducts } from "@/lib/products";
import Product from "./product";

export default async function NewProducts() {
  const { products } = await getProducts();
  const newProducts = products?.slice(0, 3);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center text-zinc-300">
        New Arrivals
      </h1>
      <div className="grid grid-cols-1 p-6 gap-y-12 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6 list-none">
        {newProducts &&
          newProducts?.map((p) => (
            <li key={p.id}>
              <Product product={p} />
            </li>
          ))}
      </div>
    </div>
  );
}
