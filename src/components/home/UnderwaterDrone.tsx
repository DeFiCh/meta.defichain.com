import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { BufferGeometry, Mesh } from "three";
import { Canvas, Euler, useFrame, Vector3 } from "@react-three/fiber";

export default function UnderwaterDrone({
  position,
  rotation,
}: {
  position: Vector3;
  rotation: Euler;
}) {
  const meshRef = useRef<Mesh<BufferGeometry>>(null);

  useFrame(({ clock }) => {
    if (
      meshRef === undefined ||
      meshRef === null ||
      meshRef.current === undefined ||
      meshRef.current === null
    )
      return;
    const elapsedSeconds = clock.getElapsedTime();
    meshRef.current.position.y = 0.1 * Math.cos(elapsedSeconds) + position[1];
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={[1, 1, 1]}
    >
      <Model />
    </mesh>
  );
}

export function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/UnderwaterDrone.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0.05, 0, 0.32]}
          rotation={[-Math.PI / 2, 0, -3.13]}
          scale={0.25}
        >
          <group
            name="c2cc55a696424343b60db99c931338c2fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="submarine"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Submarine"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_6">
                    <primitive
                      // eslint-disable-next-line react/no-unknown-property, no-underscore-dangle
                      object={nodes._rootJoint}
                    />
                    <group
                      name="Object_8"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <skinnedMesh
                      name="Object_9"
                      // @ts-ignore
                      geometry={nodes.Object_9.geometry}
                      material={materials["Submarine-EV1-beatenup"]}
                      // @ts-ignore
                      // eslint-disable-next-line react/no-unknown-property
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      // @ts-ignore
                      geometry={nodes.Object_10.geometry}
                      material={materials.Interior}
                      // @ts-ignore
                      // eslint-disable-next-line react/no-unknown-property
                      skeleton={nodes.Object_10.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/UnderwaterDrone.gltf");

interface ViewProps {
  position: Vector3;
  rotation: Euler;
  containerStyle?: string;
}
interface UnderwaterDroneBackgroundProps {
  desktop: ViewProps;
  tablet?: ViewProps;
  mobile?: ViewProps;
}

export function UnderwaterDroneBackground({
  desktop,
  tablet,
  mobile,
}: UnderwaterDroneBackgroundProps): JSX.Element {
  return (
    <>
      <div
        className={`hidden lg:block absolute z-[-2] top-0 w-[250px] h-screen bg-black-900 opacity-40 ${
          desktop.containerStyle ?? ""
        }`}
      >
        <Canvas>
          <UnderwaterDrone
            position={desktop.position}
            rotation={desktop.rotation}
          />
          <ambientLight intensity={1} />
        </Canvas>
      </div>
      {tablet !== undefined && (
        <div
          className={`hidden md:block lg:hidden absolute z-[-2] top-0 w-screen h-screen ${
            tablet.containerStyle ?? ""
          }`}
        >
          <Canvas>
            <UnderwaterDrone
              position={tablet.position}
              rotation={tablet.rotation}
            />
            <ambientLight intensity={1} />
          </Canvas>
        </div>
      )}
      {mobile !== undefined && (
        <div
          className={`block md:hidden absolute z-[-2] top-0 w-screen h-screen ${
            mobile.containerStyle ?? ""
          }`}
        >
          <Canvas>
            <UnderwaterDrone
              position={mobile.position}
              rotation={mobile.rotation}
            />
            <ambientLight intensity={1} />
          </Canvas>
        </div>
      )}
    </>
  );
}
