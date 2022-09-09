import Header from "@components/home/Header";
import Jellyfish, { JellyfishBackground } from "@components/home/Jellyfish";
import SectionFour from "@components/home/SectionFour";
import SectionOne from "@components/home/SectionOne";
import SectionThree from "@components/home/SectionThree";
import SectionTwo from "@components/home/SectionTwo";
import { Canvas } from "@react-three/fiber";

function Home() {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-between relative px-4 pt-6 md:px-[40px] md:pt-6 lg:px-[120px] lg:pt-[52px]">
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
      <section className="w-full min-h-screen relative px-4 md:px-[40px] lg:px-[120px]">
        <div className="w-full md:h-full h-screen absolute lg:top-[-20vh] md:top-[-50vh] top-[-30vh] z-[-1] mix-blend-screen top-0 left-0 bg-no-repeat md:bg-contain bg-cover bg-right lg:bg-[url('/background/gradient-4.png')] md:bg-[url('/background/tablet-gradient-4.png')] bg-[url('/background/mobile-gradient-4.png')]" />
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
            position: [-20, 300, -750],
            rotation: [0.4, -0.4, 0.45],
            containerStyle: "right-0",
          }}
        />
        <SectionFour />
      </section>
      <section className="w-full h-screen relative px-4 pt-6 md:px-[40px] md:pt-6 lg:px-[120px] lg:pt-[52px]">
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

export default Home;
