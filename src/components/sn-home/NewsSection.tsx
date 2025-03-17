"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const NewsSection = () => {
  const newsSect = useTranslations("NewsSection");

  const newsList = Object.values(newsSect.raw("news")) as {
    image: string;
    title: string;
    date: string;
  }[];

  return (
    <div className="container pt-24 pb-4">
      <div className="flex flex-col w-full max-w-[1230px] h-full gap-10">
        <div className="flex justify-between items-center">
          <h2 className="text-7xl font-bold">{newsSect("title")}</h2>
          <h3 className="text-4xl font-medium cursor-pointer hover:underline">
            {newsSect("btn")} &gt;&gt;
          </h3>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 grid-rows-4 gap-y-8 gap-x-8 h-full">
          {newsList.map((news, index) => (
            <div
              key={index}
              className={`relative w-full h-full overflow-hidden ${
                index === 0 ? "row-span-4 col-span-2" : "row-span-2"
              }`}
            >
              <Image
                src={news.image}
                alt={`image-${index + 1}`}
                fill
                className="object-cover"
              />
              <p className="absolute text-ellipsis-2-row  z-4 text-white bottom-20 left-5 hover:underline hover:cursor-pointer text-2xl font-bold">
                {news.title}
              </p>
              <p className="absolute z-4 text-white bottom-8 left-5 text-2xl">
                {news.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
