import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Request a Demo or Speak to Sales",
  description:
    "Contact the MedAxis team for demos, pricing, and implementation questions. We support hospitals and clinic groups across Afghanistan.",
};

export default function ContactRoutePage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss your hospital’s needs"
        subtitle="Share a few details and our team will follow up with next steps—usually within one business day."
      />
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Direct channels</h2>
                <ul className="space-y-6 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <a href="mailto:info@medaxis.af" className="hover:text-primary transition-colors">
                        info@medaxis.af
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <span>+93 (0) 700 123 456</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Office</div>
                      <span>Kabul, Afghanistan</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">What to expect</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We typically start with a short discovery call to understand bed count, departments, and priorities. From there we can propose a pilot, timeline, and training plan aligned to your team.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-100 p-8 md:p-10 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
