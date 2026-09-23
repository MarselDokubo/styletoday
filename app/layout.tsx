import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Style Today Magazine",
    template: "%s | Style Today"
  },
  description:
    "Style Today Magazine observes and reports the movement of fashion — the people, brands, culture and ideas shaping what fashion is and what it becomes next."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
