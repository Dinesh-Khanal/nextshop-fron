"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface ICarts {
  item: IProduct | null;
  quantity: number;
}
interface ICartContext {
  carts: ICarts[];
  addProduct: (product: IProduct) => void;
  grandTotal: number;
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
    } else {
      let newQuantity = productAlready[0].quantity + 1;
      const newCarts = carts.map((c) =>
        c?.item?.id === product.id
          ? { item: product, quantity: newQuantity }
          : c
      );
      setCarts(newCarts);
    }
  };

  let grandTotal = carts.reduce((pv, c) => {
    return pv + c.item?.price! * c.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ carts, addProduct, grandTotal }}>
      {children}
    </CartContext.Provider>
  );
}
