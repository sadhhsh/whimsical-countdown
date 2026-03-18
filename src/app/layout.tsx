import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Setting up Playfair for our "Dreamy" headers
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Setting up Inter for our easy-to-read body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dreamy Escape World",
  description: "A sanctuary for thoughts and growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}