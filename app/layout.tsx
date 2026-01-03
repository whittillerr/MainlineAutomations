import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mainline Automations | AI-Powered Customer Messaging for Lawn Care",
  description: "Save 10-15 hours/week and book more jobs with automated messaging that sounds just like you. Instant lead responses, smart follow-ups, and automated reviews.",
  keywords: "AI automation, lawn care automation, customer messaging, automated follow-ups, business automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
