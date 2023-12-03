import { Interactive, useHitTest } from "@react-three/xr";
import { useRef, useState } from "react";
import Box from "./Box";
const Ring = () => {
    const ringRef = useRef()
    const [cubes,setCubes] = useState([])
    useHitTest((hitMatrix, hit) => {
        hitMatrix.decompose(ringRef.current.position, ringRef.current.quaternion, ringRef.current.scale)
        ringRef.current.rotation.set(-Math.PI/2,0,0)
      }
      )

      const handleSelect = (e)=>{
        console.log("clicked")
        let position = e.intersection.object.position.clone()
        setCubes([...cubes,position])
      }


    return (
        <>
        {cubes.map((e,i)=><Box position={e} key={i} />)}
        <Interactive onSelect={handleSelect}>
        <mesh ref={ringRef} rotation-x={-Math.PI/2}>
            <ringGeometry args={[0.1,0.25,32]} />
            <meshNormalMaterial/>
        </mesh>
        </Interactive>
        </>
    );
}
 
export default Ring;