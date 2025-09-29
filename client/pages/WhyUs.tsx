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
      title: "Measurable Growth",
      desc: "We help one business per category dominate their city, ensuring no local competition within your niche.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "City-Wise Market Leadership",
      desc: "Digital-Marketing approach ensures uptime, security, and scale.",
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Manufacturing Industry Expertise",
      desc: "Our deep industry knowledge helps businesses grow faster, smarter, and with lasting impact.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Full-Funnel Business Enablement",
      desc: "From attracting prospects to closing sales, we optimize every stage of your growth journey.",
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
      t: "Strategize & Discover",
      d: "Deep dive into your business goals, target audience, competitive landscape, and existing assets to architect a data-backed, full-funnel strategy.",
    },
    {
      k: "02",
      t: "Design & Develop",
      d: "Create tailored solutions for every touchpoint – from easy-to-use designs and strong technical systems to engaging content and automated marketing.",
    },
    {
      k: "03",
      t: "Launch & Optimize",
      d: "Execute campaigns across the right digital channels, monitor performance closely, and continuously improve results & optimize campaign.",
    },
    {
      k: "04",
      t: "Analyze & Scale",
      d: "We use insights to fine-tune campaigns, find new growth opportunities, and help your business reach more customers.",
    },
    {
      k: "05",
      t: "Scale & Growth",
      d: "Turn insights and optimizations into measurable results, expanding revenue, market share, and category leadership while ensuring sustainable scaling.",
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero with background image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Professional partnership handshake in office"
            className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
            loading="lazy"
            decoding="async"
            role="presentation"
            aria-hidden
          />
          {/* Tailwind arbitrary value: use underscores to represent spaces inside the brackets */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(10,12,28,0.6)_0%,_rgba(10,12,28,0.45)_40%,_rgba(10,12,28,0.25)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1d2e7d29] via-transparent to-[#3e119829]" />
        </div>
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl text-black drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB]" />
              Why choose us
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Results, reliability, and real partnership
            </h1>
            <p className="mt-4 text-slate-700 text-lg">
              We connect strategy with execution and prove it with data.
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
