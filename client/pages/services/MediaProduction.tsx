import { CheckCircle2, Video, Camera, Film, Mic, Play, Edit, Zap, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function MediaProduction() {
  const features = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Professional Video Production",
      description: "High-quality video content from concept to final delivery using professional equipment."
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Photography Services",
      description: "Stunning photography for products, events, corporate, and lifestyle content."
    },
    {
      icon: <Edit className="h-6 w-6" />,
      title: "Post-Production Excellence",
      description: "Expert editing, color grading, and motion graphics to bring your vision to life."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising quality to meet your project deadlines."
    }
  ];

  const services = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "Corporate Videos",
      description: "Professional corporate videos that showcase your business and build trust.",
      features: ["Company Profiles", "Training Videos", "Testimonials", "Product Demos"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Product Photography",
      description: "High-quality product photography that drives sales and engagement.",
      features: ["E-commerce Photos", "Lifestyle Shots", "360° Photography", "Photo Retouching"]
    },
    {
      icon: <Film className="h-8 w-8" />,
      title: "Event Coverage",
      description: "Comprehensive event documentation with photos and videos.",
      features: ["Conference Coverage", "Trade Shows", "Corporate Events", "Live Streaming"]
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "Social Media Content",
      description: "Engaging visual content optimized for social media platforms.",
      features: ["Instagram Reels", "YouTube Videos", "TikTok Content", "Stories & Posts"]
    }
  ];

  const videoTypes = [
    { name: "Promotional Videos", description: "Compelling videos that showcase your products or services" },
    { name: "Explainer Videos", description: "Clear and engaging videos that explain complex concepts" },
    { name: "Training Videos", description: "Educational content for employee or customer training" },
    { name: "Testimonial Videos", description: "Authentic customer testimonials that build trust" },
    { name: "Event Videos", description: "Professional coverage of conferences, launches, and events" },
    { name: "Social Media Videos", description: "Short-form content optimized for social platforms" }
  ];

  const packages = [
    {
      name: "Content Creator",
      price: "₹30,000",
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "4 Short Videos per Month",
        "8 Professional Photos",
        "Basic Video Editing",
        "Social Media Optimization",
        "2 Revisions per Video",
        "Email Support",
        "Monthly Content Calendar"
      ],
      popular: false
    },
    {
      name: "Business Media",
      price: "₹75,000",
      period: "/month",
      description: "Comprehensive media production for growing businesses",
      features: [
        "8 Videos per Month",
        "16 Professional Photos",
        "Advanced Video Editing",
        "Motion Graphics",
        "Color Grading",
        "Unlimited Revisions",
        "Priority Support",
        "Bi-weekly Strategy Calls"
      ],
      popular: true
    },
    {
      name: "Enterprise Media",
      price: "₹1,50,000",
      period: "/month",
      description: "Premium media production for large organizations",
      features: [
        "12+ Videos per Month",
        "25+ Professional Photos",
        "Professional Equipment",
        "On-location Shoots",
        "Live Streaming Setup",
        "Dedicated Production Team",
        "24/7 Support",
        "Weekly Production Meetings"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "1000+", label: "Videos Produced" },
    { number: "5000+", label: "Photos Captured" },
    { number: "200+", label: "Events Covered" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const equipment = [
    { name: "4K Cameras", description: "Professional cinema-grade cameras for stunning video quality" },
    { name: "Drone Technology", description: "Aerial photography and videography for unique perspectives" },
    { name: "Professional Lighting", description: "Studio-quality lighting equipment for perfect illumination" },
    { name: "Audio Equipment", description: "High-end microphones and recording equipment for crystal-clear sound" },
    { name: "Editing Suites", description: "Professional editing software and powerful workstations" },
    { name: "Stabilization Gear", description: "Gimbals and steadicams for smooth, professional footage" }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80"
            alt="Video production setup"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600/20 via-orange-600/10 to-transparent" />
          
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 10}%`,
                top: `${25 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-30, -50, -30],
                rotate: [0, 360, 0],
                scale: [0.8, 1.5, 0.8],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 7 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 4 === 0 && <Video className="h-6 w-6 text-red-400/60" />}
              {i % 4 === 1 && <Camera className="h-5 w-5 text-orange-400/60" />}
              {i % 4 === 2 && <Film className="h-4 w-4 text-yellow-400/60" />}
              {i % 4 === 3 && <Mic className="h-5 w-5 text-pink-400/60" />}
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
              <Video className="h-4 w-4" />
              Professional Media Production
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Media{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Production
              </span>
              <br />That Captivates
            </motion.h1>

            <motion.p
              className="mt-6 text-white/85 text-xl md:text-2xl leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Professional video production and photography services that bring your brand to life and engage your audience with compelling visual storytelling.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button
                asChild
                className="h-12 px-8 bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
              >
                <a href="/contact">Start Production</a>
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
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
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
              Why Choose Our Media Production Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine creative vision with technical expertise to produce high-quality media that tells your story effectively.
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
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-100 to-orange-100 text-primary mb-4">
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

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Media Production Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to delivery, we handle every aspect of your media production needs.
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
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-red-100 to-orange-100 text-primary mb-4">
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

      {/* Video Types Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Video Content
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Types of Videos We Produce
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create diverse video content tailored to your specific business needs and marketing goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTypes.map((video, index) => (
              <motion.div
                key={video.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{video.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {video.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Professional Equipment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              State-of-the-Art Production Equipment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use the latest professional equipment to ensure the highest quality output for your projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Media Production Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible media production packages designed to meet your content creation needs and budget.
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
                      <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
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
                        className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700' : ''}`}
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Stunning Visual Content?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with professional video production and photography that captivates your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold"
              >
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="/projects">View Our Work</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}