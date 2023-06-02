"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context";

export default function Header() {
  const { carts } = useContext(CartContext)!;
  const navitems = [
    { title: "Home", link: "/" },
    { title: "All Products", link: "/products" },
    { title: "Categories", link: "/categories" },
    { title: "Account", link: "/account" },
  ];
  return (
    <div className="flex fixed justify-between bg-zinc-900 w-full py-3 px-12 z-10">
      <h2 className="text-2xl font-semibold  text-zinc-300">
        Sneha Online Store
      </h2>
      <div className="flex gap-6">
        {navitems.map((itm, i) => (
          <Link
            key={i}
            href={itm.link}
            className="text-gray-400 text-md hover:text-gray-100"
          >
            {itm.title}
          </Link>
        ))}
        <Link
          href="/carts"
          className="text-gray-400 text-md hover:text-gray-100"
        >
          {`Cart(${carts.length})`}
        </Link>
      </div>
    </div>
  );
}
