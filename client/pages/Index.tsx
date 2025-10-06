import { Button } from "@/components/ui/button";
import { Activity, BanknoteArrowUp, Camera, CircleCheck as CheckCircle2, ChevronsLeftRightEllipsis, Headset, ChartLine as LineChart, Megaphone, NotebookPen, PenTool, ShieldCheck, Target, TextSelect, ArrowRight, MoveRight } from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ServicesCarousel } from "@/components/site/ServicesCarousel";

export default function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero with image slider */}
      <HeroSlider
        images={[
          {
            src: "https://ideogram.ai/assets/image/lossless/response/CjiwpktpTGyvdUigs5898w",
            alt: "Digital marketing strategy session",
          },
          {
            src: "https://ideogram.ai/assets/image/lossless/response/fREalevIRPee_8GQ69VwBw",
            alt: "Business growth analytics",
          },
          {
            src: "https://ideogram.ai/assets/image/lossless/response/9qaw5TqCQTG70J6UqwGXYQ",
            alt: "Digital transformation",
          },
          {
            src: "https://ideogram.ai/assets/image/lossless/response/KPexiL31Qj2yybfohJTuTw",
            alt: "Lead generation success",
          },
        ]}
        intervalMs={6000}
      />

 {/* About */}
<section id="about" className="relative container py-20 md:py-28">
  <div className="grid gap-12 md:grid-cols-12 items-center">
    
    {/* Image Section with Gradient Border + Overlay */}
    <div className="md:col-span-5 relative">
      <div className="rounded-2xl overflow-hidden shadow-xl relative group">
        <img
          src="/images/office.png"
          alt="LegacyForge Marketing Office"
          className="w-full h-72 md:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#5170FF]/40 to-[#5D17EB]/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>
    </div>

    {/* Text Section */}
    <div className="md:col-span-7">
      <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5170FF] to-[#5D17EB]">LegacyForge</span> Marketing
      </h2>
      <div className="mt-4 h-1 w-28 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] rounded-full" />
      
      <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        LegacyForge Marketing specializes in helping <strong>B2B</strong> and <strong>D2C</strong> businesses, 
        manufacturers, and brands achieve measurable growth through <span className="font-semibold text-gray-800 dark:text-white">data-driven digital strategies</span>. 
        We don’t just deliver marketing services—we craft strategic, results-oriented solutions that empower businesses to scale faster.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        From <span className="font-semibold">lead generation</span>, performance marketing, and sales enablement to brand building and customer engagement, 
        our approach ensures every campaign is designed for <span className="font-semibold">maximum impact</span>. With a focus on industries that demand precision and trust, 
        we provide end-to-end solutions tailored to building materials, uPVC, aluminium systems, real estate, and interior solutions.
      </p>

      {/* Call-to-Action Button */}
      <div className="mt-8">
        <a
          href="/about"
          className="inline-block rounded-lg bg-gradient-to-r from-[#5170FF] to-[#5D17EB] px-6 py-3 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
        >
          Learn More →
        </a>
      </div>
    </div>
  </div>
</section>
  {/* Services Offers Carousel */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our services
          </h2>
          <p className="mt-3 text-muted-foreground">
            Explore curated packages designed for faster, smarter growth.
          </p>
        </div>
        <div className="mt-10">
          <ServicesCarousel
            items={[
              {
                title: "WEBSITE DEVELOPMENT",
                desc: "We build dynamic sites with full-stack development and custom coding, for your brand.",
                image:
                  "https://plus.unsplash.com/premium_photo-1733306503329-7a8c701fa9ad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "See Details",
              },
              {
                title: "SEO SERVICES",
                desc: "Our expert SEO services boost your visibility and improve search rankings.",
                image:
                  "https://plus.unsplash.com/premium_photo-1661338857151-779ee51362c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "See Details",
              },
              {
                title: "PAID ADVERTISING",
                desc: "We offer SEO services that boost your Google rankings, drive quality traffic, improve online visibility.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "See Details",
              },
              {
                title: "SOCIAL MEDIA MGMT",
                desc: "We manage your Facebook, Instagram, and LinkedIn to build brand credibility. Our team creates engaging posts",
                image:
                  "https://images.unsplash.com/photo-1690883794145-e96486fbe66b?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "See details",
              },
              {
                title: "LEAD GENERATION",
                desc: "We generate high-quality leads for building material and manufacturing businesses.",
                image:
                  "https://media.istockphoto.com/id/1492180527/photo/digital-marketing-commerce-online-sale-concept-promotion-of-products-or-services-through.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y7ckfHqeILZYTunLLf2SQksvdA7YNzEXiUj4Kvz2vBA=",
                ctaHref: "/services",
                ctaLabel: "See Details",
              },
              {
                title: "PRINT DESIGNING",
                desc: "We offer Catalogue, Brochure, PPT, Trifold, Sample box, and other print designs.",
                image:
                  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "See Details",
              },
              {
                title: "MEDIA PRODUCTION",
                desc: "We offer corporate, expo, product, and site completion shoots to help you professionally showcase your business.",
                image:
                  "https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ctaHref: "/services",
                ctaLabel: "See Details",
              },
            ]}
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
                "Your trusted B2B & D2C partner.",
                "Proven expertise in the uPVC & aluminium window industry.",
                "Strategic lead generation to acquire your ideal customers.",
                "We deliver qualified, ready-to-convert leads for you.",
                "We engage your audience to discover real-time project needs.",
                "We help you turn leads into orders and significant business growth."
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
                  From strategy to execution, we build end-to-end digital systems that attract your ideal customers and drive measurable business growth.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Badge>Qualified Leads</Badge>
                  <Badge>Revenue Growth</Badge>
                  <Badge>Brand Authority</Badge>
                  <Badge>Market Expansion</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FlowCard({
  icon,
  title,
  desc,
  step,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  step: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border-2 border-[#5170FF]/20 bg-card p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-[#5170FF]">
      <div
        className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#5170FF00] via-[#5170FF00] to-[#5D17EB00] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:from-[#5170FF40] group-hover:via-[#5170FF30] group-hover:to-[#5D17EB40]"
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#5170FF14] to-[#5D17EB14] text-[#5170FF] transition-all duration-500 group-hover:scale-110 group-hover:from-[#5170FF] group-hover:to-[#5D17EB] group-hover:text-white group-hover:shadow-lg">
            {icon}
          </div>
          <span className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white text-xs font-bold">
            {step}
          </span>
        </div>
        <h3 className="font-bold text-lg tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#5170FF] group-hover:to-[#5D17EB] transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
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
