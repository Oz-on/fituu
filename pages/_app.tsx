import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { theme } from "../theme";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";

const ProgressBar = dynamic(() => import("../components/atoms/ProgressBar"), {
  ssr: false,
});

import UserDataProvider from "../lib/contexts/UserDataProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
        <ProgressBar />
        <UserDataProvider
          accessToken={pageProps.session ? pageProps.session.accessToken : ""}
        >
          <Component {...pageProps} />
        </UserDataProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
