import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#03AEA2ff", // light-sea-green
      contrastText: "#F2F9F7ff", // mint-cream for text on primary color
    },
    secondary: {
      main: "#16BCB0ff", // light-sea-green-2
    },
    background: {
      default: "#C9E8E2ff", // mint-green
      paper: "#F2F9F7ff", // mint-cream
    },
    text: {
      primary: "#606F84ff", // paynes-gray
    },
  },
  // ... You can add more theme configurations like typography, spacing, etc.
});

export default theme;
