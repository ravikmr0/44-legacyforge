import { CheckCircle2, Target, TrendingUp, Users, Zap, BarChart3, MousePointer, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function PaidAdvertising() {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Targeting",
      description: "Reach your ideal customers with laser-focused audience targeting across all major platforms."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Continuous campaign optimization to maximize ROI and reduce cost per acquisition."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and insights to track performance and guide strategy decisions."
    },
    {
      icon: <MousePointer className="h-6 w-6" />,
      title: "Multi-Platform Management",
      description: "Expert management across Google Ads, Facebook, Instagram, LinkedIn, and more."
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹25,000",
      period: "/month",
      description: "Perfect for small businesses starting their digital advertising journey",
      features: [
        "Google Ads Management",
        "Facebook & Instagram Ads",
        "Monthly Performance Reports",
        "Basic Audience Research",
        "Landing Page Optimization",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹50,000",
      period: "/month",
      description: "Comprehensive advertising solution for growing businesses",
      features: [
        "All Starter Features",
        "LinkedIn Ads Management",
        "Advanced Audience Segmentation",
        "A/B Testing & Optimization",
        "Conversion Tracking Setup",
        "Weekly Strategy Calls",
        "Custom Landing Pages",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹1,00,000",
      period: "/month",
      description: "Full-scale advertising management for large businesses",
      features: [
        "All Professional Features",
        "Multi-Platform Campaign Management",
        "Advanced Attribution Modeling",
        "Custom Audience Development",
        "Dedicated Account Manager",
        "24/7 Support",
        "Monthly Strategy Sessions",
        "Competitor Analysis"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "300%", label: "Average ROI Increase" },
    { number: "50%", label: "Reduction in Cost Per Lead" },
    { number: "150+", label: "Successful Campaigns" },
    { number: "24/7", label: "Campaign Monitoring" }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
            alt="Digital advertising dashboard"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-cyan-600/10 to-transparent" />
          
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + i * 8}%`,
                width: `${8 + i * 2}px`,
                height: `${8 + i * 2}px`,
              }}
              animate={{
                y: [-30, -60, -30],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
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
              <Target className="h-4 w-4" />
              Performance Marketing Specialists
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Paid{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Advertising
              </span>
              <br />That Converts
            </motion.h1>

            <motion.p
              className="mt-6 text-white/85 text-xl md:text-2xl leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Drive qualified leads and maximize ROI with data-driven advertising campaigns across Google, Facebook, LinkedIn, and more.
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
                <a href="/contact">Start Campaign</a>
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
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
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
              Why Choose Our Paid Advertising Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine strategic thinking with tactical execution to deliver advertising campaigns that drive real business results.
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
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 text-primary mb-4">
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

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Advertising Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible packages designed to scale with your business needs and advertising goals.
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
                      <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
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
                        className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' : ''}`}
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Business with Paid Advertising?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create high-converting ad campaigns that drive qualified leads and maximize your return on investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
              >
                <a href="/contact">Start Your Campaign</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="/projects">View Case Studies</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}