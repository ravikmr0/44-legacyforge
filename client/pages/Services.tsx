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
      {/* Hero - half screen with background image and overlay */}
      <div className="relative mb-12">
        <div className="relative h-[50vh] md:h-[60vh] w-full rounded-xl overflow-hidden hero-bg-office animate-hero-zoom">
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

          <div className="container relative z-10 flex h-full items-center">
            <div className="max-w-2xl text-white">
              <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-semibold tracking-wide text-white/90">
                Services • Enterprise & SMB
              </p>

              <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Growth-focused digital services
              </h1>
              <p className="mt-4 text-lg text-white/90">
                Outcomes-first solutions tailored to your growth — from acquisition to creative and technical enablement.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-11 px-6 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white shadow-lg"
                >
                  <a href="/contact">Start a project</a>
                </Button>
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-white/10 text-white/90 hover:bg-white/20"
                >
                  Contact sales
                </a>
              </div>

              <div className="mt-6 flex gap-4 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-white/90" />
                  <span>Performance-driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5 text-white/90" />
                  <span>Creative & Social</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-white/90" />
                  <span>Reliable ops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Featured service sections */}
      <div className="mt-16 md:mt-24 space-y-16">
        <ServiceSection
          eyebrow="Performance Marketing | Lead Generation"
          title="Acquisition you can measure — and scale"
          desc="Supercharge your sales pipeline with targeted lead generation tailored to your industry. From ad to inbox, we capture the right audience for your business."
          points={[
            "Audience Targeting with Paid Ads",
            "Conversion-Focused Design",
            "Lead Segmentation & Nurturing",
            "End-to-End Campaign Execution",
          ]}
          image="https://cdn.pixabay.com/photo/2023/02/15/10/21/lead-magnet-7791403_1280.jpg"
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
          image="https://cdn.pixabay.com/photo/2016/09/14/08/26/web-1668927_1280.jpg"
        />
        <ServiceSection
          eyebrow="SEO & Content Marketing"
          title="Boost your visibility and authority"
          desc="Our SEO experts optimize your site and create compelling content to improve your search rankings and attract organic traffic."
          points={[
            "Keyword Research & On-Page SEO",
            "Content Strategy & Creation",
            "Technical SEO Audits",
            "Link Building & Outreach",
          ]}
          image="https://www.searchenginejournal.com/wp-content/uploads/2021/04/winning-seo-content-strategy-60815a2f832ee-1024x538.png"
        />
        <ServiceSection
          right
          eyebrow="Social Media Marketing"
          title="Grow, engage, and convert your audience"
          desc="Our team designs visually engaging posts, motion graphics, and product reels to increase visibility, connect with your audience, and keep your brand active across platforms."
          points={[
            "Supports Brand Loyalty",
            "Real-Time Engagement Tracking",
            "Boosts Overall Brand Credibility",
            "Professional Brand Presence",
          ]}
          image="https://quickframe.com/wp-content/uploads/2024/07/QF-Blog_Social-Media-Marketing_-Complete-Guide-for-Advertisers-2024_1920x1080.jpg"
        />
        
        <ServiceSection
          eyebrow="PRE SALES SUPPORT"
          title="Guiding Leads to Conversion"
          desc="Bridge the gap between leads and deals with our powerful sales calling team trained to share your client's details, build trust, and drive immediate contact."
          points={[
            "Daily Lead Contact & Follow-Ups",
            "Detailed Client Information Sharing",
            "Customized, High-Conversion Call Scripts",
            "Call Reporting & Lead Feedback for Optimization",
          ]}
          image="https://wpmanageninja.com/wp-content/uploads/2022/08/Pre_sales_service_and_After_sales_support_both_are_equally_important-min.png"
        />
        <ServiceSection
          right
         eyebrow="Print & Design Support"
          title="Creative assets that captivate"
          desc="From brochures to banners, we design print materials that enhance your brand presence and support your marketing efforts."
          points={[
            "Brochures & Flyers",
            "Business Cards & Stationery",
            "Event Banners & Signage",
            "Custom Graphic Design",
          ]}
          image="https://cdn.prod.website-files.com/61025d0c08f8a23b56de3526/682ed81efd37c574d11afc60_image-150.webp"
         />
        <ServiceSection
          eyebrow="Media & Visual Production"
          title="Video Production & Photography"
          desc="Bring your brand to life with professional visuals that captivate and convert. From product shoots to event coverage, we create content that tells your story with impact."
          points={[
            "Product Photography & Reels",
            "Expo & Event Coverage",
            "Promotional & Corporate Videos",
            "Editing, Motion Graphics & AI Videos",
            "Social Media-Ready Visuals",
          ]}
          image="https://kdsolutions.in/wp-content/uploads/2025/01/Grow-your-Industrial-Business-with-Digital-Markting-Agency.jpg"
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
        <p className="text-xl uppercase tracking-wider text-[#5170FF]">
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
