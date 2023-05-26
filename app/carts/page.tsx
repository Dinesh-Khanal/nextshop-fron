"use client";
import { useContext } from "react";
import { CartContext } from "../context";

export default function Cart() {
  const { carts, grandTotal, addMore, removeProduct } =
    useContext(CartContext)!;
  if (!carts.length) {
    return (
      <div className="p-24 text-center text-3xl text-red-900 font-bold">
        Cart is empty!
      </div>
    );
  }
  return (
    <div className="p-24">
      <h2 className="text-xl font-semibold">Cart</h2>
      <table className="text-lg text-blue-900 w-2/3">
        <tbody>
          <tr className="bg-gray-300">
            <td>Product</td>
            <td>Quantity</td>
            <td>Total Amount</td>
          </tr>
          {carts.map((ct, index) => (
            <tr key={index} className="border-b border-blue-300">
              <td>{ct.item?.title}</td>
              <td className="flex gap-2 items-center">
                <span>{ct.quantity}</span>
                <button
                  className="btn-primary my-2"
                  onClick={() => addMore(ct.item!)}
                >
                  Add quantity
                </button>
                <button
                  className="btn-red"
                  onClick={() => removeProduct(ct.item!)}
                >
                  Remove product
                </button>
              </td>
              <td>{ct.item?.price! * ct.quantity}</td>
            </tr>
          ))}
          <tr className="border-b border-blue-300">
            <td></td>
            <td>Grand Total</td>
            <td>{grandTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
