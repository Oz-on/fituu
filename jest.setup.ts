import "@testing-library/jest-dom";
import { ReactElement } from "react";
import { render } from "./utils/test-utils";
import { RenderOptions, RenderResult } from "@testing-library/react";
declare global {
  function render(component: ReactElement, opts?: RenderOptions): RenderResult;
}

global.render = render;
