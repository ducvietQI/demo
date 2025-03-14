"use client";

import { BannerSection, HeroSection, NewsSection } from "@/components";
import { onDestroy, usePageScroller } from "@furman1331/page-scroller";
import { useEffect, useRef } from "react";

export default function Home() {
  const { initPageScroller } = usePageScroller();
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current === false) {
      initPageScroller("#page-scroller");
      isInitialized.current = true;
    }

    return () => {
      if (isInitialized.current) {
        try {
          onDestroy?.();
        } catch (error) {
          console.error("Error destroying page scroller:", error);
        }
        isInitialized.current = false;
      }
    };
  }, []);

  return (
    <div id="page-scroller">
      <section className="page-scroller__section">
        <BannerSection />
      </section>
      <section className="page-scroller__section">
        <NewsSection />
      </section>
      <section className="page-scroller__section">
        <HeroSection />
      </section>
      <section className="page-scroller__section">leuleu</section>
    </div>
  );
}
