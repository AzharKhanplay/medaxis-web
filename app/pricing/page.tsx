import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing — Plans for Clinics & Hospitals",
  description:
    "MedAxis offers flexible healthcare CRM pricing for clinics and hospitals in Afghanistan. Request a tailored quote based on beds, users, and modules.",
};

const tiers = [
  {
    name: "Clinic",
    description: "Single-site clinics getting started with digital operations.",
    price: "Custom",
    highlights: [
      "Core patient & appointment management",
      "Digital records & basic reporting",
      "Email support & onboarding guides",
    ],
    cta: "Talk to sales",
    featured: false,
  },
  {
    name: "Hospital",
    description: "Multi-department hospitals that need scale and governance.",
    price: "Custom",
    highlights: [
      "Full feature set including analytics",
      "Role-based access & audit trails",
      "Priority support & training sessions",
    ],
    cta: "Request a quote",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Groups, teaching hospitals, and complex compliance needs.",
    price: "Custom",
    highlights: [
      "Custom integrations & workflows",
      "Dedicated success manager",
      "SLA-backed support options",
    ],
    cta: "Contact enterprise",
    featured: false,
  },
];

export default function PricingRoutePage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent, tailored to your organization"
        subtitle="We price by scope—users, sites, and modules—so you only pay for what your hospital needs. Every engagement starts with a discovery call."
      />
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-10 flex flex-col shadow-sm transition-all ${
                  tier.featured
                    ? "bg-white border-primary shadow-xl shadow-primary/10 scale-[1.02] lg:scale-105"
                    : "bg-white border-gray-100 hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                <div className="mb-6">
                  <div className="text-sm font-semibold text-primary mb-1">{tier.name}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tier.description}</p>
                </div>
                <div className="text-3xl font-bold text-foreground mb-8">{tier.price}</div>
                <ul className="space-y-4 mb-10 flex-1">
                  {tier.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={tier.featured ? "bg-primary hover:bg-primary/90 shadow-md shadow-primary/20" : "border-2"}
                  variant={tier.featured ? "default" : "outline"}
                  asChild
                >
                  <Link href="/contact">{tier.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            Need a pilot department or phased rollout? We regularly deploy MedAxis in stages so clinical teams can adopt at a sustainable pace.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
