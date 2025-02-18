import localFont from "next/font/local";

const Gotham = localFont({
  src: [
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Black Italic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Bold Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Light Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Thin Italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Ultra.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham Ultra Italic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham XLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/SVN-Gotham/SVN-Gotham XLight Italic.otf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-gotham",
});

export { Gotham };
