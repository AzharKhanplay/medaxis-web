import Link from "next/link";
import { Mail, Phone, MapPin, Activity } from "lucide-react";
import { crmLoginHref, crmSignupHref, isAbsoluteHttpUrl } from "@/lib/crm";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">MedAxis</div>
                <div className="text-xs text-gray-400">Healthcare CRM</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Enterprise-grade hospital management system for healthcare providers across Afghanistan.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/features" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#benefits" className="hover:text-primary transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Request demo
                </Link>
              </li>
              <li>
                {isAbsoluteHttpUrl(crmLoginHref()) ? (
                  <a
                    href={crmLoginHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Sign in to CRM
                  </a>
                ) : (
                  <Link href={crmLoginHref()} className="hover:text-primary transition-colors">
                    Sign in to CRM
                  </Link>
                )}
              </li>
              <li>
                {isAbsoluteHttpUrl(crmSignupHref()) ? (
                  <a
                    href={crmSignupHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Sign up
                  </a>
                ) : (
                  <Link href={crmSignupHref()} className="hover:text-primary transition-colors">
                    Sign up
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="mailto:careers@medaxis.af" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>info@medaxis.af</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>+93 (0) 700 123 456</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>Kabul, Afghanistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="text-gray-400">© 2026 MedAxis. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
