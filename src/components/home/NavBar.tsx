import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties, useState } from "react";
import { UrlObject } from "url";

export default function NavBar(): JSX.Element {
  const navItemStyle =
    "text-transparent font-medium before:bg-black-900 relative before:button-text before:font-medium before:opacity-100 group-hover:before:opacity-0 before:leading-[20.8px] after:leading-[20.8px] after:button-text after:font-medium after:brand-gradient-1 after:opacity-0 group-hover:after:opacity-100";
  const navChildItemStyle =
    "pl-6 text-transparent before:pl-6 before:bg-black-900 relative before:button-text before:opacity-100 hover:before:opacity-0 before:left-6 after:left-6 after:button-text after:pl-6 after:brand-gradient-1 after:opacity-0 hover:after:opacity-100";

  return (
    <div className="flex bg-white-50 rounded-[30px]">
      <NavBarItem
        label={
          <span
            className={`${navItemStyle} before:content-['Developers'] after:content-['Developers']`}
          >
            Developers
          </span>
        }
        childContainerStyle={{ left: -58 }}
        children={
          <>
            <NavBarChildItem
              href=""
              imagePath="/menu/documentation.svg"
              altLabel="Documentation"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['Documentation'] after:content-['Documentation']`}
                >
                  Documentation
                </span>
              }
            />
            <NavBarChildItem
              href=""
              imagePath="/menu/releases.svg"
              altLabel="Releases"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['Releases'] after:content-['Releases']`}
                >
                  Releases
                </span>
              }
            />
            <NavBarChildItem
              href=""
              imagePath="/menu/github.svg"
              altLabel="Github"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['Github'] after:content-['Github']`}
                >
                  Github
                </span>
              }
            />
            <NavBarChildItem
              href=""
              imagePath="/menu/forum.svg"
              altLabel="Technical Forum"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['Technical_Forum'] after:content-['Technical_Forum']`}
                >
                  Technical Forum
                </span>
              }
            />
          </>
        }
      />
      <NavBarItem
        label={
          <span
            className={`${navItemStyle} before:content-['Ecosystem'] after:content-['Ecosystem']`}
          >
            Ecosystem
          </span>
        }
        childContainerStyle={{ left: -54 }}
        children={
          <>
            <NavBarChildItem
              href=""
              imagePath="/menu/dmc-explorer.svg"
              altLabel="DMC Explorer"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['DMC_Explorer'] after:content-['DMC_Explorer']`}
                >
                  DMC Explorer
                </span>
              }
            />
            <NavBarChildItem
              href=""
              imagePath="/menu/defichain-com.svg"
              altLabel="DeFiChain.com"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['DeFiChain.com'] after:content-['DeFiChain.com']`}
                >
                  DeFiChain.com
                </span>
              }
            />
            <NavBarChildItem
              href=""
              imagePath="/menu/whitepaper.svg"
              altLabel="Whitepaper"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['Whitepaper'] after:content-['Whitepaper']`}
                >
                  Whitepaper
                </span>
              }
            />
            <NavBarChildItem
              href=""
              imagePath="/menu/wallets.svg"
              altLabel="Wallets"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['Wallets'] after:content-['Wallets']`}
                >
                  Wallets
                </span>
              }
            />
          </>
        }
      />
      <NavBarItem
        label={
          <span
            className={`${navItemStyle} before:content-['Community'] after:content-['Community']`}
          >
            Community
          </span>
        }
        childContainerStyle={{ left: -51 }}
        children={
          <>
            <NavBarChildItem
              href=""
              imagePath="/menu/discord.svg"
              altLabel="Discord"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['Discord'] after:content-['Discord']`}
                >
                  Discord
                </span>
              }
            />
            <NavBarChildItem
              href=""
              imagePath="/menu/twitter.svg"
              altLabel="Twitter"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['Twitter'] after:content-['Twitter']`}
                >
                  Twitter
                </span>
              }
            />
            <NavBarChildItem
              href=""
              imagePath="/menu/github_bw.svg"
              altLabel="Github"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['Github'] after:content-['Github']`}
                >
                  Github
                </span>
              }
            />
            <NavBarChildItem
              href=""
              imagePath="/menu/youtube.svg"
              altLabel="YouTube"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['YouTube'] after:content-['YouTube']`}
                >
                  YouTube
                </span>
              }
            />
            <NavBarChildItem
              href=""
              imagePath="/menu/telegram.svg"
              altLabel="Telegram"
              label={
                <span
                  className={`${navChildItemStyle} before:content-['Telegram'] after:content-['Telegram']`}
                >
                  Telegram
                </span>
              }
            />
          </>
        }
      />
      <div className="px-8 py-4 group cursor-pointer relative before:cta-border before:bg-white-50 before:opacity-100 hover:before:opacity-0 after:cta-border after:brand-gradient-1 after:opacity-0 hover:after:opacity-100">
        <Link href="">
          <span
            className={`${navItemStyle} before:content-['Blog'] after:content-['Blog']`}
          >
            Blog
          </span>
        </Link>
      </div>
    </div>
  );
}

function NavBarMobile(): JSX.Element {
  return <></>;
}

function NavBarItem({
  label,
  childContainerStyle,
  children,
}: {
  label: React.ReactNode;
  childContainerStyle: CSSProperties;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ul className="px-8 group cursor-pointer relative">
      <li
        className={clsx(
          "py-4 before:cta-border before:bg-white-50 before:opacity-100 group-hover:before:opacity-0 after:cta-border after:brand-gradient-1 after:opacity-0 group-hover:after:opacity-100"
        )}
      >
        {label}
      </li>
      <li
        style={childContainerStyle}
        className="hidden before:hover-menu-gap group-hover:animate-fade-in group-hover:block hover:block group-hover:opacity-100 absolute top-[64px] bg-white-50 rounded-[10px] w-[255px]"
      >
        {children}
      </li>
    </ul>
  );
}

function NavBarChildItem({
  href,
  imagePath,
  altLabel,
  label,
}: {
  href: string | UrlObject;
  imagePath: string;
  altLabel?: string;
  label?: React.ReactNode | string;
}): JSX.Element {
  return (
    <Link href={href}>
      <div className="py-3 px-5 flex items-center">
        <div className="w-5 h-5 relative">
          <Image layout="fill" src={imagePath} alt={altLabel} />
        </div>
        {label}
      </div>
    </Link>
  );
}

NavBar.Mobile = NavBarMobile;
