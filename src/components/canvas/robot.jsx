import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Robots = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/Robot.glb");

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {

        if (child.name === "Mesh_12002_1") {
          if (!(child.material instanceof THREE.MeshStandardMaterial)) {
            child.material = new THREE.MeshStandardMaterial({
              color: child.material.color,
            });
          }

          child.material.emissive = new THREE.Color(0xff0000); // Red emissive
          child.material.emissiveIntensity = 1.5;
          child.material.needsUpdate = true;
        }
      }
      );
    }
  }, [scene]);

  if (!scene || !scene.children.length) return null;

  return (
    <mesh>
      {/* Ambient and point lighting */}
      <ambientLight intensity={0.3} />
      <pointLight
        color={"#9215e6"}
        intensity={isMobile ? 500 : 800} // reduced from 500-800
        position={[0, 5, 0]}
      />

      {/* Robot model centered */}
      <Center>
        <primitive object={scene} scale={isMobile ? 0.6 : 0.4} />
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
      gl={{ preserveDrawingBuffer: true, toneMappingExposure: 1.0 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <Robots isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
