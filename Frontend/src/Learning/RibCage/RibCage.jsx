import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import './RibCage.css'; // Import the CSS file

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
};

const Skeleton = () => {
  return (
    <div className="canvas-container">
      <Suspense fallback={<div className="loading-text">Loading 3D Model...</div>}>
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Model modelPath='/models/human_spine.glb' />
          <OrbitControls enableZoom enablePan enableRotate />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Skeleton;
