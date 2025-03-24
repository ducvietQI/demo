import localFont from "next/font/local";

const BaiJamjuree = localFont({
  src: [
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Bai_Jamjuree/BaiJamjuree-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-bai-jamjuree",
});

export { BaiJamjuree };
