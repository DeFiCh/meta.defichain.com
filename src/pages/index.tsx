import AnchorLink, { HomeSections } from "@components/home/AnchorLink";
import Footer from "@components/home/Footer";
import Header from "@components/home/Header";
import { JellyfishBackground } from "@components/home/Jellyfish";
import SectionFive from "@components/home/SectionFive";
import SectionFour from "@components/home/SectionFour";
import SectionOne from "@components/home/SectionOne";
import SectionThree from "@components/home/SectionThree";
import SectionTwo from "@components/home/SectionTwo";
import debounce from "helpers/Debounce";
import { useCallback, useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";

function Home() {
  const sectionOneRef = useRef<HTMLElement>(null); // create ref to access DOM element height
  const sectionTwoRef = useRef<HTMLElement>(null);
  const sectionThreeRef = useRef<HTMLElement>(null);
  const sectionFourRef = useRef<HTMLElement>(null);
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
  const [sectionFourHeight, setSectionFourHeight] = useState<
    number | undefined
  >();
  const [sectionFiveHeight, setSectionFiveHeight] = useState<
    number | undefined
  >();

  const [scrollPosition, setScrollPosition] = useState(0); // scrollPosition is a vertical offset number from the top
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
      sectionFourHeight / 2;

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
      debounce(setActiveSection(HomeSections.Four));
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
    setSectionFourHeight(sectionFourRef.current?.clientHeight);
    setSectionFiveHeight(sectionFiveRef.current?.clientHeight);
  }, []);

  useEffect(() => {
    // attach event listener to store the state of vertical scrolling position
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    debouncedUpdateActiveSection();
  }, [scrollPosition]);

  return (
    <>
      <AnchorLink activeSection={activeSection} />
      <section
        ref={sectionOneRef}
        id={HomeSections.One}
        className="w-full min-h-screen flex flex-col justify-between relative px-4 pt-6 md:px-[40px] md:pt-6 lg:px-[120px] lg:pt-[52px]"
      >
        <div className="w-full h-screen absolute z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-contain lg:bg-[url('/background/portal-gradient-1.png')] md:bg-[url('/background/tablet-portal-gradient-1.png')] bg-[url('/background/mobile-portal-gradient-1.png')]" />
        <Header />
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
      <section
        ref={sectionTwoRef}
        id={HomeSections.Two}
        className="w-full lg:h-screen relative flex flex-col justify-center px-4 md:px-[40px] lg:px-[120px]"
      >
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
        <Parallax translateY={[30, -30]}>
          <SectionTwo />
        </Parallax>
      </section>
      <section
        ref={sectionThreeRef}
        id={HomeSections.Three}
        className="w-full min-h-screen relative px-4 md:px-[40px] lg:px-[120px]"
      >
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
        className="w-full h-full relative px-4 pt-6 md:px-[40px] md:pt-[204px] lg:px-[120px] lg:pt-[248px] pt-[104px]"
      >
        <div className="w-full h-full absolute z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat bg-cover lg:bg-[url('/background/gradient-5.png')]" />
        <div className="w-full h-full absolute z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat md:bg-cover bg-contain bg-bottom 2xl:bg-[url('/background/footer-xl.png')] lg:bg-[url('/background/footer.png')] md:bg-[url('/background/footer-tablet.png')] bg-[url('/background/mobile-footer.png')]" />
        <JellyfishBackground
          desktop={{
            position: [-120, -200, -1000],
            rotation: [0.2, -0.4, 0.35],
            containerStyle: "left-0",
          }}
        />
        <Parallax translateY={[30, -30]}>
          <SectionFive />
        </Parallax>
        <Footer />
      </section>
    </>
  );
}

export default Home;
