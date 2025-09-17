import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5170FF22] via-[#5D17EB11] to-transparent" />
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB]" />
              Get in touch
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">Let’s build your legacy</h1>
            <p className="mt-4 text-muted-foreground text-lg">Tell us about your goals. We’ll respond within one business day.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Form */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border p-6 md:p-8">
              <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="grid gap-4">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden"><label>Don’t fill this out: <input name="bot-field" /></label></p>

                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Full name</label>
                  <input id="name" name="name" required className="h-11 rounded-md border bg-background px-3 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
                </div>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" name="email" type="email" required className="h-11 rounded-md border bg-background px-3 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label>
                    <input id="phone" name="phone" className="h-11 rounded-md border bg-background px-3 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
                  <textarea id="message" name="message" rows={6} required className="rounded-md border bg-background px-3 py-2 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
                </div>
                <div className="flex items-center gap-3">
                  <Button type="submit" className="h-11 px-6 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow">Send message</Button>
                  <a href="mailto:hello@legacyforge.marketing?subject=Consultation%20Request" className="text-sm text-muted-foreground hover:text-foreground underline">Or email us directly</a>
                </div>
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-2xl border p-6">
              <p className="font-semibold">Contact information</p>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#5170FF]" /><a className="underline hover:text-foreground" href="mailto:hello@legacyforge.marketing">hello@legacyforge.marketing</a></div>
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#5170FF]" /><span>+1 (555) 000-0000</span></div>
                <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-[#5170FF]" /><span>Mon–Fri, 9am–6pm</span></div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-[#5170FF] to-[#5D17EB] p-[1px]">
              <div className="relative rounded-2xl">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop" alt="Office location" className="h-56 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-md bg-white/90 p-2 text-sm text-[#0e0e0e] shadow">
                  <MapPin className="h-4 w-4" />
                  <span>LegacyForge HQ — 123 Market St, San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
