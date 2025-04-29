import {
  BannerSection,
  ConstructionWorkSection,
  DesignProjectSection,
  NewsSection,
  ProductSection,
  TabSection,
} from "@/components";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack>
      <BannerSection />
      <TabSection />
      <DesignProjectSection />
      <ConstructionWorkSection />
      <ProductSection array={home_arr} title="Sản phẩm phòng khách" />
      <ProductSection array={an_arr} title="Sản phẩm phòng ăn" />
      <ProductSection title="Sản phẩm phòng ngủ" />
      <NewsSection />
    </Stack>
  );
};

export default Home;
const home_arr = [
  {
    id: 1,
    imgSrc: "/images/khach-1.webp",
    title: "Tủ tivi MOHO KOSTER màu nâu",
    description: "Stylish cafe chair",
    price: 2990000,
    sale: 14,
  },
  {
    id: 2,
    imgSrc: "/images/khach-2.webp",
    title: "Bàn Sofa MOHO KOSTER Màu Nâu",
    description: "Stylish cafe chair",
    price: 1490000,
    sale: 29,
  },
  {
    id: 3,
    imgSrc: "/images/khach-3.webp",
    title: "Combo Phòng Khách MOHO VLINE Màu Tự Nhiên",
    description: "Stylish cafe chair",
    price: 13990000,
    sale: 26,
  },
  {
    id: 4,
    imgSrc: "/images/khach-4.jpg",
    title: "Tủ Tivi Dalumd (Màu Nâu Hạnh Nhân, 160)",
    description: "Stylish cafe chair",
    price: 4290000,
    sale: 32,
  },
  {
    id: 5,
    imgSrc: "/images/Potty.webp",
    title: "Kệ TV MOHO HOBRO 301",
    description: "Minimalist flower pot",
    price: 6290000,
    isNew: true,
  },
  {
    id: 6,
    imgSrc: "/images/pingky.webp",
    title: "Tủ Kệ Tivi Gỗ MOHO UBEDA 201",
    description: "Cute bed set",
    price: 6290000,
    sale: 50,
  },
  {
    id: 7,
    imgSrc: "/images/grifo.webp",
    title: "Tủ Giày – Tủ Trang Trí Gỗ MOHO VIENNA 204",
    description: "Small mug",
    price: 6290000,
    isNew: true,
  },
  {
    id: 8,
    imgSrc: "/images/khach-5.jpg",
    title: "Bàn Sofa – Bàn Cafe – Bàn Trà Gỗ MOHO OSLO 901",
    description: "Stylish cafe chair",
    price: 1990000,
    sale: 9,
  },
];

const an_arr = [
  {
    id: 1,
    imgSrc: "/images/an-1.webp",
    title: "Bàn Ăn Scania (Mặt Vân Đá, 140)",
    description: "Stylish cafe chair",
    price: 4490000,
    sale: 21,
  },
  {
    id: 2,
    imgSrc: "/images/an-2.jpg",
    title: "Bộ Bàn Ăn Tròn Oslo (Màu Tự Nhiên, 100)",
    description: "Stylish cafe chair",
    price: 8990000,
    sale: 33,
  },
  {
    id: 3,
    imgSrc: "/images/an-3.webp",
    title: "Combo Phòng Ăn MOHO HOBRO (4 hoặc 6 ghế)",
    description: "Stylish cafe chair",
    price: 10490000,
    sale: 34,
  },
  {
    id: 4,
    imgSrc: "/images/an-4.webp",
    title: "Combo Basic Phòng Ăn Narvik 201 Màu Tự Nhiên",
    description: "Stylish cafe chair",
    price: 5290000,
    sale: 35,
  },
  {
    id: 5,
    imgSrc: "/images/an-5.webp",
    title: "Bộ Bàn Ăn 4 Ghế Gỗ MOHO MILAN 901 (1m25)",
    description: "Minimalist flower pot",
    price: 7490000,
    isNew: true,
  },
  {
    id: 6,
    imgSrc: "/images/an-6.jpg",
    title: "Combo Basic Phòng Ăn Ubeda 201 Màu Tự Nhiên",
    description: "Cute bed set",
    price: 6290000,
    sale: 19,
  },
  {
    id: 7,
    imgSrc: "/images/an-7.webp",
    title: "Bộ Bàn Ăn Gỗ Cao Su Tự Nhiên MOHO VLINE 602 (75cm)",
    description: "Small mug",
    price: 9290000,
    sale: 30,
  },
  {
    id: 8,
    imgSrc: "/images/an-8.jpg",
    title: "Bàn Ăn Gỗ Cao Su Tự Nhiên MOHO VLINE 601 90cm",
    description: "Stylish cafe chair",
    price: 2100000,
    sale: 9,
  },
];
