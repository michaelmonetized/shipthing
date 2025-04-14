import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const boxVariants = cva(
  "flex gap-md w-full md:max-w-[320px] lg:max-w-[400px] mx-auto",
  {
    variants: { variant: { default: "flex-col", row: "flex-row" } },
    defaultVariants: { variant: "default" },
  }
);

function Box({
  children,
  className,
  variant,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<"div"> &
  VariantProps<typeof boxVariants>) {
  return (
    <div className={cn(boxVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
}

export default Box;
