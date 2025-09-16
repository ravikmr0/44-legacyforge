import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/site/Badge";

export default function WhyUs() {
  const points = [
    "Data-Driven Strategies for Measurable Growth",
    "End-to-End IT & Marketing Solutions in One Place",
    "Proven Track Record of ROI-Focused Campaigns",
    "Dedicated Team that Understands Your Business",
  ];
  return (
    <div className="container py-16 md:py-24">
      <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className="md:col-span-6 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose LegacyForge</h1>
          <ul className="space-y-4">
            {points.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="mt-1 h-5 w-5 text-[#5170FF]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-6">
          <div className="relative rounded-xl border bg-gradient-to-br from-[#5170FF14] to-[#5D17EB14] p-8">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#5170FF] to-[#5D17EB] opacity-30 blur-lg" aria-hidden />
            <div className="relative">
              <p className="font-semibold">Our approach</p>
              <p className="mt-2 text-muted-foreground">
                We connect strategy with execution. From infrastructure and security to acquisition and retention, we ship systems that compound results.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge>Performance-first</Badge>
                <Badge>Full-funnel</Badge>
                <Badge>Secure-by-design</Badge>
                <Badge>Transparent reporting</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
