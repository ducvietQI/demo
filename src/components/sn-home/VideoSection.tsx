import { Stack } from "@mui/material";

const VideoSection = () => {
  return (
    <Stack height={{ xs: "30vh", lg: "100vh" }} sx={{ overflow: "hidden" }}>
      <video
        id="sc_video"
        playsInline
        muted
        loop
        autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source
          src="https://Quanghoanhomehouse.vn/wp-content/uploads/2022/08/Quanghoanhome-house-video-web-fix-2.mp4"
          type="video/mp4"
        />
      </video>
    </Stack>
  );
};

export default VideoSection;
