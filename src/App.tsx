import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./Scene";

function App() {
  return (
    <div className="App">
      <Canvas
        shadows
        className="canvas"
        camera={{
          fov: 70,
          position: [0, 1, 3],
          // rotation: [0.1, 0, 0],
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
