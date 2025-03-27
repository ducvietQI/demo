"use client";

import { BannerSection, CountSection, VideoSection } from "@/components";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack>
      <VideoSection />
      <BannerSection />
      <CountSection />
    </Stack>
  );
};

export default Home;
