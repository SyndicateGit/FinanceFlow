import type { Metadata } from "next";
import { Inter as FontSans, IBM_Plex_Serif } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Finance Flow",
  description: "Finance Flow is a personal finance app that helps you track your income and expenses.",
  icons: {
    icon: "../public/icons/LogoIcon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        ibmPlexSerif.variable
      )}>
        {children}
      </body>
    </html>
  );
}
