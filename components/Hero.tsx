import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const dashboardImage = "/hero-dashboard.jpg";

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Enterprise Healthcare Management
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Hospital-Scale Management.<br />
              <span className="text-primary">Centralized Control.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              MedAxis enables hospitals and large clinics across Afghanistan to manage thousands of patients, 
              streamline operations, and deliver better care through one unified platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-7 shadow-lg shadow-primary/20" asChild>
                <Link href="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="text-lg px-10 py-7 border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40"
                asChild
              >
                <Link href="/how-it-works">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  See How It Works
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-3xl opacity-60"></div>
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="MedAxis Hospital Management Dashboard" 
                className="rounded-2xl shadow-2xl border-2 border-gray-200"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live System Running</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}