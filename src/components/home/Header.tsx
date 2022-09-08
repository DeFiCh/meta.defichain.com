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
      <section className="w-full min-h-screen relative px-4 md:px-[40px] lg:px-[120px]">
        <div className="w-full h-full absolute top-[-50vh] z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-contain lg:bg-[url('/background/gradient-3.png')] md:bg-[url('/background/tablet-gradient-3.png')] bg-[url('/background/mobile-gradient-3.png')]" />
        <div className="w-full h-full block md:hidden absolute top-[50vh] z-[-1] mix-blend-screen top-0 right-0 bg-no-repeat bg-contain bg-[url('/background/mobile-gradient-2.png')]" />
        <JellyfishBackground
          desktop={{
            position: [0, 280, -300],
            rotation: [0.4, -0.5, -0.4],
            containerStyle: "left-0",
          }}
          tablet={{
            position: [-150, -60, -500],
            rotation: [-0.5, -0.4, -0.4],
            containerStyle: "left-0",
          }}
          mobile={{
            position: [100, 350, -350],
            rotation: [0.5, -0.4, -0.27],
            containerStyle: "left-0",
          }}
        />
        <SectionThree />
      </section>
      <section className="w-full h-screen relative px-4 md:px-[40px] lg:px-[120px]">
        <div className="w-full h-screen absolute top-[0vh] z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-contain bg-right lg:bg-[url('/background/gradient-4.png')] md:bg-[url('/background/tablet-gradient-4.png')] bg-[url('/background/mobile-gradient-4.png')]" />
        <div className="absolute z-[-2] top-0 right-0 w-[180px] h-screen">
          <Canvas>
            <Jellyfish position={[0, 250, -750]} rotation={[0.2, -0.4, 0.55]} />
            <ambientLight intensity={1} />
          </Canvas>
        </div>
        <div className="">
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
  hintStyle = "brand-gradient-1 text-center",
  headerStyle = "text-center",
  containerStyle = "items-center",
}: {
  header: string;
  hint: string;
  hintStyle?: string;
  headerStyle?: string;
  containerStyle?: string;
}): JSX.Element {
  return (
    <div className={`flex flex-col ${containerStyle ?? ""}`}>
      <span
        className={`mb-8 text-transparent bg-clip-text ${hintStyle} font-medium`}
      >
        {hint}
      </span>
      <span
        className={`mb-8 font-bold lg:text-[80px] lg:leading-[80px] md:text-[56px] md:leading-[56px] text-[32px] leading-[32px] text-white-50 ${headerStyle}`}
      >
        {header}
      </span>
    </div>
  );
}

function SectionTwo(): JSX.Element {
  return (
    <div className="flex flex-col justify-center mt-[200px] md:mt-0 ">
      <SectionHeader
        header="Stay updated"
        hint="WHAT'S NEW"
        hintStyle="brand-gradient-2 text-center"
      />
      <div className="flex md:flex-row flex-col md:items-start justify-center">
        <StayUpdatedCard
          imagePath="/home/mainnet-launch.png"
          label="Launch of DMC MainNet"
          containerStyle="lg:mr-6 md:mr-4"
        />
        <StayUpdatedCard
          imagePath="/home/testnet-launch.png"
          label="Launch of DMC TestNet"
          containerStyle="lg:mr-6 md:mr-4"
        />
        <StayUpdatedCard
          imagePath="/home/dmc-hackathon.png"
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

function SectionThree(): JSX.Element {
  const BuildOnDMCContent = [
    {
      index: 1,
      title: "EVM-Compatible Blockchain",
      content:
        "Smoothly migrate applications deployed in the Ethereum or other EVM ecosystem to DMC without the extra time and effort of redevelopment.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  dolore magna aliqua.",
    },
    {
      index: 2,
      title: "Scalable Ecosystem",
      content:
        "Built on the basis of a parallel-chain approach, DeFi Meta Chain allows for cross-compatibility with other blockchains - giving DFI users extensive and unrestrained access to Ethereum and other EMV-compatible chains.",
    },
    {
      index: 3,
      title: "Future Proof Trends",
      content:
        "Constantly evolving, DeFi Meta Chain allows developers to not just keep up with the latest trends, but also create Web3 innovations that will serve as key drivers of the industry’s future.",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-center lg:px-[150px] pt-[200px] lg:pt-0">
      <div className="w-full md:w-2/4">
        <SectionHeader
          header="DeFi Meta Chain"
          hint="Build on DMC"
          hintStyle="brand-gradient-1 text-start"
          headerStyle="text-start"
          containerStyle="items-start"
        />
        <span className="text-white-50 text-xl mb-8 block">
          DeFi Meta Chain is an EVM-compatible blockchain that uses Proof of
          Authority (POA) and runs in parallel with the Native DeFiChain
          blockchain.
          <br />
          <br />
          Read through the documentation to get started with deploying next
          generation DeFi applications on DeFi Meta Chain.{" "}
        </span>
        <Button label="Read Documentation" href="#" customStyle="font-medium" />
        <div className="hidden md:block mt-16">
          <SectionThreeItem
            index={BuildOnDMCContent[1].index}
            title={BuildOnDMCContent[1].title}
            content={BuildOnDMCContent[1].content}
            cubeNumber="triplet"
            cubeContainerStyle="relative bottom-[-258px]"
          />
        </div>
      </div>
      <div className="w-full md:w-2/4 pt-16 md:pt-[516px]">
        <SectionThreeItem
          index={BuildOnDMCContent[0].index}
          title={BuildOnDMCContent[0].title}
          content={BuildOnDMCContent[0].content}
          cubeNumber="singlet"
          cubeContainerStyle="relative bottom-[-258px]"
        />
        <div className="hidden md:block">
          <SectionThreeItem
            index={BuildOnDMCContent[2].index}
            title={BuildOnDMCContent[2].title}
            content={BuildOnDMCContent[2].content}
            cubeNumber="triplet"
            cubeContainerStyle="relative bottom-[-258px]"
          />
        </div>
      </div>
      <div className="w-full block md:hidden">
        <SectionThreeItem
          index={BuildOnDMCContent[1].index}
          title={BuildOnDMCContent[1].title}
          content={BuildOnDMCContent[1].content}
          cubeNumber="triplet"
          cubeContainerStyle="relative bottom-[-258px]"
        />
        <SectionThreeItem
          index={BuildOnDMCContent[2].index}
          title={BuildOnDMCContent[2].title}
          content={BuildOnDMCContent[2].content}
          cubeNumber="triplet"
          cubeContainerStyle="relative bottom-[-258px]"
        />
      </div>
    </div>
  );
}

function CubeModel({
  containerStyle,
}: {
  containerStyle?: string;
}): JSX.Element {
  return (
    <div className={`relative group w-[112px] ${containerStyle ?? ""}`}>
      <div className="cube-left left-[0px] top-[33px] h-[66px] absolute before:gradient-cube before:bg-[#42F9C2] before:opacity-100 group-hover:before:opacity-0 after:gradient-cube after:cube-gradient-1 after:opacity-0 group-hover:after:opacity-100 w-[56px] border-0.5 border-black-900"></div>
      <div className="cube-top top-[-3px] right-[-17px] w-[78px] h-[46px] relative before:gradient-cube before:brand-gradient-2 before:opacity-100 group-hover:before:opacity-0 after:gradient-cube after:cube-gradient-2 after:opacity-0 group-hover:after:opacity-100 border-0.5 border-black-900"></div>
      <div className="cube-right top-[-13px] left-[57px] h-[66px] relative before:gradient-cube before:brand-gradient-2 before:opacity-100 group-hover:before:opacity-0 after:gradient-cube after:cube-gradient-2 after:opacity-0 group-hover:after:opacity-100 w-[56px] border-0.5 border-black-900"></div>
    </div>
  );
}

function SectionThreeItem({
  index,
  title,
  content,
  cubeNumber,
  cubeContainerStyle,
}: {
  index: number;
  title: string;
  content: string;
  cubeNumber: "singlet" | "triplet";
  cubeContainerStyle?: string;
}): JSX.Element {
  return (
    <div>
      {cubeNumber === "singlet" ? (
        <div className="mb-5">
          <div className="hidden md:block">
            <CubeModel />
          </div>
          <div className="block md:hidden relative w-[98px] h-[113px]">
            <Image
              data-testid="single_cube"
              layout="fill"
              src="/home/single-cube.svg"
              alt="Single Cube"
              objectFit="contain"
            />
          </div>
        </div>
      ) : (
        <>
          <div
            className={`hidden md:block origin-top-left scale-50 ${
              cubeContainerStyle ?? ""
            }`}
          >
            <CubeModel />
            <CubeModel containerStyle="top-[-112px] left-[114px]" />
            <CubeModel containerStyle="top-[-316px] left-[57px]" />
          </div>
          <div className="block md:hidden relative w-[112px] h-[113px] mt-14 mb-5 ">
            <Image
              data-testid="triple_cube"
              layout="fill"
              src="/home/triple-cube.svg"
              alt="Triple Cube"
              objectFit="contain"
            />
          </div>
        </>
      )}

      <span className="text-white-50 text-bold text-[32px] leading-[32px] block">
        {index}.
      </span>
      <span
        className="text-white-50 text-bold text-[32px] leading-[32px] mb-5 block"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <span
        className="text-white-600"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
