import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oscar Pallazhco | Software Engineer",
  description:
    "Oscar Eduardo Pallazhco Nacipucha is a software engineer building thoughtful web, mobile, and AI-powered products in Guayaquil, Ecuador.",
  openGraph: {
    title: "Oscar Pallazhco | Software Engineer",
    description:
      "Product-minded engineering across AI, web, mobile, and cloud infrastructure.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}