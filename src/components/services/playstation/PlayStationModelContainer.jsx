import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PlayStationModel } from "./PlayStationModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const PlayStationModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={0.5}>
          <PlayStationModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.7} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default PlayStationModelContainer;
