"use client";

import { BannerSection, VideoSection } from "@/components";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack>
      <VideoSection />
      <BannerSection />
    </Stack>
  );
};

export default Home;
