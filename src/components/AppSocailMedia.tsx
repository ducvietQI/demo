"use client";

import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { EyeIcon } from "./Icons";
import { useAppSelector } from "@/redux-store";

const AppSocailMedia = ({ view }: { view?: number }) => {
  const { footerData } = useAppSelector((state) => state.appReducer);

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Image
        onClick={() =>
          footerData.social?.facebook &&
          window.open(footerData.social.facebook, "_blank")
        }
        src="/images/fb.png"
        height={30}
        width={30}
        alt="fb-icon"
        style={{ cursor: "pointer" }}
      />
      <Image
        onClick={() =>
          footerData.social?.youtube &&
          window.open(footerData.social.youtube, "_blank")
        }
        src="/images/yt.png"
        height={30}
        width={30}
        alt="yt-icon"
        style={{ cursor: "pointer" }}
      />
      <Image
        onClick={() =>
          footerData.social?.tiktok &&
          window.open(footerData.social.tiktok, "_blank")
        }
        src="/images/ar.png"
        height={30}
        width={30}
        style={{ cursor: "pointer" }}
        alt="tt-icon"
      />

      {view && (
        <>
          <EyeIcon sx={{ fontSize: 20 }} />
          <Typography variant="h5">{view}</Typography>
        </>
      )}
    </Stack>
  );
};

export default AppSocailMedia;
