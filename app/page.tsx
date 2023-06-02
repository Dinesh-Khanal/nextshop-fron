import NewProducts from "./components/newProducts";
import FeaturedProduct from "./components/featuredProduct";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-12">
      <div className="w-full bg-zinc-900 px-12 m-0">
        {/* @ts-expect-error Async Server Component */}
        <FeaturedProduct />
        {/* @ts-expect-error Async Server Component */}
        <NewProducts />
      </div>
    </main>
  );
}
