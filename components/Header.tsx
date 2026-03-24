"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { cn } from "./ui/utils";

const NAV = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md shadow-primary/20 shrink-0">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-xl font-semibold text-primary">MedAxis</div>
            <div className="text-[10px] text-muted-foreground font-medium">Healthcare CRM</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "font-medium transition-colors",
                pathname === href ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 font-semibold" asChild>
            <Link href="/contact">Request Demo</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden shrink-0" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,320px)]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col pt-4" onClick={() => setOpen(false)}>
                {NAV.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "block py-3 text-lg font-medium border-b border-gray-100 transition-colors",
                      pathname === href ? "text-primary" : "text-foreground",
                    )}
                  >
                    {label}
                  </Link>
                ))}
                <Button className="mt-6 bg-primary hover:bg-primary/90 font-semibold" asChild>
                  <Link href="/contact">Request Demo</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
