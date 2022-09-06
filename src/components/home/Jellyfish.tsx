import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { BufferGeometry, Mesh } from "three";
import { Euler, useFrame, Vector3 } from "@react-three/fiber";

export default function Jellyfish({
  position,
  rotation,
}: {
  position: Vector3;
  rotation: Euler;
}) {
  const meshRef = useRef<Mesh<BufferGeometry>>(null);

  useFrame(({ clock }) => {
    if (meshRef == undefined || meshRef.current == undefined) return;
    const elapsedSeconds = clock.getElapsedTime();
    meshRef.current.position.x = 10 * Math.sin(elapsedSeconds) + position[0];
    meshRef.current.position.y = 10 * Math.cos(elapsedSeconds) + position[1];
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={[0.5, 0.5, 0.5]}
    >
      <Model />
    </mesh>
  );
}

export function Model(props) {
  // @ts-expect-error
  const { nodes, materials } = useGLTF("/jellyfish.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1.72, -0.36, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-9.66, 1.68, -610.69]}>
              <mesh
                geometry={nodes.Object_5.geometry}
                material={materials.Jelly}
              />
              <mesh
                geometry={nodes.Object_6.geometry}
                material={materials.Jelly}
              />
              <mesh
                geometry={nodes.Object_7.geometry}
                material={materials.Jelly}
              />
              <mesh
                geometry={nodes.Object_8.geometry}
                material={materials.Jelly}
              />
              <mesh
                geometry={nodes.Object_9.geometry}
                material={materials.Jelly}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/jellyfish.gltf");
