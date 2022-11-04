import Button from "@components/ui/Button";
import Image from "next/legacy/image";
import SectionHeader from "./SectionHeader";

export default function SectionThree(): JSX.Element {
  const BuildOnDMCContent = [
    {
      index: 1,
      title: "EVM-Compatible Blockchain",
      content:
        "DeFi Meta Chain provides an EVM-compatible environment that allows developers familiar with the Ethereum ecosystem to seamlessly and effortlessly build next generation DeFi applications on the Native DeFiChain.<br/><br/>Utilize familiar tools, features and infrastructure while exploring infinite possibilities to build upon new ones:<br/><br/><ul class='list-disc list-inside'><li>Smart contracts written in Solidity</li><li>ERC-20 tokens</li><li>Support</li></ul>",
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
    <div className="container mx-auto flex flex-col gap-x-5 md:flex-row justify-center lg:px-[150px]">
      <div className="w-full md:w-2/4">
        <SectionHeader
          header="DeFi<br/>Meta Chain"
          hint="Build on DMC"
          hintStyle="brand-gradient-1 text-start"
          headerStyle="text-start"
          containerStyle="items-start"
          testId="section_three"
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
        <Button
          label="Read Documentation (coming soon)"
          href="#"
          customStyle="font-medium"
        />
        <div className="hidden md:block mt-32">
          <SectionThreeItem
            index={BuildOnDMCContent[1].index}
            title={BuildOnDMCContent[1].title}
            content={BuildOnDMCContent[1].content}
            cubeVariant="triplet"
            cubeContainerStyle="relative bottom-[-258px]"
          />
        </div>
      </div>
      <div className="w-full md:w-2/4 pt-16 md:pt-[516px]">
        <SectionThreeItem
          index={BuildOnDMCContent[0].index}
          title={BuildOnDMCContent[0].title}
          content={BuildOnDMCContent[0].content}
          cubeVariant="singlet"
          cubeContainerStyle="relative bottom-[-258px]"
        />
        <div className="hidden md:block mt-8">
          <SectionThreeItem
            index={BuildOnDMCContent[2].index}
            title={BuildOnDMCContent[2].title}
            content={BuildOnDMCContent[2].content}
            cubeVariant="triplet-stairs"
            cubeContainerStyle="relative bottom-[-258px]"
          />
        </div>
      </div>
      <div className="w-full block md:hidden">
        <SectionThreeItem
          index={BuildOnDMCContent[1].index}
          title={BuildOnDMCContent[1].title}
          content={BuildOnDMCContent[1].content}
          cubeVariant="triplet"
          cubeContainerStyle="relative bottom-[-258px]"
        />
        <SectionThreeItem
          index={BuildOnDMCContent[2].index}
          title={BuildOnDMCContent[2].title}
          content={BuildOnDMCContent[2].content}
          cubeVariant="triplet-stairs"
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
      <div className="cube-left left-[0px] top-[33px] h-[66px] absolute before:gradient-cube before:bg-[#42F9C2] before:opacity-100 group-hover:before:opacity-0 after:gradient-cube after:cube-gradient-1 after:opacity-0 group-hover:after:opacity-100 w-[56px] border-0.5 border-black-900" />
      <div className="cube-top top-[-3px] right-[-17px] w-[78px] h-[46px] relative before:gradient-cube before:brand-gradient-2 before:opacity-100 group-hover:before:opacity-0 after:gradient-cube after:cube-gradient-2 after:opacity-0 group-hover:after:opacity-100 border-0.5 border-black-900" />
      <div className="cube-right top-[-13px] left-[57px] h-[66px] relative before:gradient-cube before:brand-gradient-2 before:opacity-100 group-hover:before:opacity-0 after:gradient-cube after:cube-gradient-2 after:opacity-0 group-hover:after:opacity-100 w-[56px] border-0.5 border-black-900" />
    </div>
  );
}

function SectionThreeItem({
  index,
  title,
  content,
  cubeVariant,
  cubeContainerStyle,
}: {
  index: number;
  title: string;
  content: string;
  cubeVariant: "singlet" | "triplet" | "triplet-stairs";
  cubeContainerStyle?: string;
}): JSX.Element {
  return (
    <div>
      {cubeVariant === "singlet" && (
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
      )}
      {cubeVariant === "triplet" && (
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
      {cubeVariant === "triplet-stairs" && (
        <>
          <div
            className={`hidden md:block origin-top-left scale-50 ${
              cubeContainerStyle ?? ""
            }`}
          >
            <CubeModel />
            <CubeModel containerStyle="top-[-295px] left-[114px]" />
            <CubeModel containerStyle="top-[-316px] left-[57px]" />
          </div>
          <div className="block md:hidden relative w-[94px] h-[135px] mt-14 mb-5 ">
            <Image
              data-testid="triple_stairs"
              layout="fill"
              src="/home/triple-stairs.svg"
              alt="Triple Stairs"
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
