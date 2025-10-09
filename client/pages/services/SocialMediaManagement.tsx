import { CheckCircle2, Users, Heart, MessageCircle, Share2, Camera, Video, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function SocialMediaManagement() {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Building",
      description: "Build and nurture engaged communities around your brand across all social platforms."
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Content Creation",
      description: "Professional visual content, graphics, and videos tailored for each social platform."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Insights",
      description: "Detailed performance tracking and insights to optimize your social media strategy."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Engagement",
      description: "Active community management with timely responses and engagement strategies."
    }
  ];

  const platforms = [
    {
      name: "Facebook",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
      description: "Build communities and drive engagement with targeted content and advertising."
    },
    {
      name: "Instagram",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      description: "Visual storytelling through posts, stories, reels, and IGTV content."
    },
    {
      name: "LinkedIn",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      description: "Professional networking and B2B content marketing strategies."
    },
    {
      name: "Twitter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
      description: "Real-time engagement and thought leadership content."
    },
    {
      name: "YouTube",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png",
      description: "Video content creation, optimization, and channel management."
    },
    {
      name: "TikTok",
      icon: "https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon_black.png",
      description: "Viral short-form video content and trend-based marketing."
    }
  ];

  const services = [
    {
      title: "Content Strategy & Planning",
      description: "Develop comprehensive content calendars and strategies aligned with your business goals.",
      features: ["Content Calendar", "Brand Voice Development", "Hashtag Strategy", "Posting Schedule"]
    },
    {
      title: "Visual Content Creation",
      description: "Professional graphics, photos, and videos designed to engage your target audience.",
      features: ["Custom Graphics", "Photo Editing", "Video Production", "Story Templates"]
    },
    {
      title: "Community Management",
      description: "Active engagement with your audience through comments, messages, and community building.",
      features: ["Comment Management", "DM Responses", "Community Building", "Crisis Management"]
    },
    {
      title: "Social Media Advertising",
      description: "Targeted advertising campaigns to reach new audiences and drive conversions.",
      features: ["Ad Campaign Setup", "Audience Targeting", "A/B Testing", "Performance Optimization"]
    }
  ];

  const packages = [
    {
      name: "Starter Social",
      price: "₹20,000",
      period: "/month",
      description: "Perfect for small businesses starting their social media journey",
      features: [
        "2 Social Media Platforms",
        "12 Posts per Month",
        "Basic Graphics Design",
        "Community Management",
        "Monthly Analytics Report",
        "Content Calendar",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional Social",
      price: "₹40,000",
      period: "/month",
      description: "Comprehensive social media management for growing businesses",
      features: [
        "4 Social Media Platforms",
        "20 Posts per Month",
        "Custom Graphics & Videos",
        "Stories & Reels Creation",
        "Advanced Community Management",
        "Bi-weekly Analytics Reports",
        "Hashtag Research",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise Social",
      price: "₹80,000",
      period: "/month",
      description: "Full-scale social media management for large businesses",
      features: [
        "All Platforms Management",
        "30+ Posts per Month",
        "Professional Video Production",
        "Influencer Collaborations",
        "Social Media Advertising",
        "Weekly Strategy Calls",
        "Dedicated Account Manager",
        "24/7 Support"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "500%", label: "Average Engagement Increase" },
    { number: "200%", label: "Follower Growth Rate" },
    { number: "300+", label: "Brands Managed" },
    { number: "24/7", label: "Community Monitoring" }
  ];

  const contentTypes = [
    { icon: <Camera className="h-8 w-8" />, title: "Photography", description: "Professional product and lifestyle photography" },
    { icon: <Video className="h-8 w-8" />, title: "Video Content", description: "Engaging videos, reels, and stories" },
    { icon: <MessageCircle className="h-8 w-8" />, title: "Copywriting", description: "Compelling captions and social copy" },
    { icon: <Share2 className="h-8 w-8" />, title: "User-Generated Content", description: "Curated content from your community" }
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80"
            alt="Social media management"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-600/20 via-purple-600/10 to-transparent" />
          
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + i * 10}%`,
                top: `${25 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                rotate: [0, 360, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 4 === 0 && <Heart className="h-6 w-6 text-pink-400/60" />}
              {i % 4 === 1 && <MessageCircle className="h-5 w-5 text-blue-400/60" />}
              {i % 4 === 2 && <Share2 className="h-4 w-4 text-green-400/60" />}
              {i % 4 === 3 && <Users className="h-5 w-5 text-purple-400/60" />}
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
              <Users className="h-4 w-4" />
              Social Media Experts
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Social Media{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Management
              </span>
              <br />That Engages
            </motion.h1>

            <motion.p
              className="mt-6 text-white/85 text-xl md:text-2xl leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Build meaningful connections with your audience through strategic social media management and engaging content creation.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button
                asChild
                className="h-12 px-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold"
              >
                <a href="/contact">Start Growing</a>
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
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
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

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Platforms We Manage
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multi-Platform Social Media Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We manage your presence across all major social media platforms with platform-specific strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-100 to-purple-100">
                      <img src={platform.icon} alt={platform.name} className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-center">
                      {platform.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-pink-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Content Creation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engaging Content That Converts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create diverse content types that resonate with your audience and drive engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((content, index) => (
              <motion.div
                key={content.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 text-primary mx-auto mb-4">
                      {content.icon}
                    </div>
                    <CardTitle className="text-xl">{content.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {content.description}
                    </CardDescription>
                  </CardContent>
                </Card>
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
              Why Choose Our Social Media Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine creative content with data-driven strategies to build engaged communities around your brand.
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
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 text-primary mb-4">
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Social Media Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy development to content creation and community management, we handle every aspect of your social media presence.
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
      <section id="packages" className="py-20 bg-gradient-to-br from-slate-50 to-pink-50">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Social Media Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible social media management packages designed to grow your online presence and engagement.
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
                      <Badge className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
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
                        className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700' : ''}`}
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Social Media Presence?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create engaging content and build meaningful connections with your audience across all social platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 font-semibold"
              >
                <a href="/contact">Start Social Strategy</a>
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