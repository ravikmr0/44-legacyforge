import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
          <Button
            asChild
            className="hidden sm:inline-flex bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow-md"
          >
            <a href="/contact">Book Consultation</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
