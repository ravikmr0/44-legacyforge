import { LineChart, Megaphone, PenTool, ShieldCheck } from "lucide-react";
import { ServiceCard } from "@/components/site/ServiceCard";

export default function Services() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-3 text-muted-foreground">Outcomes-first solutions tailored to your growth.</p>
      </div>
      <div className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <ServiceCard icon={<ShieldCheck className="h-6 w-6" />} title="IT Services & Support" desc="Streamline your tech infrastructure, improve cybersecurity, and keep your business running without disruption." />
        <ServiceCard icon={<LineChart className="h-6 w-6" />} title="Performance Marketing" desc="Leverage data-driven ads and campaigns to maximize conversions and reduce wasted ad spend." />
        <ServiceCard icon={<Megaphone className="h-6 w-6" />} title="Social Media Management" desc="Build an authentic online presence, engage your audience, and boost brand loyalty." />
        <ServiceCard icon={<PenTool className="h-6 w-6" />} title="Content Strategy & Branding" desc="Tell your story the right way and stand out from the competition." />
      </div>
    </div>
  );
}
