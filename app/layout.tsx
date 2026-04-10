import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Raman Sharma | Full Stack MERN Developer",
  description:
    "Raman Sharma is a Full Stack MERN Developer with 3+ years of production experience. Specialized in scalable backend APIs, real-time systems, job queues, React frontends, and admin dashboards.",
  authors: [{ name: "Raman Sharma" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://raman-kumar-sharma.github.io/raman-portfolio/",
    title: "Raman Sharma | Full Stack MERN Developer",
    description: "Full Stack MERN Developer with 3+ years experience. 10x query optimizations, 99.9% uptime, 100K+ user systems.",
    images: ["https://raman-kumar-sharma.github.io/raman-portfolio/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raman Sharma | Full Stack MERN Developer",
    description: "Full Stack MERN Developer with 3+ years experience.",
    images: ["https://raman-kumar-sharma.github.io/raman-portfolio/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} ${cinzel.variable} ${playfair.variable} theme-future`}>
        {children}
      </body>
    </html>
  );
}
