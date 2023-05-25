"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface ICarts {
  item: IProduct | null;
  quantity: number;
}
interface ICartContext {
  carts: ICarts[];
  setCarts: Dispatch<SetStateAction<ICarts[]>>;
}
const defaultCarts: ICarts[] = [];
export const CartContext = createContext<ICartContext | null>(null);
export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [carts, setCarts] = useState<ICarts[]>(defaultCarts);
  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
}
