"use client";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context";

export default function Cart() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [pin, setPin] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const { carts, grandTotal, addMore, removeProduct, clearCart } =
    useContext(CartContext)!;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
  }, [clearCart]);
  const handleClick = () => {
    const products = carts.map((ct) => ct.item?.title);
    const orderInfo = {
      title,
      pin,
      address,
      email,
      city,
      country,
      products,
      carts,
      ammount: grandTotal.toString(),
    };
    fetch("/api/checkout", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(orderInfo),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.url) {
          window.location = data.url;
        }
      })
      .catch((error) => console.log(error));
    resetForm();
  };
  const resetForm = () => {
    setTitle("");
    setEmail("");
    setPin("");
    setAddress("");
    setCity("");
    setCountry("");
  };
  if (isSuccess) {
    return (
      <div className="p-24 text-center">
        <h1 className="text-xl font-semibold">Thanks for your order!</h1>
        <p>We will email you when your order will be sent.</p>
      </div>
    );
  }
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
          <input
            type="text"
            placeholder="name"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full py-1 px-3"
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-1 px-3"
          />
          <input
            type="text"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-2/3 py-1 px-3"
          />
          <input
            type="text"
            name="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="postal code"
            className="w-1/3 py-1 px-3"
          />
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="street address"
            className="w-full py-1 px-3"
          />
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="country"
            className="w-full py-1 px-3"
          />
          <div className="w-full text-center">
            <button
              type="button"
              onClick={handleClick}
              className="btn-primary my-2"
            >
              Continue to payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
