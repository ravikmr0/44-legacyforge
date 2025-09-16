import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-muted-foreground">Tell us about your goals and we’ll get in touch.</p>
      </div>
      <div className="mx-auto mt-10 max-w-2xl">
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="grid gap-4">
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input id="name" name="name" required className="h-11 rounded-md border bg-background px-3 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="h-11 rounded-md border bg-background px-3 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={5} required className="rounded-md border bg-background px-3 py-2 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring" />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" className="h-11 px-6 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow">Send message</Button>
            <a href="mailto:hello@legacyforge.marketing?subject=Consultation%20Request" className="text-sm text-muted-foreground hover:text-foreground underline">Or email us directly</a>
          </div>
        </form>
      </div>
    </div>
  );
}
