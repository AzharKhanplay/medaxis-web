import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy — MedAxis CRM",
  description:
    "MedAxis privacy policy: how we handle healthcare and organizational data, security practices, and your rights when using our hospital CRM platform.",
};

export default function PrivacyRoutePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="This page describes how MedAxis approaches data protection. It is a general notice for marketing visitors; your organization will receive contract-specific terms during onboarding."
      />
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Information we collect</h2>
              <p>
                When you contact us through the website, we may collect your name, organization, email address, and the content of your message. We use this information solely to respond to inquiries and schedule demos.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Healthcare data</h2>
              <p>
                Patient-identifiable and clinical data processed through MedAxis is governed by your agreements with us and applicable regulations. We implement technical and organizational measures appropriate to healthcare workloads, including access controls and auditability, as described in product documentation and your order form.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Cookies & analytics</h2>
              <p>
                We may use essential cookies required for site operation and, where enabled, analytics to understand traffic patterns. You can control non-essential cookies through your browser settings.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
              <p>
                For privacy-related questions, contact us at{" "}
                <a href="mailto:info@medaxis.af" className="text-primary hover:underline">
                  info@medaxis.af
                </a>
                .
              </p>
            </div>
            <p className="text-sm text-muted-foreground/80">Last updated: March 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
