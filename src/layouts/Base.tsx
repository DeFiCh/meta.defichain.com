import Head from "next/head";
import {PropsWithChildren, useEffect, useState} from "react";
import {
  appName,
  logo,
  longDescription,
  shortDescription,
  siteTitle,
  website,
} from "@components/siteInfo";
import clsx from "clsx";
import { JSX } from "@babel/types";

function Base({children}: PropsWithChildren<any>): JSX.Element | null {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // to prevent flashes due to different color theme on user device when react hydration happens in client side
    return null;
  }

  return (
    <div className={clsx("flex flex-col min-h-screen")}>
      <Head>
        <base href="/"/>
        <meta name="application-name" content={appName}/>
        <meta charSet="UTF-8"/>
        <title key="title">{siteTitle}</title>
        <meta key="description" name="description" content={longDescription}/>
        <meta key="robots" name="robots" content="follow,index"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name="google" content="notranslate"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta
          key="apple-mobile-web-app-capable"
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta name="theme-color" content="#0468D6"/>

        <meta key="og:locale" name="og:locale" content="en_SG"/>
        <meta key="og:title" name="og:title" content={siteTitle}/>
        <meta key="og:image" name="og:image" content={`${website}${logo}`}/>
        <meta key="og:image:alt" name="og:image" content={siteTitle}/>
        <meta key="og:site_name" name="og:site_name" content={appName}/>
        <meta key="og:url" name="og:site_name" content={website}/>
        <meta key="og:type" name="og:type" content="website"/>
        <meta
          key="og:description"
          name="og:description"
          content={shortDescription}
        />

        <meta name="twitter:card" content={shortDescription}/>
        <meta name="twitter:site" content={website}/>
        <meta name="twitter:creator" content="@birthdaydev"/>
        <meta name="twitter:title" content={siteTitle}/>
        <meta name="twitter:description" content={shortDescription}/>
        <meta name="twitter:image" content={`${website}${logo}`}/>
        <meta name="twitter:image:alt" content={siteTitle}/>
        <meta name="twitter:card" content="summary_large_image"/>

        <link rel="icon" href="/favicon.ico"/>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <main className={clsx("flex-grow")}>{children}</main>
    </div>
  );
}

export default Base;
