import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      rocketseat: "#8257e6",
      white: "#fff",
      grey900: "#121214",
      grey800: "#202024",
      grey100: "#e1e1e6",
      grey300: "#c4c4cc",

      green500: "#00875f",
      green300: "#00b37e",
    },

    fontSizes: {
      small: "0.875rem",
      medium: "1.125rem",
      large: "1.25rem",
      xlarge: "1.5rem",
      "2xl": "2rem",
    },
  },
});
