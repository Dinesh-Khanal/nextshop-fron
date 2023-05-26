import AddToCart from "./addToCart";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  product: IProduct;
}
const Product: React.FC<IProps> = ({ product }) => {
  return (
    <div className="flex flex-col bg-white border-slate-300 border-[1px] rounded-xl hover:shadow-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="w-[300px] h-[180px] m-1 relative mx-auto">
          {product.images?.length! > 0 && (
            <Image
              src={product.images![0]}
              alt={product.title}
              priority={false}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12vw"
              className="rounded-xl object-contain"
            />
          )}
        </div>
      </Link>
      <div className="text-sm font-semibold flex items-center justify-between py-2 px-6">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </div>
      <AddToCart product={product} />
    </div>
  );
};

export default Product;
