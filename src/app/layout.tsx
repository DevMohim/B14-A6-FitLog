import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--next-font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--next-font-inter",
});

export const metadata: Metadata = {
  title: "Fit-log | Homepage",
  description: "This is a fitness trainging website for gymnastic lover people",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-darkBlack">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
