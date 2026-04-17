import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat, Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "intl-tel-input/styles";
import "./globals.css";
import RevealProvider from "@/components/_providers/reveal-provider";
import AiChatWidget from "@/components/ai-chat-widget";

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
  description:
    "Structurely — an AI platform that moves the right leads forward.",
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
        <RevealProvider>
          <div className="relative">{children}</div>
          <AiChatWidget />
        </RevealProvider>
      </body>
    </html>
  );
}
