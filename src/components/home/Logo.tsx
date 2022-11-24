import Image from "next/legacy/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className="flex items-center" href="/">
      <div className="relative w-[203px] h-[36px]">
        <Image
          data-testid="dmc-logo"
          layout="fill"
          src="/logo.svg"
          alt="DeFi Meta Chain Logo"
          objectFit="contain"
        />
      </div>
    </Link>
  );
}
