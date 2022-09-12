import GradientText from "@components/ui/GradientText";
import Image from "next/image";
import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

export default function SectionFour(): JSX.Element {
  const SectionFourContent = [
    {
      index: 1,
      title: "Download wallet",
      content:
        "By connecting their MetaMask wallets to DeFi Meta Chain, users are able to directly manage their own funds.<br /><br />More wallets will be made compatible with DeFi Meta Chain in the future. Please keep posted for future updates and announcements.",
    },
    {
      index: 2,
      title: "Get DFI",
      content:
        "DFI is the currency of the Native DeFiChain and DeFi Meta Chain. By using DFI, users will be able to access any dApps on DeFi Meta Chain.",
    },
    {
      index: 3,
      title: "Use a dApp",
      content:
        "Start discovering the latest and most popular decentralized applications on DeFi Meta Chain.",
    },
  ];
  return (
    <div className="container mx-auto lg:px-[150px] pt-[344px] md:pt-[240px]">
      <SectionHeader
        header="Join the DMC Ecosystem"
        hint="DMC ECOSYSTEM"
        hintStyle="brand-gradient-1 text-start"
        headerStyle="text-start mb-6 md:mb-8 lg:w-[592px] md:w-[511px]"
        containerStyle="items-start"
      />
      <span className="text-white-50 text-xl inline-block lg:w-[592px] md:w-[511px]">
        Start exploring and unlock the limitless potential of DMC by following
        these 3 simple steps:
      </span>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 md:gap-0 lg:mt-[119px] md:mt-[68px] mt-12">
        <div className="w-full relative group lg:left-0 md:left-[25%] md:w-[55vw] lg:w-2/4 px-[20px] md:px-10 lg:mb-0 md:mb-[85px] lg:pb-[61px] py-10 lg:pt-4 rounded-[30px] border-[0.5px] border-white-50 brand-shadow black-gradient-1">
          <div className="hidden md:absolute md:block flex items-end lg:relative lg:top-[-65px] lg:left-[-49px] md:right-[0px] md:top-[-82px]">
            <div className="hidden md:block absolute w-[179px] h-[179px] z-[3] group-hover:rotate-[19.53deg] transition duration-300">
              <Image
                data-testid="clay_wallet"
                layout="fill"
                src="/home/clay-wallet.svg"
                alt="Wallet"
                objectFit="contain"
              />
            </div>
            <div className="hidden md:block relative left-[67px] top-[81px] z-[1] w-[86px] h-[86px] group-hover:rotate-[53.78deg] group-hover:translate-x-[44px] transition duration-300">
              <Image
                data-testid="clay_dollar_medium"
                layout="fill"
                src="/home/clay-dollar.svg"
                alt="Medium dollar"
                objectFit="contain"
              />
            </div>
            <div className="hidden md:block relative left-[89px] top-[16px] z-[2] w-[63px] h-[63px] group-hover:rotate-[-5.14deg] group-hover:translate-x-[75px] transition duration-300">
              <Image
                data-testid="clay_dollar_small"
                layout="fill"
                src="/home/clay-dollar.svg"
                alt="Small dollar"
                objectFit="contain"
              />
            </div>
          </div>
          <SectionFourItem
            index={1}
            title={SectionFourContent[0].title}
            content={SectionFourContent[0].content}
          />
        </div>
        <div className="w-full lg:w-2/4 flex flex-col">
          <div className="group grow relative lg:w-full md:w-[55vw] mb-5 lg:mb-5 md:mb-[93px] md:p-10 px-5 py-10 rounded-[30px] border-[0.5px] border-white-50 brand-shadow black-gradient-1">
            <SectionFourItem
              index={2}
              title={SectionFourContent[1].title}
              content={SectionFourContent[1].content}
            >
              <div className="hidden md:block absolute right-[-35px] top-[-37px] z-[1] w-[175.8px] h-[114.1px] group-hover:rotate-[150.78deg] transition duration-300">
                <Image
                  data-testid="clay_dfi"
                  layout="fill"
                  src="/home/clay-dfi.png"
                  alt="DFI"
                  objectFit="contain"
                />
              </div>
            </SectionFourItem>
          </div>
          <div className="group grow relative lg:w-full md:w-[55vw] lg:left-0 md:left-[25%] md:p-10 px-5 py-10 rounded-[30px] border-[0.5px] border-white-50 brand-shadow black-gradient-1">
            <SectionFourItem
              index={3}
              title={SectionFourContent[2].title}
              content={SectionFourContent[2].content}
            >
              <div className="hidden md:block absolute right-[-35px] top-[-37px] z-[1] w-[125px] h-[125px] group-hover:rotate-[100.78deg] transition duration-300">
                <Image
                  data-testid="clay_block"
                  layout="fill"
                  src="/home/clay-block.png"
                  alt="dApp"
                  objectFit="contain"
                />
              </div>
            </SectionFourItem>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionFourItem({
  index,
  title,
  content,
  children,
}: {
  index: number;
  title: string;
  content: string;
  children?: ReactNode;
}): JSX.Element {
  return (
    <>
      <div className="flex items-center mb-4">
        <span className="group-hover:bg-[#42F9C2] transition duration-300 w-[28px] h-[28px] bg-white-50 text-black-900 rounded-full flex justify-center items-center font-bold text-xl">
          {index}
        </span>
        <GradientText
          label={title}
          gradient="after:brand-gradient-2"
          customStyle="ml-3 font-bold text-[32px] leading-[32px]"
        />
        {children}
      </div>
      <span
        className="text-white-600"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}
