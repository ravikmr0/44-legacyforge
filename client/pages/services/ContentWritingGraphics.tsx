import { CheckCircle2, PenTool, Palette, FileText, Image, Video, Lightbulb, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function ContentWritingGraphics() {
  const features = [
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Professional Writing",
      description: "Compelling copy that converts visitors into customers with persuasive storytelling."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative Design",
      description: "Eye-catching graphics and visuals that capture attention and communicate your message."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Brand Consistency",
      description: "Cohesive content that maintains your brand voice and visual identity across all platforms."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality to meet your marketing deadlines."
    }
  ];

  const contentTypes = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Blog Writing",
      description: "SEO-optimized blog posts that drive traffic and establish thought leadership.",
      features: ["SEO Optimization", "Research & Fact-checking", "Engaging Headlines", "Call-to-Actions"]
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Graphic Design",
      description: "Professional graphics for digital and print marketing materials.",
      features: ["Social Media Graphics", "Infographics", "Banner Designs", "Print Materials"]
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Content",
      description: "Engaging video scripts and visual content for various platforms.",
      features: ["Script Writing", "Storyboarding", "Motion Graphics", "Video Editing"]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Creative Campaigns",
      description: "Comprehensive creative campaigns with copy and visuals.",
      features: ["Campaign Strategy", "Creative Concepts", "Multi-format Content", "Brand Storytelling"]
    }
  ];

  const services = [
    {
      category: "Content Writing",
      items: [
        "Website Copy & Landing Pages",
        "Blog Posts & Articles",
        "Social Media Content",
        "Email Marketing Copy",
        "Product Descriptions",
        "Press Releases",
        "Case Studies",
        "White Papers"
      ]
    },
    {
      category: "Graphic Design",
      items: [
        "Logo Design & Branding",
        "Social Media Graphics",
        "Infographics & Data Visualization",
        "Brochures & Flyers",
        "Business Cards & Stationery",
        "Web Graphics & Banners",
        "Presentation Design",
        "Packaging Design"
      ]
    }
  ];

  const packages = [
    {
      name: "Content Starter",
      price: "₹15,000",
      period: "/month",
      description: "Essential content creation for small businesses",
      features: [
        "4 Blog Posts per Month",
        "8 Social Media Graphics",
        "Basic SEO Optimization",
        "Content Calendar",
        "2 Revisions per Piece",
        "Email Support",
        "Monthly Performance Report"
      ],
      popular: false
    },
    {
      name: "Creative Professional",
      price: "₹35,000",
      period: "/month",
      description: "Comprehensive content and design solution",
      features: [
        "8 Blog Posts per Month",
        "16 Social Media Graphics",
        "2 Infographics",
        "Email Newsletter Design",
        "Advanced SEO Optimization",
        "Unlimited Revisions",
        "Priority Support",
        "Bi-weekly Strategy Calls"
      ],
      popular: true
    },
    {
      name: "Enterprise Creative",
      price: "₹70,000",
      period: "/month",
      description: "Full-scale content marketing and design services",
      features: [
        "12 Blog Posts per Month",
        "25 Social Media Graphics",
        "4 Infographics",
        "Video Script Writing",
        "Brand Guidelines Development",
        "Dedicated Creative Team",
        "24/7 Support",
        "Weekly Strategy Sessions"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "1000+", label: "Content Pieces Created" },
    { number: "95%", label: "Client Satisfaction Rate" },
    { number: "48hrs", label: "Average Turnaround" },
    { number: "200%", label: "Engagement Increase" }
  ];

  const designTools = [
    { name: "Adobe Creative Suite", logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" },
    { name: "After Effects", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80"
            alt="Creative content workspace"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/20 via-red-600/10 to-transparent" />
          
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-25, -45, -25],
                rotate: [0, 180, 360],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              {i % 4 === 0 && <PenTool className="h-6 w-6 text-orange-400/60" />}
              {i % 4 === 1 && <Palette className="h-5 w-5 text-red-400/60" />}
              {i % 4 === 2 && <FileText className="h-4 w-4 text-yellow-400/60" />}
              {i % 4 === 3 && <Image className="h-5 w-5 text-pink-400/60" />}
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
              <PenTool className="h-4 w-4" />
              Creative Content Specialists
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Content Writing{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                & Graphics
              </span>
              <br />That Converts
            </motion.h1>

            <motion.p
              className="mt-6 text-white/85 text-xl md:text-2xl leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Compelling content and stunning visuals that tell your brand story, engage your audience, and drive conversions.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button
                asChild
                className="h-12 px-8 bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
              >
                <a href="/contact">Start Creating</a>
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
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
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
              Our Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Creative Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine strategic thinking with creative execution to deliver content that resonates with your audience.
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
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-red-100 text-primary mb-4">
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

      {/* Content Types Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Creative Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From compelling copy to stunning visuals, we create content that drives engagement and conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contentTypes.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-red-100 text-primary mb-4">
                      {content.icon}
                    </div>
                    <CardTitle className="text-2xl">{content.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {content.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {content.features.map((feature) => (
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

      {/* Services List Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              What We Create
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Content & Design Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a wide range of content writing and graphic design services to meet all your marketing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center mb-6">{service.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>{item}</span>
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

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Tools
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Creative Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use industry-leading tools and software to create high-quality content and designs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {designTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white shadow-md">
                  <img src={tool.logo} alt={tool.name} className="w-10 h-10" />
                </div>
                <span className="text-sm font-medium text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Creative Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible content and design packages to suit businesses of all sizes and requirements.
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
                      <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
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
                        className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700' : ''}`}
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Compelling Content?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's craft content and visuals that tell your story, engage your audience, and drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold"
              >
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="/projects">View Our Portfolio</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}