import type { Metadata } from "next";
import { Heart, Target, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About MedAxis — Healthcare CRM for Afghanistan",
  description:
    "Learn about MedAxis: our mission to modernize hospital operations in Afghanistan with secure, scalable healthcare CRM software and hands-on implementation support.",
};

const pillars = [
  {
    icon: Target,
    title: "Operational clarity",
    body: "We believe hospitals run better when leadership, clinical staff, and administration share one operational picture—not siloed spreadsheets and paper trails.",
  },
  {
    icon: Heart,
    title: "Patient-centered design",
    body: "Workflows in MedAxis are modeled around real patient journeys—from intake and triage to follow-up—so technology supports care instead of slowing it down.",
  },
  {
    icon: Users,
    title: "Local context",
    body: "Built with Afghanistan’s healthcare environment in mind, MedAxis focuses on reliability, training, and support so teams can trust the system day to day.",
  },
];

export default function AboutRoutePage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Modern infrastructure for healthcare institutions"
        subtitle="MedAxis combines enterprise-grade software with implementation discipline—so hospitals can improve throughput, documentation, and decision-making without losing focus on patients."
      />
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold mb-6">Why we built MedAxis</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Large providers juggle thousands of encounters, fragmented records, and constant coordination across departments. Off-the-shelf tools rarely fit hospital complexity; generic CRMs are not built for clinical compliance. MedAxis exists to bridge that gap with a platform tuned for healthcare operations and the teams who run them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-gray-100 bg-gray-50/80 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
