import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service — MedAxis CRM",
  description:
    "Terms of service for using MedAxis marketing materials and pilot discussions. Full commercial terms are provided in your order form or master agreement.",
};

export default function TermsRoutePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="These terms apply to use of this website and preliminary discussions. Your production agreement will supersede where applicable."
      />
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Use of the site</h2>
              <p>
                You agree to use this website only for lawful purposes. You must not attempt to disrupt the service, probe for vulnerabilities without authorization, or misrepresent your affiliation with a healthcare organization.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual property</h2>
              <p>
                MedAxis name, branding, and site content are protected. You may not copy, modify, or redistribute marketing assets without written permission, except for reasonable sharing of public URLs.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Disclaimer</h2>
              <p>
                Materials on this site are provided for informational purposes. Feature availability and timelines may vary by deployment. Nothing on this site constitutes medical or legal advice.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Governing law</h2>
              <p>
                Disputes arising from these terms will be handled in accordance with the laws applicable to your executed agreement with MedAxis, or otherwise as agreed in writing.
              </p>
            </div>
            <p className="text-sm text-muted-foreground/80">Last updated: March 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
