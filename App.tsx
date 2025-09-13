


import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import ValueBullets from './components/ValueBullets';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import WhatYouGet from './components/WhatYouGet';
import CommunityCreations from './components/CommunityCreations';

// Custom hook for observing intersection
// FIX: Update options type to include `triggerOnce` and handle it within the hook
// to prevent passing an invalid property to the IntersectionObserver constructor.
const useIntersectionObserver = (options: IntersectionObserverInit & { triggerOnce?: boolean }) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<HTMLElement | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    const { triggerOnce, ...observerOptions } = options;

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntry(entry);
        if (triggerOnce && observer.current) {
          observer.current.unobserve(entry.target);
        }
      }
    }, observerOptions);

    const { current: currentObserver } = observer;
    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, options]);

  // Use `as const` to ensure a tuple type is inferred for consumers.
  return [setNode, entry] as const;
};


const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      // FIX: Use the returned state setter as a callback ref directly.
      // The incorrect type assertion is removed, fixing the type error.
      ref={ref}
      className={`${className || ''} transition-all duration-700 ${entry ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      {children}
    </div>
  );
};


const App: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyVisible(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  return (
    <main>
      <Hero ref={heroRef} />
      <AnimatedSection><ValueBullets /></AnimatedSection>
      <AnimatedSection><HowItWorks /></AnimatedSection>
      <AnimatedSection><WhatYouGet /></AnimatedSection>
      <AnimatedSection><SocialProof /></AnimatedSection>
      <AnimatedSection><CommunityCreations /></AnimatedSection>
      <AnimatedSection><FinalCTA /></AnimatedSection>
      <Footer />
      <StickyCTA isVisible={isStickyVisible} />
    </main>
  );
};

export default App;