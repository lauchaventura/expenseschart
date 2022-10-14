import "../styles/globals.css";
import {ChakraProvider} from "@chakra-ui/react";
import {myNewTheme} from "../styles/theme";
import "@fontsource/dm-sans";
function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={myNewTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
