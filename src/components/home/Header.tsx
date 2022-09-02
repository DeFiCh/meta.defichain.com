import Button from "@components/ui/Button";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import NavBar from "./NavBar";

export default function Header(): JSX.Element {
  return (
    <>
      <section className="w-full h-screen relative bg-no-repeat bg-cover bg bg-[url('/portal-gradient-1.png')] md:px-[120px] px-4 md:pt-[52px] pt-6">
        <header>
          <nav className="flex justify-between w-full ">
            <Link className="flex items-center" href="/src/pages">
              <div className="relative w-[149px]">
                <Image
                  data-testid="dmc_logo"
                  layout="fill"
                  src="/logo.svg"
                  alt="DeFi Meta Chain Logo"
                  objectFit="contain"
                />
              </div>
            </Link>
            <NavBar />
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
            />
          </nav>
        </header>
        <div className="flex w-[500px] h-[600px]" >
          <Canvas>
            <Box />
            <ambientLight intensity={0.5} />
          </Canvas>
        </div>
        <div className="text-center">
          <span className="brand-gradient-1 bg-clip-text text-transparent font-semibold">UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN</span>
        </div>
      </section>
    </>
  );
}

//TODO: to be replace with actual jellyfish 3d model when ready
function Box() {
  const myMesh = useRef<MeshProps>();

  useFrame(({ clock }) => {
    if (myMesh === undefined || myMesh.current === undefined) return;
    const a = clock.getElapsedTime();
    myMesh.current.position.y = Math.sin(a)-1
    myMesh.current.position.x = Math.sin(a)-1;
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
