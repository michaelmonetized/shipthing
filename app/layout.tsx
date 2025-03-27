import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Shipthing",
  description: "Combining convex, posthog, clerk and sentry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
