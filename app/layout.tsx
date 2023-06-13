import "./globals.css";
import Header from "./components/header";
import CartProvider from "./context";
import Footer from "./components/footer";
import Provider from "./components/provider";

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
      <body className="font-inter">
        <Provider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </Provider>
      </body>
    </html>
  );
}
