import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  product: IProduct;
}
const Product: React.FC<IProps> = ({ product }) => {
  return (
    <div className="flex flex-col bg-white border-slate-300 border-[1px] rounded-xl hover:shadow-lg overflow-hidden">
      <div className="w-[300px] h-[180px] m-1 relative mx-auto">
        {product.images && (
          <Image
            src={product.images[0]}
            alt={product.title}
            priority={false}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12vw"
            className="rounded-xl object-contain"
          />
        )}
      </div>
      <div className="text-sm font-semibold flex items-center justify-between py-2 px-6">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </div>
      <button className="btn-primary text-sm">Add to cart</button>
    </div>
  );
};

export default Product;
