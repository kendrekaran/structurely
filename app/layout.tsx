import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const stackSansText = localFont({
  src: "../public/font/Stack_Sans_Text/StackSansText-VariableFont_wght.ttf",
  variable: "--font-stack-sans-text",
  weight: "200 700",
});

export const metadata: Metadata = {
  title: "Next.js",
  description: "Next.js - The React Framework for the Web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${stackSansText.variable} relative z-0 font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
