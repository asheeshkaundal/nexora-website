import type React from "react";
import type { Metadata, Viewport } from "next";
import { Onest, Poppins, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/ui/floating-buttons";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexora Global - Work smarter, not harder with automated workflows",
  description:
    "Automate workflows, streamline tasks, and collaborate seamlessly with Nexora Global. Boost productivity and efficiency for teams of all sizes.",

  keywords:
    "workflow automation, task management, team collaboration, productivity tools",
  authors: [{ name: "Nexora Global Team" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexoraglobal.com",
    title: "Nexora Global - Automated Workflow Solutions",
    description:
      "Streamline your team's workflow with Nexora Global's powerful automation tools.",
    siteName: "Nexora Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Global - Automated Workflow Solutions",
    description:
      "Streamline your team's workflow with Nexora Global's powerful automation tools.",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon-final.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${onest.variable} ${poppins.variable} ${bricolage.variable} font-sans`}
    >
      <head>
        {/* Ensure a proper viewport meta tag for mobile devices so the site scales to device width */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Optional: enable web app capable behavior on iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
