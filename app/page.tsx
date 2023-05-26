import AllProducts from "./components/allProducts";
import FeaturedProduct from "./components/featuredProduct";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-12">
      <div className="w-full bg-zinc-900 px-12 m-0">
        <FeaturedProduct />
        {/* @ts-expect-error Async Server Component */}
        <AllProducts />
      </div>
    </main>
  );
}
