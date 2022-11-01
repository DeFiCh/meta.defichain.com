import clsx from "clsx";

export enum HomeSections {
  One = "about-dmc",
  Two = "latest-news",
  Three = "develop-on-dmc",
  Four = "dmc-ecosystem",
  Five = "dmc-community",
}

export default function AnchorLink({
  activeSection,
}: {
  activeSection: HomeSections;
}): JSX.Element {
  return (
    <div className="z-[2] hidden md:block fixed lg:right-4 right-40 w-3 h-32 top-[calc(50vh-62px)]">
      <AnchorItem section={HomeSections.One} activeSection={activeSection} />
      <AnchorItem section={HomeSections.Two} activeSection={activeSection} />
      <AnchorItem section={HomeSections.Three} activeSection={activeSection} />
      {/* <AnchorItem section={HomeSections.Four} activeSection={activeSection} /> */}
      <AnchorItem section={HomeSections.Five} activeSection={activeSection} />
    </div>
  );
}

function AnchorItem({
  section,
  activeSection,
}: {
  section: HomeSections;
  activeSection: HomeSections;
}): JSX.Element {
  return (
    <a href={`#${section}`}>
      <div
        className={clsx("rounded-full h-3 w-3 mb-4", {
          "brand-gradient-2": activeSection === section,
          "border-[1px] border-white-600": activeSection !== section,
        })}
      />
    </a>
  );
}
