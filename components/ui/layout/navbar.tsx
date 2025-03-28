import React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  PiBugLight,
  PiChartLineUpLight,
  PiCodeBlockLight,
  PiDatabaseLight,
  PiEnvelopeSimpleLight,
  PiHamburgerLight,
  PiLayoutLight,
  PiPackageLight,
  PiSailboatLight,
  PiShieldLight,
  PiTableLight,
  PiTextT,
  PiUserLight,
} from "react-icons/pi";

import { Button } from "../button";
import { Link } from "@/components/link";
import { Toggle } from "@/components/ui/toggle";

const features: {
  title: string;
  href: string;
  description: React.ReactNode;
  icon?: React.ReactNode;
}[] = [
  // Security, Auth, Layout, Typography, Forms, Analytics, Error Tracking, Email, Realtime Data Sync, APIs, More
  {
    title: "Security",
    href: "/features/security",
    description:
      "Easy page level security that doesn't depend on middleware designed to minimize attack surface.",
    icon: <PiShieldLight className="h-6 w-6" />,
  },
  {
    title: "Auth",
    href: "/features/auth",
    description: "All of clerk minimized headaches and footguns.",
    icon: <PiUserLight className="h-6 w-6" />,
  },
  {
    title: "Layout",
    href: "/features/layout",
    description: "Responsive decks, crates and barrels",
    icon: <PiLayoutLight className="h-6 w-6" />,
  },
  {
    title: "Typography",
    href: "/features/typography",
    description:
      "Beautifully crafted, dead simple, accessible typography components",
    icon: <PiTextT className="h-6 w-6" />,
  },
  {
    title: "Forms",
    href: "/features/forms",
    description:
      "Finally create accessible forms that send notifications and store their data, with analytics built in.",
    icon: <PiTableLight className="h-6 w-6" />,
  },
  {
    title: "Analytics",
    href: "/features/analytics",
    description: "We love posthog, so we built it in.",
    icon: <PiChartLineUpLight className="h-6 w-6" />,
  },
  {
    title: "Error Tracking",
    href: "/features/error-tracking",
    description:
      "Track your errors and their behavior with our error tracking tools",
    icon: <PiBugLight className="h-6 w-6" />,
  },
  {
    title: "Email",
    href: "/features/email",
    description: "Resend/react-email simplified.",
    icon: <PiEnvelopeSimpleLight className="h-6 w-6" />,
  },
  {
    title: "Realtime Data Sync",
    href: "/features/realtime-data-sync",
    description:
      "Convex just works, we set it up for you, layout your data model and run.",
    icon: <PiDatabaseLight className="h-6 w-6" />,
  },
  {
    title: "APIs",
    href: "/features/apis",
    description:
      "Simplify the way you build by using our abstractions for working with great technologies that would otherwise cause you to write a lot of boilerplate code.",
    icon: <PiCodeBlockLight className="h-6 w-6" />,
  },
  {
    title: "More",
    href: "/features/",
    description: "View all our features.",
    icon: <PiPackageLight className="h-6 w-6" />,
  },
];

export function Navbar() {
  return (
    <div className="flex items-center justify-stretch gap-md w-full bg-Mantle border-border border rounded-md shadow-2xl">
      <div className="p-4 min-w-max">
        <Link href="/" className="block">
          <PiSailboatLight className="h-8 w-8 inline-block" /> ShipThing
        </Link>
      </div>
      <div className="hidden md:flex w-full justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="bg-Mantle">
                About
              </NavigationMenuTrigger>

              <NavigationMenuContent className="absolute right-0 left-auto">
                <ul className="grid gap-3 p-4 md:w-[640px] lg:w-[860px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          <PiSailboatLight className="h-8 w-8 inline-block pr-2" />
                          ShipThing
                        </div>

                        <p className="text-sm leading-tight text-muted-foreground">
                          A Boilerplate reference codebase featuring best
                          practices for deploying websites with standard
                          features like contact forms with notifications and
                          database storage PLUS auth, error handling, analytics,
                          and a robust component library built on Shadcn/UI.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <NavListItem href="/docs" title="Getting Started">
                    Run through our 3 step/30m deployment guide and take flight.
                  </NavListItem>

                  <NavListItem href="/docs/customization" title="Customization">
                    How to use our customization API to quickly choose from
                    popular color schemes, fonts or create your own theme in
                    minutes.
                  </NavListItem>

                  <NavListItem
                    href="/docs/customization/typography"
                    title="Typography"
                  >
                    Learn how to adjust our opinionated accessibile typography
                    base layer to your liking or just take our word for it and
                    use our defaults.
                  </NavListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-Mantle">
                Features
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[640px] md:grid-cols-3 lg:w-[860px] ">
                  {features.map((feature) => (
                    <NavListItem
                      key={feature.title}
                      title={feature.title}
                      href={feature.href}
                    >
                      {feature.description}
                    </NavListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-Mantle")}
                >
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuIndicator />
          </NavigationMenuList>

          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
      <div className="p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Toggle variant="outline">
              <PiHamburgerLight className="h-8 w-8" />
            </Toggle>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-stretch *:w-full w-[320px] md:min-w-[640px] lg:min-w-[860px]">
            <SheetHeader>
              <SheetTitle>
                <PiSailboatLight className="h-8 w-8 inline-block pr-2" />{" "}
                ShipThing
              </SheetTitle>
              <SheetDescription>
                <h2>About</h2>
                <blockquote className="p-md bg-Base">
                  A Boilerplate reference codebase featuring best practices for
                  deploying websites with standard features like contact forms
                  with notifications and database storage PLUS auth, error
                  handling, analytics, and a robust component library built on
                  Shadcn/UI.
                </blockquote>
              </SheetDescription>
            </SheetHeader>
            <div className="grow flex flex-col divide-y *:w-full *:p-md">
              <div>
                {/* About */}
                <ul>
                  <SheetListItem href="/docs" title="Getting Started">
                    Run through our 3 step/30m deployment guide and take flight.
                  </SheetListItem>
                  <SheetListItem href="/docs" title="Customization">
                    How to use our customization API to quickly choose from
                    popular color schemes, fonts or create your own theme in
                    minutes.
                  </SheetListItem>
                  <SheetListItem href="/docs" title="Typography">
                    Learn how to adjust our opinionated accessibile typography
                    base layer to your liking or just take our word for it and
                    use our defaults.
                  </SheetListItem>
                </ul>
              </div>
              <div>
                {/* Features */}
                <h2>Features</h2>
                <ul>
                  {features.map((feature) => (
                    <SheetListItem
                      key={feature.title}
                      title={feature.title}
                      href={feature.href}
                    >
                      {feature.description}
                    </SheetListItem>
                  ))}
                </ul>
              </div>
              <div>
                {/* Documentation */}
                <h2>
                  <Link href="/docs">Documentation</Link>
                </h2>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="secondary">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

const NavListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <div className="text-muted-foreground">{icon}</div>}
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
NavListItem.displayName = "NavListItem";

const SheetListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon && <div className="text-muted-foreground">{icon}</div>}
          <div>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
});
SheetListItem.displayName = "SheetListItem";
