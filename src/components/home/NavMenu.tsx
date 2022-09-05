import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties, useState } from "react";

const MenuChildItems = {
  developers: [
    {
      imagePath: "/menu/documentation.svg",
      altLabel: "Documentation",
      label: "Documentation",
      href: "",
    },
    {
      imagePath: "/menu/releases.svg",
      altLabel: "Releases",
      label: "Releases",
      href: "https://github.com/DeFiCh/metachain/releases",
    },
    {
      imagePath: "/menu/github.svg",
      altLabel: "GitHub",
      label: "GitHub",
      href: "https://github.com/DeFiCh/metachain",
    },
    {
      imagePath: "/menu/forum.svg",
      altLabel: "Developer's Chatroom",
      label: "Developer's Chatroom",
      href: "https://discord.gg/g5U4pvNtbS",
    },
  ],
  ecosystem: [
    {
      imagePath: "/menu/dmc-explorer.svg",
      altLabel: "DMC Explorer",
      label: "DMC Explorer",
      href: "",
    },
    {
      imagePath: "/menu/defichain-com.svg",
      altLabel: "DeFiChain.com",
      label: "DeFiChain.com",
      href: "https://defichain.com",
    },
    {
      imagePath: "/menu/whitepaper.svg",
      altLabel: "Whitepaper",
      label: "Whitepaper",
      href: "",
    },
    {
      imagePath: "/menu/wallets.svg",
      altLabel: "Wallets",
      label: "Wallets",
      href: "",
    },
  ],
  community: [
    {
      imagePath: "/menu/discord.svg",
      altLabel: "Discord",
      label: "Discord",
      href: "https://discord.gg/U268gQUqQt",
    },
    {
      imagePath: "/menu/twitter.svg",
      altLabel: "Twitter",
      label: "Twitter",
      href: "https://twitter.com/defichain",
    },
    {
      imagePath: "/menu/github_2.svg",
      altLabel: "GitHub",
      label: "GitHub",
      href: "https://github.com/DeFiCh/metachain",
    },
    {
      imagePath: "/menu/youtube.svg",
      altLabel: "YouTube",
      label: "YouTube",
      href: "https://www.youtube.com/c/DeFiChain",
    },
    {
      imagePath: "/menu/telegram.svg",
      altLabel: "Telegram",
      label: "Telegram",
      href: "https://t.me/defiblockchain",
    },
  ],
};

export default function NavMenu(): JSX.Element {
  return (
    <div className="flex bg-white-50 rounded-[30px] lg:flex hidden">
      <NavMenuItem label="Developers" childContainerStyle={{ left: -58 }}>
        {MenuChildItems.developers.map((item) => (
          <NavMenuChildItem
            href={item.href}
            imagePath={item.imagePath}
            altLabel={item.altLabel}
            label={item.altLabel}
            key={item.label}
          />
        ))}
      </NavMenuItem>
      <NavMenuItem label="Ecosystem" childContainerStyle={{ left: -54 }}>
        {MenuChildItems.ecosystem.map((item) => (
          <NavMenuChildItem
            href={item.href}
            imagePath={item.imagePath}
            altLabel={item.altLabel}
            label={item.altLabel}
            key={item.label}
          />
        ))}
      </NavMenuItem>
      <NavMenuItem label="Community" childContainerStyle={{ left: -51 }}>
        {MenuChildItems.community.map((item) => (
          <NavMenuChildItem
            href={item.href}
            imagePath={item.imagePath}
            altLabel={item.altLabel}
            label={item.altLabel}
            key={item.label}
          />
        ))}
      </NavMenuItem>
      <div className="px-8 py-4 group cursor-pointer relative before:cta-border before:bg-white-50 before:opacity-100 hover:before:opacity-0 after:cta-border after:brand-gradient-1 after:opacity-0 hover:after:opacity-100">
        <Link href="/">
          <MenuItemLabel label="Blog" />
        </Link>
      </div>
    </div>
  );
}

enum NavItem {
  Developers,
  Ecosystem,
  Community,
}

function NavMenuMobile({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element {
  const [activeMenu, setActiveMenu] = useState<NavItem | undefined>();
  const onClickMenu = (item: NavItem): void => {
    if (activeMenu === item) {
      setActiveMenu(undefined);
    } else {
      setActiveMenu(item);
    }
  };

  return (
    <>
      <div
        className={clsx(
          "h-full fixed top-0 right-0 z-10 bg-black-900/20 backdrop-blur-[56px] w-full",
          { block: isOpen, hidden: !isOpen }
        )}
        onClick={onClose}
        onKeyDown={onClose}
        role="button"
        aria-label="Close Menu"
        tabIndex={0}
      />
      <div
        className={clsx(
          "h-full fixed top-0 right-0 z-10 bg-black-900 transition-[width] duration-300 overflow-y-auto",
          { "w-full sm:w-[360px]": isOpen, "w-0": !isOpen }
        )}
      >
        <div className="flex items-center justify-between p-8">
          <Link className="flex items-center" href="/">
            <div className="relative w-[149px] h-[43px]">
              <Image
                data-testid="dmc_navmenu_logo"
                layout="fill"
                src="/logo.svg"
                alt="DeFi Meta Chain Logo"
                objectFit="contain"
              />
            </div>
          </Link>
          <svg
            className="feather !stroke-1 w-10 h-10 stroke-white-50"
            onClick={onClose}
          >
            <use href="/feather-sprite.svg#x-circle" />
          </svg>
        </div>
        <NavMenuMobileItem
          label="Developers"
          isActive={activeMenu === NavItem.Developers}
          onClick={() => onClickMenu(NavItem.Developers)}
          childItems={MenuChildItems.developers}
        />
        <NavMenuMobileItem
          label="Ecosystem"
          isActive={activeMenu === NavItem.Ecosystem}
          onClick={() => onClickMenu(NavItem.Ecosystem)}
          childItems={MenuChildItems.ecosystem}
        />
        <NavMenuMobileItem
          label="Community"
          isActive={activeMenu === NavItem.Community}
          onClick={() => onClickMenu(NavItem.Community)}
          childItems={MenuChildItems.community}
        />
        <Link href="/">
          <div className="px-8 py-5 flex items-center justify-between">
            <span className="font-medium text-gray-50">Blog</span>
            <svg className="feather w-6 h-6 stroke-gray-50">
              <use href="/feather-sprite.svg#arrow-up-right" />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
}

function NavMenuMobileItem({
  label,
  isActive,
  onClick,
  childItems,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  childItems: ChildItem[];
}): JSX.Element {
  return (
    <div className="shadow-[inset_0_-1px_0_rgba(255,255,255,0.15)]">
      <button
        className="px-8 py-5 flex w-full items-center justify-between transition"
        onClick={onClick}
        type="button"
      >
        <span className="font-medium text-gray-50">{label}</span>
        <svg
          className={clsx(
            "feather w-6 h-6 stroke-gray-50 transition-[transform]",
            { "rotate-180": isActive }
          )}
        >
          <use href="/feather-sprite.svg#chevron-down" />
        </svg>
      </button>
      <div
        className={clsx(
          "transition-[max-height] duration-300 overflow-hidden",
          { "max-h-0": !isActive, "max-h-screen": isActive }
        )}
      >
        <NavMenuMobileChildItem items={childItems} />
      </div>
    </div>
  );
}

interface ChildItem {
  imagePath: string;
  altLabel: string;
  label: string;
  href: string;
}

function NavMenuMobileChildItem({
  items,
}: {
  items: ChildItem[];
}): JSX.Element {
  return (
    <>
      {items.map((item) => (
        <Link href={item.href} key={item.label}>
          <a href={item.href} target="_blank" rel="noreferrer">
            <div className="pl-12 pr-8 py-5 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-5 h-5 relative">
                  <Image
                    layout="fill"
                    src={item.imagePath}
                    alt={item.altLabel}
                  />
                </div>
                <span className="text-gray-50 pl-6">{item.label}</span>
              </div>
              <svg className="feather w-6 h-6 stroke-gray-50">
                <use href="/feather-sprite.svg#arrow-up-right" />
              </svg>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}

function NavMenuItem({
  label,
  childContainerStyle,
  children,
}: {
  label: string;
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
        <MenuItemLabel label={label} />
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

const MenuItemLabel = React.forwardRef(
  ({ label }: { label: string }, ref: React.Ref<HTMLElement>): JSX.Element => {
    const navItemStyle =
      "text-transparent font-medium before:bg-black-900 relative before:button-text before:font-medium before:opacity-100 group-hover:before:opacity-0 before:leading-[20.8px] after:leading-[20.8px] after:button-text after:font-medium after:brand-gradient-1 after:opacity-0 group-hover:after:opacity-100";
    return (
      <span
        ref={ref}
        data-label={label}
        className={`${navItemStyle} before:content-[attr(data-label)] after:content-[attr(data-label)]`}
      >
        {label}
      </span>
    );
  }
);

function NavMenuChildItem({
  href,
  imagePath,
  altLabel,
  label,
}: {
  href: string;
  imagePath: string;
  altLabel: string;
  label: string;
}): JSX.Element {
  const navChildItemStyle =
    "pl-6 text-transparent before:pl-6 before:bg-black-900 relative before:button-text before:opacity-100 [.group-scoped:hover_&]:before:opacity-0 before:left-6 after:left-6 after:button-text after:pl-6 after:brand-gradient-1 after:opacity-0 [.group-scoped:hover_&]:after:opacity-100";
  return (
    <Link href={href}>
      <a href={href} rel="noreferrer" target="_blank">
        <div className="py-3 px-5 flex items-center group-scoped">
          <div className="w-5 h-5 relative">
            <Image layout="fill" src={imagePath} alt={altLabel} />
          </div>
          <span
            data-label={label}
            className={`${navChildItemStyle} before:content-[attr(data-label)] after:content-[attr(data-label)]`}
          >
            {label}
          </span>
        </div>
      </a>
    </Link>
  );
}

NavMenu.Mobile = NavMenuMobile;
