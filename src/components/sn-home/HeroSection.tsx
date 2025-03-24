"use client";
import Image from "next/image";

const HeroSection = () => {
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
              <h3 className="text-6xl font-bold"></h3>
            </div>

            {/* Right Section */}
            <div className="h-fit w-1/2 flex flex-col gap-10 since-wrap">
              {/* Button */}
              <div className="relative py-4 px-6 w-fit">
                <a
                  href="http://bohodecor.vn/about-us/"
                  target="_blank"
                  className="btn m-top"
                >
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
