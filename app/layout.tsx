import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header";
import CartProvider from "./context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next shop client",
  description: "created by Dinesh Khanal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
