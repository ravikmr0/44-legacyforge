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
import { ChevronLeft, ChevronRight, Play, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export type Slide = { src: string; alt: string };

type HeroSliderProps = {
  images: Slide[];
  intervalMs?: number;
  options?: EmblaOptionsType;
  children?: React.ReactNode; // overlay content
};

export function HeroSlider({
  images,
  intervalMs = 6000,
  options,
  children,
}: HeroSliderProps) {
  const opts: EmblaOptionsType = useMemo(
    () => ({ loop: true, duration: 30, align: "start", ...options }),
    [options],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(opts);
  const timer = useRef<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect(emblaApi);
    play();
    
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
    
    return () => {
      stop();
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect, play, stop]);

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
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Previous slide"
      onClick={() => emblaApi?.scrollPrev()}
      disabled={!canScrollPrev}
      className="group absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-900 shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
    >
      <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 group-hover:translate-x-[-2px] transition-transform" />
    </motion.button>
  );

  const Next = () => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Next slide"
      onClick={() => emblaApi?.scrollNext()}
      disabled={!canScrollNext}
      className="group absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-900 shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
    >
      <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 group-hover:translate-x-[2px] transition-transform" />
    </motion.button>
  );

  return (
    <section
      className="relative isolate overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-[85vh] lg:h-[90vh] min-h-[600px] w-full">
        {/* Background Slider */}
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {images.map((img, i) => (
              <div className="relative min-w-0 flex-[0_0_100%]" key={i}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Enhanced gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/30" />
                <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-[#5D17EB]/20" />
              </div>
            ))}
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 3) * 25}%`,
                width: `${6 + i * 2}px`,
                height: `${6 + i * 2}px`,
              }}
              animate={{
                y: [-20, -40, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.7, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Geometric shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-6 h-6 border-2 border-white/20 rotate-45"
            animate={{ rotate: [45, 405, 45] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-8 h-8 border border-white/15 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        {/* Main Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-6 lg:space-y-8"
              >
                {/* Trust indicators */}
                <motion.div 
                  className="flex items-center gap-4 flex-wrap"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white/90">5.0 Rating</span>
                  </div>
                  <div className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-green-400 inline-block mr-2 animate-pulse" />
                    50+ Projects Delivered
                  </div>
                </motion.div>

                {/* Main heading */}
                <div className="space-y-4">
                  <motion.h1 
                    className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[1.1]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    Your Partner in{" "}
                    <span className="relative">
                      <span className="bg-gradient-to-r from-[#5170FF] to-[#5D17EB] bg-clip-text text-transparent">
                        Digital Marketing
                      </span>
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                    </span>
                  </motion.h1>
                  
                  <motion.h2 
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white/90 leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    & Business Growth
                  </motion.h2>
                </div>

                {/* Subtitle */}
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.0 }}
                >
                  Transform your business with data-driven digital marketing strategies that deliver measurable results and sustainable growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-3 h-14 px-8 text-lg font-semibold bg-gradient-to-r from-[#5170FF] to-[#5D17EB] hover:from-[#3C72FC] hover:to-[#5D17EB] text-white rounded-full shadow-2xl hover:shadow-[#5170FF]/25 transition-all duration-300"
                  >
                    Book Free Consultation
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-3 h-14 px-8 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm transition-all duration-300"
                  >
                    <Play className="h-4 w-4" />
                    Explore Services
                  </motion.a>
                </motion.div>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 lg:pt-12"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.4 }}
                >
                  {[
                    // { number: "300%", label: "Average Lead Growth" },
                    // { number: "50+", label: "Projects Completed" },
                    // { number: "98%", label: "Client Satisfaction" },
                    // { number: "₹2Cr+", label: "Revenue Generated" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-white/70">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <Prev />
        <Next />

        {/* Enhanced Dots Indicator */}
        <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {images.map((_, i) => (
            <motion.button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`relative transition-all duration-300 ${
                selectedIndex === i 
                  ? "w-8 h-3 bg-white rounded-full shadow-lg" 
                  : "w-3 h-3 bg-white/60 hover:bg-white/90 rounded-full"
              }`}
            >
              {selectedIndex === i && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#5170FF] to-[#5D17EB] rounded-full"
                  layoutId="activeSlide"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div 
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}