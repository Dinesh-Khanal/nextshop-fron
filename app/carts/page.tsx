"use client";
import { useContext } from "react";
import { CartContext } from "../context";

export default function Cart() {
  const { carts, grandTotal } = useContext(CartContext)!;
  if (carts.length === 0) {
    return <div>No item added to cart</div>;
  }
  return (
    <div className="p-24">
      <table className="text-lg text-blue-900 w-1/2">
        <tbody>
          <tr>
            <td>Product</td>
            <td>Quantity</td>
            <td>Total Amount</td>
          </tr>
          {carts.map((ct, index) => (
            <tr key={index}>
              <td>{ct.item?.title}</td>
              <td>{ct.quantity}</td>
              <td>{ct.item?.price! * ct.quantity}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>Grand Total</td>
            <td>{grandTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
