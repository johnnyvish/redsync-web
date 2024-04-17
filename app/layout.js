import { Nunito } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ClientSessionProvider from "@/components/ClientSessionProvider";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "The Red Sync",
  description: "Using sensors to be healthier",
};

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en">
      <head>
        <title>RedSync</title>
      </head>
      <body className={inter.className}>
        <ClientSessionProvider session={pageProps?.session}>
          {children}
        </ClientSessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
