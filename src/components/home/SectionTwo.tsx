import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function SectionTwo(): JSX.Element {
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
