import { CheckCircle2 } from "lucide-react";

export function Solution() {
  const benefits = [
    "All patient data in one centralized platform",
    "Real-time access to medical records and history",
    "Streamlined communication between departments",
    "Automated scheduling and appointment management",
    "Secure data storage with backup systems"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
              The Solution
            </div>
            
            <h2 className="text-4xl font-bold">
              Introducing MedAxis: Your Complete Healthcare CRM
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              MedAxis is a modern, cloud-based hospital management system designed specifically 
              for healthcare providers in Afghanistan. We bring all your hospital operations 
              into one easy-to-use platform.
            </p>
            
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">Patient Records</div>
                    <div className="text-2xl font-bold text-primary">2,547</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4"></div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">Today's Appointments</div>
                    <div className="text-2xl font-bold text-secondary">24</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-2/3"></div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">Staff Members</div>
                    <div className="text-2xl font-bold text-primary">58</div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}