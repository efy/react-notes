import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "ReactNotes",
  description: "notes on various topics not just React.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="container mt-8 mx-auto w-[800px]">
            <main className="prose dark:prose-invert">
              {children}
            </main>
          </div>
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL &&
          process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
            <Script
              src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
              data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
              strategy="lazyOnload"
            />
          )
        }
      </body>
    </html>
  );
}
