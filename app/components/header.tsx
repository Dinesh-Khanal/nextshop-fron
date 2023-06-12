"use client";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context";
import { usePathname } from "next/navigation";

export default function Header() {
  const { carts } = useContext(CartContext)!;
  const pathname = usePathname();
  const active = "text-white text-md hover:text-gray-100";
  const inactive = "text-zinc-400 text-md hover:text-gray-100";
  const navitems = [
    { title: "Home", link: "/" },
    { title: "All Products", link: "/products" },
    { title: "Categories", link: "/categories" },
    { title: "Account", link: "/account" },
  ];
  return (
    <div className="flex fixed justify-between bg-zinc-900 w-full py-3 px-12 z-10">
      <h2 className="text-2xl font-bold  text-zinc-300">SNEHA</h2>
      <div className="hidden md:flex gap-6">
        {navitems.map((itm, i) => (
          <Link
            key={i}
            href={itm.link}
            className={pathname === itm.link ? active : inactive}
          >
            {itm.title}
          </Link>
        ))}
        <Link
          href="/carts"
          className={pathname === "/carts" ? active : inactive}
        >
          {`Cart(${carts.length})`}
        </Link>
      </div>
    </div>
  );
}
