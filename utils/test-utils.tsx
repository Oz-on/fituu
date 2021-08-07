import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const ThemeProviders: React.FC = ({
  children,
}: React.PropsWithChildren<Record<string, any>>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options = {}) =>
  render(ui, {
    wrapper: ThemeProviders,
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
