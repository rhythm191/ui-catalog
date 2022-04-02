import "../styles/globals.css";
import type { AppProps } from "next/app";

import GlobalHeader from "../components/commons/GlobalHeader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalHeader />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
