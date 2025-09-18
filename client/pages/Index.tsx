import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  LineChart,
  Megaphone,
  PenTool,
  ShieldCheck,
} from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ServicesCarousel } from "@/components/site/ServicesCarousel";

export default function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero with image slider */}
      <HeroSlider
        images={[
          {
            src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1920&auto=format&fit=crop",
            alt: "Team collaborating",
          },
          {
            src: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Marketing analytics dashboard",
          },
          {
            src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1920&auto=format&fit=crop",
            alt: "Developer operations",
          },
          {
            src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop",
            alt: "Social media planning",
          },
        ]}
        intervalMs={5000}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB]" />
          Smarter growth 
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-white">
          Your Growth Partner in Digital Marketing & Business Growth
        </h1>
        <p className="text-white/90 text-lg md:text-xl">
          B2B Digital Marketing & Lead Generation Partner
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="h-12 px-6 text-base bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow-lg"
          >
            <a href="/contact">Book a free consultation</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 px-6 text-base border-white text-slate-900 hover:bg-white/10"
          >
            <a href="/services">Explore services</a>
          </Button>
        </div>
      </HeroSlider>

      {/* About */}
      <section id="about" className="container py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About LegacyForge Marketing
            </h2>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] rounded" />
          </div>
          <div className="md:col-span-7 text-muted-foreground text-lg leading-relaxed">
            <p>
              LegacyForge Marketing Pvt Ltd is an industry-focused marketing and growth solutions company, dedicated to empowering B2B businesses, manufacturers, and brands with strategic, result-driven services. Our strength lies in delivering performance-oriented solutions—ranging from lead generation  and sales enablement to brand communication—tailored specifically for sectors like building materials, real estate, manufacturing, and services.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Core Services
          </h2>
          <p className="mt-3 text-muted-foreground">
            Outcomes-first solutions tailored to your growth.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Website Development"
            desc="We design and develop fast, mobile-optimized, and conversion-focused websites that reflect your brand and"
          />
          <ServiceCard
            icon={<LineChart className="h-6 w-6" />}
            title="Paid Advertising (PPC)"
            desc="Drive high-quality leads and fast results with our data-driven PPC campaigns. We create and manage targeted ads on Google, Meta (Facebook/Instagram)"
          />
          <ServiceCard
            icon={<Megaphone className="h-6 w-6" />}
            title="Social Media Management"
            desc="Build an authentic online presence, engage your audience, and boost brand loyalty."
          />
          <ServiceCard
            icon={<PenTool className="h-6 w-6" />}
            title="Sales & Telecalling"
            desc="Boost your brand with engaging content, regular graphic posts, and consistent presence across Instagram, Facebook and LinkedIn."
          />
           <ServiceCard
            icon={<PenTool className="h-6 w-6" />}
            title="Content Marketing"
            desc="We create consistent blogs and content around your business and products to boost visibility and authority on Google."
          />
           <ServiceCard
            icon={<PenTool className="h-6 w-6" />}
            title="Creative & Branding"
            desc="We bring your brand to life with impactful logos, ad creatives, social media visuals, and complete brand identity design."
          />
           <ServiceCard
            icon={<PenTool className="h-6 w-6" />}
            title="Search Engine Optimization"
            desc="Rank higher on search engines with our proven SEO strategies —covering on-page, off-page, local SEO, and technical audits"
          />
        </div>
      </section>

      {/* Why Choose */}
      <section id="why" className="container py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why Choose LegacyForge
            </h2>
            <ul className="space-y-4">
              {[
                "Based in Noida, Uttar Pradesh",
                "Experts in uPVC windows & doors Industry.",
                "Pan-India lead generation for uPVC & aluminium fabricators.",
                "Deliver qualified, ready-to-convert leads to partners.",
                "Engage retail customers to gather real-time project needs.",
                "Support partners in turning leads into orders and business growth."
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#5170FF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6">
            <div className="relative rounded-xl border bg-gradient-to-br from-[#5170FF14] to-[#5D17EB14] p-8">
              <div
                className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#5170FF] to-[#5D17EB] opacity-30 blur-lg"
                aria-hidden
              />
              <div className="relative">
                <p className="font-semibold">Our approach</p>
                <p className="mt-2 text-muted-foreground">
                  We connect strategy with execution. From infrastructure and
                  security to acquisition and retention, we ship systems that
                  compound results.
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
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-24">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[#5170FF] to-[#5D17EB] p-[1px]">
          <div className="relative rounded-2xl bg-background p-10 md:p-16">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8 space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Let’s build your business legacy together.
                </h3>
                <p className="text-muted-foreground">
                  Book a free consultation today and take the first step toward
                  smarter growth.
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <Button
                  asChild
                  className="h-12 px-6 text-base bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow-lg"
                >
                  <a href="/contact">Book a free consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offers Carousel */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Service Offers
          </h2>
          <p className="mt-3 text-muted-foreground">
            Explore curated packages designed for faster, smarter growth.
          </p>
        </div>
        <div className="mt-10">
          <ServicesCarousel
            items={[
              {
                title: "Lead Generation",
                desc: "We run Meta & Google Ads to get fresh leads, collect their requirements like window type and quantity",
                image:
                  "https://plus.unsplash.com/premium_photo-1733306503329-7a8c701fa9ad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "Get audit",
              },
              {
                title: "Website Design",
                desc: "With our experience in the window and door business, we build dynamic, product-focused websites",
                image:
                  "https://plus.unsplash.com/premium_photo-1661338857151-779ee51362c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "View plans",
              },
              {
                title: "SEO Services",
                desc: "We offer SEO services that boost your Google rankings, drive quality traffic, improve online visibility.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "Start sprint",
              },
              {
                title: "Social Media Management",
                desc: "We manage your Facebook, Instagram, and LinkedIn to build brand credibility. Our team creates engaging posts",
                image:
                  "https://images.unsplash.com/photo-1690883794145-e96486fbe66b?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "See details",
              },
              {
                title: "Paid Advertising",
                desc: "We run strategic Meta and Google Ads campaigns to reach customers faster, build brand recognition.",
                image:
                  "https://media.istockphoto.com/id/1492180527/photo/digital-marketing-commerce-online-sale-concept-promotion-of-products-or-services-through.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y7ckfHqeILZYTunLLf2SQksvdA7YNzEXiUj4Kvz2vBA=",
                ctaHref: "/services",
                ctaLabel: "Build brand",
              },
              {
                title: "Print Design",
                desc: "We offer Catalogue, Brochure, PPT, Trifold, Sample box, and other print designs.",
                image:
                  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "Get insights",
              },
              {
                title: "Media Production",
                desc: "We offer corporate, expo, product, and site completion shoots to help you professionally showcase your business.",
                image:
                  "https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "Get insights",
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card p-6">
      <div
        className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#5170FF00] via-[#5170FF00] to-[#5D17EB00] opacity-0 blur transition group-hover:opacity-30 group-hover:from-[#5170FF30] group-hover:via-[#5170FF20] group-hover:to-[#5D17EB30]"
        aria-hidden
      />
      <div className="relative space-y-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-[#5170FF14] to-[#5D17EB14] text-[#5170FF]">
          {icon}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}
