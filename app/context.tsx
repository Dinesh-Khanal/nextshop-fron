"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface ICarts {
  item: IProduct | null;
  quantity: number;
}
interface ICartContext {
  carts: ICarts[];
  addProduct: (product: IProduct) => void;
}
const defaultCarts: ICarts[] = [];
export const CartContext = createContext<ICartContext | null>(null);
export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [carts, setCarts] = useState<ICarts[]>(defaultCarts);
  const addProduct = (product: IProduct) => {
    const productAlready = carts.filter((c) => c.item?.id === product.id);
    if (productAlready.length === 0) {
      setCarts([...carts, { item: product, quantity: 1 }]);
    }
  };
  return (
    <CartContext.Provider value={{ carts, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}
