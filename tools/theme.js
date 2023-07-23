import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
    disableTransitionOnChange: false,
  },
  styles: {
    global: {
      body: {
        transitionProperty: `all`,
        transitionDuration: `normal`,
      },
    },
  },
});

export default theme;
