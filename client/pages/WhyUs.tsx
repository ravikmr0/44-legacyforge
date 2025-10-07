import { Button } from "@/components/ui/button";
import { CircleCheck, Award, Users, Target, Zap, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

export default function WhyUs() {
  const reasons = [
    {
      icon: CircleCheck,
      title: "Proven Track Record",
      description: "Over a decade of successful projects delivered to satisfied clients across various industries, with measurable results."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, ensuring exceptional results that exceed expectations."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team consists of skilled professionals with diverse expertise and experience in digital marketing."
    },
    {
      icon: Target,
      title: "Client-Focused Approach",
      description: "Your success is our priority. We work closely with you to achieve your goals and deliver real value."
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "We deliver results quickly without compromising quality, helping you stay ahead of the competition."
    },
    {
      icon: Shield,
      title: "Transparent Process",
      description: "Clear communication, detailed reporting, and full transparency in everything we do for your peace of mind."
    }
  ];

  const stats = [
    { value: "30%", label: "Growth rate Quarterly" },
    { value: "1000+", label: "Qualified Leads Monthly" },
    { value: "10+", label: "Cities" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section with Background Image and Animation */}
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
              Why partner with us
            </motion.span>

            <motion.h1
              className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Why{" "}
              <span className="bg-gradient-to-r from-[#1d42e5] to-[#5a10ed]  bg-clip-text text-transparent">
                LegacyForge
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-white/85 text-xl md:text-2xl leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Discover what sets us apart and makes us the right partner for your business growth and digital success.
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
                <a href="/services">Explore Services</a>
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

      {/* Stats Section */}
      <section className="container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 blur-xl opacity-20" />
                <h3 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
              </div>
              <p className="mt-2 text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="container py-16 md:py-20 overflow-hidden">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Strategic Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that drives success at every stage
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-100 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 p-4 md:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-cyan-600/5 to-transparent pointer-events-none" />
            <div className="relative">
              <img
                src="/images/process flow.png"
                alt="Our Strategic Process Flow"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <motion.div
            className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        <motion.div
          className="mt-12 grid md:grid-cols-5 gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { title: "Strategize & Discover", desc: "Understanding your goals" },
            { title: "Design & Develop", desc: "Creating solutions" },
            { title: "Launch & Optimize", desc: "Going live with precision" },
            { title: "Analyze & Scale", desc: "Data-driven improvements" },
            { title: "Scale & Growth", desc: "Sustainable expansion" },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold mb-2 shadow-lg">
                {index + 1}
              </div>
              <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Reasons Section */}
      <section className="container py-16 md:py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Makes Us Different
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                      <reason.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{reason.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-16 md:py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from businesses we've helped grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              quote: "LegacyForge transformed our digital presence. Our leads increased by 300% in just 6 months!",
              author: "Rajesh Kumar",
              company: "uPVC Manufacturing Co."
            },
            {
              quote: "The team's expertise in B2B marketing is unmatched. They truly understand our industry.",
              author: "Priya Sharma",
              company: "Aluminium Solutions Ltd."
            },
            {
              quote: "Professional, transparent, and results-driven. Best decision we made for our business.",
              author: "Amit Patel",
              company: "Window Systems India"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <TrendingUp key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-blue-600 to-cyan-600 p-[1px]">
            <div className="relative rounded-2xl bg-background p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have achieved their goals with our help. Let's build your success story together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg text-base px-8"
                >
                  <a href="/contact">Contact Us Today</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base px-8"
                >
                  <a href="/projects">View Our Work</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
