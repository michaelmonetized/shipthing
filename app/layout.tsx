import type { Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex";
import { PostHogProvider } from "@/providers/posthog";
import ThemeProvider from "@/providers/theme";

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
          <PostHogProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </PostHogProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
