import type { Metadata } from "next";
import { Geist, Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "Dear UHS Final Project",
  description: "By Ishan and Jacob",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${michroma.variable} ${geistSans.variable} antialiased bg-iron-grey`}
      >
        {children}
      </body>
    </html>
  );
}

// ${geistSans.variable} ${geistMono.variable}
