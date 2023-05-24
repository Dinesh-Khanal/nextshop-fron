import React from "react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  product: IProduct;
}
const Product: React.FC<IProps> = ({ product }) => {
  return (
    <div className="flex flex-col w-[308px] h-[208px] bg-white border-slate-300 border-[1px] rounded-xl hover:shadow-lg overflow-hidden">
      <div className="w-[300px] h-[200px] m-1 relative">
        {product.images && (
          <Image
            src={product.images[0]}
            alt={product.title}
            priority={true}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12vw"
            className="rounded-xl object-contain"
          />
        )}
      </div>
      <div className="text-sm font-semibold flex items-center justify-between py-2 px-8">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
