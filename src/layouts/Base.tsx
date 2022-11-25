import Head from "next/head";
import { PropsWithChildren, useEffect, useState } from "react";
import {
  appName,
  longDescription,
  shortDescription,
  siteTitle,
  website,
} from "@components/siteInfo";
import clsx from "clsx";
import { JSX } from "@babel/types";
import { ParallaxProvider } from "react-scroll-parallax";
import { NetworkProvider } from "@contexts/NetworkContext";
import { WhaleProvider } from "@contexts/WhaleContext";
import { StatsProvider } from "@store/stats";
import { StoreProvider } from "@contexts/StoreProvider";
import { RootState } from "@store/index";

export interface DeFiMetaChainAppProps {
  initialReduxState: RootState;
}

function Base({
  children,
  initialReduxState,
}: PropsWithChildren<DeFiMetaChainAppProps>): JSX.Element | null {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={clsx("flex flex-col min-h-screen")}>
      <Head>
        <base href="/" />
        <meta name="application-name" content={appName} />
        <meta charSet="UTF-8" />
        <title key="title">{siteTitle}</title>
        <meta key="description" name="description" content={longDescription} />
        <meta
          name="keywords"
          content="DeFiChain, DeFi Meta Chain, Ethereum Virtual Machine, EVM-compatible, Layer 2 Blockchain, DeFi Blockchain, Decentralized Finance, Security of Bitcoin, Flexibility of Ethereum"
        />
        <meta key="robots" name="robots" content="follow,index" />
        <meta name="googlebot" content="index,follow" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta
          key="apple-mobile-web-app-capable"
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta name="theme-color" content="#0468D6" />

        <meta key="og:locale" name="og:locale" content="en_SG" />
        <meta key="og:title" name="og:title" content={siteTitle} />
        <meta key="og:image" name="og:image" content="https://meta.defichain.com/dmc_share.png" />
        <meta key="og:image:alt" name="og:image:alt" content={siteTitle} />
        <meta key="og:site_name" name="og:site_name" content={appName} />
        <meta key="og:url" name="og:url" content={website} />
        <meta key="og:type" name="og:type" content="website" />
        <meta
          key="og:description"
          name="og:description"
          content={longDescription}
        />

        <meta name="twitter:card" content={shortDescription} />
        <meta name="twitter:site" content={website} />
        <meta name="twitter:creator" content="@birthdaydev" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={longDescription} />
        <meta name="twitter:image" content="https://meta.defichain.com/dmc_share.png" />
        <meta name="twitter:image:alt" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
      </Head>
      {mounted && (
        <NetworkProvider>
          <WhaleProvider>
            <StoreProvider state={initialReduxState}>
              <StatsProvider>
                <ParallaxProvider>
                  <main>{children}</main>
                </ParallaxProvider>
              </StatsProvider>
            </StoreProvider>
          </WhaleProvider>
        </NetworkProvider>
      )}
    </div>
  );
}

export default Base;
