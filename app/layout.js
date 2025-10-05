import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Half",
  description: "Divide your expenses among friends hassle free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <ClerkProvider>
          <ConvexClientProvider>
            <NextTopLoader color="#000" height={3} />
            <Header />
            <main className="min-h-screen">{children}</main>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
