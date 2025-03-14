"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative  w-full h-full overflow-hidden bg-white">
      <div className="absolute w-[86.8%] pt-[86.8%] bottom-[-95%] left-[-48%] spiner-decor">
        <Image
          src="/images/sec-middle-decor.png"
          alt="spiner"
          fill
          className="object-cover"
        />
      </div>

      <div className="container h-full  pt-28 pb-4  relative text-[#404040]">
        <div className="flex max-w-[1230px] w-full h-3/4 justify-end z-20">
          <div className=" w-9/12 h-full flex flex-row items-center gap-20">
            <div className=" h-fit w-1/2 flex flex-col gap-10">
              <h3 className="text-6xl font-bold ">
                Chúng tôi là <br />
                BOHO Décor{" "}
              </h3>
              <p className="text-[1.4rem] font-normal">
                Với tầm nhìn trở thành thương hiệu nội thất uy tín, định vị xu
                hướng và tạo ra trải nghiệm sống tốt hơn. Chúng tôi không ngừng
                đổi mới giải pháp thiết kế, sản xuất, thi công nhằm mang tới sự
                hài hòa giữa thẩm mỹ và công năng cho các công trình.
              </p>
            </div>
            <div className=" h-fit w-1/2 flex flex-col gap-10 since-wrap">
              <h3 className="text-6xl font-bold ">Create Better</h3>
              <p className="text-[1.4rem] font-normal">
                Hệ thống nhà máy hiện đại, đội ngũ Chuyên gia quốc tế và kỹ sư,
                kiến trúc sư giàu kinh nghiệm là nền tảng làm nên những sản phẩm
                nội thất hoàn mỹ và trải nghiệm tinh tế phù hợp với nhu cầu
                khách hàng.
              </p>
              <div className="relative py-4 px-6 w-fit">
                <a
                  href="http://bohodecor.vn/about-us/"
                  target="_blank"
                  className="btn m-top"
                >
                  <span className="text txt-split no-delay">
                    <div className="txt-split-item">
                      <p>
                        <span>
                          <span className="letter">K</span>
                        </span>
                        <span>
                          <span className="letter">h</span>
                        </span>
                        <span>
                          <span className="letter">á</span>
                        </span>
                        <span>
                          <span className="letter">m</span>
                        </span>
                      </p>
                      <span>&nbsp;</span>
                      <p>
                        <span>
                          <span className="letter">p</span>
                        </span>
                        <span>
                          <span className="letter">h</span>
                        </span>
                        <span>
                          <span className="letter">á</span>
                        </span>
                      </p>
                      <span>&nbsp;</span>
                      <p>
                        <span>
                          <span className="letter">n</span>
                        </span>
                        <span>
                          <span className="letter">h</span>
                        </span>
                        <span>
                          <span className="letter">i</span>
                        </span>
                        <span>
                          <span className="letter">ề</span>
                        </span>
                        <span>
                          <span className="letter">u</span>
                        </span>
                      </p>
                      <span>&nbsp;</span>
                      <p>
                        <span>
                          <span className="letter">h</span>
                        </span>
                        <span>
                          <span className="letter">ơ</span>
                        </span>
                        <span>
                          <span className="letter">n</span>
                        </span>
                      </p>
                    </div>
                  </span>
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
