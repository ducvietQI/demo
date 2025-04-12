"use client";

import {
  AboutSection,
  BannerSection,
  ConstructionWorkSection,
  CountSection,
  DesignProjectSection,
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
      <SignificantSection />
    </Stack>
  );
};

export default Home;
