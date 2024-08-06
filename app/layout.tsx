import "@/styles/globals.css"
import { Metadata } from "next"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import { Urbanist } from "next/font/google"
import localFont from "next/font/local"
import Head from "next/head"
import { NextUIProvider } from "@nextui-org/react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import SiteFooter from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-sans",
})

const arteria: NextFontWithVariable = localFont({
  src: [
    {
      path: "./fonts/Arteria-Std-Compress-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Arteria-Std-Compress-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Arteria-Std-Compress-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Arteria-Std-Compress-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Arteria-Std-Compress-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Arteria-Std-Compress-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Arteria-Std-Compress-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Arteria-Std-Compress-Demi.otf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-arteria",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning={true}>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased selection:bg-primary/30 selection:text-foreground ",
            arteria.variable,
            arteria.className,
            urbanist.variable,
            urbanist.className
          )}
        >
          <NextUIProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              forcedTheme="dark"
            >
              <main className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
                <SiteFooter />
              </main>
              <TailwindIndicator />
            </ThemeProvider>
          </NextUIProvider>
        </body>
      </html>
    </>
  )
}
