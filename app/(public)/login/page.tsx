import { SignedIn, SignedOut, SignIn, UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function LoginPage() {
  return (
    <main
      role="main"
      className="flex flex-col min-h-dvh min-w-dvw items-center justify-center"
    >
      <SignedOut>
        <SignIn
          routing="hash"
          forceRedirectUrl={`${process.env.NEXT_PUBLIC_HOST}/`}
          appearance={{
            baseTheme: dark,
            layout: {
              shimmer: false,
              animations: false,
              unsafe_disableDevelopmentModeWarnings: true,
            },
          }}
        />
      </SignedOut>
      <SignedIn>
        <UserProfile
          appearance={{
            baseTheme: dark,
            layout: {
              shimmer: false,
              animations: false,
              unsafe_disableDevelopmentModeWarnings: true,
            },
          }}
        />
      </SignedIn>
    </main>
  );
}
