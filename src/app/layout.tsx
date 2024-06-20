import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Fast Feet",
  description:
    "A reliable shipping company that gets your packages where they need to be, on time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={(inter.className, roboto.variable)}>
      <body className="flex flex-col justify-between gap-24 mt-12 bg-indigo-blue">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
