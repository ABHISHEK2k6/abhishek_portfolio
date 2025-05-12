import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Center } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Robots = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/Robot.glb");

  // Return null until the scene is ready and has geometry
  if (!scene || !scene.children.length) return null;

  return (
    <mesh>
      <pointLight
        color={"#9215e6"}
        intensity={isMobile ? 300 : 500}
        position={[0, 5, 0]}
      />
      <Center>
        <primitive object={scene} scale={isMobile ? 0.6 : 0.6} />
      </Center>
    </mesh>
  );
};


const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [5, 3, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
        />
        <Robots isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;