import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const nav = [
  { label: "Services", href: "/services" },
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
        <a href="#top" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#5170FF] to-[#5D17EB] shadow-sm" />
          <span className="font-extrabold tracking-tight text-lg">LegacyForge</span>
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

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white shadow-md">
            <a href="#contact">Book Consultation</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
