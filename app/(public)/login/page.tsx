import { Link } from "@/components/link";
import { Button } from "@/components/ui/button";
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
        <div className="m-md p-md flex gap-md items-center justify-end content-center w-full md:max-w-[1170px]">
          <Button asChild variant="secondary">
            <Link href="/">Home</Link>
          </Button>
        </div>
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
        <div className="flex gap-md items-center justify-between content-between w-full md:max-w-[880px]">
          <Button asChild variant="secondary">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="outline">
            <SignOutButton />
          </Button>
        </div>
      </SignedIn>
    </main>
  );
}
