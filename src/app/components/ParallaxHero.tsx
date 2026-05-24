import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "./figma/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxHeroProps {
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  height?: string;
  overlay?: boolean;
}

export function ParallaxHero({
  image,
  alt,
  title,
  subtitle,
  height = "60vh",
  overlay = true,
}: ParallaxHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      // Only parallax the image, never fade out the H1/content
      gsap.to(imageRef.current, {
        yPercent: 28,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Entrance animation only — no fade-out on scroll
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height }}
    >
      <div ref={imageRef} className="absolute inset-0 scale-110">
        <ImageWithFallback
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
        )}
      </div>

      <div ref={contentRef} className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 tracking-wide drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
