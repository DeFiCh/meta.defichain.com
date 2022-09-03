import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";

// TODO: to be replace with actual jellyfish 3d model when ready
export default function Box() {
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
