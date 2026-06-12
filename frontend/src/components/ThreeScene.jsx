import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleNetwork(props) {
  const ref = useRef();
  
  // Generate random points in a sphere
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000), { radius: 2.5 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const ThreeScene = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ParticleNetwork />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
