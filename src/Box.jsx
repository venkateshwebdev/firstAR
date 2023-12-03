import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = ({position}) => {
    const boxRef = useRef()
    useFrame((state,delta)=>{
        boxRef.current.rotation.x += delta/2
        boxRef.current.rotation.y += delta/2
    })
  return (
    <mesh ref={boxRef} position={position}>
      <boxGeometry args={[0.5,0.5,0.5]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Box;
