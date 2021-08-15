import { useCallback, useEffect } from "react";
import router from "next/router";
import NProgress from "nprogress";

/**
 * Convenience hook to control the state of the progress loader for each page.
 */

export const useProgressLoader = (): void => {
  const init = useCallback(() => {
    NProgress.configure({
      showSpinner: false,
    });
    router.events.on(`routeChangeStart`, () => {
      NProgress.start();
    });

    router.events.on(`routeChangeComplete`, () => {
      NProgress.done();
    });

    router.events.on(`routeChangeError`, () => {
      NProgress.done();
    });
  }, []);
  useEffect(() => {
    init();
  }, [init]);
};
