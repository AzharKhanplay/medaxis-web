import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl p-16 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-24 h-24 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/4 left-1/3 w-32 h-32 border-2 border-white rounded-full"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Start Modernizing Your Hospital Today
            </h2>
            
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              Join healthcare providers across Afghanistan who are transforming their operations 
              with MedAxis. Request a personalized demo and see the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-7 shadow-2xl font-semibold"
                asChild
              >
                <Link href="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-12 py-7 font-semibold"
                asChild
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-6 w-6" />
                  Contact Sales
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free 30-day trial</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Setup assistance included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}