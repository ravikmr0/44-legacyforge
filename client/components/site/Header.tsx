import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-colors",
        scrolled ? "border-b border-border" : "border-b border-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Desktop Search */}
        <form
          action="/services"
          method="GET"
          className="hidden md:flex items-center relative w-56 lg:w-72 mr-2"
        >
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            name="q"
            placeholder="Search services..."
            aria-label="Search services"
            className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
          />
        </form>

        <div className="flex items-center gap-2">
          {/* Desktop CTA Button */}
          <Button
            asChild
            className="hidden sm:inline-flex bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow-md"
          >
            <a href="/contact">Book Consultation</a>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-4 border-b">
                  <a href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <img
                      src="/favicon.ico"
                      alt="LegacyForge logo"
                      className="h-6 w-6 rounded-md object-cover shadow-sm"
                    />
                    <span className="font-extrabold tracking-tight">
                      LegacyForge
                    </span>
                  </a>
                </div>

                {/* Mobile Search */}
                <div className="py-4 border-b">
                  <form action="/services" method="GET" className="relative">
                    <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="search"
                      name="q"
                      placeholder="Search services..."
                      aria-label="Search services"
                      className="h-10 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </form>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-4">
                  <div className="space-y-1">
                    {nav.map((n) => (
                      <a
                        key={n.href}
                        href={n.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                      >
                        {n.label}
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="pt-4 border-t">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow-md"
                  >
                    <a href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Book Consultation
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
