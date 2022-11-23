import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
const TestBar = {
  Progress: {
    baseStyle: {
      filledTrack: {
        bg: "linear-gradient(90deg, #CD8EA2 0%, #BEA179 100%)",
      },
    },
  },
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const Theme = extendTheme({
  config,
  styles: {
    global: () => ({
      body: {
        bg:"black",
      },
      colors: {
        primary: {
          100: "#E5FCF1",
          200: "#27EF96",
          300: "#10DE82",
          400: "#0EBE6F",
          500: "#0CA25F",
          600: "#0A864F",
          700: "#086F42",
          800: "#075C37",
          900: "#064C2E",
        },
        blue: "#181E31",
        grey: "#282C3E",
      },
    }),
  },

  //   components: {Progress, Slider, CircularProgress, Button},
});
