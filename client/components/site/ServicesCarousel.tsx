import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ServiceItem = {
  title: string;
  desc: string;
  image: string;
  ctaHref?: string;
  ctaLabel?: string;
};

type Props = {
  items: ServiceItem[];
  intervalMs?: number;
  options?: EmblaOptionsType;
};

export function ServicesCarousel({ items, intervalMs = 4500, options }: Props) {
  const opts: EmblaOptionsType = useMemo(
    () => ({ loop: true, align: "start", ...options }),
    [options],
  );
  const [emblaRef, embla] = useEmblaCarousel(opts);
  const [selected, setSelected] = useState(0);
  const timer = useRef<number | null>(null);
  const [hovered, setHovered] = useState(false);

  const play = useCallback(() => {
    if (!embla || hovered) return;
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => embla?.scrollNext(), intervalMs);
  }, [embla, hovered, intervalMs]);

  const stop = useCallback(() => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
  }, []);

  useEffect(() => {
    if (!embla) return;
    play();
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    return () => {
      stop();
      embla.off("select", onSelect as any);
    };
  }, [embla, play, stop]);

  const prev = () => embla?.scrollPrev();
  const next = () => embla?.scrollNext();

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setHovered(true);
        stop();
      }}
      onMouseLeave={() => {
        setHovered(false);
        play();
      }}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((s, i) => (
            <article
              key={i}
              className="min-w-0 shrink-0 basis-[85%] sm:basis-[55%] md:basis-[38%] lg:basis-[30%] xl:basis-[24%] overflow-hidden rounded-xl border bg-card shadow-sm"
            >
              <div className="relative aspect-[16/10]">
                <img
                  src={s.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-semibold text-base">{s.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {s.desc}
                </p>
                {s.ctaHref && (
                  <a
                    href={s.ctaHref}
                    className="inline-flex mt-2 h-9 items-center justify-center rounded-md bg-gradient-to-r from-[#5170FF] to-[#5D17EB] px-3 text-xs font-medium text-white shadow hover:from-[#3C72FC] hover:to-[#5D17EB]"
                  >
                    {s.ctaLabel ?? "Learn more"}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute -left-2 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#0e0e0e] shadow hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute -right-2 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#0e0e0e] shadow hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${selected === i ? "bg-[#5170FF]" : "bg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
}
