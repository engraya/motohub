import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/navbar/NavigationBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Motohub",
  description: "Your Ultimate Car Information Hub",
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
