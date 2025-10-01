import { Mail, Linkedin, Facebook, Instagram, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();

  const services = [
    { name: "Paid Advertising", href: "/services" },
    { name: "Website Development", href: "/services" },
    { name: "SEO Optimization", href: "/services" },
    { name: "Social Media Management", href: "/services" },
    { name: "Content Writing & Graphics", href: "/services" },
    { name: "Creative Branding", href: "/services" },
    { name: "Media Production", href: "/services" },
  ];

  const company = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/why-us" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/legacyforge-marketing-pvt-ltd/posts/?feedView=all",
      icon: Linkedin,
      color: "hover:bg-blue-600"
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61574885485332",
      icon: Facebook,
      color: "hover:bg-blue-700"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/legacyforge.marketing/",
      icon: Instagram,
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600"
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-slate-50 border-t border-border">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent pointer-events-none" />

      {/* CTA Section */}
      <div className="relative container py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-[1px] shadow-2xl"
        >
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl" />
            </div>

            <div className="relative grid items-center gap-6 md:grid-cols-12">
              <div className="md:col-span-8 space-y-3">
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                  Let's Grow Your Business Together
                </h3>
                <p className="text-white/80 text-lg max-w-2xl">
                  Book a free consultation and discover how we can accelerate your business growth with data-driven marketing strategies.
                </p>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <a href="/" className="inline-flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
                <img
                  src="/favicon.ico"
                  alt="LegacyForge logo"
                  className="relative h-10 w-10 rounded-lg object-cover shadow-lg"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                LegacyForge
              </span>
            </a>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              We help businesses reach their full potential through smart digital marketing solutions. From lead generation to brand building, we turn clicks into real results.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@legacyforgegroup.com"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-blue-600 transition-colors group"
              >
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@legacyforgegroup.com</span>
              </a>

              <a
                href="tel:+919599782925"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-blue-600 transition-colors group"
              >
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 9599782925</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all duration-300 hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Services
            </h4>
            <nav className="flex flex-col gap-3">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>{service.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Company
            </h4>
            <nav className="flex flex-col gap-3">
              {company.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Stay in the Loop
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for marketing insights and industry updates.
            </p>

            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              className="space-y-3"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <div className="relative">
                <input
                  aria-label="Email address"
                  className="h-11 w-full rounded-lg border-2 border-border bg-background px-4 pr-11 text-sm outline-none transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all hover:scale-105"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Join 5,000+ subscribers. Unsubscribe anytime.
              </p>
            </form>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Available for consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-border bg-slate-50/50">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p className="text-center md:text-left">
              © {year} All rights reserved - <span className="font-semibold text-foreground">Legacyforge Marketing Pvt. Ltd.</span>
            </p>

            <div className="flex items-center gap-6">
              <a href="/privacy" className="hover:text-blue-600 transition-colors text-xs">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-blue-600 transition-colors text-xs">
                Terms of Service
              </a>
              <div className="flex items-center gap-1 text-xs">
                <span>Made with</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span>in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
