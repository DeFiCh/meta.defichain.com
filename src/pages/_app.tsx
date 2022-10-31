import "../styles/globals.css";
import { JSX } from "@babel/types";
import NextNProgress from "nextjs-progressbar";
import { GetServerSidePropsResult } from "next";
import { initializeStore } from "@store/index";
import Base, { DeFiMetaChainAppProps } from "../layouts/Base";

export default function DeFiMetaChainApp({
  Component,
  pageProps,
}): JSX.Element {
  return (
    <Base {...pageProps}>
      <NextNProgress
        startPosition={0.3}
        stopDelayMs={200}
        showOnShallow
        color="#0468D6"
        height={4}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </Base>
  );
}

export function getServerSideProps(): GetServerSidePropsResult<DeFiMetaChainAppProps> {
  const store = initializeStore();
  return {
    props: {
      initialReduxState: store.getState(),
    },
  };
}
