import { Mail, Twitter, Linkedin, Facebook, Instagram, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background/80">
      {/* CTA ribbon */}
      <div className="container py-10">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[#5170FF] to-[#5D17EB] p-[1px]">
          <div className="relative rounded-2xl bg-background/80 p-6 md:p-10 backdrop-blur">
            <div className="grid items-center gap-6 md:grid-cols-12">
              <div className="md:col-span-8">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Lets Grow Your Business Together
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Book a free consultation and discuss how we can accelerate your business growth.
                </p>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-[#5170FF] to-[#5D17EB] px-6 text-white shadow hover:from-[#3C72FC] hover:to-[#5D17EB]"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container pb-10 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <a href="/" className="flex items-center gap-2">
          <img
            src="/favicon.ico"
            alt="LegacyForge logo"
            className="h-8 w-8 rounded-md object-cover shadow-sm"
          />
          <span className="font-extrabold tracking-tight text-lg">
            LegacyForge
          </span>
        </a>
          <p className="text-sm text-muted-foreground max-w-sm">
            At Legacyforge, we help your business reach its full potential through smart digital marketing solutions. From lead generation to brand building, we combine creativity, technology, and strategy to turn clicks into real results for your business.
          </p>
        </div>

        <div>
          <p className="font-semibold">Services</p>
          <nav className="mt-3 flex flex-col text-sm gap-2 text-muted-foreground">
            <a className="hover:text-foreground" href="/services">
              PAID ADVERTISING
            </a>
            <a className="hover:text-foreground" href="/services">
              WEBSITE DEVELOPMENT
            </a>
            <a className="hover:text-foreground" href="/services">
              SOCIAL MEDIA MANAGEMENT
            </a>
            <a className="hover:text-foreground" href="/services">
              SEO OPTIMIZATION
            </a>
            <a className="hover:text-foreground" href="/services">
              SALES SUPPORT
            </a>
            <a className="hover:text-foreground" href="/services">
              CONTENT WRITING & DESIGN
            </a>
            <a className="hover:text-foreground" href="/services">
              CREATIVE BRANDING
            </a>
            <a className="hover:text-foreground" href="/services">
              MEDIA PRODUCTION
            </a>
          </nav>
        </div>

        <div>
          <p className="font-semibold">Company</p>
          <nav className="mt-3 flex flex-col text-sm gap-2 text-muted-foreground">
            <a className="hover:text-foreground" href="/about">
              About Us
            </a>
            <a className="hover:text-foreground" href="/why-us">
              Why Us
            </a>
            <a className="hover:text-foreground" href="/projects">
              Projects
            </a>
            <a className="hover:text-foreground" href="/blog">
              Blog
            </a>
            <a className="hover:text-foreground" href="/contact">
              Contact
            </a>
          </nav>
        </div>

        <div>
          <p className="font-semibold">Stay in the loop</p>
          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            className="mt-3 grid grid-cols-[1fr_auto] gap-2"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <input
              aria-label="Email address"
              className="h-10 rounded-md border bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
            {/*<button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#5170FF] to-[#5D17EB] px-4 text-sm font-medium text-white shadow hover:from-[#3C72FC] hover:to-[#5D17EB]"
            >
              Sub
            </button>*/}
          </form>
          <div className="mt-4 text-sm text-muted-foreground">
            Email:{" "}
            <a
              className="underline hover:text-foreground"
              href="mailto:info@legacyforgegroup.com"
            >
              info@legacyforgegroup.com
            </a>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Phone:{" "}
            <a
              className="underline hover:text-foreground"
              href="tel:+918860575836"
            >
              +91 8860575836
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6">
        <div className="container flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <p>© {year} LegacyForge Marketing. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              aria-label="Email"
              href="mailto: info@legacyforgegroup.com"
              className="hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              aria-label="Phone"
              href="tel:+918860575836" // replace with the real phone number
              className="hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
            </a>
            {/* <a aria-label="Twitter" href="#" className="hover:text-foreground">
              <Twitter className="h-4 w-4" />
            </a> */}
            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/legacyforge-marketing-pvt-ltd/posts/?feedView=all" className="hover:text-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
            <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61574885485332#" className="hover:text-foreground">
              <Facebook className="h-4 w-4" />
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/legacyforge.marketing/" className="hover:text-foreground">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
