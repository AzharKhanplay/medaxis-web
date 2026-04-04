import Link from "next/link";
import { Button } from "./ui/button";
import { CrmAuthLinks } from "./CrmAuthLinks";
import { ArrowRight, CheckCircle2, Users, Calendar, BarChart3 } from "lucide-react";

const socialProof = [
  { stat: "500+", label: "Clinics & hospitals" },
  { stat: "1M+", label: "Patients managed" },
  { stat: "99.9%", label: "Uptime SLA" },
];

const highlights = [
  { icon: Users, text: "Patient records & history" },
  { icon: Calendar, text: "Smart appointment scheduling" },
  { icon: BarChart3, text: "Real-time revenue analytics" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4">
      {/* Background mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 size-[700px] rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute top-1/4 right-0 size-[500px] rounded-full bg-primary/4 blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--border) / 0.4) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Enterprise Healthcare Management
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight">
                Hospital-Scale<br />
                Management.{" "}
                <span className="text-primary">Centralized</span>{" "}
                Control.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Sehat Pro enables hospitals and large clinics across Afghanistan to manage thousands
                of patients, streamline operations, and deliver better care — from one unified
                platform.
              </p>
            </div>

            {/* Feature list */}
            <ul className="flex flex-col gap-2.5">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-foreground/80">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="size-3.5 text-primary" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-base px-8 h-12 shadow-lg shadow-primary/20 font-semibold"
                asChild
              >
                <Link href="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 border-border/80 font-medium hover:bg-muted/60"
                asChild
              >
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>

            <CrmAuthLinks className="pt-0" />

            {/* Social proof strip */}
            <div className="flex flex-wrap gap-8 pt-2">
              {socialProof.map(({ stat, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-foreground">{stat}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="relative hidden lg:block">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-primary/8 blur-2xl" />

            {/* App frame */}
            <div className="relative rounded-2xl border border-border/60 bg-card shadow-2xl overflow-hidden">
              {/* Titlebar */}
              <div className="flex items-center gap-2 border-b border-border/60 bg-muted/30 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="size-3 rounded-full bg-rose-400" />
                  <div className="size-3 rounded-full bg-amber-400" />
                  <div className="size-3 rounded-full bg-emerald-400" />
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-md bg-background/60 border border-border/40 px-3 py-1 text-xs text-muted-foreground">
                  <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  app.sehatpro.af/dashboard
                </div>
              </div>

              {/* Dashboard preview */}
              <div className="p-5 bg-muted/20">
                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Today's Appointments", value: "28", color: "border-l-teal-500" },
                    { label: "Total Patients", value: "4,821", color: "border-l-blue-500" },
                    { label: "Monthly Revenue", value: "₳ 284K", color: "border-l-emerald-500" },
                    { label: "Unpaid Invoices", value: "12", color: "border-l-amber-500" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className={`bg-card rounded-lg border-l-4 ${s.color} border border-border/40 p-3 shadow-sm`}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        {s.label}
                      </p>
                      <p className="text-lg font-bold text-foreground">{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* Appointment list */}
                <div className="bg-card rounded-lg border border-border/40 p-3 shadow-sm">
                  <div className="flex items-center justify-between mb-2.5">
                    <p className="text-xs font-semibold text-foreground">Today&apos;s Appointments</p>
                    <p className="text-[10px] text-muted-foreground">28 total</p>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { token: "01", name: "Ahmad Karimi", time: "09:00", status: "In Progress", statusColor: "text-violet-700 bg-violet-50" },
                      { token: "02", name: "Fatima Ahmadi", time: "09:30", status: "Checked In", statusColor: "text-amber-700 bg-amber-50" },
                      { token: "03", name: "Khalid Rahimi", time: "10:00", status: "Scheduled", statusColor: "text-blue-700 bg-blue-50" },
                    ].map((apt) => (
                      <div key={apt.token} className="flex items-center gap-2.5 rounded-lg bg-muted/30 px-2.5 py-2">
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                          {apt.token}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-foreground truncate">{apt.name}</p>
                          <p className="text-[10px] text-muted-foreground">{apt.time} AM</p>
                        </div>
                        <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${apt.statusColor}`}>
                          {apt.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 flex items-center gap-2.5 rounded-xl bg-card border border-border/60 px-4 py-2.5 shadow-lg">
              <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-foreground">System Online</p>
                <p className="text-[10px] text-muted-foreground">All services operational</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
