import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELEV8",
  description: "A social media lifting application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* needed for ios safari */}
        <meta name="theme-color" content="#00000000" />
      </Head>
      <body className="antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
