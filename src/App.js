import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./components/AnimatedSphere";

function App() {
  return (
    <div className="App">
      <Canvas className="Canvas_box">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 5]} intensity={1} />
        <Box />
      </Canvas>
      <Canvas className="Canvas_sphere">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}

export default App;
