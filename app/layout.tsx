import type React from "react";
import type { Metadata, Viewport } from "next";
import { Onest, Poppins } from "next/font/google";
import "./globals.css";

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
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
      className={`${onest.variable} ${poppins.variable} font-sans`}
    >
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
