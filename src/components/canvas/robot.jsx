import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Robots = ({ isMobile, lightPosition, lightRotation }) => {
  const computer = useGLTF("./desktop_pc/Robot.glb");

  return (
    <mesh>
      {/* Point light with adjustable position and rotation */}
      <pointLight
        color={"purple"}
        intensity={isMobile ? 500 : 60}
        position={lightPosition} // Set position from props
        rotation={lightRotation} // Set rotation from props
      />
      
      {/* Group the model to center the rotation */}
      <group rotation={[0, 1, 0]}>
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.5 : 0.5}
          position={isMobile ? [0, -1.2, -0.1] : [0, -0.5, -1]}
        />
      </group>
    </mesh>
  );
};

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [lightPosition, setLightPosition] = useState(isMobile ? [-0.2, 0.5, 0] : [-0.2, 1, 1]); // Default light position
  const [lightRotation, setLightRotation] = useState([Math.PI / 1, Math.PI / 3, 2]); // Default light rotation

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Pass light position and rotation as props */}
        <Robots
          isMobile={isMobile}
          lightPosition={lightPosition}
          lightRotation={lightRotation}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
