import {
  CheckCircle2,
  LineChart,
  Megaphone,
  PenTool,
  ShieldCheck,
} from "lucide-react";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Our Services
        </h1>
        <p className="mt-3 text-muted-foreground">
          Outcomes-first solutions tailored to your growth.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          icon={<ShieldCheck className="h-6 w-6" />}
          title="IT Services & Support"
          desc="Streamline your tech infrastructure, improve cybersecurity, and keep your business running without disruption."
        />
        <ServiceCard
          icon={<LineChart className="h-6 w-6" />}
          title="Performance Marketing"
          desc="Leverage data-driven ads and campaigns to maximize conversions and reduce wasted ad spend."
        />
        <ServiceCard
          icon={<Megaphone className="h-6 w-6" />}
          title="Social Media Management"
          desc="Build an authentic online presence, engage your audience, and boost brand loyalty."
        />
        <ServiceCard
          icon={<PenTool className="h-6 w-6" />}
          title="Content Strategy & Branding"
          desc="Tell your story the right way and stand out from the competition."
        />
      </div>

      {/* Featured service sections */}
      <div className="mt-16 md:mt-24 space-y-16">
        <ServiceSection
          eyebrow="Social Media Marketing"
          title="Grow, engage, and convert your audience"
          desc="We build content engines and engagement systems that create authentic connections across platforms — from strategy and creative to community and analytics."
          points={[
            "Full-funnel content calendar",
            "Community management",
            "UGC + creator collaborations",
            "Monthly growth reporting",
          ]}
          image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
        />
        <ServiceSection
          right
          eyebrow="Performance Marketing"
          title="Acquisition you can measure — and scale"
          desc="Rapid experimentation, creative iteration, and data-driven bidding to maximize ROAS across Google, Meta, LinkedIn, and more."
          points={[
            "Rapid test sprints",
            "Creative and landing page iteration",
            "Attribution & LTV modeling",
            "Transparent dashboards",
          ]}
          image="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
        />
        <ServiceSection
          eyebrow="SEO"
          title="Compound traffic with technical + content SEO"
          desc="From technical fixes and IA to content clusters and link acquisition — we align SEO with business impact."
          points={[
            "Technical & Core Web Vitals",
            "Keyword & topic clustering",
            "On-page + internal linking",
            "Link outreach",
          ]}
          image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
        />
        <ServiceSection
          right
          eyebrow="Digital Marketing Service"
          title="Integrated digital strategy across the funnel"
          desc="Email, marketing automation, CRO, and analytics working together to increase conversion and retention."
          points={[
            "Lifecycle email & automation",
            "CRO & A/B testing",
            "Analytics & tracking architecture",
            "Performance reporting",
          ]}
          image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
        />
        <ServiceSection
          eyebrow="Website Development Service"
          title="Fast, secure, and beautiful web experiences"
          desc="We design and build responsive, high-performance websites that convert — with rock-solid foundations."
          points={[
            "Design systems & UI",
            "Headless CMS & integrations",
            "Performance & accessibility",
            "QA & SEO best practices",
          ]}
          image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop"
        />
      </div>
    </div>
  );
}

function ServiceSection({
  eyebrow,
  title,
  desc,
  points,
  image,
  right,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  points: string[];
  image: string;
  right?: boolean;
}) {
  return (
    <section className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
      <div
        className={`${right ? "md:order-2 md:col-span-6" : "md:col-span-6"}`}
      >
        <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-[#5170FF] to-[#5D17EB] p-[1px] shadow-sm">
          <div className="relative rounded-xl">
            <img
              src={image}
              alt=""
              className="h-64 w-full object-cover md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>
        </div>
      </div>
      <div
        className={`${right ? "md:order-1 md:col-span-6" : "md:col-span-6"}`}
      >
        <p className="text-xs uppercase tracking-wider text-[#5170FF]">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-muted-foreground">{desc}</p>
        <ul className="mt-4 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm md:text-base">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#5170FF]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <Button
            asChild
            className="h-10 px-5 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white hover:from-[#3C72FC] hover:to-[#5D17EB]"
          >
            <a href="/contact">Start now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
