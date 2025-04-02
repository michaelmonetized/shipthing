import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const deckVariants = cva("flex flex-row gap-md p-md", {
  variants: {
    variant: {
      default: "w-full md:max-w-[640px] lg:max-w-[860px] mx-auto *:-px-md",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Deck({
  className,
  variant,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof deckVariants>) {
  return (
    <section className={cn(deckVariants({ variant, className }))} {...props} />
  );
}

export { Deck, deckVariants };
