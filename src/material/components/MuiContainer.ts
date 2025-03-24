import { createTheme } from "@mui/material";
import breakpoints from "../breakpoints";
const customBreakpoints = createTheme({ breakpoints }).breakpoints;
const maxWidth = 1250;

export default {
  styleOverrides: {
    root: {
      [customBreakpoints.up("xs")]: {
        maxWidth: maxWidth,
        paddingLeft: 15,
        paddingRight: 15,
      },
    },
  },
};
