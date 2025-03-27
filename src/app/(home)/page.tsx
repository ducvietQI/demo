"use client";

import {
  AboutSection,
  BannerSection,
  CountSection,
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
    </Stack>
  );
};

export default Home;
