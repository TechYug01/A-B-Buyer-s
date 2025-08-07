import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Lora, Playfair_Display, Quicksand } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A&P Buyer's Agency",
  description:
    "Shaping Futures Through Smarter Buying. Trusted property acquisition and investment services across Australia.",
  openGraph: {
    images: [
      {
        url: "https://www.apbuyersagency.com.au/og-image.jpg",
      },
    ],
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
      className={`${playfair.variable} ${lora.variable} ${quicksand.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
