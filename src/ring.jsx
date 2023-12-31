import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import Box from "./Box";
import { Sol } from "./Sol";
const Ring = () => {
  const { isPresenting } = useXR();
  const ringRef = useRef();
  const [cubes, setCubes] = useState([]);
  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      ringRef.current.position,
      ringRef.current.quaternion,
      ringRef.current.scale
    );
    ringRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const handleSelect = (e) => {
    console.log("clicked");
    let position = e.intersection.object.position.clone();
    setCubes([position]);
  };

  return (
    <>
      {isPresenting && cubes.map((e, i) => <Sol position={e} key={i} />)}
      {isPresenting && (
        <Interactive onSelect={handleSelect}>
          <mesh ref={ringRef} rotation-x={-Math.PI / 2}>
            <planeGeometry />
            <meshNormalMaterial />
          </mesh>
        </Interactive>
      )}
      {!isPresenting && <Sol />}
    </>
  );
};

export default Ring;
