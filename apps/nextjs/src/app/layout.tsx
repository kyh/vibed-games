import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@2up/ui/theme";
import { Toaster } from "@2up/ui/toast";
import { TooltipProvider } from "@2up/ui/tooltip";
import { cn } from "@2up/ui/utils";

import { siteConfig } from "@/config/site.config";
import { TRPCReactProvider } from "@/trpc/react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    locale: "en-US",
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
    creator: siteConfig.twitter,
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: `${siteConfig.url}/favicon/apple-touch-icon.png`,
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: `${siteConfig.url}/favicon/favicon-32x32.png`,
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: `${siteConfig.url}/favicon/favicon-16x16.png`,
    },
    {
      rel: "mask-icon",
      color: "#000000",
      url: `${siteConfig.url}/favicon/safari-pinned-tab.svg`,
    },
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background font-sans text-foreground antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <TRPCReactProvider>{children}</TRPCReactProvider>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
