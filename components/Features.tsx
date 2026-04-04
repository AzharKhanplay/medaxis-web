import { Users, FileText, Calendar, MessageSquare, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description:
      "Comprehensive patient profiles with complete medical history, demographics, emergency contacts, and treatment plans.",
    accent: "text-teal-600 bg-teal-50",
  },
  {
    icon: FileText,
    title: "Digital Records",
    description:
      "Store, organize, and access medical records digitally with secure cloud storage. Instant retrieval of lab results and prescriptions.",
    accent: "text-blue-600 bg-blue-50",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description:
      "Smart scheduling system that manages doctor availability, bookings, automated SMS reminders, and reduces no-shows.",
    accent: "text-violet-600 bg-violet-50",
  },
  {
    icon: MessageSquare,
    title: "Communication Tools",
    description:
      "Built-in secure messaging for seamless communication between doctors, nurses, and administrative staff.",
    accent: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Detailed reports on patient outcomes, resource utilization, and revenue analysis. Make data-driven decisions fast.",
    accent: "text-amber-600 bg-amber-50",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with end-to-end encryption, role-based access control, audit trails, and compliance standards.",
    accent: "text-rose-600 bg-rose-50",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary mb-5">
            Platform Features
          </div>
          <h2 className="text-4xl lg:text-[2.75rem] font-bold tracking-tight mb-5">
            Enterprise-Grade Healthcare Management
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Complete tools designed for large-scale hospital operations and modern clinical workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/20"
            >
              <div
                className={`inline-flex size-12 items-center justify-center rounded-xl mb-5 ${feature.accent}`}
              >
                <feature.icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
