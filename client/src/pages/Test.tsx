import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const RotatingMesh = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const cloudsRef2 = useRef<THREE.Mesh>(null);

  // Load textures
  const colorMap = useLoader(THREE.TextureLoader, "/textures/Earth_color.jpg");
  const glossMap = useLoader(THREE.TextureLoader, "/textures/Glossiness.jpg");
  const bumpMap = useLoader(THREE.TextureLoader, "/textures/bump.jpg");
  const emissiveMap = useLoader(
    THREE.TextureLoader,
    "/textures/Night_mask.jpg"
  );
  const cloudsMap1 = useLoader(
    THREE.TextureLoader,
    "/textures/Earth_clouds.jpg"
  );
  const cloudsMap2 = useLoader(
    THREE.TextureLoader,
    "/textures/Earth_clouds2.jpg"
  );

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // Rotate Earth and clouds on Y-axis
    if (earthRef.current) earthRef.current.rotation.y = elapsedTime * 0.1;
    if (cloudsRef.current) cloudsRef.current.rotation.y = elapsedTime * 0.12;
    if (cloudsRef2.current) cloudsRef2.current.rotation.y = elapsedTime * 0.08;
  });

  return (
    <>
      {/* Earth Sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={colorMap}
          roughnessMap={glossMap}
          bumpMap={bumpMap}
          bumpScale={2}
          emissiveMap={emissiveMap}
          emissive="yellow"
          emissiveIntensity={8}
        />
      </mesh>

      {/* First Cloud Layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.02, 64, 64]} />
        <meshStandardMaterial
          map={cloudsMap1}
          transparent={true}
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Second Cloud Layer */}
      <mesh ref={cloudsRef2}>
        <sphereGeometry args={[1.03, 64, 64]} />
        <meshStandardMaterial
          map={cloudsMap2}
          transparent={true}
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>
    </>
  );
};

const Test = () => {
  return (
    <div className="h-screen bg-black">
      <Canvas>
        <PerspectiveCamera manual />
        <OrbitControls />
        <ambientLight intensity={1.5} />
        <directionalLight
          castShadow
          color="white"
          intensity={8}
          position={[-10, 100, 1]}
        />

        <RotatingMesh />
      </Canvas>
    </div>
  );
};

export default Test;
