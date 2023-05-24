import Link from "next/link";

export default function Header() {
  const navitems = [
    { title: "Home", link: "/" },
    { title: "All Products", link: "/products" },
    { title: "Categories", link: "/categories" },
    { title: "Account", link: "/account" },
  ];
  return (
    <div className="flex fixed justify-between bg-zinc-900 w-full py-3 px-12">
      <h2 className="text-xl font-semibold  text-zinc-300">Ecommerce</h2>
      <div className="flex gap-4">
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
          href="/cart"
          className="text-gray-400 text-md hover:text-gray-100"
        >
          Cart(0)
        </Link>
      </div>
    </div>
  );
}
