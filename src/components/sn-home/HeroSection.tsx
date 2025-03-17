"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HeroSection = () => {
  const t = useTranslations("HeroSection");

  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      {/* Background Decoration */}
      <div className="absolute w-[86.8%] pt-[86.8%] bottom-[-95%] left-[-48%] spiner-decor">
        <Image
          src="/images/sec-middle-decor.png"
          alt="spiner"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="container h-full pt-28 pb-4 relative text-[#404040]">
        <div className="flex max-w-[1230px] w-full h-3/4 justify-end z-20">
          <div className="w-9/12 h-full flex flex-row items-center gap-20">
            {/* Left Section */}
            <div className="h-fit w-1/2 flex flex-col gap-10">
              <h3 className="text-6xl font-bold">
                {t("title1")} <br /> {t("title2")}
              </h3>
              <p className="text-[1.4rem] font-normal">{t("desc1")}</p>
            </div>

            {/* Right Section */}
            <div className="h-fit w-1/2 flex flex-col gap-10 since-wrap">
              <h3 className="text-6xl font-bold">{t("title3")}</h3>
              <p className="text-[1.4rem] font-normal">{t("desc2")}</p>

              {/* Button */}
              <div className="relative py-4 px-6 w-fit">
                <a
                  href="http://bohodecor.vn/about-us/"
                  target="_blank"
                  className="btn m-top"
                >
                  <span className="text txt-split no-delay">{t("btn")}</span>
                  <svg
                    className="line"
                    height="100%"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect className="shape" height="100%" width="100%"></rect>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
