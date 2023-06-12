import Banner from "./components/banner";
import NewProducts from "./components/newProducts";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-14">
      <Banner />
      <div className="w-full bg-zinc-900 px-12 m-0">
        {/* @ts-expect-error Async Server Component */}
        <NewProducts />
      </div>
    </main>
  );
}
