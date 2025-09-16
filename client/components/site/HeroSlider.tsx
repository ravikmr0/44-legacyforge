import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { src: string; alt: string };

type HeroSliderProps = {
  images: Slide[];
  intervalMs?: number;
  options?: EmblaOptionsType;
  children?: React.ReactNode; // overlay content
};

export function HeroSlider({
  images,
  intervalMs = 5000,
  options,
  children,
}: HeroSliderProps) {
  const opts: EmblaOptionsType = useMemo(
    () => ({ loop: true, duration: 24, align: "start", ...options }),
    [options],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(opts);
  const timer = useRef<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const play = useCallback(() => {
    if (!emblaApi || hovered) return;
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, intervalMs);
  }, [emblaApi, hovered, intervalMs]);

  const stop = useCallback(() => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    play();
    const selectHandler = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", selectHandler);
    return () => {
      stop();
      emblaApi.off("select", selectHandler as any);
    };
  }, [emblaApi, play, stop]);

  const onMouseEnter = () => {
    setHovered(true);
    stop();
  };
  const onMouseLeave = () => {
    setHovered(false);
    play();
  };

  const scrollTo = (idx: number) => emblaApi?.scrollTo(idx);

  const Prev = () => (
    <button
      aria-label="Previous slide"
      onClick={() => emblaApi?.scrollPrev()}
      className="group absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[#0e0e0e] shadow backdrop-blur hover:bg-white"
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  );

  const Next = () => (
    <button
      aria-label="Next slide"
      onClick={() => emblaApi?.scrollNext()}
      className="group absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[#0e0e0e] shadow backdrop-blur hover:bg-white"
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  );

  return (
    <section
      className="relative isolate overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-[64vh] min-h-[520px] w-full">
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {images.map((img, i) => (
              <div className="relative min-w-0 flex-[0_0_100%]" key={i}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,28,0.55)_0%,rgba(10,12,28,0.55)_40%,rgba(10,12,28,0.35)_70%,rgba(10,12,28,0.15)_100%)]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f0d1d00] via-[#5170FF22] to-[#5D17EB22]" />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0">
          <div className="container h-full flex items-center justify-center">
            <div className="max-w-3xl text-center space-y-6 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
              {children}
            </div>
          </div>
        </div>

        {/* Controls */}
        <Prev />
        <Next />

        {/* Dots */}
        <div className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${selectedIndex === i ? "bg-white shadow-lg scale-110" : "bg-white/60 hover:bg-white/90"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
