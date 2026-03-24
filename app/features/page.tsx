import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Features } from "@/components/Features";
import { Capabilities } from "@/components/Capabilities";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Features — Patient Records, Scheduling & Analytics",
  description:
    "Explore MedAxis healthcare CRM features: patient management, digital records, appointment scheduling, secure messaging, reporting, and compliance-ready security for hospitals.",
};

export default function FeaturesRoutePage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Built for hospital-scale workflows"
        subtitle="From digital records to analytics, every module is designed for clinical teams, administrators, and leadership—without compromising speed or security."
      />
      <Capabilities />
      <Features />
      <CTA />
    </>
  );
}
