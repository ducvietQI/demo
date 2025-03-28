"use client";

import {
  AboutSection,
  BannerSection,
  CountSection,
  DesignProjectSection,
  TabSection,
  VideoSection,
} from "@/components";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack>
      <VideoSection />
      <BannerSection />
      <CountSection />
      <AboutSection />
      <TabSection />
      <DesignProjectSection />
    </Stack>
  );
};

export default Home;
