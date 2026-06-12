import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import NavigationBar from "@/components/layout/NavigationBar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CineHub — Your Ultimate Movie & TV Discovery Platform",
  description:
    "Discover and explore movies and TV shows with CineHub. Filter by genre, year, and rating — powered by TMDB.",
  keywords: ["movies", "tv shows", "film", "tmdb", "nextjs", "discovery"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#FAFAFA] dark:bg-slate-900 text-gray-900 dark:text-slate-100 antialiased leading-relaxed">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavigationBar />
          <main className="flex min-h-screen flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
