import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@global/Navbar";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Duwit Shop",
  description: "an Ecommerce where society livin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
