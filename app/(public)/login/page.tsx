import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <>
      <SignedOut>
        <SignIn routing="hash" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
