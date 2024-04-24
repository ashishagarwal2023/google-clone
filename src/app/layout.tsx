import { SpeedInsights } from "@vercel/speed-insights/next";

import NextAuthProvider from "./component/NexAuthProvider";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google (Clone)",
  description: "Google.com UI Clone with TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="ULXVhmWyLRG9dl7SU5KY-WM0q1P4Y9Oa8DZ8uG9cBF8"
        />
      </head>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
