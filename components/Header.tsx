"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
      <a href={href} className={cn(className)} target="_blank" rel="noopener noreferrer" onClick={onNavigate}>
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
      <a href={href} className={cn(className)} target="_blank" rel="noopener noreferrer" onClick={onNavigate}>
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 min-w-0 shrink-0">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-md shadow-primary/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="min-w-0">
            <div className="text-[17px] font-bold text-primary leading-tight">Sehat Pro</div>
            <div className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground leading-tight">
              Healthcare CRM
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-primary/8 text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 px-3.5 text-sm font-medium text-foreground/70 hover:text-foreground"
            asChild
          >
            <SignInLink />
          </Button>
          <Button
            size="sm"
            className="h-9 bg-primary hover:bg-primary/90 shadow-md shadow-primary/15 font-semibold text-sm"
            asChild
          >
            <Link href="/contact">Request demo</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden size-9 border-border/60"
              aria-label="Open menu"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,320px)]">
            <SheetHeader>
              <SheetTitle className="text-left text-sm font-semibold text-muted-foreground">
                Navigation
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col pt-2">
              {NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    pathname === href
                      ? "bg-primary/8 text-primary"
                      : "text-foreground hover:bg-muted/60"
                  )}
                  onClick={close}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-border/60 pt-4">
                <SignInLink
                  className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted/60 transition-colors"
                  onNavigate={close}
                />
                <Button
                  className="bg-primary hover:bg-primary/90 font-semibold"
                  asChild
                  onClick={close}
                >
                  <Link href="/contact">Request demo</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
