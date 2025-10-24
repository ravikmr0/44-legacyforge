import {
  CheckCircle2,
  LineChart,
  Megaphone,
  PenTool,
  ShieldCheck,
  Camera,
  Palette,
} from "lucide-react";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ServiceSection({
  eyebrow,
  title,
  desc,
  points,
  image,
  right = false,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  points: string[];
  image: string;
  right?: boolean;
}) {
  return (
    <section className="container">
      <div
        className={cn(
          "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
          right && "md:grid-flow-col-dense"
        )}
      >
        <div className={cn(right && "md:col-start-2")}>
          <motion.div
            initial={{ opacity: 0, x: right ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              {title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{desc}</p>
            <ul className="mt-6 space-y-3">
              {points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="relative h-80 md:h-full rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero - half screen with background image and overlay */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://ideogram.ai/assets/image/lossless/response/UGsKkHMJRg-C76hmcWPjgQ"
            alt="Team collaboration"
            className="h-full w-full object-cover opacity-60"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-cyan-600/10 to-transparent" />

          <motion.div
            aria-hidden
            className="absolute -top-10 -left-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 blur-3xl opacity-20"
            animate={{
              x: [-40, 40, -30],
              y: [0, -30, 15],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />

          <motion.div
            aria-hidden
            className="absolute top-20 right-0 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 blur-3xl opacity-15"
            animate={{
              x: [30, -30, 20],
              y: [15, 25, -20],
              scale: [1, 0.9, 1.1]
            }}
            transition={{
              duration: 18,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
              delay: 2,
            }}
          />

          {/* Floating particles animation */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + i * 7}%`,
                width: `${6 + i * 1.5}px`,
                height: `${6 + i * 1.5}px`,
              }}
              animate={{
                y: [-20, -50, -20],
                x: [-8, 8, -8],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Geometric shapes */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-4 h-4 border-2 border-white/20 rotate-45"
            animate={{ rotate: [45, 405, 45] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-6 h-6 border border-white/15 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
      
  <div className="container py-20 md:py-32 relative z-20">
          <div className="max-w-4xl">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white/95 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse" />
              Leading Digital Marketing Agency
            </motion.span>

            <motion.h1
              className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-[#1d42e5] to-[#5a10ed]  bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-white/85 text-xl md:text-2xl leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              From lead generation to full-scale digital strategies, we offer a
              comprehensive suite of services designed to elevate your brand.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button
                asChild
                className="h-12 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
              >
                <a href="/contact">Start Your Journey</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-8 border-white/30 text-blue-950 hover:bg-white/10 backdrop-blur-sm text-lg font-semibold"
              >
                <a href="/blog">Growth-Focused</a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-4 bg-white/70 rounded-full mt-2"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      

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
            "Immediate Lead Follow-Up",
            "Product/Service Education",
            "Appointment Setting",
            "Building Rapport & Trust",
          ]}
          image="https://images.pexels.com/photos/8867432/pexels-photo-8867432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            "Corporate Videos & Commercials",
            "Product Photography & Videography",
            "Event Coverage (Photo & Video)",
            "Motion Graphics & Animation",
          ]}
          image="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <ServiceSection
          right
          eyebrow="Creative Branding & Identity"
          title="Crafting Brands That Resonate"
          desc="Build a powerful brand identity that connects with your audience and sets you apart from the competition. We create memorable brands from strategy to visual execution."
          points={[
            "Visual Identity & Logo Design",
            "Comprehensive Brand Strategy",
            "Cohesive Brand Experience Design",
            "Premium Quality & Implementation",
          ]}
          image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
        />
      </div>

      {/* CTA Section */}
      <section className="container my-24 md:my-32">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-[1px] shadow-2xl">
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl" />
            </div>
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Ready to Elevate Your Brand?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
                Let's discuss how our tailored services can help you achieve your business goals. Schedule a free consultation with our experts today.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  className="h-12 px-8 bg-white text-slate-900 hover:bg-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
                >
                  <a href="/contact">Book a Free Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
