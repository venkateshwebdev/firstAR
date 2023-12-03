import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";
import { ARButton, Interactive, XR, useHitTest } from "@react-three/xr";
import Ring from "./ring";
import { Sol } from "./Sol";
function MyARScene() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <Ring />
        </XR>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default MyARScene;
