import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Ox Redesigns',
  description: 'A curated collection of redesigns of overextended resources',
	icons: {
		icon: 'https://overextended-redesigns.vercel.app/favicon.ico',
		shortcut: 'https://overextended-redesigns.vercel.app/oxpug.webp',
	},
	keywords: ['fivem', 'overextended', 'ox_inventory', 'ox_lib', 'redesign'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
				<SpeedInsights />
      </body>
    </html>
  );
}
