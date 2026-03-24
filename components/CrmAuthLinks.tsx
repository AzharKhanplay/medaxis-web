import Link from "next/link";
import { crmLoginHref, crmSignupHref, isAbsoluteHttpUrl } from "@/lib/crm";
import { cn } from "@/components/ui/utils";

function InlineLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (isAbsoluteHttpUrl(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

type CrmAuthLinksProps = {
  className?: string;
  /** Use on gradient / dark marketing bands (e.g. CTA section). */
  variant?: "default" | "onDark";
};

export function CrmAuthLinks({ className, variant = "default" }: CrmAuthLinksProps) {
  const login = crmLoginHref();
  const signup = crmSignupHref();
  const linkCls =
    variant === "onDark"
      ? "font-medium text-white hover:text-white/90 underline-offset-4 hover:underline"
      : "font-medium text-primary hover:underline underline-offset-4";
  const sepCls = variant === "onDark" ? "mx-2 text-white/40" : "mx-2 text-gray-300";

  return (
    <p className={cn("text-sm text-muted-foreground", variant === "onDark" && "text-white/90", className)}>
      <InlineLink href={login} className={linkCls}>
        Sign in
      </InlineLink>
      <span className={sepCls} aria-hidden>
        |
      </span>
      <InlineLink href={signup} className={linkCls}>
        Sign up
      </InlineLink>
    </p>
  );
}
