export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background/80">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div className="space-y-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 via-amber-500 to-rose-500" />
            <span className="font-extrabold tracking-tight text-lg">LegacyForge</span>
          </a>
          <p className="text-sm text-muted-foreground max-w-sm">
            Smarter marketing and IT solutions to help you forge a lasting legacy.
          </p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Explore</p>
          <nav className="flex flex-col text-sm gap-2 text-muted-foreground">
            <a className="hover:text-foreground" href="#services">Services</a>
            <a className="hover:text-foreground" href="#about">About</a>
            <a className="hover:text-foreground" href="#why">Why Us</a>
            <a className="hover:text-foreground" href="#contact">Contact</a>
          </nav>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Get in touch</p>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Email: <a className="underline hover:text-foreground" href="mailto:hello@legacyforge.marketing">hello@legacyforge.marketing</a></p>
            <p>Hours: Mon–Fri, 9am–6pm</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {year} LegacyForge Marketing. All rights reserved.
      </div>
    </footer>
  );
}
