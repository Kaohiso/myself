import type { Metadata } from "next";
import { Didact_Gothic } from "next/font/google";
import LoaderWrapper from "@/components/LoaderWrapper";
import "./globals.css";

const didact_Gothic = Didact_Gothic({
  variable: "--font-didact-gothic",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Antoine Bentini",
  description: "Developer & Artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${didact_Gothic.variable} antialiased`}>
        <LoaderWrapper>{children}</LoaderWrapper>
      </body>
    </html>
  );
}
