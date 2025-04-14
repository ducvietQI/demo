"use client";

import {
  AboutSection,
  BannerSection,
  ConstructionWorkSection,
  CountSection,
  DesignProjectSection,
  NewsSection,
  ProductSection,
  SignificantSection,
  TabSection,
  VideoSection,
} from "@/components";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack>
      {/* <VideoSection /> */}
      <BannerSection />
      {/* <CountSection /> */}
      {/* <AboutSection /> */}
      <TabSection />
      <DesignProjectSection />
      <ConstructionWorkSection />
      <ProductSection />
      <NewsSection />
      {/* <SignificantSection /> */}
    </Stack>
  );
};

export default Home;
