import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Rocket, Users } from "lucide-react";

export default function About() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5170FF22] via-[#5D17EB11] to-transparent" />
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB]" />
              Who we are
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">About LegacyForge Marketing</h1>
            <p className="mt-4 text-muted-foreground text-lg">
              We blend IT expertise with data-driven marketing to build brands that last. Strategy, execution, and relentless optimization — all under one roof.
            </p>
            <div className="mt-6">
              <Button asChild className="h-11 px-6 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white hover:from-[#3C72FC] hover:to-[#5D17EB]">
                <a href="/contact">Work with us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-[#5170FF] to-[#5D17EB] p-[1px] shadow-sm">
              <div className="relative rounded-xl">
                <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop" alt="Team working together" className="h-72 w-full object-cover md:h-96" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our story</h2>
            <p className="mt-3 text-muted-foreground">
              Founded by engineers and growth leaders, LegacyForge was created to close the gap between IT foundations and marketing performance. We design systems that are measurable, resilient, and primed to scale.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Full-funnel strategy and execution",
                "Secure-by-design infrastructure",
                "Transparent reporting and measurable ROI",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#5170FF]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">Our values</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Value icon={<Shield className="h-5 w-5" />} title="Trust & Security" desc="Privacy-first systems and battle-tested practices." />
              <Value icon={<Rocket className="h-5 w-5" />} title="Performance" desc="We optimize for business outcomes, not vanity metrics." />
              <Value icon={<Users className="h-5 w-5" />} title="Partnership" desc="We embed with your team and move as one." />
              <Value icon={<CheckCircle2 className="h-5 w-5" />} title="Clarity" desc="Clear plans, clear reporting, clear wins." />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-2">
              <Stat kpi="98%" label="Client satisfaction" />
              <Stat kpi="3.5x" label="Avg. ROAS uplift" />
              <Stat kpi="24/7" label="Managed IT support" />
              <Stat kpi="200+" label="Campaigns launched" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Value({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-lg border p-4">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#5170FF14] to-[#5D17EB14] text-[#5170FF]">
        {icon}
      </div>
      <p className="mt-3 font-semibold">{title}</p>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-lg border p-6 text-center">
      <div className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#5170FF] to-[#5D17EB]">
        {kpi}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
