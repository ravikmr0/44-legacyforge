import {
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Zap,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/site/Badge";

export default function WhyUs() {
  const features = [
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Data-driven decisions",
      desc: "We build strategies around measurable impact, not guesswork.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Secure foundations",
      desc: "IT-first approach ensures uptime, security, and scale.",
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "End-to-end",
      desc: "From infrastructure to acquisition and retention.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Speed & iteration",
      desc: "Rapid experimentation to find and scale winners.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Creative + technical",
      desc: "Best of both worlds: engineering rigor and standout creative.",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: "Transparent reporting",
      desc: "Always-on dashboards and clear comms.",
    },
  ];

  const steps = [
    {
      k: "01",
      t: "Discover",
      d: "Deep dive into goals, audience, and constraints.",
    },
    {
      k: "02",
      t: "Design",
      d: "Solution design across IT, data, and marketing.",
    },
    {
      k: "03",
      t: "Deploy",
      d: "Implement with QA, security, and performance baselines.",
    },
    {
      k: "04",
      t: "Scale",
      d: "Iterate, optimize, and expand channels for growth.",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero with background image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Professional partnership handshake in office"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            role="presentation"
          />
          {/* Tailwind arbitrary value: use underscores to represent spaces inside the brackets */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(10,12,28,0.6)_0%,_rgba(10,12,28,0.45)_40%,_rgba(10,12,28,0.25)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#5170FF29] via-transparent to-[#5D17EB29]" />
        </div>
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB]" />
              Why choose us
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Results, reliability, and real partnership
            </h1>
            <p className="mt-4 text-white/90 text-lg">
              We connect strategy with execution — and prove it with data.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-12 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#5170FF14] to-[#5D17EB14] text-[#5170FF]">
                {f.icon}
              </div>
              <p className="mt-3 font-semibold">{f.title}</p>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container pb-16 md:pb-24">
        <div className="rounded-2xl border p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Our process
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.t} className="rounded-lg border p-5">
                <div className="text-sm font-semibold text-[#5170FF]">
                  {s.k}
                </div>
                <p className="mt-1 font-semibold">{s.t}</p>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Badge>Performance-first</Badge>
            <Badge>Secure-by-design</Badge>
            <Badge>Full-funnel</Badge>
            <Badge>Transparent reporting</Badge>
          </div>
          <div className="mt-8">
            <Button
              asChild
              className="h-11 px-6 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white hover:from-[#3C72FC] hover:to-[#5D17EB]"
            >
              <a href="/contact">Let's talk</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
