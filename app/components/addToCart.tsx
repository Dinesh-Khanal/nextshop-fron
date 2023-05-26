"use client";
import { useContext } from "react";
import { CartContext } from "../context";

const AddToCart = ({ product }: { product: IProduct }) => {
  const { addProduct } = useContext(CartContext)!;
  return (
    <button
      onClick={() => addProduct(product)}
      className="bg-blue-900 text-sm text-white rounded"
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
