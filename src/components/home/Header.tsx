import Button from "@components/ui/Button";
import { Canvas, Euler, Vector3 } from "@react-three/fiber";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Jellyfish from "./Jellyfish";
import NavMenu from "./NavMenu";

export default function Header(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-between relative px-4 pt-6 md:px-[40px] md:pt-6 lg:px-[120px] lg:pt-[52px]">
        <div className="w-full h-screen absolute z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-contain lg:bg-[url('/background/portal-gradient-1.png')] md:bg-[url('/background/tablet-portal-gradient-1.png')] bg-[url('/background/mobile-portal-gradient-1.png')]" />
        <header>
          <nav className="flex justify-between w-full items-center">
            <Link className="flex items-center" href="/src/pages">
              <div className="relative w-[149px] h-[43px]">
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
                label="Get DFI"
                href="https://defichain.com/dfi"
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
        <JellyfishBackground
          desktop={{
            position: [0, 300, -600],
            rotation: [0.3, -0.4, -0.27],
            containerStyle: "left-0",
          }}
          tablet={{
            position: [-220, 100, -600],
            rotation: [0.1, -0.4, -0.27],
            containerStyle: "left-0",
          }}
          mobile={{
            position: [30, 400, -600],
            rotation: [0.3, -0.4, -0.27],
            containerStyle: "left-0",
          }}
        />
        <SectionOne />
      </section>
      <section className="w-full lg:h-screen relative flex flex-col justify-center px-4 md:px-[40px] lg:px-[120px]">
        <div className="w-full h-screen absolute top-[-50vh] z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-contain bg-right lg:bg-[url('/background/gradient-2.png')] md:bg-[url('/background/tablet-gradient-2.png')] bg-[url('/background/mobile-gradient-2.png')]" />
        <JellyfishBackground
          desktop={{
            position: [0, 300, -500],
            rotation: [0.4, -0.4, 0.27],
            containerStyle: "right-0",
          }}
          tablet={{
            position: [150, 100, -600],
            rotation: [0.3, -0.4, 0.27],
            containerStyle: "right-0",
          }}
          mobile={{
            position: [-20, 500, -600],
            rotation: [0.8, -0.4, 0.27],
            containerStyle: "right-0",
          }}
        />
        <SectionTwo />
      </section>
      <section className="w-full h-screen relative top-[-50vh] px-4 md:px-[40px] lg:px-[120px]">
        <div className="w-full h-screen absolute z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-contain lg:bg-[url('/background/gradient-3.png')] md:bg-[url('/background/tablet-gradient-3.png')]" />
        <div className="absolute z-[-2] top-0 left-0 w-[180px] h-screen">
          <Canvas>
            <Jellyfish
              position={[0, 130, -300]}
              rotation={[0.2, -0.4, -0.27]}
            />
            <ambientLight intensity={1} />
          </Canvas>
        </div>
        <div className="relative top-[50vh]">
          <h1 className="text-white-50 text-6xl font-bold text-center">
            Hello world
          </h1>
        </div>
      </section>
      <section className="w-full h-screen relative top-[-50vh] px-4 pt-6 md:px-[40px] md:pt-6 lg:px-[120px] lg:pt-[52px]">
        <div className="w-full h-screen absolute z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-contain bg-right bg-[url('/background/gradient-4.png')]" />
        <div className="absolute z-[-2] top-0 right-0 w-[180px] h-screen">
          <Canvas>
            <Jellyfish position={[0, 250, -750]} rotation={[0.2, -0.4, 0.55]} />
            <ambientLight intensity={1} />
          </Canvas>
        </div>
        <div className="relative top-[50vh]">
          <h1 className="text-white-50 text-6xl font-bold text-center">
            Hello world
          </h1>
        </div>
      </section>
      <section className="w-full h-screen relative top-[-50vh] px-4 pt-6 md:px-[40px] md:pt-6 lg:px-[120px] lg:pt-[52px]">
        <div className="w-full h-screen absolute z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-contain bg-[url('/background/gradient-5.png')]" />
        <div className="absolute z-[-2] top-0 left-0 w-[180px] h-screen">
          <Canvas>
            <Jellyfish
              position={[-120, 400, -1000]}
              rotation={[0.2, -0.4, 0.35]}
            />
            <ambientLight intensity={1} />
          </Canvas>
        </div>
        <div className="relative top-[50vh]">
          <h1 className="text-white-50 text-6xl font-bold text-center">
            Hello world
          </h1>
        </div>
      </section>
    </>
  );
}

function SectionOne(): JSX.Element {
  return (
    <div className="flex flex-col grow items-center lg:justify-between md:mt-[15%] mt-[350px]">
      <div className="flex flex-col text-center items-center">
        <SectionHeader
          header="Build next gen dApps with tools of the future"
          hint="UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN"
          containerStyle="lg:w-3/4"
        />
        <span className="mb-8 lg:w-3/5 md:text-xl text-white-50">
          DeFi Meta Chain (DMC) is a powerful EVM-compatible blockchain parallel
          to DeFiChain, a leader in DeFi. Built to future proof trends, DMC
          achieves ecosystem scalability by providing developers with familiar
          tools to build the future of DeFi today.
        </span>
        <Button
          label="Develop with DeFiMetaChain"
          href="#"
          customStyle="font-medium mb-8"
        />
      </div>
      <div className="md:hidden lg:flex flex-col lg:flex-row relative lg:-bottom-5 p-5 lg:mt-0 mt-[46px] items-center rounded-[15px] border-[0.5px] black-gradient-1 shadow-[0px_3px_6px_rgba(0,0,0,0.2),_0px_5px_20px_-1px_rgba(0,0,0,0.2)]">
        <StatsItem stats="$1.12" label="DFI PRICE" />
        <StatsItem stats="125+" label="APPS & SERVICES" />
        <StatsItem stats="$0.0002" label="LOW FEES" />
        <StatsItem stats="23,312,231" label="TOTAL TRANSACTION" />
        <StatsItem
          stats="558,197,231"
          label="CIRCULATING DFI"
          hasSeparator={false}
        />
      </div>
      <div className="md:flex flex-col hidden lg:hidden mt-[108px] items-center">
        <div className="flex items-center p-5 mb-2 rounded-[15px] border-[0.5px] black-gradient-1 shadow-[0px_3px_6px_rgba(0,0,0,0.2),_0px_5px_20px_-1px_rgba(0,0,0,0.2)]">
          <StatsItem stats="$1.12" label="DFI PRICE" />
          <StatsItem stats="125+" label="APPS & SERVICES" />
          <StatsItem stats="$0.0002" label="LOW FEES" hasSeparator={false} />
        </div>
        <div className="flex items-center p-5 rounded-[15px] border-[0.5px] black-gradient-1 shadow-[0px_3px_6px_rgba(0,0,0,0.2),_0px_5px_20px_-1px_rgba(0,0,0,0.2)]">
          <StatsItem stats="23,312,231" label="TOTAL TRANSACTION" />
          <StatsItem
            stats="558,197,231"
            label="CIRCULATING DFI"
            hasSeparator={false}
          />
        </div>
      </div>
    </div>
  );
}

interface ViewProps {
  position: Vector3;
  rotation: Euler;
  containerStyle?: string;
}
interface JellyfishBackgroundProps {
  desktop: ViewProps;
  tablet: ViewProps;
  mobile: ViewProps;
}

function JellyfishBackground({
  desktop,
  tablet,
  mobile,
}: JellyfishBackgroundProps): JSX.Element {
  return (
    <>
      <div
        className={`hidden lg:block absolute z-[-2] top-0 w-[250px] h-screen ${
          desktop.containerStyle ?? ""
        }`}
      >
        <Canvas>
          <Jellyfish position={desktop.position} rotation={desktop.rotation} />
          <ambientLight intensity={1} />
        </Canvas>
      </div>
      <div
        className={`hidden md:block lg:hidden absolute z-[-2] top-0 w-screen h-screen ${
          tablet.containerStyle ?? ""
        }`}
      >
        <Canvas>
          <Jellyfish position={tablet.position} rotation={tablet.rotation} />
          <ambientLight intensity={1} />
        </Canvas>
      </div>
      <div
        className={`block md:hidden absolute z-[-2] top-0 w-screen h-screen ${
          mobile.containerStyle ?? ""
        }`}
      >
        <Canvas>
          <Jellyfish position={mobile.position} rotation={mobile.rotation} />
          <ambientLight intensity={1} />
        </Canvas>
      </div>
    </>
  );
}

function StatsItem({
  stats,
  label,
  hasSeparator = true,
}: {
  stats: string;
  label: string;
  hasSeparator?: boolean;
}): JSX.Element {
  return (
    <div
      className={clsx("flex items-center justify-center border-white-600", {
        "md:border-r md:mr-5 md:pr-5 md:mb-0 mb-4": hasSeparator === true,
      })}
    >
      <span className="text-white-50 font-light md:text-2xl text-xl md:mr-5 mr-3">
        {stats}
      </span>
      <span className="text-xs font-medium text-transparent bg-clip-text brand-gradient-2">
        {label}
      </span>
    </div>
  );
}

function SectionHeader({
  header,
  hint,
  hintGradient = "brand-gradient-1",
  containerStyle,
}: {
  header: string;
  hint: string;
  hintGradient?: "brand-gradient-1" | "brand-gradient-2";
  containerStyle?: string;
}): JSX.Element {
  return (
    <div className={`flex flex-col items-center ${containerStyle ?? ""}`}>
      <span
        className={`mb-8 text-center text-transparent bg-clip-text ${hintGradient} font-medium`}
      >
        {hint}
      </span>
      <span className="mb-8 font-bold lg:text-[80px] lg:leading-[80px] md:text-[56px] md:leading-[56px] text-[32px] leading-[32px] text-white-50 text-center">
        {header}
      </span>
    </div>
  );
}

function SectionTwo(): JSX.Element {
  return (
    <div className="flex flex-col justify-center mt-[200px] md:mt-0">
      <SectionHeader
        header="Stay updated"
        hint="WHAT'S NEW"
        hintGradient="brand-gradient-2"
      />
      <div className="flex md:flex-row flex-col md:items-start justify-center">
        <StayUpdatedCard
          imagePath="/mainnet-launch.png"
          label="Launch of DMC MainNet"
          containerStyle="lg:mr-6 md:mr-4"
        />
        <StayUpdatedCard
          imagePath="/testnet-launch.png"
          label="Launch of DMC TestNet"
          containerStyle="lg:mr-6 md:mr-4"
        />
        <StayUpdatedCard
          imagePath="/dmc-hackathon.png"
          label="DMC Hackathon (coming soon)"
        />
      </div>
    </div>
  );
}

function StayUpdatedCard({
  imagePath,
  label,
  containerStyle,
}: {
  imagePath: string;
  label: string;
  containerStyle?: string;
}): JSX.Element {
  return (
    <div
      className={`flex flex-col justify-center items-center mb-16 md:mb-0 ${
        containerStyle ?? ""
      }`}
    >
      <div className="relative mb-5 lg:w-[284px] md:w-[218px] w-[328px] h-[140px] border overflow-hidden rounded-[30px] border-transparent">
        <Image layout="fill" src={imagePath} alt={label} objectFit="cover" />
      </div>
      <span className="text-white-50 text-center md:w-[218px]">{label}</span>
    </div>
  );
}
