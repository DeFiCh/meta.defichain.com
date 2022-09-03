import Button from "@components/ui/Button";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import NavMenu from "./NavMenu";

export default function Header(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <section className="w-full h-screen relative bg-no-repeat bg-cover bg bg-[url('/portal-gradient-1.png')] px-4 pt-6 md:px-[40px] md:pt-6 lg:px[120px] lg:pt-[52px]">
      <header>
        <nav className="flex justify-between w-full items-center">
          <Link className="flex items-center" href="/src/pages">
            <div className="relative w-[149px] h-[43px]">
              <Image
                data-testid="dmc_logo"
                layout="fill"
                src="/logo.svg"
                alt="DeFi Meta Chain Logo"
                objectFit="contain"
              />
            </div>
          </Link>
          <NavMenu />
          <div className="flex items-center">
            <Button
              label={
                <div className="flex items-center ">
                  <span className="pr-1.5 relative before:button-text before:content-['Get_DFI'] before:bg-white-50 before:opacity-100 group-hover:before:opacity-0 after:button-text after:content-['Get_DFI'] after:brand-gradient-1 after:opacity-0 group-hover:after:opacity-100">
                    Get DFI
                  </span>
                </div>
              }
              onClick={() => {
                /* TODO: add handler */
              }}
              style="hidden md:block"
            />
            <svg
              className="feather w-6 h-6 stroke-white-50 block lg:hidden md:ml-6"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <use href="/feather-sprite.svg#menu" />
            </svg>
          </div>
          <NavMenu.Mobile
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </nav>
      </header>
      <div className="flex w-[250px] h-[300px]">
        <Canvas>
          <Box />
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>
    </section>
  );
}

//TODO: to be replace with actual jellyfish 3d model when ready
function Box() {
  const myMesh = useRef<MeshProps>();

  useFrame(({ clock }) => {
    if (myMesh === undefined || myMesh.current === undefined) return;
    const a = clock.getElapsedTime();
    myMesh.current.position.y = 0.25 * Math.sin(a) - 1;
    myMesh.current.position.x = 0.25 * Math.sin(a) - 1;
  });

  return (
    <mesh
      castShadow
      ref={myMesh}
      // position={[-1, -4, -2]}
      rotation={[-1.5, 0.5, 0]}
      // scale={[4, 2, 6]}
    >
      <boxGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}
