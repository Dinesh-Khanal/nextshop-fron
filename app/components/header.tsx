"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../context";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { carts } = useContext(CartContext)!;
  const pathname = usePathname();
  const { data: session } = useSession();
  const active = "text-white text-md hover:text-gray-100";
  const inactive = "text-zinc-400 text-md hover:text-gray-100";
  const navitems = [
    { title: "Home", link: "/" },
    { title: "All Products", link: "/products" },
  ];
  return (
    <div className="flex fixed justify-between bg-zinc-900 w-full py-3 px-12 z-10">
      <h2 className="text-2xl font-bold  text-zinc-300">SNEHA</h2>
      <div className="hidden md:flex gap-6 items-center">
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
        {session?.user ? (
          <div className="flex items-center gap-2">
            <button className={inactive} onClick={() => signOut()}>
              Logout
            </button>
            <Image
              src={session.user.image as string}
              width={24}
              height={24}
              alt="profile pic"
              className="rounded-full"
            />
          </div>
        ) : (
          <button className={inactive} onClick={() => signIn("google")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}
