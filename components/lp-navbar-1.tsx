"use client";

import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const MENU_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact-us" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col md:flex-row gap-1 ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button
          variant="ghost"
          className="w-full md:w-auto text-white hover:text-primary hover:underline decoration-primary decoration-2 underline-offset-8"
        >
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  return (
    <nav
      className="sticky top-0 z-50 isolate h-20 flex items-center"
      style={{ backgroundColor: "#000B58" }}
    >
      <div className="container relative px-6 flex flex-row items-center justify-between gap-4 md:gap-6 m-auto h-full">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-5 items-center h-full">
          <NavMenuItems />
          <Link href="#get-started">
            <Button className="bg-primary text-primary-foreground hover:bg-[hsl(var(--primary-dark))] hover:text-foreground rounded-lg shadow-md shadow-black/20">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile: hamburger + slide-out drawer */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                aria-label="Open menu"
                className="size-9 flex items-center justify-center text-white hover:text-primary"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#000B58]">
              <SheetHeader>
                <SheetTitle className="text-white">Nexora Global</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                <NavMenuItems />
                <Link href="#get-started">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-[hsl(var(--primary-dark))] hover:text-foreground rounded-lg shadow-md shadow-black/20">
                    Get Started
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
