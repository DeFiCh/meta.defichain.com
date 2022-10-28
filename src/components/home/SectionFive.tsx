import GradientText from "@components/ui/GradientText";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode, useState } from "react";
import SectionHeader from "./SectionHeader";

export default function SectionFive(): JSX.Element {
  const SectionFiveContent = [
    {
      title: "Discord",
      content: "Ask technical question on the Community Discord.",
      link: "https://discord.gg/U268gQUqQt",
    },
    {
      title: "Twitter",
      content: "Follow @defichain to get the latest news and updates.",
      link: "https://twitter.com/defichain",
    },
    {
      title: "GitHub",
      content:
        "Keep tabs on technical developments or raise technical improvements.",
      link: "https://github.com/DeFiCh/metachain",
    },
    {
      title: "YouTube",
      content: "Learn more about DeFiChain and DeFi Meta Chain",
      link: "https://www.youtube.com/c/DeFiChain",
    },
    {
      title: "Telegram",
      content: "Ask general question and chat with the global community.",
      link: "https://t.me/defiblockchain",
    },
  ];
  return (
    <div className="container mx-auto lg:px-[150px] flex flex-col">
      <div className="flex flex-col md:flex-row">
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
        <div className="lg:mr-[72px] md:mr-[110px] lg:w-2/5 md:w-[246px]">
          <SectionFiveItem
            title={SectionFiveContent[0].title}
            content={SectionFiveContent[0].content}
            link={SectionFiveContent[0].link}
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
            link={SectionFiveContent[1].link}
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
            link={SectionFiveContent[2].link}
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
            link={SectionFiveContent[3].link}
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
            link={SectionFiveContent[4].link}
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
      {/* <SubscribeSection /> */}
    </div>
  );
}

function SectionFiveItem({
  title,
  content,
  link,
  children,
}: {
  title: string;
  content: string;
  link: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="rounded-[15px] border-[0.5px] border-white-700/50 p-5 mb-5 relative group black-gradient-1">
        <GradientText
          label={title}
          gradient="after:brand-gradient-2"
          customStyle="text-xl font-bold"
        />
        <div className="text-white-600">{content}</div>
        {children}
      </div>
    </a>
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
      className={`absolute md:-right-1 right-0 -top-1 z-[1] w-[45px] ${iconHeight} group-hover:scale-[1.22] transition duration-300`}
    >
      <Image layout="fill" src={path} alt={altLabel} objectFit="contain" />
    </div>
  );
}

// Temporarily disable the following rules until we have api for email service
/* eslint-disable @typescript-eslint/no-unused-vars */
function SubscribeSection(): JSX.Element {
  const [inputEmail, setInputEmail] = useState<string | undefined>();
  const [emailErrorMessage, setEmailErrorMessage] = useState<
    string | undefined
  >();
  const [isEmailFocus, setIsEmailFocus] = useState(false);

  const onEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (!/\S+@\S+\.\S+/.test(event.currentTarget.value)) {
      setEmailErrorMessage("Please enter a valid email address");
    } else {
      setEmailErrorMessage(undefined);
    }

    setInputEmail(event.currentTarget.value);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center lg:mt-[72px] md:mt-3 mt-16">
        <div className="md:hidden flex flex-col mb-8 md:mb-0">
          <span className="text-[32px] leading-[32px] text-white-50 font-bold mb-2">
            Stay updated!
          </span>
          <span className="text-white-600">Unsubscribe at any time.</span>
        </div>
        <div
          className={clsx(
            "flex items-center w-full md:w-[423px] lg:w-4/6 rounded-[15px] black-gradient-1 lg:px-5 px-[18px] py-6 md:mr-5 border-[0.5px]",
            {
              "border-[#C43636]": emailErrorMessage !== undefined,
              "border-white-50": emailErrorMessage === undefined,
            }
          )}
        >
          <input
            className="text-xl grow mr-4 bg-transparent text-white-50 placeholder:text-white-600"
            type="email"
            value={inputEmail}
            placeholder="Your email"
            onChange={onEmailChange}
            onFocus={() => setIsEmailFocus(true)}
            onBlur={() => setIsEmailFocus(false)}
          />
          <svg
            className={clsx("feather w-6 h-6 stroke-white-50 block", {
              "opacity-50":
                (isEmailFocus && emailErrorMessage !== undefined) ||
                emailErrorMessage !== undefined,
            })}
          >
            <use href="/feather-sprite.svg#arrow-right" />
          </svg>
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-[32px] leading-[32px] text-white-50 font-bold mb-2">
            Stay updated!
          </span>
          <span className="text-white-600">Unsubscribe at any time.</span>
        </div>
      </div>
      {emailErrorMessage !== undefined && (
        <span className="text-xs text-[#C43636] pl-4">{emailErrorMessage}</span>
      )}
    </div>
  );
}
