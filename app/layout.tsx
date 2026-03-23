import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Greg Moyerbrailean",
  description: "Greg Moyerbrailean's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${nunitoSans.className} antialiased`}
      >
        {children}
        <div className="flex w-full my-8 justify-center text-sm">
            &copy; 2026 Greg Moyerbrailean
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
