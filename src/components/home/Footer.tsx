import clsx from "clsx";
import Image from "next/legacy/image";
import Link from "next/link";
import { MenuItems } from "./NavMenu";

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full relative lg:pt-[242px] pt-[176px] pt-[138px]">
      <div className="container mx-auto">
        <div
          className="backdrop-blur-[6px] flex flex-col md:flex-row py-10 px-5 md:px-10 lg:px-[102px] rounded-[30px] black-gradient-1 gap-y-10 md:gap-0"
          data-testid="dmc-footer"
        >
          <div className="flex flex-row w-full gap-10 md:gap-0">
            <FooterColumn
              category={MenuItems[0].category}
              childLinks={MenuItems[0].childLink}
            />
            <FooterColumn
              category={MenuItems[1].category}
              childLinks={MenuItems[1].childLink}
            />
          </div>
          <div className="flex flex-row w-full gap-10 md:gap-0">
            <FooterColumn
              category={MenuItems[2].category}
              childLinks={MenuItems[2].childLink}
            />
            <div className="w-full">
              <FooterLinkItem
                href={MenuItems[3].href}
                label={MenuItems[3].category}
                disabled={MenuItems[3].disabled}
              />
            </div>
          </div>
        </div>
        <BrandingRow />
      </div>
    </footer>
  );
}

interface FooterLinkItemProps {
  label: string;
  href: string;
  disabled?: boolean;
}

function FooterColumn({
  category,
  childLinks,
}: {
  category: string;
  childLinks: FooterLinkItemProps[];
}): JSX.Element {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        className="font-medium text-white-50"
        data-testid={`footerlink-${category}`}
      >
        {category}
      </div>
      {childLinks.map((link) => (
        <FooterLinkItem
          href={link.href}
          label={link.label}
          key={link.label}
          disabled={link.disabled}
        />
      ))}
    </div>
  );
}

function FooterLinkItem({
  href,
  label,
  disabled,
}: {
  href?: string;
  label: string;
  disabled?: boolean;
}): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={clsx("text-white-50/60", {
        "cursor-default pointer-events-none": disabled,
      })}
      data-testid={`footerlink-${label}`}
    >
      {label}
    </a>
  );
}

function BrandingRow(): JSX.Element {
  return (
    <div className="flex py-10 lg:px-[102px] md:px-10 w-full flex-col md:flex-row items-center justify-between">
      <Link className="flex items-center" href="/">
        <div className="hidden md:block relative w-[203px] h-[36px] mb-[25px] md:mb-0">
          <Image
            data-testid="footer-dmc-logo"
            layout="fill"
            src="/logo.svg"
            alt="DeFi Meta Chain Logo"
            objectFit="contain"
          />
        </div>
      </Link>
      <span className="hidden md:inline font-medium text-white-50">
        EXPLORE DEFIMETACHAIN.COM
      </span>
      <div className="block md:hidden">
        <Link className="flex items-center" href="/">
          <div className="relative w-[149px] h-[43px] mb-[25px] md:mb-0">
            <Image
              data-testid="footer-dmc-logo"
              layout="fill"
              src="/logo.svg"
              alt="DeFi Meta Chain Logo"
              objectFit="contain"
            />
          </div>
        </Link>
        <span className="font-medium text-white-50">
          EXPLORE DEFIMETACHAIN.COM
        </span>
      </div>
    </div>
  );
}
