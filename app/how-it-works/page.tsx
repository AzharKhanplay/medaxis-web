import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { HowItWorks } from "@/components/HowItWorks";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "How It Works — Onboarding in Three Steps",
  description:
    "See how MedAxis gets your hospital live: sign up, configure departments and roles, then start managing patients and operations with guided setup and migration support.",
};

export default function HowItWorksRoutePage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Go live without a six-month IT project"
        subtitle="MedAxis is designed for structured rollout: we help you configure workflows, import data, and train teams so adoption sticks."
      />
      <HowItWorks />
      <BeforeAfter />
      <CTA />
    </>
  );
}
