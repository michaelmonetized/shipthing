import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex";
import { PostHogProvider } from "@/providers/posthog";

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
      <body className="antialiased">
        <ConvexClientProvider>
          <PostHogProvider>{children}</PostHogProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
