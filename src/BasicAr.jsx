import React from 'react';
import { Canvas } from '@react-three/fiber';

function startXRSession() {
  if (navigator.xr) {
    navigator.xr.requestSession('immersive-ar')
      .then((session) => {
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

function MyARScene() {
  return (
    <>
      <button onClick={startXRSession}>Start AR</button>
      <Canvas vr={true}>
        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

export default MyARScene;
