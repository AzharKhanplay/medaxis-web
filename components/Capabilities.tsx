import { Server, Zap, Shield, Network } from "lucide-react";

export function Capabilities() {
  const capabilities = [
    {
      icon: Server,
      title: "Scalable Infrastructure",
      description: "Built to handle thousands of patients and unlimited medical records as your hospital grows."
    },
    {
      icon: Zap,
      title: "Real-Time Data Access",
      description: "Instant access to patient information, records, and reports from any department, anytime."
    },
    {
      icon: Shield,
      title: "Reliable System Uptime",
      description: "99.9% uptime guarantee ensures your hospital operations never stop, day or night."
    },
    {
      icon: Network,
      title: "Centralized Operations",
      description: "Unify all departments, staff, and processes into one comprehensive management system."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <capability.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{capability.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
