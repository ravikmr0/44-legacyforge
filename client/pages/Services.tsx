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
      

      {/* Featured service sections */}
      <div className="mt-16 md:mt-24 space-y-16">
        <ServiceSection
          eyebrow="Social Media Marketing"
          title="Grow, engage, and convert your audience"
          desc="Our team designs visually engaging posts, motion graphics, and product reels to increase visibility, connect with your audience, and keep your brand active across platforms."
          points={[
            "Supports Brand Loyalty",
            "Real-Time Engagement Tracking",
            "Boosts Overall Brand Credibility",
            "Professional Brand Presence",
          ]}
          image="https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ServiceSection
          right
          eyebrow="Performance Marketing"
          title="Acquisition you can measure — and scale"
          desc="Supercharge your sales pipeline with targeted lead generation tailored to your industry. From ad to inbox, we capture the right audience for your business."
          points={[
            "Audience Targeting with Paid Ads",
            "Conversion-Focused Design",
            "Lead Segmentation & Nurturing",
            "End-to-End Campaign Execution",
          ]}
          image="https://media.istockphoto.com/id/1817679369/photo/hospital-monitor-medical-equipment-displaying-vital-signs-like-heart-rate-blood-pressure-and.webp?a=1&s=612x612&w=0&k=20&c=iyxgUAl0ftZlYu89MNCt6zXV1acWzHDaXLW6yOW5q1Q="
        />
        <ServiceSection
          eyebrow="Sales Support Service That Drives Results"
          title="Compound traffic with technical + content SEO"
          desc="Bridge the gap between leads and deals with our powerful sales calling team—trained to sell, follow up, and build trust."
          points={[
            "Daily Follow-Ups & Reminders",
            "Demo Scheduling & Qualification",
            "Customized Call Scripts",
            "Call Reporting & Lead Feedback",
          ]}
          image="https://plus.unsplash.com/premium_photo-1661510222198-2c15ce11a644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8"
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
            "Strategy & consulting",
          ]}
          image="https://media.istockphoto.com/id/1333702051/photo/digital-marketing-hexagonal-touch-screen-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=hihuRTM3Dejh-lLpspJ51fVN2z0CaBtzpxFwG-kRoEk="
        />
        <ServiceSection
          eyebrow="Media & Visual Production"
          title="Vidio Production & Photography"
          desc="Bring your brand to life with professional visuals that captivate and convert. From product shoots to event coverage, we create content that tells your story with impact."
          points={[
            "Product Photography & Reels",
            "Expo & Event Coverage",
            "Promotional & Corporate Videos",
            "Editing, Motion Graphics & AI Videos",
            "Social Media-Ready Visuals",
          ]}
          image="https://media.istockphoto.com/id/171583296/photo/media-student-being-interviewed.webp?a=1&b=1&s=612x612&w=0&k=20&c=luc82TC1_YtLbOiVijeCWCN8L3dUj2aqkzP8gQAfk4g="
        />
        <ServiceSection
          right
          eyebrow="Website Design & Development"
          title="Modern, responsive websites that convert"
          desc="We build fast, responsive, and conversion-focused websites that reflect your brand and drive results."
          points={[
            "Mobile-Friendly Websites",
            "Landing Pages for Campaigns",
            "Domain & Hosting Setup",
            "Custom Design & User Experience",
            "SEO-Ready Structure",
          ]}
          image="https://media.istockphoto.com/id/1201166649/photo/office-responsive-devices-web-design-website.webp?a=1&b=1&s=612x612&w=0&k=20&c=xwyXVLCiuigRsT65xjq6LtrOoUGPwZXbafmHRjQKLE0="
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
