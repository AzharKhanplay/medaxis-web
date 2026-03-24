import { Clock, Shield, Heart, Users } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce administrative work by 60% with automated processes and digital workflows. Free up staff to focus on patient care.",
      stat: "60%",
      statLabel: "Time Saved"
    },
    {
      icon: Shield,
      title: "Reduce Errors",
      description: "Minimize human errors with digital records and automated data validation systems. Ensure data accuracy across all departments.",
      stat: "95%",
      statLabel: "Accuracy Rate"
    },
    {
      icon: Heart,
      title: "Improve Patient Care",
      description: "Spend more time with patients and less time on paperwork, leading to better outcomes and higher satisfaction rates.",
      stat: "40%",
      statLabel: "More Patient Time"
    },
    {
      icon: Users,
      title: "Better Coordination",
      description: "Enable seamless communication and collaboration between all healthcare team members, departments, and shifts.",
      stat: "100%",
      statLabel: "Team Connected"
    }
  ];

  return (
    <section id="benefits" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Benefits
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Healthcare Providers Choose MedAxis</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real, measurable results that make a difference in your daily operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-primary/30"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 shadow-md shadow-primary/20">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{benefit.stat}</div>
              <div className="text-sm text-muted-foreground mb-6 font-medium">{benefit.statLabel}</div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}