"use client";
import { createContext, useState, useEffect } from "react";

export interface ICarts {
  item: IProduct | null;
  quantity: number;
}
interface ICartContext {
  carts: ICarts[];
  addProduct: (product: IProduct) => void;
  addMore: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  clearCart: () => void;
  grandTotal: number;
}
const defaultCarts: ICarts[] = [];
export const CartContext = createContext<ICartContext | null>(null);
export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [carts, setCarts] = useState<ICarts[]>([]);
  useEffect(() => {
    const ls = typeof window !== undefined ? window.localStorage : null;
    const items = JSON.parse(ls?.getItem("cart") as string) || defaultCarts;
    setCarts(items);
  }, []);
  useEffect(() => {
    const ls = typeof window !== undefined ? window.localStorage : null;
    ls?.setItem("cart", JSON.stringify(carts));
  }, [carts]);

  const addProduct = (product: IProduct) => {
    const productAlready = carts.filter((c) => c.item?.id === product.id);
    if (productAlready.length === 0) {
      setCarts([...carts, { item: product, quantity: 1 }]);
    }
  };

  const addMore = (product: IProduct) => {
    const productAlready = carts.filter((c) => c.item?.id === product.id);
    if (productAlready.length > 0) {
      let newQuantity = productAlready[0].quantity + 1;
      const newCarts = carts.map((c) =>
        c?.item?.id === product.id
          ? { item: product, quantity: newQuantity }
          : c
      );
      setCarts(newCarts);
    }
  };
  const removeProduct = (product: IProduct) => {
    const productAlready = carts.filter((c) => c.item?.id === product.id);
    if (productAlready.length) {
      setCarts(
        carts.filter((c) => {
          return c?.item?.id !== product.id;
        })
      );
    }
  };

  const clearCart = () => {
    setCarts(defaultCarts);
  };

  const grandTotal = carts.reduce((pv, c) => {
    return pv + c.item?.price! * c.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        carts,
        addProduct,
        removeProduct,
        addMore,
        clearCart,
        grandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
