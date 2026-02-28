import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat } from "next/font/google";
import "./globals.css";

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
        className={`${stackSansText.variable} ${caveat.variable} relative z-0 font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
