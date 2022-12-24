import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import Experience from './Experience';

function App() {
  return (
    <>
      <Leva collapsed />
      <Canvas
        flat
        shadows
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
