import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miler Castro | Software Implementation Analyst",
  description:
    "Portafolio profesional de Miler Castro, especializado en implementación de software, QA funcional y desarrollo Backend.",
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