import { X, Check, FileText, Clock, AlertTriangle, Database, Zap, Shield } from "lucide-react";

export function BeforeAfter() {
  const traditional = [
    { icon: FileText, text: "Paper-based records scattered across offices" },
    { icon: Clock, text: "Hours wasted searching for patient files" },
    { icon: AlertTriangle, text: "Frequent errors in manual data entry" }
  ];

  const medaxis = [
    { icon: Database, text: "All records digitized and instantly searchable" },
    { icon: Zap, text: "Patient information available in seconds" },
    { icon: Shield, text: "Automated validation prevents data errors" }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            The Transformation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">From Traditional to Modern</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how MedAxis transforms outdated hospital workflows into streamlined operations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Traditional Way */}
          <div className="bg-gray-50 p-10 rounded-2xl border-2 border-gray-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Traditional Systems</h3>
            </div>
            
            <div className="space-y-6">
              {traditional.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MedAxis Way */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-10 rounded-2xl border-2 border-primary/30 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">With MedAxis</h3>
            </div>
            
            <div className="space-y-6">
              {medaxis.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-secondary/30 shadow-sm">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
