import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const stackVariants = cva("flex flex-col gap-md", {
  variants: {
    variant: {
      default: "w-full md:max-w-[640px] lg:max-w-[880px] mx-auto",
      full: "w-full",
    },
  },
  defaultVariants: { variant: "default" },
});

function Stack({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof stackVariants>) {
  return (
    <section className={cn(stackVariants({ variant, className }))} {...props}>
      {children}
    </section>
  );
}

export { Stack, stackVariants };
