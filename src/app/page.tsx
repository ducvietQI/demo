"use client";

import { BannerSection } from "@/components";
import { usePageScroller } from "@furman1331/page-scroller";
import { useEffect } from "react";

export default function Home() {
  const { initPageScroller } = usePageScroller();

  useEffect(() => {
    setTimeout(() => {
      initPageScroller("#page-scroller");
    }, 0);
  }, [initPageScroller]);

  return (
    <div id="page-scroller">
      <section className="page-scroller__section">
        <BannerSection />
      </section>
      <section className="page-scroller__section">leuleu</section>
    </div>
  );
}
