import {extendTheme} from "@chakra-ui/react";

export const myNewTheme = extendTheme({
  colors: {
    softred: "hsl(10, 79%, 65%)",
    cyan: "hsl(186, 34%, 60%)",
    darkbrown: "hsl(25, 47%, 15%)",
    mediumbrown: "hsl(28, 10%, 53%)",
    cream: "hsl(27, 66%, 92%)",
    verypaleorange: "hsl(33, 100%, 98%)",
  },

  fonts: {
    heading: `'DM Sans', sans-serif`,
    body: `'DM Sans', sans-serif`,
  },
});
