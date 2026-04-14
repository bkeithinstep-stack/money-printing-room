import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Money Printing Room - Trading Dashboard",
  description: "Professional trading dashboard with real-time market data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>body>
    </html>html>
  );
}</html>











