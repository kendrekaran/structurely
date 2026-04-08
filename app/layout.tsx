import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat, Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import RevealProvider from "@/components/_providers/reveal-provider";
import SmoothScrollProvider from "@/components/_providers/smooth-scroll-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["700"],
});

const figmaHandBold = localFont({
  src: "../fonts/FigmaHand-Bold_2.otf",
  variable: "--font-figma-hand-bold",
});

export const metadata: Metadata = {
  title: "Structurely",
  description: "Structurely - AI platform that move the right leads forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${inter.variable} ${caveat.variable} ${figmaHandBold.variable} relative z-0 font-sans antialiased`}
      >
        <SmoothScrollProvider>
          <RevealProvider>
            <div className="relative">{children}</div>
          </RevealProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
