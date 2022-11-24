import Button from "@components/ui/Button";
import { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

export default function Header(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header>
      <nav className="container mx-auto flex justify-between w-full items-center">
        <Logo />
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
            className="feather w-6 h-6 stroke-white-50 block min-[1361px]:hidden md:ml-6"
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
