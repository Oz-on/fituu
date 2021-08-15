import { useProgressLoader } from "../../lib/useProgresLoader";
import { ProgressStyles } from "./styles";

/**
 * A fake progress bar component to render the loader hook. Acts like a container and renders global style object for Styled-Components
 * This is so we can style the bar with the primary color of each site
 * Here is a great reference: https://dev.to/vvo/show-a-top-progress-bar-on-fetch-and-router-events-in-next-js-4df3
 */
const ProgressBar = (): JSX.Element => {
  useProgressLoader();
  return <ProgressStyles />;
};

export default ProgressBar;
