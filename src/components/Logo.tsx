import Image from "next/image";
import { useState, useEffect } from "react";

const Logo = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);

    setIsMounted(true);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-transform duration-1000 ease-in-out ${
        isMounted ? "translate-x-0" : "translate-x-12"
      }`}
    >
      <div className="flex flex-row gap-5">
        <div className="load-logo-wrapper" style={{ width: 50 }}>
          <div
            className={`load-slide-right ${startAnimation ? "visible" : ""}`}
          >
            <Image
              src="/assets/letter-logo-1.svg"
              width={50}
              height={79}
              alt="logo-1"
            />
          </div>
        </div>

        <div className="load-logo-inner h-[79px] w-20">
          <Image src="/assets/letter-logo-2.svg" alt="logo-2" fill />
        </div>

        <div className="load-logo-wrapper" style={{ width: 57 }}>
          <div className={`load-slide-left ${startAnimation ? "visible" : ""}`}>
            <Image
              width={57}
              height={79}
              src="/assets/letter-logo-3.svg"
              alt="logo-3"
            />
          </div>
        </div>

        <div className="load-logo-wrapper" style={{ width: 80 }}>
          <div className={`load-slide-left ${startAnimation ? "visible" : ""}`}>
            <Image
              width={80}
              height={79}
              src="/assets/letter-logo-4.svg"
              alt="logo-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
