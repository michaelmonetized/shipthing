"use client";

import { AccessibilityWrapper } from "@/components/ui/layout/accessibility";
import { Button } from "@/components/ui/button";
import * as Sentry from "@sentry/nextjs";
import router from "next/router";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body id="top">
        <AccessibilityWrapper>
          <main
            role="main"
            id="main"
            className="min-h-dvh flex flex-col gap-md justify-center items-center *:w-full p-md text-center"
          >
            <h1>{"We're still working on this feature…"}</h1>
            <h2>{"Check back later"}</h2>
            <p>
              <Button onClick={() => reset()}>Try Again</Button>
              <Button onClick={() => router.back()}>or Go Back</Button>
            </p>
          </main>
        </AccessibilityWrapper>
      </body>
    </html>
  );
}
