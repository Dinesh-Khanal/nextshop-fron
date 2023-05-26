"use client";
import { useContext } from "react";
import { CartContext } from "../context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const AddToCart = ({ product }: { product: IProduct }) => {
  const { addProduct } = useContext(CartContext)!;
  return (
    <button
      onClick={() => addProduct(product)}
      className="btn-primary py-1 px-2 flex items-center justify-center"
    >
      <ShoppingCartIcon className="h-6 w-6" />
      <span>Add to cart</span>
    </button>
  );
};

export default AddToCart;
