import React, { useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Sol({position}) {
    const solRef = useRef()
  const { nodes, materials } = useGLTF("/model (14).gltf");
  return (
    <>
    <ambientLight />
    <group ref={solRef} position={position} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lucy001.geometry}
        material={materials["Default OBJ.001"]}
        >
            <meshNormalMaterial />
        </mesh>
    </group>
    <OrbitControls />
    </>
  );
}

useGLTF.preload("/model (14).gltf");