import type { Metadata, Viewport } from "next";

import "./globals.css";
import "@fontsource-variable/instrument-sans";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";

import CommandPalette from "@/components/command-palette";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CommandPaletteProvider } from "@/lib/command-palette-context";
import { siteConfig } from "@/lib/constants";
import QueryProvider from "@/lib/query-provider";

const SITE_URL = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Portafolio profesional de Miler Castro: implementación de software, QA funcional y desarrollo backend orientados a resolver necesidades reales.",
  keywords: [
    "Miler Castro",
    "Software Implementation Analyst",
    "Backend Developer",
    "QA funcional",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: SITE_URL,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description:
      "Implementación de software, QA funcional y desarrollo backend orientados a resolver necesidades reales.",
    siteName: `Portfolio de ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description:
      "Implementación de software, QA funcional y desarrollo backend orientados a resolver necesidades reales.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0813",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-background text-foreground antialiased">
        <LoadingScreen />

        <a
          href="#main"
          className="fixed left-3 top-3 z-[10020] -translate-y-24 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-transform focus:translate-y-0"
        >
          Saltar al contenido
        </a>

        <QueryProvider>
          <TooltipProvider delayDuration={200}>
            <CommandPaletteProvider>
              {children}
              <CommandPalette />
            </CommandPaletteProvider>
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
