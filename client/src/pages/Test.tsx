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
    if (earthRef.current) earthRef.current.rotation.y = elapsedTime * 0.04;
    if (cloudsRef.current) cloudsRef.current.rotation.y = -elapsedTime * 0.009;
    if (cloudsRef.current) cloudsRef.current.rotation.x = -elapsedTime * 0.009;
    if (cloudsRef2.current) cloudsRef2.current.rotation.y = elapsedTime * 0.009;
    if (cloudsRef2.current) cloudsRef2.current.rotation.x = elapsedTime * 0.009;
  });

  return (
    <>
      {/* Earth Sphere */}
      <mesh ref={earthRef}>
        <icosahedronGeometry args={[1, 100]} />
        <meshStandardMaterial
          map={colorMap}
          bumpMap={bumpMap}
          roughnessMap={glossMap}
          bumpScale={1}
          emissiveMap={emissiveMap}
          emissive={"yellow"}
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* First Cloud Layer */}
      <mesh ref={cloudsRef}>
        <icosahedronGeometry args={[1.01, 64]} />
        <meshStandardMaterial
          alphaMap={cloudsMap1}
          transparent={true}
          opacity={1}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Second Cloud Layer */}
      <mesh ref={cloudsRef2}>
        <icosahedronGeometry args={[1.02, 64]} />
        <meshStandardMaterial
          alphaMap={cloudsMap2}
          transparent={true}
          opacity={1}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

const Test = () => {
  return (
    <div style={spaceBackground}>
      <Canvas
        camera={{ position: [2, 2, 2], fov: 35 }}
        gl={{ antialias: true }}
      >
        <PerspectiveCamera manual />
        <OrbitControls />
        <ambientLight intensity={0.3} color="lightblue" />
        <directionalLight
          castShadow
          color="lightyellow"
          intensity={4}
          position={[-100, 1, 100]}
        />
        <RotatingMesh />
      </Canvas>
    </div>
  );
};

const spaceBackground = {
  height: "100vh",
  backgroundImage:
    "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "darken, luminosity",
  backdropFilter: "invert(50%)",
  backgroundPositionY: "50%",
  backgroundPositionX: "50%",
  backgroundSize: "cover",
};
export default Test;
