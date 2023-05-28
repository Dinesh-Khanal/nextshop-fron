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
    <div className="p-24 flex gap-3 w-full">
      <div className="w-2/3">
        <h2 className="text-xl font-semibold">Cart</h2>
        <table className="text-sm text-blue-900 w-full">
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
                    + quantity
                  </button>
                  <button
                    className="btn-red"
                    onClick={() => removeProduct(ct.item!)}
                  >
                    - product
                  </button>
                </td>
                <td className="text-right pr-2">
                  {ct.item?.price! * ct.quantity}
                </td>
              </tr>
            ))}
            <tr className="border-b border-blue-300">
              <td></td>
              <td>Grand Total</td>
              <td className="text-right pr-2">{grandTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-1/3">
        <h2 className="text-xl font-semibold text-center">Order Information</h2>
        <form>
          <input type="text" placeholder="name" className="w-full py-1 px-3" />
          <input type="text" placeholder="email" className="w-full py-1 px-3" />
          <input type="text" placeholder="city" className="w-2/3 py-1 px-3" />
          <input
            type="text"
            placeholder="postal code"
            className="w-1/3 py-1 px-3"
          />
          <input
            type="text"
            placeholder="street address"
            className="w-full py-1 px-3"
          />
          <input
            type="text"
            placeholder="country"
            className="w-full py-1 px-3"
          />
          <div className="w-full text-center">
            <button className="btn-primary my-2">Continue to payment</button>
          </div>
        </form>
      </div>
    </div>
  );
}
