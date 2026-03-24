import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Problem } from "@/components/Problem";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Trust } from "@/components/Trust";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Hospital Management & Healthcare CRM for Afghanistan",
  description:
    "MedAxis is an enterprise healthcare CRM and hospital management platform for large clinics and hospitals in Afghanistan—patient records, scheduling, analytics, and secure operations in one system.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Problem />
      <BeforeAfter />
      <Features />
      <HowItWorks />
      <Benefits />
      <Trust />
      <CTA />
    </>
  );
}
