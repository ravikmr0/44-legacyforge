import { CheckCircle2, Palette, Eye, Lightbulb, Star, Zap, Target, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function CreativeBranding() {
  const features = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Visual Identity",
      description: "Create distinctive visual identities that make your brand instantly recognizable and memorable."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Brand Strategy",
      description: "Develop comprehensive brand strategies that align with your business goals and target audience."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Brand Experience",
      description: "Design cohesive brand experiences across all touchpoints and customer interactions."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Deliver high-quality branding solutions that elevate your business and build trust."
    }
  ];

  const brandingServices = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Logo Design & Identity",
      description: "Create memorable logos and comprehensive visual identity systems.",
      features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"]
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Brand Strategy",
      description: "Develop strategic brand positioning and messaging frameworks.",
      features: ["Brand Positioning", "Value Proposition", "Brand Voice", "Messaging Strategy"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Brand Applications",
      description: "Apply your brand across all marketing materials and touchpoints.",
      features: ["Business Cards", "Letterheads", "Marketing Materials", "Digital Assets"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Brand Refresh",
      description: "Modernize and revitalize existing brands for contemporary markets.",
      features: ["Brand Audit", "Competitive Analysis", "Redesign Strategy", "Implementation Plan"]
    }
  ];

  const brandingProcess = [
    {
      step: "01",
      title: "Discovery",
      description: "Deep dive into your business, values, and target audience to understand your brand essence."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop brand positioning, messaging, and visual direction based on research insights."
    },
    {
      step: "03",
      title: "Design",
      description: "Create visual identity elements including logo, colors, typography, and brand guidelines."
    },
    {
      step: "04",
      title: "Implementation",
      description: "Apply the brand across all touchpoints and provide guidelines for consistent usage."
    }
  ];

  const packages = [
    {
      name: "Brand Essentials",
      price: "₹50,000",
      period: "one-time",
      description: "Perfect for startups and small businesses",
      features: [
        "Logo Design (3 Concepts)",
        "Color Palette",
        "Typography Selection",
        "Basic Brand Guidelines",
        "Business Card Design",
        "Letterhead Design",
        "3 Revisions Included"
      ],
      popular: false
    },
    {
      name: "Complete Branding",
      price: "₹1,25,000",
      period: "one-time",
      description: "Comprehensive branding solution for growing businesses",
      features: [
        "All Brand Essentials",
        "Brand Strategy Development",
        "Extended Brand Guidelines",
        "Marketing Material Templates",
        "Social Media Kit",
        "Brand Voice & Messaging",
        "Unlimited Revisions",
        "3 Months Support"
      ],
      popular: true
    },
    {
      name: "Enterprise Branding",
      price: "₹2,50,000",
      period: "one-time",
      description: "Premium branding for established businesses",
      features: [
        "All Complete Branding Features",
        "Comprehensive Brand Audit",
        "Competitive Analysis",
        "Brand Architecture",
        "Advanced Brand Guidelines",
        "Brand Training Session",
        "Dedicated Brand Manager",
        "6 Months Support"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "500+", label: "Brands Created" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Industries Served" }
  ];

  const brandElements = [
    { name: "Logo Design", description: "Memorable and scalable logo concepts" },
    { name: "Color Psychology", description: "Strategic color palettes that evoke emotions" },
    { name: "Typography", description: "Carefully selected fonts that reflect brand personality" },
    { name: "Brand Guidelines", description: "Comprehensive usage guidelines for consistency" },
    { name: "Marketing Materials", description: "Branded templates for all marketing needs" },
    { name: "Digital Assets", description: "Web-ready graphics and social media kits" }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
            alt="Creative branding workspace"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-pink-600/10 to-transparent" />
          
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + i * 8}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                rotate: [0, 360, 0],
                scale: [0.8, 1.4, 0.8],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {i % 5 === 0 && <Palette className="h-6 w-6 text-purple-400/60" />}
              {i % 5 === 1 && <Eye className="h-5 w-5 text-pink-400/60" />}
              {i % 5 === 2 && <Lightbulb className="h-4 w-4 text-yellow-400/60" />}
              {i % 5 === 3 && <Star className="h-5 w-5 text-blue-400/60" />}
              {i % 5 === 4 && <Sparkles className="h-4 w-4 text-green-400/60" />}
            </motion.div>
          ))}
        </div>

        <div className="container py-20 md:py-32 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white/95 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Palette className="h-4 w-4" />
              Brand Identity Specialists
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Creative{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Branding
              </span>
              <br />That Inspires
            </motion.h1>

            <motion.p
              className="mt-6 text-white/85 text-xl md:text-2xl leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Build powerful brand identities that resonate with your audience, differentiate your business, and drive long-term success.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button
                asChild
                className="h-12 px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
              >
                <a href="/contact">Start Branding</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 px-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg font-semibold"
              >
                <a href="#packages">View Packages</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Approach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Branding Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create distinctive brand identities that capture your essence and connect with your target audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 text-primary mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Build Your Brand
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures every brand we create is strategic, memorable, and perfectly aligned with your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandingProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white text-xl font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    <CardTitle className="text-xl">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {process.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Branding Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From logo design to complete brand identity systems, we provide everything you need to build a strong brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {brandingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 text-primary mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Elements Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-pink-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Brand Elements
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes a Complete Brand Identity
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every element of your brand identity is carefully crafted to work together harmoniously.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandElements.map((element, index) => (
              <motion.div
                key={element.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{element.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {element.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Branding Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive branding packages designed to meet your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground ml-2">{pkg.period}</span>
                    </div>
                    <CardDescription className="mt-4 text-base">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    <div className="pt-6">
                      <Button 
                        asChild 
                        className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' : ''}`}
                      >
                        <a href="/contact">Get Started</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Brand Identity?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create a powerful brand identity that sets you apart from the competition and resonates with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
              >
                <a href="/contact">Start Your Brand</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="/projects">View Brand Portfolio</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}