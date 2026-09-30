import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ClipCraft Barbershop — Premium Men's Grooming in Islamabad",
  description:
    "ClipCraft is Islamabad's premium barbershop: signature cuts, skin fades, beard sculpting and hot-towel royal shaves. Book your chair on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${oswald.variable} ${inter.variable} bg-coal-950 font-sans text-zinc-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
