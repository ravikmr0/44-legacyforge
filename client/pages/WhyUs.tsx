import {
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Zap,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/site/Badge";
import { motion } from "framer-motion";

export default function WhyUs() {
  const features = [
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Measurable Growth",
      desc: "We help one business per category dominate their city, ensuring no local competition within your niche.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "City-Wise Market Leadership",
      desc: "Digital-Marketing approach ensures uptime, security, and scale.",
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "Manufacturing Industry Expertise",
      desc: "Our deep industry knowledge helps businesses grow faster, smarter, and with lasting impact.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Full-Funnel Business Enablement",
      desc: "From attracting prospects to closing sales, we optimize every stage of your growth journey.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Creative + technical",
      desc: "Best of both worlds: engineering rigor and standout creative.",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: "Transparent reporting",
      desc: "Always-on dashboards and clear comms.",
    },
  ];

  const steps = [
    {
      k: "01",
      t: "Strategize & Discover",
      d: "Deep dive into your business goals, target audience, competitive landscape, and existing assets to architect a data-backed, full-funnel strategy.",
    },
    {
      k: "02",
      t: "Design & Develop",
      d: "Create tailored solutions for every touchpoint – from easy-to-use designs and strong technical systems to engaging content and automated marketing.",
    },
    {
      k: "03",
      t: "Launch & Optimize",
      d: "Execute campaigns across the right digital channels, monitor performance closely, and continuously improve results & optimize campaign.",
    },
    {
      k: "04",
      t: "Analyze & Scale",
      d: "We use insights to fine-tune campaigns, find new growth opportunities, and help your business reach more customers.",
    },
    {
      k: "05",
      t: "Scale & Growth",
      d: "Turn insights and optimizations into measurable results, expanding revenue, market share, and category leadership while ensuring sustainable scaling.",
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B69] via-[#8B5CF6] to-[#EC4899]" />
          
          {/* Animated overlay gradients */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#5170FF]/30 via-transparent to-[#5D17EB]/30"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(81,112,255,0.3) 0%, transparent 50%, rgba(93,23,235,0.3) 100%)",
                "linear-gradient(135deg, rgba(93,23,235,0.3) 0%, transparent 50%, rgba(81,112,255,0.3) 100%)",
                "linear-gradient(225deg, rgba(81,112,255,0.3) 0%, transparent 50%, rgba(93,23,235,0.3) 100%)",
                "linear-gradient(315deg, rgba(93,23,235,0.3) 0%, transparent 50%, rgba(81,112,255,0.3) 100%)",
                "linear-gradient(45deg, rgba(81,112,255,0.3) 0%, transparent 50%, rgba(93,23,235,0.3) 100%)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating geometric shapes */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
              }}
              animate={{
                y: [-30, -60, -30],
                x: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Abstract tech elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/20 rounded-full"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-white/15"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Animated lines */}
          <motion.div
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 2.5
            }}
          />
        </div>
        
        <div className="container py-20 md:py-32 relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-12">
            {/* Left Content */}
            <div className="md:col-span-7">
              <motion.span 
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm text-white/95 backdrop-blur-sm shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                Why choose us
              </motion.span>
              
              <motion.h1 
                className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Why{" "}
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  LegacyForge
                </span>
                ?
              </motion.h1>
              
              <motion.h2 
                className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Engineering Growth.{" "}
                <span className="text-white/70">Delivering Impact.</span>
              </motion.h2>
              
              <motion.p 
                className="mt-6 text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                We build strategies, execute plans, and drive measurable business growth and expansion.
              </motion.p>
              
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <Button
                  asChild
                  className="h-12 px-8 bg-white text-[#2D1B69] hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
                >
                  <a href="/contact">Let's talk</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg font-semibold"
                >
                  <a href="/services">Our Services</a>
                </Button>
              </motion.div>
            </div>
            
            {/* Right Side - Abstract Tech Visualization */}
            <div className="md:col-span-5 relative">
              <motion.div
                className="relative w-full h-96 md:h-[500px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                {/* Central tech element */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="absolute inset-4 rounded-full border border-white/20 bg-gradient-to-br from-white/10 to-transparent" />
                </motion.div>
                
                {/* Orbiting elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-white/40 backdrop-blur-sm"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: `${80 + i * 20}px 0px`,
                    }}
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5
                    }}
                  />
                ))}
                
                {/* Connection lines */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-64 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: [0, 180, 360],
                    scaleX: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-px h-64 bg-gradient-to-b from-transparent via-white/30 to-transparent transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    rotate: [0, 180, 360],
                    scaleY: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
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

      {/* Trust indicators */}
      <section className="container py-12">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="text-3xl font-bold text-[#5170FF] mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#5170FF] mb-2">300%</div>
            <div className="text-sm text-muted-foreground">Average Growth</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#5170FF] mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#5170FF] mb-2">₹2Cr+</div>
            <div className="text-sm text-muted-foreground">Revenue Generated</div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="container py-12 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, index) => (
            <motion.div 
              key={f.title} 
              className="rounded-xl border p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB]" />
              Why choose us
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Results, reliability, and real partnership
            </h1>
            <p className="mt-4 text-slate-700 text-lg">
              We connect strategy with execution and prove it with data.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-12 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#5170FF14] to-[#5D17EB14] text-[#5170FF]">
                {f.icon}
              </div>
              <p className="mt-3 font-semibold">{f.title}</p>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
            <Badge>Performance-first</Badge>
            <Badge>Secure-by-design</Badge>
            <Badge>Full-funnel</Badge>
            <Badge>Transparent reporting</Badge>
          </div>
          <div className="mt-8">
            <Button
              asChild
              className="h-11 px-6 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white hover:from-[#3C72FC] hover:to-[#5D17EB]"
            >
              <a href="/contact">Let's talk</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
