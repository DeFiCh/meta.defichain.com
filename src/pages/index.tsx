import AnchorLink, { HomeSections } from "@components/home/AnchorLink";
import Footer from "@components/home/Footer";
import Header from "@components/home/Header";
import { JellyfishBackground } from "@components/home/Jellyfish";
import SectionFive from "@components/home/SectionFive";
// import SectionFour from "@components/home/SectionFour";
import SectionOne from "@components/home/SectionOne";
import SectionThree from "@components/home/SectionThree";
import SectionTwo from "@components/home/SectionTwo";
import { UnderwaterDroneBackground } from "@components/home/UnderwaterDrone";
import { RootState } from "@store/index";
import SkewedStats from "@components/home/SkewedStats";
import debounce from "helpers/Debounce";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Parallax } from "react-scroll-parallax";
import clsx from "clsx";
import getDeviceType from "helpers/DeviceHelper";

export default function Home() {
  const { count, tvl } = useSelector((state: RootState) => state.stats);
  const { isMobile, isTablet } = getDeviceType();
  const stats = {
    masternodes: {
      stat: count.masternodes,
      label: "MASTERNODES",
    },
    blocks: {
      stat: count.blocks,
      label: "BLOCKS",
    },
    tokens: {
      stat: count.tokens,
      label: "TOKENS",
    },
    priceFeed: {
      stat: count.prices,
      label: "PRICE FEEDS",
    },
    valueLocked: {
      stat: tvl.total,
      label: "VALUE LOCKED",
    },
  };
  const sectionOneRef = useRef<HTMLElement>(null); // ref to access DOM element height
  const sectionTwoRef = useRef<HTMLElement>(null);
  const sectionThreeRef = useRef<HTMLElement>(null);
  // const sectionFourRef = useRef<HTMLElement>(null); // TODO: uncomment when section four is ready for PROD
  const sectionFiveRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState(HomeSections.One);
  const [sectionOneHeight, setSectionOneHeight] = useState<
    number | undefined
  >();
  const [sectionTwoHeight, setSectionTwoHeight] = useState<
    number | undefined
  >();
  const [sectionThreeHeight, setSectionThreeHeight] = useState<
    number | undefined
  >();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [sectionFourHeight, setSectionFourHeight] = useState<
    number | undefined
  >(0); // TODO: remove initial value of 0 when section four is ready for PROD
  const [sectionFiveHeight, setSectionFiveHeight] = useState<
    number | undefined
  >();

  const [scrollPosition, setScrollPosition] = useState(0); // scrollPosition is a number that measures vertical offset from the top
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const updateActiveSection = (): void => {
    if (
      sectionOneHeight === undefined ||
      sectionTwoHeight === undefined ||
      sectionThreeHeight === undefined ||
      sectionFourHeight === undefined ||
      sectionFiveHeight === undefined
    ) {
      return;
    }

    // Halved the height of the section content to allow the current scrolling to be "categorized" at an equal chance when scrolling in both ways
    const sectionOneUpperBound = sectionOneHeight + sectionTwoHeight / 2;
    const sectionTwoUpperBound =
      sectionOneHeight + sectionTwoHeight + sectionThreeHeight / 2;
    const sectionThreeUpperBound =
      sectionOneHeight +
      sectionTwoHeight +
      sectionThreeHeight +
      sectionFiveHeight / 2; // TODO: replace with sectionFourHeight when section four is ready for PROD

    if (scrollPosition <= sectionOneHeight / 2) {
      debounce(setActiveSection(HomeSections.One));
    } else if (
      scrollPosition > sectionOneHeight / 2 &&
      scrollPosition <= sectionOneUpperBound
    ) {
      debounce(setActiveSection(HomeSections.Two));
    } else if (
      scrollPosition > sectionOneUpperBound &&
      scrollPosition <= sectionTwoUpperBound
    ) {
      debounce(setActiveSection(HomeSections.Three));
    } else if (
      scrollPosition > sectionTwoUpperBound &&
      scrollPosition <= sectionThreeUpperBound
    ) {
      // debounce(setActiveSection(HomeSections.Four)); // TODO: uncomment when section four is ready for PROD
      debounce(setActiveSection(HomeSections.Five)); // TODO: remove when section four is ready for PROD
    } else {
      debounce(setActiveSection(HomeSections.Five));
    }
  };

  const debouncedUpdateActiveSection = useCallback(
    debounce(updateActiveSection),
    [scrollPosition]
  ); // to avoid max depth update warning

  useEffect(() => {
    // store the DOM element height on load
    setSectionOneHeight(sectionOneRef.current?.clientHeight);
    setSectionTwoHeight(sectionTwoRef.current?.clientHeight);
    setSectionThreeHeight(sectionThreeRef.current?.clientHeight);
    // setSectionFourHeight(sectionFourRef.current?.clientHeight); // TODO: uncomment when section four is ready for PROD
    setSectionFiveHeight(sectionFiveRef.current?.clientHeight);
  }, []);

  useEffect(() => {
    if (isMobile || isTablet) {
      alert("skip handle scroll");
      return () => {}; // no anchor link on non-desktop
    }
    // attach event listener to store the state of vertical scrolling position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    debouncedUpdateActiveSection();
  }, [scrollPosition]);

  useEffect(() => {
    const { location: { hash } = {} } = window;
    if (typeof hash !== "string" || hash.length === 0) return;

    const hashElement = document.querySelector(hash);
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, []);

  return (
    <div className={clsx("relative")}>
      <AnchorLink activeSection={activeSection} />
      <div className="w-full h-full absolute z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-contain lg:bg-[url('/background/portal-gradient-1.png')] md:bg-[url('/background/tablet-portal-gradient-1.png')] bg-[url('/background/mobile-portal-gradient-1.png')]" />
      <section
        ref={sectionOneRef}
        id={HomeSections.One}
        className="w-full min-h-screen flex flex-col justify-between relative px-4 pt-6 md:px-[40px] md:pt-6 lg:px-[120px] lg:pt-[52px]"
      >
        <Header />
        <JellyfishBackground
          desktop={{
            position: [40, 150, -400],
            rotation: [0.3, -0, -0.27],
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
      <section
        ref={sectionTwoRef}
        id={HomeSections.Two}
        className="w-full lg:h-screen relative flex flex-col justify-center px-4 md:px-[40px] lg:px-[120px]"
      >
        <SkewedStats
          stat={stats.masternodes.stat}
          label={stats.masternodes.label}
        />
        <div className="w-full h-screen absolute top-[-50vh] z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-contain bg-right lg:bg-[url('/background/gradient-2.png')] md:bg-[url('/background/tablet-gradient-2.png')] bg-[url('/background/mobile-gradient-2.png')]" />
        <JellyfishBackground
          desktop={{
            position: [-50, -40, -650],
            rotation: [0, 0.5, 0.4],
            containerStyle: "right-0 top-[650px]",
          }}
          mobile={{
            position: [10, 350, -450],
            rotation: [0.5, 0.4, 0.2],
            containerStyle: "right-[30px]",
          }}
        />
        <Parallax translateY={[30, -30]}>
          <SectionTwo />
        </Parallax>
      </section>
      <section
        ref={sectionThreeRef}
        id={HomeSections.Three}
        className="w-full min-h-screen relative px-4 md:px-[40px] lg:px-[120px]"
      >
        <SkewedStats
          stat={stats.blocks.stat}
          label={stats.blocks.label}
          customStyle="top-[600px]"
        />
        <SkewedStats
          stat={stats.tokens.stat}
          label={stats.tokens.label}
          customStyle="top-[1200px]"
        />
        <div className="w-full h-full absolute lg:top-[25vh] top-[-30vh] z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-contain lg:bg-[url('/background/gradient-3.png')] md:bg-[url('/background/tablet-gradient-3.png')] bg-[url('/background/mobile-gradient-3.png')]" />
        <div className="w-full h-full block md:hidden absolute top-[50vh] z-[-1] mix-blend-screen top-0 right-0 bg-no-repeat bg-contain bg-[url('/background/mobile-gradient-2.png')]" />
        <div className="w-full h-full absolute lg:top-[-20vh] md:top-[-50vh] top-[-70vh] z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat md:bg-contain bg-cover bg-right lg:bg-[url('/background/gradient-4.png')] md:bg-[url('/background/tablet-gradient-4.png')]" />
        <UnderwaterDroneBackground
          desktop={{
            position: [-1.5, 0, -3],
            rotation: [0.2, 0.8, -0.1],
            containerStyle: "left-0",
          }}
        />
        <JellyfishBackground
          desktop={{
            position: [0, 0, -350],
            rotation: [0, 0.5, -0.4],
            containerStyle: "left-0 top-[250px]",
          }}
          tablet={{
            position: [200, 170, -850],
            rotation: [0, 0.5, 0.4],
            containerStyle: "right-0 top-[-150px]",
          }}
          mobile={{
            position: [100, 350, -350],
            rotation: [0.5, -0.4, -0.27],
            containerStyle: "left-0",
          }}
        />
        <Parallax translateY={[30, -30]}>
          <SectionThree />
        </Parallax>
      </section>
      {/* <section
        ref={sectionFourRef}
        id={HomeSections.Four}
        className="w-full min-h-screen relative px-4 md:px-[40px] lg:px-[120px]"
      >
        <div className="w-full h-full absolute lg:top-[-20vh] md:top-[-50vh] top-[-70vh] z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat md:bg-contain bg-cover bg-right lg:bg-[url('/background/gradient-4.png')] md:bg-[url('/background/tablet-gradient-4.png')] bg-[url('/background/mobile-gradient-4.png')]" />
        <div className="w-full h-full hidden md:block lg:hidden absolute top-[50vh] z-[-1] mix-blend-screen top-0 right-0 bg-no-repeat bg-contain bg-[url('/background/tablet-gradient-5.png')]" />
        <JellyfishBackground
          desktop={{
            position: [10, 400, -750],
            rotation: [0.2, -0.4, 0.35],
            containerStyle: "right-0",
          }}
          tablet={{
            position: [250, 550, -900],
            rotation: [0.6, -0.6, 0.55],
            containerStyle: "right-0",
          }}
          mobile={{
            position: [-20, 500, -850],
            rotation: [0.6, -0.4, 0.3],
            containerStyle: "right-0 h-full",
          }}
        />
        <Parallax translateY={[30, -30]}>
          <SectionFour />
        </Parallax>
      </section> */}
      <section
        ref={sectionFiveRef}
        id={HomeSections.Five}
        className="w-full h-full relative px-4 pt-6 md:px-[40px] md:pt-[0px] lg:px-[120px] lg:pt-[248px] pt-[104px]"
      >
        <SkewedStats
          stat={stats.valueLocked.stat}
          label={stats.valueLocked.label}
          customStyle="top-[250px]"
        />
        {/* <div className="w-full h-full absolute z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-cover lg:bg-[url('/background/gradient-5.png')]" /> */}
        <div className="w-full h-full absolute z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat md:bg-cover bg-contain bg-bottom 2xl:bg-[url('/background/footer-xl.png')] lg:bg-[url('/background/footer.png')] md:bg-[url('/background/footer-tablet.png')] bg-[url('/background/mobile-footer.png')]" />
        {/* <JellyfishBackground
          desktop={{
            position: [-120, -200, -1000],
            rotation: [0.2, -0.4, 0.35],
            containerStyle: "left-0",
          }}
        /> */}
        <Parallax translateY={[30, -30]}>
          <SectionFive />
        </Parallax>
        <Footer />
      </section>
    </div>
  );
}
