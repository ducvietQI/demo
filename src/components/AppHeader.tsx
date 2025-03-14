"use client";

import { useState, useEffect } from "react";
import { getActiveSection } from "@furman1331/page-scroller";
import Image from "next/image";
import clsx from "clsx";

const AppHeader = () => {
  const [activeSection, setActiveSection] = useState(getActiveSection());

  useEffect(() => {
    const checkActiveSection = () => {
      const currentSection = getActiveSection();
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    const interval = setInterval(checkActiveSection, 300);

    return () => clearInterval(interval);
  }, [activeSection]);

  const isHeader = activeSection > 0;

  return (
    <header
      className={clsx(
        "fixed w-screen z-20 px-[7.2rem] transition-all duration-500 delay-100 flex flex-row justify-between items-center overflow-hidden",
        "before:absolute before:inset-0 before:bg-white before:transition-transform before:duration-500 before:ease-in-out before:z-[-1]",
        isHeader
          ? "before:translate-y-0 h-[60px] shadow-[10px_10px_40px_rgba(0,0,0,0.1)]"
          : "before:-translate-y-full h-[120px]"
      )}
    >
      <h1 className={clsx({ "custom-logo": !isHeader })}>
        <Image
          src="/images/BOHO.png"
          width={150}
          height={147}
          alt="BOHO Logo"
          priority
        />
      </h1>

      <nav
        className={clsx(
          "h-full flex flex-row gap-[5.6rem] text-2xl items-center",
          isHeader ? "text-[#404040] font-normal" : "text-white font-medium"
        )}
      >
        {midHeader.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="nav-link"
          >
            {item}
          </a>
        ))}
      </nav>

      <div
        className={clsx(
          "text-[1.4rem]",
          isHeader ? "text-[#404040] font-normal" : "text-white font-medium"
        )}
      >
        VI EN
      </div>
    </header>
  );
};

export default AppHeader;

const midHeader = [
  "Dịch vụ",
  "Về chúng tôi",
  "Con người",
  "Blog",
  "Tuyển dụng",
  "Liên hệ",
];
