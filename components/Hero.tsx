import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero Section"
      className="relative min-h-[85vh] flex flex-col items-center justify-center px-8 py-24 text-center bg-leadNavy text-white"
    >
      <div
        className={`relative z-10 max-w-4xl transition-opacity transition-transform duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="mb-6 text-4xl md:text-5xl font-bold">
          Empowering Voices
          <span className="block mt-4 text-leadGold text-xl md:text-2xl">
            Your Platform for Change
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-white/80">
          We ignite leadership and drive systemic change for those sidelined by bureaucracy and gendered systems.
        </p>
        <div className="flex gap-4 justify-center mt-8 flex-wrap">
          <Link href="/join">
            <Button variant="ctaPrimary">Join Movement</Button>
          </Link>
          <Link href="/learn">
            <Button variant="ctaSecondary">Learn More</Button>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-leadNavyDark/80 z-0" />
    </section>
  );
}
