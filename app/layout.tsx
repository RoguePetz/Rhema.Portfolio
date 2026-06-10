import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Reveal from "@/components/Reveal";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Rhema Briggs — Software Developer / Full-Stack",
  description: "Portfolio of Rhema Briggs, Full-Stack Software Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mono.variable}>
      <body>
        {children}
        <Reveal />
      </body>
    </html>
  );
}
