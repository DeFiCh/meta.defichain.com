import Image from "next/image";
import Link from "next/link";
import { MenuItems } from "./NavMenu";

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full relative lg:pt-[242px] pt-[176px] pt-[138px]">
      <div className="container mx-auto">
        <div className="flex flex-row py-10 px-5 md:px-10 lg:px-[102px] rounded-[30px] black-gradient-1 gap-3 md:gap-0">
          <div className="flex flex-col md:flex-row w-full gap-10 md:gap-0">
            <FooterColumn
              category={MenuItems[0].category}
              childLinks={MenuItems[0].childLink}
            />
            <FooterColumn
              category={MenuItems[1].category}
              childLinks={MenuItems[1].childLink}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full gap-10 md:gap-0">
            <FooterColumn
              category={MenuItems[2].category}
              childLinks={MenuItems[2].childLink}
            />
            <div className="w-full">
              <FooterLinkItem
                href={MenuItems[3].href}
                label={MenuItems[3].category}
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
      <div className="font-medium text-white-50">{category}</div>
      {childLinks.map((link) => (
        <FooterLinkItem href={link.href} label={link.label} key={link.label} />
      ))}
    </div>
  );
}

function FooterLinkItem({
  href,
  label,
}: {
  href?: string;
  label: string;
}): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-white-50/60"
    >
      {label}
    </a>
  );
}

function BrandingRow(): JSX.Element {
  return (
    <div className="flex py-10 lg:px-[102px] md:px-10 w-full flex-col md:flex-row md:items-center justify-between">
      <Link className="flex items-center" href="/src/pages">
        <div className="relative w-[149px] h-[43px] mb-[25px] md:mb-0">
          <Image
            data-testid="footer_dmc_logo"
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
  );
}
