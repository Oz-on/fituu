import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { theme } from "../theme";

import UserDataProvider from "../lib/contexts/UserDataProvider";

function MyApp({ Component, pageProps }: AppProps) {
  console.log('session: ', pageProps.session);
  return (
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
        <UserDataProvider accessToken={pageProps.session ? pageProps.session.accessToken : ''}>
          <Component {...pageProps} />
        </UserDataProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
