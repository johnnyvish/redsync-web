import { Nunito } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "The Red Sync",
  description: "Using sensors to be healthier",
};

export default function RootLayout({ children, pageProps }) {
  // Include pageProps as a prop
  return (
    <html lang="en">
      <head>
        <title>RedSync</title>
      </head>
      <body className={inter.className}>
        <SessionProvider session={pageProps?.session}>
          {children}
        </SessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
