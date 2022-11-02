import Image, { StaticImageData } from "next/image";
import MainnetLaunch from "@public/home/mainnet-launch.png";
import TestnetLaunch from "@public/home/testnet-launch.png";
import DMCHackathon from "@public/home/dmc-hackathon.png";
import SectionHeader from "./SectionHeader";

export default function SectionTwo(): JSX.Element {
  return (
    <div className="container mx-auto flex flex-col justify-center mt-[200px] md:mt-0">
      <SectionHeader
        header="Stay updated"
        hint="WHAT'S NEW"
        hintStyle="brand-gradient-2 text-center"
      />
      <div className="flex md:flex-row flex-col md:items-start justify-center">
        <StayUpdatedCard
          image={MainnetLaunch}
          label="Launch of DMC MainNet (coming soon)"
          containerStyle="lg:mr-6 md:mr-4"
        />
        <StayUpdatedCard
          image={TestnetLaunch}
          label="Launch of DMC TestNet (coming soon)"
          containerStyle="lg:mr-6 md:mr-4"
        />
        <StayUpdatedCard
          image={DMCHackathon}
          label="DMC Hackathon (coming soon)"
        />
      </div>
    </div>
  );
}

function StayUpdatedCard({
  image,
  label,
  containerStyle,
}: {
  image: StaticImageData;
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
        <Image
          unoptimized
          layout="fill"
          src={image}
          alt={label}
          objectFit="cover"
        />
      </div>
      <span className="text-white-50 text-center md:w-[218px]">{label}</span>
    </div>
  );
}
