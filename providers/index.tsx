import { ConvexClientProvider } from "@/providers/convex";
import { PostHogProvider } from "@/providers/posthog";
import { ThemeProvider } from "@/providers/theme";
import { AccessibilityWrapper } from "@/components/ui/layout/accessibility";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexClientProvider>
      <PostHogProvider>
        <ThemeProvider>
          <AccessibilityWrapper>{children}</AccessibilityWrapper>
        </ThemeProvider>
      </PostHogProvider>
    </ConvexClientProvider>
  );
}
