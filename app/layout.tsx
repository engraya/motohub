import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/footer/site-footer";
import NavigationBar from "@/components/navbar/NavigationBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ThankFul Art",
  description: "Choose, Customize, and Download Thankful Art with Just a few clicks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="gradient leading-relaxed tracking-wide ">
      <NavigationBar/>
        <div className="flex min-h-screen flex-col">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
