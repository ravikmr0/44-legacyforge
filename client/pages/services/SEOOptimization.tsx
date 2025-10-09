import { CheckCircle2, Search, TrendingUp, Target, BarChart3, Globe, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function SEOOptimization() {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Keyword Research",
      description: "In-depth keyword analysis to identify high-value opportunities for your business."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Ranking Improvement",
      description: "Proven strategies to improve your search engine rankings and organic visibility."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Tracking",
      description: "Comprehensive analytics and reporting to monitor your SEO progress and ROI."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Technical SEO",
      description: "Complete technical optimization including site speed, mobile-friendliness, and crawlability."
    }
  ];

  const services = [
    {
      title: "On-Page SEO",
      description: "Optimize your website's content, structure, and HTML elements for better search rankings.",
      features: ["Title Tag Optimization", "Meta Descriptions", "Header Structure", "Internal Linking"]
    },
    {
      title: "Technical SEO",
      description: "Improve your website's technical foundation for better crawling and indexing by search engines.",
      features: ["Site Speed Optimization", "Mobile Optimization", "Schema Markup", "XML Sitemaps"]
    },
    {
      title: "Content Strategy",
      description: "Create and optimize high-quality content that ranks well and engages your target audience.",
      features: ["Content Planning", "Blog Writing", "Content Optimization", "Content Audits"]
    },
    {
      title: "Link Building",
      description: "Build high-quality backlinks to improve your domain authority and search rankings.",
      features: ["Guest Posting", "Resource Link Building", "Broken Link Building", "Digital PR"]
    }
  ];

  const packages = [
    {
      name: "Local SEO",
      price: "₹25,000",
      period: "/month",
      description: "Perfect for local businesses targeting nearby customers",
      features: [
        "Google My Business Optimization",
        "Local Keyword Research",
        "Citation Building",
        "Review Management",
        "Local Content Creation",
        "Monthly Reporting",
        "On-Page Optimization"
      ],
      popular: false
    },
    {
      name: "National SEO",
      price: "₹50,000",
      period: "/month",
      description: "Comprehensive SEO for businesses targeting national markets",
      features: [
        "All Local SEO Features",
        "National Keyword Targeting",
        "Content Marketing Strategy",
        "Link Building Campaign",
        "Technical SEO Audit",
        "Competitor Analysis",
        "Weekly Progress Reports",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise SEO",
      price: "₹1,00,000",
      period: "/month",
      description: "Advanced SEO solution for large businesses and e-commerce",
      features: [
        "All National SEO Features",
        "E-commerce SEO",
        "International SEO",
        "Advanced Analytics Setup",
        "Custom SEO Strategy",
        "Dedicated SEO Manager",
        "24/7 Support",
        "Quarterly Strategy Reviews"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "250%", label: "Average Traffic Increase" },
    { number: "85%", label: "First Page Rankings" },
    { number: "150+", label: "Successful SEO Campaigns" },
    { number: "6 Months", label: "Average Time to Results" }
  ];

  const seoProcess = [
    {
      step: "01",
      title: "SEO Audit",
      description: "Comprehensive analysis of your current SEO performance and opportunities."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized SEO strategy based on your business goals and market analysis."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute on-page, technical, and off-page SEO optimizations according to the strategy."
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description: "Track progress, analyze results, and continuously optimize for better performance."
    }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80"
            alt="SEO analytics dashboard"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-600/20 via-blue-600/10 to-transparent" />
          
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 3) * 25}%`,
                width: `${6 + i * 1}px`,
                height: `${6 + i * 1}px`,
              }}
              animate={{
                y: [-15, -35, -15],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
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
              <Search className="h-4 w-4" />
              Search Engine Optimization
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              SEO{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Optimization
              </span>
              <br />That Ranks
            </motion.h1>

            <motion.p
              className="mt-6 text-white/85 text-xl md:text-2xl leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Boost your organic visibility and drive qualified traffic with data-driven SEO strategies that deliver measurable results.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button
                asChild
                className="h-12 px-8 bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
              >
                <a href="/contact">Start SEO Audit</a>
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
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
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
              Why Choose Our SEO Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use proven SEO strategies and the latest tools to improve your search rankings and drive organic traffic.
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
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-100 to-blue-100 text-primary mb-4">
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

      {/* SEO Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Optimize Your Website
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures comprehensive SEO optimization that delivers sustainable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-blue-600 text-white text-xl font-bold mx-auto mb-4">
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
              Comprehensive SEO Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From technical optimization to content strategy, we cover all aspects of SEO to maximize your online visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
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

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your SEO Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible SEO packages designed to meet your business needs and budget requirements.
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
                      <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
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
                        className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700' : ''}`}
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's optimize your website for search engines and drive more qualified organic traffic to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold"
              >
                <a href="/contact">Get Free SEO Audit</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="/projects">View SEO Results</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}