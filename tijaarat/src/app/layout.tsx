import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tijaarat - B2B E-commerce & ERP Platform",
    template: "%s | Tijaarat",
  },
  description: "Comprehensive B2B e-commerce and ERP platform for supply chain management, vendor onboarding, and business-to-business transactions.",
  keywords: [
    "B2B",
    "e-commerce", 
    "ERP",
    "supply chain",
    "vendor management",
    "bulk orders",
    "procurement",
    "business marketplace"
  ],
  authors: [{ name: "Tijaarat Team" }],
  creator: "Tijaarat",
  publisher: "Tijaarat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.APP_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.APP_URL || "http://localhost:3000",
    siteName: "Tijaarat",
    title: "Tijaarat - B2B E-commerce & ERP Platform",
    description: "Streamline your business operations with our comprehensive B2B platform",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tijaarat B2B Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tijaarat - B2B E-commerce & ERP Platform",
    description: "Streamline your business operations with our comprehensive B2B platform",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
