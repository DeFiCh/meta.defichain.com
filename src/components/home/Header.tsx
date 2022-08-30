import Button from "@components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header>
      <nav className="flex justify-between w-full ">
        <Link className="flex items-center" href="/src/pages">
          <div className="relative w-[149px]">
            <Image
              data-testid="dmc_logo"
              layout="fill"
              src="/logo.svg"
              alt="DeFi Meta Chain Logo"
              objectFit="contain"
            />
          </div>
        </Link>
        <Button
          label={
            <div className="flex items-center ">
              <span className="pr-1.5 relative before:button-text before:content-['Get_DFI'] before:bg-white-50 before:opacity-100 group-hover:before:opacity-0 after:button-text after:content-['Get_DFI'] after:brand-gradient-1 after:opacity-0 group-hover:after:opacity-100">
                Get DFI
              </span>
            </div>
          }
          onClick={() => {/* TODO: add handler */}}
        />
      </nav>
    </header>
  )
}