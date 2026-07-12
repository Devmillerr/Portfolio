import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miler Castro | Software Implementation Engineer",
  description:
    "Portafolio profesional de Miler Castro. Software Implementation Engineer, Backend Developer y QA Engineer especializado en transformación digital, implementación de software y desarrollo Backend con NestJS, TypeScript y PostgreSQL.",
  keywords: [
    "Miler Castro",
    "Backend Developer",
    "Software Implementation Engineer",
    "QA Engineer",
    "NestJS",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Transformación Digital",
    "Digiproy",
    "Camposol",
  ],
  authors: [{ name: "Miler Castro" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.className} bg-zinc-950 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}