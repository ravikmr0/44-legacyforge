import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/site/Badge";
import { ExternalLink, Calendar, TrendingUp, Users, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* --------------------------
   Data (projects, industries)
   -------------------------- */
const projects = [
  {
    id: 1,
    title: "uPVC Windows Manufacturer - Complete Digital Transformation",
    client: "Premium Windows Co.",
    industry: "Manufacturing",
    description:
      "Complete digital marketing overhaul for a leading uPVC windows manufacturer, including website redesign, lead generation campaigns, and social media management.",
    image: "https://ideogram.ai/assets/image/lossless/response/aCUm57SuRjixEuDo7wQIFQ",
    results: [
      { metric: "Lead Generation", value: "300%", description: "increase in qualified leads" },
      { metric: "Website Traffic", value: "250%", description: "growth in organic traffic" },
      { metric: "Social Engagement", value: "400%", description: "boost in social media engagement" },
      { metric: "ROI", value: "450%", description: "return on ad spend" }
    ],
    services: ["Website Development", "Lead Generation", "Social Media Management", "PPC Advertising"],
    duration: "6 months",
    featured: true,
    testimonial: "LegacyForge transformed our digital presence completely. We went from struggling to get leads to having a consistent pipeline of qualified prospects.",
    clientName: "Rajesh Kumar, Managing Director"
  },
  {
    id: 2,
    title: "Aluminium Fabricator - Lead Generation Campaign",
    client: "Modern Aluminium Solutions",
    industry: "Construction",
    description:
      "Targeted lead generation campaign for an aluminium fabricator focusing on residential and commercial projects across North India.",
    image: "https://ideogram.ai/assets/image/lossless/response/f_kP0Ih3Rw2nvbpk4lUMog",
    results: [
      { metric: "Qualified Leads", value: "180", description: "leads generated in 3 months" },
      { metric: "Conversion Rate", value: "25%", description: "lead to customer conversion" },
      { metric: "Cost per Lead", value: "60%", description: "reduction in acquisition cost" },
      { metric: "Revenue Growth", value: "200%", description: "increase in monthly revenue" }
    ],
    services: ["Meta Ads", "Google Ads", "Landing Page Design", "CRM Integration"],
    duration: "3 months",
    featured: true,
    testimonial: "The quality of leads we receive now is exceptional. Our sales team is busier than ever with genuine prospects.",
    clientName: "Amit Sharma, Sales Head"
  },
  {
    id: 3,
    title: "Building Materials Supplier - E-commerce Platform",
    client: "BuildMart Supplies",
    industry: "Retail",
    description:
      "Development of a comprehensive e-commerce platform for building materials with integrated inventory management and customer portal.",
    image: "https://ideogram.ai/assets/image/lossless/response/w7fXQ864SYOffc6xADilcA",
    results: [
      { metric: "Online Sales", value: "500%", description: "growth in online revenue" },
      { metric: "Customer Base", value: "1000+", description: "new registered customers" },
      { metric: "Order Processing", value: "80%", description: "faster order fulfillment" },
      { metric: "Customer Satisfaction", value: "95%", description: "positive feedback score" }
    ],
    services: ["E-commerce Development", "SEO", "Content Marketing", "Email Marketing"],
    duration: "4 months",
    featured: false,
    testimonial: "Our online presence has completely transformed our business model. We're now serving customers across multiple states.",
    clientName: "Priya Patel, Business Owner"
  },
  {
    id: 4,
    title: "Interior Design Firm - Brand Building & Social Media",
    client: "Elegant Interiors",
    industry: "Design",
    description:
      "Complete brand identity development and social media strategy for a premium interior design firm targeting high-end residential projects.",
    image:
      "https://media.istockphoto.com/id/1340683883/photo/large-office-interior-a-reception-desk-a-lounge-corner-with-copy-space-and-wordesks-behind.webp?a=1&b=1&s=612x612&w=0&k=20&c=WH91H5D0inDh4lKoO-cuKSjNHuXwkhbJxhuQI5B_3Ug=",
    results: [
      { metric: "Brand Recognition", value: "300%", description: "increase in brand mentions" },
      { metric: "Instagram Followers", value: "5000+", description: "organic follower growth" },
      { metric: "Project Inquiries", value: "150%", description: "increase in premium inquiries" },
      { metric: "Average Project Value", value: "40%", description: "increase in project size" }
    ],
    services: ["Brand Identity", "Social Media Management", "Content Creation", "Photography"],
    duration: "5 months",
    featured: false,
    testimonial: "LegacyForge helped us position ourselves as a premium brand. Our client quality and project values have increased significantly.",
    clientName: "Neha Gupta, Creative Director"
  },
  {
    id: 5,
    title: "Construction Company - Digital Marketing Strategy",
    client: "BuildRight Construction",
    industry: "Construction",
    description:
      "Comprehensive digital marketing strategy for a mid-size construction company focusing on residential and commercial projects.",
    image: "https://ideogram.ai/assets/image/lossless/response/vdqit3VnRRygGxrb5ZV3qg",
    results: [
      { metric: "Project Leads", value: "200%", description: "increase in project inquiries" },
      { metric: "Website Visitors", value: "350%", description: "growth in monthly visitors" },
      { metric: "Social Media Reach", value: "400%", description: "expansion in audience reach" },
      { metric: "Contract Value", value: "180%", description: "increase in average contract size" }
    ],
    services: ["Website Development", "SEO", "Social Media Marketing", "Content Strategy"],
    duration: "6 months",
    featured: false,
    testimonial: "Our digital presence now matches the quality of our construction work. We're getting inquiries from clients we never could have reached before.",
    clientName: "Vikram Singh, Project Manager"
  },
  {
    id: 6,
    title: "Real Estate Developer - Lead Nurturing System",
    client: "Prime Properties",
    industry: "Real Estate",
    description:
      "Implementation of automated lead nurturing system with CRM integration for a real estate developer focusing on premium residential projects.",
    image:
      "https://media.istockphoto.com/id/2155457708/photo/group-of-businessmen-and-investors-discuss-investing-in-real-estate-and-jointly-plan.webp?a=1&b=1&s=612x612&w=0&k=20&c=JpzfGjeQBQNiYdcGMGB7CQpKUs5YACqLQO-9PgvmEo0=",
    results: [
      { metric: "Lead Conversion", value: "45%", description: "improvement in conversion rate" },
      { metric: "Sales Cycle", value: "30%", description: "reduction in average sales time" },
      { metric: "Customer Retention", value: "60%", description: "increase in repeat customers" },
      { metric: "Revenue per Lead", value: "85%", description: "increase in lead value" }
    ],
    services: ["CRM Setup", "Email Automation", "Lead Scoring", "Sales Training"],
    duration: "4 months",
    featured: false,
    testimonial: "The automated system has revolutionized how we handle leads. Our sales team is more efficient and our conversion rates have never been better.",
    clientName: "Rohit Malhotra, Sales Director"
  }
];

const industries = ["All", "Manufacturing", "Construction", "Retail", "Design", "Real Estate"];

/* --------------------------
   Reels-style Image Slider
   -------------------------- */
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);

  // load images (local public folder)
  useEffect(() => {
    const imageUrls = [
      "/images/social-media/1.jpg",
      "/images/social-media/2.jpg",
      "/images/social-media/3.jpg",
      "/images/social-media/4.jpg",
      "/images/social-media/5.jpg"
    ];
    setImages(imageUrls);
  }, []);

  // autoplay
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (images.length <= 1) return;
    const startAutoplay = () => {
      clearAutoplay();
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((p) => (p + 1) % images.length);
      }, 4500);
    };
    const clearAutoplay = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  // swipe handling (vertical swipe for reels-like)
  const startYRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const onPointerDown = (clientY: number) => {
    isDraggingRef.current = true;
    startYRef.current = clientY;
  };
  const onPointerUp = (clientY: number) => {
    if (!isDraggingRef.current || startYRef.current == null) return;
    const diff = startYRef.current - clientY;
    const threshold = 60;
    if (diff > threshold) {
      // swipe up => next
      setCurrentIndex((p) => (p + 1) % images.length);
    } else if (diff < -threshold) {
      // swipe down => prev
      setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));
    }
    isDraggingRef.current = false;
    startYRef.current = null;
  };

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));
      } else if (e.key === "ArrowDown") {
        setCurrentIndex((p) => (p + 1) % images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  if (!images.length) {
    return (
      <div className="w-full max-w-5xl mx-auto p-6 text-center">Loading images…</div>
    );
  }

  return (
    <div
      className="relative w-full max-w-5xl mx-auto bg-black rounded-xl shadow-2xl overflow-hidden min-h-[60vh] md:min-h-[70vh] md:h-[80vh]"
      onMouseDown={(e) => onPointerDown(e.clientY)}
      onMouseUp={(e) => onPointerUp(e.clientY)}
      onTouchStart={(e) => onPointerDown(e.touches[0].clientY)}
      onTouchEnd={(e) => onPointerUp(e.changedTouches[0].clientY)}
      role="region"
      aria-label="Social media reels slider"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 120, scale: 1.04 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -120, scale: 0.98 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt={`Social media success ${currentIndex + 1}`}
            className="w-full h-full object-cover select-none"
            draggable={false}
          />

          {/* overlay caption */}
          <div className="absolute left-6 bottom-6 text-left text-sm md:text-base text-white/95">
            <div className="font-semibold text-lg md:text-xl">Social Media Success Stories</div>
            <div className="mt-1 text-white/70 text-xs md:text-sm">#{currentIndex + 1} • Designed to Impress</div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next Buttons (visible on desktop) */}
      <button
        aria-label="Previous"
        onClick={() => setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1))}
        className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow-md hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        aria-label="Next"
        onClick={() => setCurrentIndex((p) => (p + 1) % images.length)}
        className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow-md hover:bg-white transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Top progress bars like stories */}
      <div className="absolute top-4 left-4 right-4 flex gap-2 px-2">
        {images.map((_, idx) => (
          <div key={idx} className="flex-1 h-1 rounded overflow-hidden bg-white/20">
            <div
              className="h-full bg-white"
              style={{
                width: idx === currentIndex ? "100%" : "0%",
                transition: "width 0.45s linear"
              }}
              aria-hidden
            />
          </div>
        ))}
      </div>

      {/* Dots (mobile) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex gap-2 sm:hidden">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-white" : "bg-white/40"}`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/* --------------------------
   Page: Projects
   -------------------------- */
export default function Projects() {
  // preload hero background to reduce chance of FOUC / late load
  useEffect(() => {
    const heroExternal =
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f4c5e6a6b7d8c1b9f0c";
    const hrefs = [heroExternal, "/images/office.png"];
    hrefs.forEach((href) => {
      if (!document.querySelector(`link[rel="preload"][href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = href;
        document.head.appendChild(link);
      }
    });
    return () => {};
  }, []);

  const featuredProjects = projects.filter((project) => project.featured);
  const allProjects = projects;

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[color:var(--bg-muted,#f6f8fb)]">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-center bg-cover bg-fixed"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(8,10,15,0.06), rgba(255,255,255,0.02)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f4c5e6a6b7d8c1b9f0c'), url('/images/office.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
            role="img"
            aria-label="Successful business projects"
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{ scale: 1.05, x: -10, y: -6 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/30 to-black/10 pointer-events-none z-10" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            className="absolute left-1/4 top-10 w-72 h-72 rounded-full bg-gradient-to-br from-[#5170FF]/40 to-[#5D17EB]/30 blur-2xl opacity-70"
            initial={{ y: 0, scale: 0.9, opacity: 0 }}
            animate={{ y: -20, scale: 1.05, opacity: 0.7 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-1/4 top-28 w-56 h-56 rounded-full bg-gradient-to-tr from-[#FF8A00]/30 to-[#FF3CAC]/20 blur-3xl opacity-60"
            initial={{ y: 0, scale: 1 }}
            animate={{ y: 18, scale: 0.95 }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-10 bottom-6 w-40 h-40 rounded-full bg-gradient-to-r from-[#17E0B2]/20 to-[#5170FF]/20 blur-2xl opacity-60"
            initial={{ x: 0, scale: 1 }}
            animate={{ x: -16, scale: 1.02 }}
            transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute left-12 top-16 w-[520px] h-[520px] rounded-full pointer-events-none bg-[radial-gradient(closest-side,rgba(81,112,255,0.18),rgba(81,112,255,0.04)_40%,rgba(255,255,255,0)_70%)] blur-[64px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: [0, 0.7, 0.45, 0.7, 0], scale: [0.95, 1.02, 1, 1.03, 0.98], y: [0, -6, 0, -4, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container py-16 md:py-24 relative min-h-[320px]">
          <motion.div className="max-w-3xl relative z-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="backdrop-blur-md bg-black/35 rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 text-slate-900 px-3 py-1 text-xs font-medium">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB]" />
                Success Stories
              </span>

              <motion.h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
                Projects That{" "}
                <span className="bg-gradient-to-r from-[#6EE7B7] to-[#6366F1] bg-clip-text text-transparent">
                  Drive Results
                </span>
              </motion.h1>

              <p className="mt-4 text-white/80 text-lg max-w-2xl leading-relaxed">
                Explore our portfolio of successful digital marketing campaigns and business transformations. Real clients, real results, real growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container py-12 md:py-16">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Success Stories</h2>
          <p className="mt-2 text-muted-foreground">Our most impactful client transformations</p>
        </div>

        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <motion.div key={project.id} className="grid gap-8 md:grid-cols-12 items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} viewport={{ once: true }}>
              <div className={`md:col-span-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-[#5170FF] to-[#5D17EB] p-[1px] shadow-lg">
                  <div className="relative rounded-xl">
                    <img src={project.image} alt={project.title} className="h-64 w-full object-cover md:h-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">{project.industry}</Badge>
                  </div>
                </div>
              </div>

              <div className={`md:col-span-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="text-center p-3 rounded-lg border bg-card">
                        <div className="text-2xl font-bold text-[#5170FF] mb-1">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.description}</div>
                      </div>
                    ))}
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <Badge key={service} className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-[#5170FF] pl-4 italic text-muted-foreground">
                    "{project.testimonial}"
                    <footer className="mt-2 text-sm font-medium text-foreground">— {project.clientName}</footer>
                  </blockquote>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Duration: {project.duration}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Media Slider */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Social Media Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">See how we've helped brands grow their online presence</p>
          </div>

          <ImageSlider />

          <div className="mt-12 text-center">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700">
              <a href="/contact">Start Your Social Media Journey</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="container py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {industries.map((industry) => (
            <Button key={industry} variant={industry === "All" ? "default" : "outline"} size="sm" className={industry === "All" ? "bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white" : ""}>
              {industry}
            </Button>
          ))}
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="container pb-16 md:pb-24">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">All Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project, index) => (
            <motion.div key={project.id} className="group cursor-pointer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
              <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-foreground text-xs">{project.industry}</Badge>
                  {project.featured && <Badge className="absolute top-3 right-3 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white text-xs">Featured</Badge>}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#5170FF] transition-colors line-clamp-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="text-center p-2 rounded bg-muted/50">
                        <div className="text-sm font-bold text-[#5170FF]">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{project.duration}</span>
                    <ExternalLink className="h-4 w-4 text-[#5170FF] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[#5170FF] to-[#5D17EB] p-[1px]">
          <div className="relative rounded-2xl bg-background p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Our Impact in Numbers</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">These results represent real transformations across various industries and business sizes.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#5170FF] mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#5170FF] mb-2">300%</div>
                <div className="text-sm text-muted-foreground">Avg. Lead Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#5170FF] mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#5170FF] mb-2">₹2Cr+</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container pb-16 md:pb-24">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Ready to Be Our Next Success Story?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Let's discuss how we can help transform your business with proven digital marketing strategies.</p>
          <Button asChild className="h-12 px-8 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white hover:from-[#3C72FC] hover:to-[#5D17EB] text-lg">
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
