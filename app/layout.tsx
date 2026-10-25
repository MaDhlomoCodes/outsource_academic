import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Outsource Academic — Academic support, one conversation at a time",
  description:
    "Thoughtful academic support for undergraduate and postgraduate students. Reach out and let's figure it out together.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}
