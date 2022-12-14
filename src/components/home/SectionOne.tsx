import Button from "@components/ui/Button";
import clsx from "clsx";
import { Parallax } from "react-scroll-parallax";
import SectionHeader from "./SectionHeader";

export const SectionOneHeaderText =
  "Powered by the Security of Bitcoin & Flexibility of Ethereum";
export default function SectionOne(): JSX.Element {
  return (
    <div className="container mx-auto flex flex-col grow items-center lg:justify-between justify-center md:mt-[12%] mt-[350px] translate-y-[-4.9%]">
      <Parallax translateY={[30, -30]}>
        <div
          className="flex flex-col text-center items-center"
          data-testid="unlock-text"
        >
          <SectionHeader
            header={SectionOneHeaderText}
            hint="UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN"
            containerStyle="lg:w-4/5 items-center"
            testId="section-one"
          />
          <span
            className="mb-8 lg:w-3/5 md:text-xl text-white-50"
            data-testid="dmc-desc"
          >
            DeFi Meta Chain is a powerful EVM-compatible Layer 2 blockchain that
            brings flexibility to DeFiChain, a leader in DeFi built on the
            security of Bitcoin.
          </span>
          <Button
            label="Develop with DeFiMetaChain (coming soon)"
            href="#"
            customStyle="font-medium mb-8"
            disabled
          />
        </div>
      </Parallax>
      {/* <Parallax translateY={[30, -30]}>
        <div className="md:hidden lg:flex w-full md:w-auto flex-col lg:flex-row relative lg:-bottom-5 p-5 lg:mt-0 mt-[46px] items-center rounded-[15px] bg-black-900 brand-shadow before:button-border before:white-gradient-1">
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
      </Parallax> */}
    </div>
  );
}

// Temporarily disable until actual statistic data is available
/* eslint-disable @typescript-eslint/no-unused-vars */
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
      className={clsx(
        "flex items-center md:justify-center justify-between border-white-600",
        {
          "md:border-r md:mr-5 md:pr-5 md:mb-0 mb-4": hasSeparator === true,
        }
      )}
    >
      <span className="hidden md:block text-white-50 font-light md:text-2xl text-xl md:mr-5 mr-3">
        {stats}
      </span>
      <span className="text-xs font-medium text-transparent bg-clip-text brand-gradient-2">
        {label}
      </span>
      <span className="block md:hidden text-white-50 font-light md:text-2xl text-xl md:mr-5 mr-3">
        {stats}
      </span>
    </div>
  );
}
