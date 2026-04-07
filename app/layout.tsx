import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat } from "next/font/google";
import "./globals.css";
import RevealProvider from "@/components/_providers/reveal-provider";
import SmoothScrollProvider from "@/components/_providers/smooth-scroll-provider";

const stackSansText = localFont({
  src: "../public/font/Stack_Sans_Text/StackSansText-VariableFont_wght.ttf",
  variable: "--font-stack-sans-text",
  weight: "200 700",
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
        className={`${stackSansText.variable} ${caveat.variable} ${figmaHandBold.variable} relative z-0 font-sans antialiased`}
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
