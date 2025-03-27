"use client";

import {
  AboutSection,
  BannerSection,
  CountSection,
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
    </Stack>
  );
};

export default Home;
