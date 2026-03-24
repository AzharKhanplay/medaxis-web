import { UserPlus, Settings, Rocket, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      step: "Step 1",
      title: "Sign Up & Setup",
      description: "Create your hospital account and customize MedAxis for your specific needs, departments, and workflows."
    },
    {
      icon: Settings,
      step: "Step 2",
      title: "Configure Your System",
      description: "Add staff members, set up departments, configure roles and permissions, and import existing patient data securely."
    },
    {
      icon: Rocket,
      step: "Step 3",
      title: "Start Managing",
      description: "Begin managing patients, appointments, records, and operations with our intuitive interface designed for healthcare professionals."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-5 py-2.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get Started in 3 Simple Steps</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Start managing your hospital more efficiently in minutes, not months
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connection arrows */}
          <div className="hidden md:flex absolute top-28 left-[25%] right-[25%] items-center justify-between pointer-events-none">
            <ArrowRight className="w-16 h-16 text-primary/20" />
            <ArrowRight className="w-16 h-16 text-primary/20" />
          </div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 hover:border-primary/40 hover:shadow-xl transition-all text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-8 relative z-10 shadow-lg">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <div className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">{step.step}</div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}