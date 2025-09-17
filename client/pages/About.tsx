import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Rocket, Users, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section with Background Image and Animation */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format&fit=crop"
            alt="Modern office building"
            className="h-full w-full object-cover opacity-40"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5170FF33] via-[#5D17EB22] to-transparent" />
          
          <motion.div
            aria-hidden
            className="absolute -top-10 -left-10 h-80 w-80 rounded-full bg-gradient-to-br from-[#5170FF] to-[#5D17EB] blur-3xl opacity-30"
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
            className="absolute top-20 right-0 h-96 w-96 rounded-full bg-gradient-to-tr from-[#5D17EB] to-[#5170FF] blur-3xl opacity-25"
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
          
          {/* Enhanced floating particles animation */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + i * 8}%`,
                width: `${8 + i * 2}px`,
                height: `${8 + i * 2}px`,
              }}
              animate={{
                y: [-30, -60, -30],
                x: [-10, 10, -10],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i * 0.7,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Additional geometric shapes */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-4 h-4 border-2 border-white/20 rotate-45"
            animate={{ rotate: [45, 405, 45] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-6 h-6 border border-white/15 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container py-20 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <motion.span 
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm text-white/95 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB] animate-pulse" />
              Who we are
            </motion.span>
            
            <motion.h1 
              className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              About{" "}
              <span className="bg-gradient-to-r from-[#5170FF] to-[#5D17EB] bg-clip-text text-transparent">
                LegacyForge
              </span>{" "}
              Marketing
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-white/85 text-xl md:text-2xl leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              We blend IT expertise with data-driven marketing to build brands
              that last. Strategy, execution, and relentless optimization — all
              under one roof.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button
                asChild
                className="h-12 px-8 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] text-white hover:from-[#3C72FC] hover:to-[#5D17EB] shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
              >
                <a href="/contact">Work with us</a>
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

      {/* Team Profiles Section */}
      <section className="container py-16 md:py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Meet Our Leadership Team
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Experienced leaders driving innovation and growth at LegacyForge Marketing
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <TeamMember
            name="Himanshu Shekhar"
            role="Founder & CEO"
            image="/images/himanshu.png"
            bio="Driving force behind Legacyforge Marketing Pvt. Ltd., believes that with the right strategy, every brand deserves to reach pan India and grow their business."
            linkedin="https://www.linkedin.com/in/himanshu-shekhar-5bab6910b/"
            email="himanshu@legacyforgegroup.com"
          />
          
          <TeamMember
            name="Ishita Bansal"
            role="Head of Marketing"
            image="/images/ishita.png"
            bio="Growth marketing expert with proven track record at startups and Fortune 500 companies. Specializes in data-driven campaigns that deliver measurable ROI."
            linkedin="https://www.linkedin.com/in/ishita-bansal-0859652a7/"
            email="ishita@legacyforgegroup.com"
          />
          
          <TeamMember
            name="Ravi Kumar"
            role="Website Development Lead"
            image="/images/ravi.png"
            bio="IT with 1+ years building high-performing website. Expert in consulting and implementing scalable web solutions."
            linkedin="https://www.linkedin.com/in/ravi-kumar0/"
            email="ravi@legacyforgegroup.com"
          />
        </div>
      </section>

      {/* Story section */}
      <section className="container py-12 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-[#5170FF] to-[#5D17EB] p-[1px] shadow-sm">
              <div className="relative rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                  alt="Team working together"
                  className="h-72 w-full object-cover md:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Our story
            </h2>
            <p className="mt-3 text-muted-foreground">
              Founded by engineers and growth leaders, LegacyForge was created
              to close the gap between IT foundations and marketing performance.
              We design systems that are measurable, resilient, and primed to
              scale.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Full-funnel strategy and execution",
                "Secure-by-design infrastructure",
                "Transparent reporting and measurable ROI",
              ].map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-sm md:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#5170FF]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="container pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight">Our values</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Value
                icon={<Shield className="h-5 w-5" />}
                title="Trust & Security"
                desc="Privacy-first systems and battle-tested practices."
              />
              <Value
                icon={<Rocket className="h-5 w-5" />}
                title="Performance"
                desc="We optimize for business outcomes, not vanity metrics."
              />
              <Value
                icon={<Users className="h-5 w-5" />}
                title="Partnership"
                desc="We embed with your team and move as one."
              />
              <Value
                icon={<CheckCircle2 className="h-5 w-5" />}
                title="Clarity"
                desc="Clear plans, clear reporting, clear wins."
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-2">
              <Stat kpi="98%" label="Client satisfaction" />
              <Stat kpi="3.5x" label="Avg. ROAS uplift" />
              <Stat kpi="24/7" label="Managed IT support" />
              <Stat kpi="200+" label="Campaigns launched" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamMember({
  name,
  role,
  image,
  bio,
  linkedin,
  email,
}: {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  email: string;
}) {
  return (
    <div className="rounded-xl border p-6 text-center bg-background/50 backdrop-blur">
      <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-gradient-to-r from-[#5170FF] to-[#5D17EB]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm font-medium text-[#5170FF] mb-3">{role}</p>
      <p className="text-sm text-muted-foreground mb-4">{bio}</p>
      <div className="flex justify-center gap-3">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#5170FF14] to-[#5D17EB14] text-[#5170FF] hover:from-[#5170FF] hover:to-[#5D17EB] hover:text-white transition-colors"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href={`mailto:${email}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#5170FF14] to-[#5D17EB14] text-[#5170FF] hover:from-[#5170FF] hover:to-[#5D17EB] hover:text-white transition-colors"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function Value({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#5170FF14] to-[#5D17EB14] text-[#5170FF]">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-lg border p-4 text-center">
      <div className="text-2xl font-bold text-[#5170FF]">{kpi}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}