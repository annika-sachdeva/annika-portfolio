import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Annika Sachdeva",
    template: "%s | Annika Sachdeva",
  },
  description:
    "Annika Sachdeva is an MIT student, AI researcher, entrepreneur, and singer-songwriter working across artificial intelligence, healthcare, startups, and music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}