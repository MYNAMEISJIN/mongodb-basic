import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navgation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticket app",
  description: "Ticket app to practice MongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="flex flex-col min-h-screen bg-black text-white">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
