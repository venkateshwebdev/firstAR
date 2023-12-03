import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = () => {
    const boxRef = useRef()
    useFrame((state,delta)=>{
        boxRef.current.rotation.x += delta/2
        boxRef.current.rotation.y += delta/2
    })
  return (
    <mesh ref={boxRef} position={[0,0,-5]}>
      <boxGeometry args={[2,2,2]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Box;
