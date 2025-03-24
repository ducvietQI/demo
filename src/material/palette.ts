type TPalette = Record<string, any> & { mode: "light" | "dark" };

const palette: TPalette = {
  mode: "light",
  common: {
    black: "#000000",
    white: "#fff",
  },
  primary: {
    main: "#ffba00",
  },
  secondary: {
    main: "#161616",
  },
  text: {
    primary: "#dddddd",
    black: '#161616'
  },
  bg: {
    gray: "#F4F5F7",
    lightPrimary: "#FCF8F3",
  },
};

export default palette;
