"use client";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { CartContext, ICarts } from "../context";

function FeaturedProduct() {
  const [product, setProduct] = useState<IProduct>();
  const { carts, setCarts } = useContext(CartContext)!;
  const pid = "646ae56fae77a830b5e0309f";

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const result = await fetch("http://localhost:3000/api/products/" + pid);
    const product = await result.json();
    setProduct(product);
  };
  const handleAdd = () => {
    const newCarts = [...carts, { item: product!, quantity: 1 }];
    setCarts(newCarts);
  };
  return (
    <div className="w-full bg-zinc-900 text-zinc-200 flex gap-4 py-4">
      <div className="min-w-[60vw]">
        <h1 className="text-3xl mb-4"></h1>
        <p>{product?.description}</p>
        <div className="flex gap-4 mt-4 items-center">
          <button className="border border-white p-1 rounded">Read more</button>
          <button
            className="btn-primary flex gap-1 items-center"
            onClick={handleAdd}
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
      <div className="w-full h-56 relative mr-8">
        {product?.images && (
          <Image
            src={product.images[0]}
            fill
            priority
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
