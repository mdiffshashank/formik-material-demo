import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      dark: purple[600],
      light: purple[100],
    },
    secondary: {
      main: green[500],
      dark: green[600],
      light: green[100],
    },
  },
});

export default theme;
