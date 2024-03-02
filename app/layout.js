import { Nunito } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "The Red Sync",
  description: "Using sensors to be healthier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>RedSync</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
