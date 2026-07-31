import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Miler Castro | Software Implementation Analyst",
    template: "%s | Miler Castro",
  },
  description:
    "Portafolio profesional de Miler Castro, especializado en implementación de software, QA funcional y desarrollo Backend.",
  keywords: [
    "Miler Castro",
    "Software Implementation Analyst",
    "Backend Developer",
    "QA funcional",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
  ],
  authors: [{ name: "Miler Castro" }],
  creator: "Miler Castro",
  openGraph: {
    type: "website",
    locale: "es_PE",
    title: "Miler Castro | Software Implementation Analyst",
    description:
      "Implementación de software, QA funcional y desarrollo Backend orientados a resolver necesidades reales.",
    siteName: "Portfolio de Miler Castro",
  },
  twitter: {
    card: "summary",
    title: "Miler Castro | Software Implementation Analyst",
    description:
      "Implementación de software, QA funcional y desarrollo Backend orientados a resolver necesidades reales.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} bg-[#08090c] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
