import GradientText from "@components/ui/GradientText";
import Image from "next/image";
import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

export default function SectionFive(): JSX.Element {
  const SectionFiveContent = [
    {
      title: "Discord",
      content: "Ask technical question on the Community Discord.",
    },
    {
      title: "Twitter",
      content: "Follow @defichain to get the latest news and updates.",
    },
    {
      title: "GitHub",
      content: "<Need content>",
    },
    {
      title: "YouTube",
      content: "<Need content>",
    },
    {
      title: "Telegram",
      content: "Ask general question and chat with the global community.",
    },
  ];
  return (
    <div className="lg:px-[150px] pt-[344px] md:pt-[240px] flex flex-col md:flex-row">
      <div className="block md:hidden mb-14">
        <SectionHeader
          header="Meet the DMC Community"
          hint="COMMUNITY"
          hintStyle="brand-gradient-1 text-start"
          headerStyle="text-start mb-8"
          containerStyle="items-start"
        />
        <span className="text-white-50 text-xl inline-block ">
          Join our global fast-growing community of developers, validators,
          users, HODLers and enthusiasts, in building the next vision of a
          decentralized network.
        </span>
      </div>
      <div className="md:mr-[72px]">
        <SectionFiveItem
          title={SectionFiveContent[0].title}
          content={SectionFiveContent[0].content}
        >
          <CommunityIcon
            iconHeight="h-[34.83px]"
            path="/home/discord.svg"
            altLabel="Discord"
          />
        </SectionFiveItem>
        <SectionFiveItem
          title={SectionFiveContent[1].title}
          content={SectionFiveContent[1].content}
        >
          <CommunityIcon
            iconHeight="h-[36px]"
            path="/home/twitter.svg"
            altLabel="Twitter"
          />
        </SectionFiveItem>
        <SectionFiveItem
          title={SectionFiveContent[2].title}
          content={SectionFiveContent[2].content}
        >
          <CommunityIcon
            iconHeight="h-[44px]"
            path="/home/github.svg"
            altLabel="GitHub"
          />
        </SectionFiveItem>
        <SectionFiveItem
          title={SectionFiveContent[3].title}
          content={SectionFiveContent[3].content}
        >
          <CommunityIcon
            iconHeight="h-[31px]"
            path="/home/youtube.svg"
            altLabel="YouTube"
          />
        </SectionFiveItem>
        <SectionFiveItem
          title={SectionFiveContent[4].title}
          content={SectionFiveContent[4].content}
        >
          <CommunityIcon
            iconHeight="h-[38px]"
            path="/home/telegram.svg"
            altLabel="Telegram"
          />
        </SectionFiveItem>
      </div>
      <div className="lg:w-[438px] md:w-[330px] hidden md:block">
        <SectionHeader
          header="Meet the DMC Community"
          hint="COMMUNITY"
          hintStyle="brand-gradient-1 text-start"
          headerStyle="text-start mb-8"
          containerStyle="items-start"
        />
        <span className="text-white-50 text-xl inline-block ">
          Join our global fast-growing community of developers, validators,
          users, HODLers and enthusiasts, in building the next vision of a
          decentralized network.
        </span>
      </div>
    </div>
  );
}

function SectionFiveItem({
  title,
  content,
  children,
}: {
  title: string;
  content: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="rounded-[15px] border-[0.5px] p-5 mb-5 relative group black-gradient-1">
      <div className="text-xl font-bold text-white-50 mb-2">{title}</div>
      <div className="text-white-600">{content}</div>
      {children}
    </div>
  );
}

function CommunityIcon({
  iconHeight,
  path,
  altLabel,
}: {
  iconHeight: string;
  path: string;
  altLabel: string;
}): JSX.Element {
  return (
    <div
      className={`absolute md:-right-2 right-0 -top-2 z-[1] w-[45px] ${iconHeight} group-hover:scale-[1.22] transition duration-300`}
    >
      <Image layout="fill" src={path} alt={altLabel} objectFit="contain" />
    </div>
  );
}
