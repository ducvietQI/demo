"use client";

import { useState, useEffect, useMemo } from "react";
import { getActiveSection } from "@furman1331/page-scroller";
import Image from "next/image";
import clsx from "clsx";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const navItems = [
  { key: "services", link: "#services" },
  { key: "about", link: "#about" },
  { key: "people", link: "#people" },
  { key: "blog", link: "#blog" },
  { key: "careers", link: "#careers" },
  { key: "contact", link: "#contact" },
];

const AppHeader = () => {
  const appLayout = useTranslations("AppLayout");
  const router = useRouter();
  const locale = useLocale();

  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    const checkActiveSection = () => {
      setActiveSection(getActiveSection());
    };
    const interval = setInterval(checkActiveSection, 300);

    return () => clearInterval(interval);
  }, []);

  const isHeader = useMemo(
    () => activeSection !== null && activeSection > 0,
    [activeSection]
  );

  const changeLocale = (newLocale: string) => {
    Cookies.set("NEXT_LOCALE", newLocale, { path: "/", expires: 365 });
    router.refresh();
  };

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
        {navItems.map((item) => (
          <a key={item.key} href={item.link}>
            {appLayout(`nav.${item.key}`)}
          </a>
        ))}
      </nav>

      <div
        className={clsx(
          "text-[1.4rem] flex flex-row gap-4",
          isHeader ? "text-[#404040] font-normal" : "text-white font-medium"
        )}
      >
        <a
          onClick={() => changeLocale("vi")}
          className={clsx(
            "w-fit p-0 cursor-pointer",
            locale === "vi" && "border-b-2 border-yellow-500"
          )}
        >
          VI
        </a>
        <a
          onClick={() => changeLocale("en")}
          className={clsx(
            "w-fit p-0 cursor-pointer",
            locale === "en" && "border-b-2 border-yellow-500"
          )}
        >
          EN
        </a>
      </div>
    </header>
  );
};

export default AppHeader;
