"use client";

import { AppHTMLRender } from "@/components";
import { useAppSelector } from "@/redux-store";
import { Container, Stack } from "@mui/material";

const IntroducePage = () => {
  const { footerData } = useAppSelector((state) => state.appReducer);
  return (
    <Container>
      <Stack py={5} minHeight="50vh" spacing={2}>
        <AppHTMLRender htmlRender={footerData.introduction} />
      </Stack>
    </Container>
  );
};

export default IntroducePage;
