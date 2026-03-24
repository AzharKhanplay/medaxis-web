import { Shield, Lock, CheckCircle2, Zap, Quote } from "lucide-react";

export function Trust() {
  const trustPoints = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is protected with enterprise-grade encryption and security protocols used by financial institutions."
    },
    {
      icon: Lock,
      title: "HIPAA Compliant",
      description: "Built to meet international healthcare data privacy and security standards with full audit trails."
    },
    {
      icon: CheckCircle2,
      title: "99.9% Uptime",
      description: "Reliable cloud infrastructure ensures your system is always available when you need it most."
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Optimized for speed and performance, even in areas with limited internet connectivity."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Security & Reliability
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built for Trust, Designed for Healthcare
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We understand that patient data is sensitive and critical. MedAxis is built with security 
            and reliability at its core, ensuring your hospital's operations run smoothly 24/7.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 hover:border-primary/40"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 shadow-md shadow-primary/20">
                <point.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white p-12 rounded-3xl shadow-2xl border-2 border-primary/20 max-w-4xl mx-auto relative">
          <div className="absolute -top-6 left-12">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <p className="text-xl text-foreground italic mb-8 leading-relaxed">
            "MedAxis has completely transformed how we manage patient records and operations at our hospital. 
            The system is incredibly reliable, secure, and has significantly improved our operational efficiency. 
            Our staff adapted quickly, and patients are receiving better care as a result."
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-xl shadow-lg">
              DH
            </div>
            <div>
              <div className="text-lg font-semibold text-foreground">Dr. Hassan Ahmad</div>
              <div className="text-muted-foreground">Medical Director, Kabul Medical Center</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}