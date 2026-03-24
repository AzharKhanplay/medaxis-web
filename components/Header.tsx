"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Menu } from "lucide-react";
import { crmLoginHref, crmSignupHref, isAbsoluteHttpUrl } from "@/lib/crm";
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

function SignInLink({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const href = crmLoginHref();
  if (isAbsoluteHttpUrl(href)) {
    return (
      <a
        href={href}
        className={cn(className)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        Sign in
      </a>
    );
  }
  return (
    <Link href={href} className={cn(className)} onClick={onNavigate}>
      Sign in
    </Link>
  );
}

function SignUpLink({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  const href = crmSignupHref();
  if (isAbsoluteHttpUrl(href)) {
    return (
      <a
        href={href}
        className={cn(className)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        Sign up
      </a>
    );
  }
  return (
    <Link href={href} className={cn(className)} onClick={onNavigate}>
      Sign up
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md shadow-primary/20 shrink-0">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-xl font-semibold text-primary">MedAxis</div>
            <div className="text-[10px] text-muted-foreground font-medium">Healthcare CRM</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "font-medium transition-colors text-sm xl:text-base",
                pathname === href ? "text-primary" : "text-foreground hover:text-primary",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-foreground font-medium px-2 lg:px-3" asChild>
            <SignInLink />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex font-semibold border-primary/25 text-primary"
            asChild
          >
            <SignUpLink />
          </Button>
          <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 font-semibold" asChild>
            <Link href="/contact">Request demo</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden shrink-0" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,320px)]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col pt-4">
                {NAV.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "block py-3 text-lg font-medium border-b border-gray-100 transition-colors",
                      pathname === href ? "text-primary" : "text-foreground",
                    )}
                    onClick={close}
                  >
                    {label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-100 mt-2">
                  <SignInLink
                    className="py-2 text-base font-medium text-foreground hover:text-primary"
                    onNavigate={close}
                  />
                  <SignUpLink
                    className="py-2 text-base font-medium text-primary hover:text-primary/80"
                    onNavigate={close}
                  />
                </div>
                <Button className="mt-4 bg-primary hover:bg-primary/90 font-semibold" asChild>
                  <Link href="/contact" onClick={close}>
                    Request demo
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
