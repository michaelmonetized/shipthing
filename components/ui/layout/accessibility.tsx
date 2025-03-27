import { Button } from "../button";
import { PiCaretUpLight } from "react-icons/pi";

export function AccessibilityWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to main
      </a>
      {children}
      <Button
        asChild
        variant="secondary"
        className="fixed bottom-md right-md m-md text-Crust"
      >
        <a href="#top" title="Back to top">
          <span className="sr-only focus:not-sr-only">Back to top</span>
          <PiCaretUpLight />
        </a>
      </Button>
    </>
  );
}
