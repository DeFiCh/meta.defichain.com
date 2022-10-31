import Button from "@components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavMenu from "./NavMenu";

export default function Header(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header>
      <nav className="container mx-auto flex justify-between w-full items-center">
        <Link className="flex items-center" href="/src/pages">
          <div className="relative w-[203px] h-[36px]">
            <Image
              data-testid="dmc_logo"
              layout="fill"
              src="/logo.svg"
              alt="DeFi Meta Chain Logo"
              objectFit="contain"
            />
          </div>
        </Link>
        <NavMenu />
        <div className="flex items-center">
          <Button
            // label="Get DFI"
            // href="https://defichain.com/dfi"
            label="Coming Soon"
            href="#"
            customStyle="hidden md:block"
          />
          <svg
            className="feather w-6 h-6 stroke-white-50 block lg:hidden md:ml-6"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <use href="/feather-sprite.svg#menu" />
          </svg>
        </div>
        <NavMenu.Mobile
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </nav>
    </header>
  );
}
