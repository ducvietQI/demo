"use client";
import Image from "next/image";

const NewsSection = () => {
  return (
    <div className="container pt-24 pb-4">
      <div className="flex flex-col  w-full max-w-[1230px] h-full  gap-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-7xl font-bold">Tin Tức</h2>
          <h3 className="text-4xl font-medium cursor-pointer hover:underline">
            Xem thêm &gt;&gt;
          </h3>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 grid-rows-4 gap-y-8 gap-x-8 h-full">
          <div className="relative row-span-4 col-span-2 w-full h-full overflow-hidden">
            <Image
              src="https://bohodecor.vn/wp-content/uploads/2025/02/a-84-1024x683.jpg"
              alt="image-1"
              fill
              className="object-cover"
            />
            <p className="absolute z-4 text-white bottom-20 left-5 hover:underline hover:cursor-pointer text-2xl font-bold">
              DỰ ÁN SSIS GIAI ĐOẠN 2 CỦA BOHO DÉCOR XUẤT HIỆN TRÊN EDUCATION
              SNAPSHOTS
            </p>
            <p className="absolute z-4 text-white bottom-8 left-5 text-2xl ">
              05/02/2025
            </p>
          </div>
          <div className="text-4xl relative bg-white row-span-2 font-semibold flex items-center justify-center">
            <Image
              src="https://bohodecor.vn/wp-content/uploads/2024/09/DSC08702-768x512.jpg"
              alt="image-2"
              fill
              className="object-cover"
            />
            <p className="absolute z-4 text-white bottom-20 left-5 hover:underline hover:cursor-pointer text-2xl font-bold leading-9">
              LỄ KHỞI CÔNG DỰ ÁN CẢI TẠO TRƯỜNG QUỐC TẾ NAM SÀI GÒN – GIAI ĐOẠN
              III
            </p>
            <p className="absolute z-4 text-white bottom-8 left-5 text-2xl font-extralight">
              26/09/2024
            </p>
          </div>
          <div className="text-4xl relative bg-white row-span-2 font-semibold flex items-center justify-center">
            <Image
              src="https://bohodecor.vn/wp-content/uploads/2024/07/2024AADA-297-768x512.jpg"
              alt="image-3"
              fill
              className="object-cover"
            />

            <p className="absolute z-4 text-white bottom-20 left-5 hover:underline hover:cursor-pointer text-2xl font-bold leading-9">
              BOHO DÉCOR TOẢ SÁNG TẠI ĐÊM TRAO GIẢI ASIA ARCHITECTURE DESIGN
              AWARD 2024
            </p>
            <p className="absolute z-4 text-white bottom-8 left-5 text-2xl font-extralight">
              31/07/2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
