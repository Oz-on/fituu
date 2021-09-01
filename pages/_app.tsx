import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  console.log('session: ', pageProps.session);
  return (
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
