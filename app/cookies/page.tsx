import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy — MedAxis",
  description: "How MedAxis uses cookies on the marketing website and how you can control preferences.",
};

export default function CookiesRoutePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="We keep cookies minimal. Here is how they are used on this site."
      />
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Essential cookies</h2>
            <p>
              Some cookies are required for basic functionality—such as security, load balancing, or remembering your session preferences during a single visit.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Analytics</h2>
            <p>
              If enabled, we may use analytics cookies in aggregated form to understand which pages are most useful. These cookies do not need to identify you personally to be valuable for product planning.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Your choices</h2>
            <p>
              You can block or delete cookies through your browser settings. Blocking all cookies may affect how certain features behave.
            </p>
          </div>
          <p className="text-sm text-muted-foreground/80">Last updated: March 2026</p>
        </div>
      </section>
    </>
  );
}
