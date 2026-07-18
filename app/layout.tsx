import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// EDIT: Update title, description, and keywords with your real info
export const metadata: Metadata = {
  title: "Drew Piland | Senior Product Marketing Manager",
  description:
    "Senior Product Marketing Manager specializing in B2B tech positioning, launch strategy, sales enablement, and executive narratives that drive pipeline.",
  keywords: [
    "Product Marketing Manager",
    "Senior PMM",
    "B2B Marketing",
    "Drew Piland",
    "Product Marketing Lead",
    "Director Product Marketing",
    "GTM Strategy",
    "Sales Enablement",
    "B2B SaaS Marketing",
    "Product Launch",
  ],
  authors: [{ name: "Drew Piland" }],
  openGraph: {
    title: "Drew Piland | Senior Product Marketing Manager",
    description:
      "Senior PMM specializing in B2B tech positioning and narratives that close deals.",
    type: "website",
    // EDIT: Update with your real domain once deployed
    url: "https://drewpiland.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drew Piland | Senior Product Marketing Manager",
    description:
      "Senior PMM specializing in B2B tech positioning and narratives that close deals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="bg-slate-950 text-slate-50">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
