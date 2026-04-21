import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat, Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "intl-tel-input/styles";
import "./globals.css";
import RevealProvider from "@/components/_providers/reveal-provider";
import CookieConsentBanner from "@/components/_common/cookie-consent-banner";
import AnalyticsLoader from "@/components/_common/analytics-loader";
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
  const gtmId = "GTM-TCLH6QZ";

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${inter.variable} ${caveat.variable} ${figmaHandBold.variable} relative z-0 font-sans antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <RevealProvider>
          <div className="relative">{children}</div>
          <AiChatWidget />
        </RevealProvider>
        <CookieConsentBanner />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
