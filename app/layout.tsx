import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const TITLE = "Drew Piland | Principal & Director Product Marketing";
const DESCRIPTION =
  "B2B product marketer who turns technical complexity into revenue narrative, then builds the field systems that make the whole team execute it. CI/CD, software delivery, and security platforms.";

export const metadata: Metadata = {
  metadataBase: new URL("https://drewpiland.com"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Principal Product Marketing Manager",
    "Director Product Marketing",
    "Product Marketing Manager",
    "Senior PMM",
    "Drew Piland",
    "B2B SaaS Marketing",
    "DevOps Product Marketing",
    "GTM Strategy",
    "Sales Enablement",
    "Category Positioning",
    "AI Product Marketing",
  ],
  authors: [{ name: "Drew Piland" }],
  alternates: {
    canonical: "https://drewpiland.com",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://drewpiland.com",
    siteName: "Drew Piland",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
      </body>
    </html>
  );
}
