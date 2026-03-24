import { Users, FileText, Calendar, MessageSquare, BarChart3, Shield } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Users,
      title: "Patient Management",
      description: "Comprehensive patient profiles with complete medical history, demographics, emergency contacts, and treatment plans. Track patient journeys from admission to discharge with full visibility."
    },
    {
      icon: FileText,
      title: "Digital Records",
      description: "Store, organize, and access medical records digitally with secure cloud storage. Instant retrieval of lab results, prescriptions, imaging reports, and consultation notes."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Smart scheduling system that manages doctor availability, appointment bookings, automated reminders via SMS, and reduces no-shows significantly."
    },
    {
      icon: MessageSquare,
      title: "Communication Tools",
      description: "Built-in secure messaging for seamless communication between doctors, nurses, administrative staff, and departments. Maintain HIPAA-compliant communication logs."
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description: "Generate detailed reports on patient outcomes, resource utilization, revenue analysis, and operational metrics. Make data-driven decisions for better patient care and hospital efficiency."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with end-to-end encryption, role-based access control, audit trails, and compliance with international healthcare data protection standards."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Enterprise-Grade Healthcare Management</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Complete tools designed for large-scale hospital operations and clinical workflows
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-primary/30"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}