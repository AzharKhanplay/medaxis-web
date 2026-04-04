import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sehatpro.af"),
  title: {
    default: "Sehat Pro — Healthcare & Hospital Management CRM",
    template: "%s | Sehat Pro",
  },
  description:
    "Sehat Pro is an enterprise healthcare CRM and hospital management platform for clinics and hospitals in Afghanistan — patient records, scheduling, analytics, and secure operations in one unified system.",
  openGraph: {
    type: "website",
    title: "Sehat Pro — Healthcare & Hospital Management CRM",
    description:
      "Hospital-scale management and centralized control for clinics and hospitals across Afghanistan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
