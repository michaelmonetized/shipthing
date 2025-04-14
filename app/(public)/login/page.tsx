import { Link } from "@/components/link";
import { Button } from "@/components/ui/button";
import Box from "@/components/ui/layout/box";
import { Deck } from "@/components/ui/layout/deck";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignOutButton,
  UserProfile,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function LoginPage() {
  return (
    <main
      role="main"
      className="flex flex-col min-h-dvh min-w-dvw items-center justify-center gap-md"
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
        <Box
          className="p-0 m-0 items-center justify-end content-end *:block"
          variant="row"
        >
          <Button asChild variant="secondary">
            <Link href="/">Home</Link>
          </Button>
        </Box>
      </SignedOut>
      <SignedIn>
        <UserProfile
          routing="hash"
          appearance={{
            baseTheme: dark,
            layout: {
              shimmer: false,
              animations: false,
              unsafe_disableDevelopmentModeWarnings: true,
            },
          }}
        />
        <Deck className="items-center justify-between content-between *:block">
          <Button asChild variant="secondary">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <SignOutButton />
          </Button>
        </Deck>
      </SignedIn>
    </main>
  );
}
