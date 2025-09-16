import { Button } from "@/components/ui/button";
import { CheckCircle2, LineChart, Megaphone, PenTool, ShieldCheck } from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";

export default function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero with image slider */}
      <HeroSlider
        images={[
          { src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1920&auto=format&fit=crop", alt: "Team collaborating" },
          { src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1920&auto=format&fit=crop", alt: "Marketing analytics dashboard" },
          { src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1920&auto=format&fit=crop", alt: "Developer operations" },
          { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop", alt: "Social media planning" },
        ]}
        intervalMs={5000}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB]" />
          Smarter growth starts here
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl text-white">
          Forge Your Legacy with Smarter Marketing & IT Solutions
        </h1>
        <p className="text-white/90 text-lg md:text-xl">
          Helping businesses scale with cutting-edge IT services, data-driven marketing strategies, and powerful social media management.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="h-12 px-6 text-base bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow-lg">
            <a href="/contact">Book a free consultation</a>
          </Button>
          <Button asChild variant="outline" className="h-12 px-6 text-base border-white text-white hover:bg-white/10">
            <a href="/services">Explore services</a>
          </Button>
        </div>
      </HeroSlider>

      {/* About */}
      <section id="about" className="container py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About LegacyForge Marketing</h2>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] rounded" />
          </div>
          <div className="md:col-span-7 text-muted-foreground text-lg leading-relaxed">
            <p>
              At LegacyForge Marketing, we don’t just market — we build legacies. Our team of tech-driven marketers and IT specialists combine creativity with strategy to help your business grow faster and smarter. Whether you need performance marketing campaigns that deliver measurable ROI, robust IT support to keep operations smooth, or engaging social media management to connect with your audience, we’ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Services</h2>
          <p className="mt-3 text-muted-foreground">Outcomes-first solutions tailored to your growth.</p>
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
      </section>

      {/* Why Choose */}
      <section id="why" className="container py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose LegacyForge</h2>
            <ul className="space-y-4">
              {[
                "Data-Driven Strategies for Measurable Growth",
                "End-to-End IT & Marketing Solutions in One Place",
                "Proven Track Record of ROI-Focused Campaigns",
                "Dedicated Team that Understands Your Business",
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
                  Book a free consultation today and take the first step toward smarter growth.
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <Button asChild className="h-12 px-6 text-base bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow-lg">
                  <a href="/contact">Book a free consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h2>
          <p className="mt-3 text-muted-foreground">Tell us about your goals and we’ll get in touch.</p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="grid gap-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" name="name" required className="h-11 rounded-md border bg-background px-3 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="h-11 rounded-md border bg-background px-3 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={5} required className="rounded-md border bg-background px-3 py-2 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit" className="h-11 px-6 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow">
                Send message
              </Button>
              <a
                href="mailto:hello@legacyforge.marketing?subject=Consultation%20Request"
                className="text-sm text-muted-foreground hover:text-foreground underline"
              >
                Or email us directly
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card p-6">
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#5170FF00] via-[#5170FF00] to-[#5D17EB00] opacity-0 blur transition group-hover:opacity-30 group-hover:from-[#5170FF30] group-hover:via-[#5170FF20] group-hover:to-[#5D17EB30]" aria-hidden />
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
