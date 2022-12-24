import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
  useGLTF,
} from '@react-three/drei';

import { Perf } from 'r3f-perf';
import { Suspense } from 'react';

// import { useControls } from 'leva';

export default function Experience() {
  const computer = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );

  console.log(computer);

  return (
    <>
      <Perf position="top-left" />

      <color args={['#ffffff']} attach="background" />

      <Environment preset="warehouse" background />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Suspense>
        <PresentationControls
          global
          rotation={[0.19, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.4}>
            <rectAreaLight
              width={2.5}
              height={1.65}
              intensity={65}
              color={'#ffffff'}
              rotation={[-0.1, Math.PI, 0]}
              position={[0, 0.55, -1.15]}
            />
            <primitive
              object={computer.scene}
              position-y={-1.4}
              position-z={0.5}
              scale={1.4}
            >
              <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.17}
                position={[0, 1.56, -1.4]}
                rotation-x={-0.256}
              >
                <iframe src="https://milkias-hailu-portfolio.vercel.app/" />
              </Html>
            </primitive>
            <Text
              font="./bangers-v20-latin-regular.woff"
              fontSize={1}
              position={[3.5, 0.75, 0.75]}
              rotation-y={-1.25}
              maxWidth={1}
              textAlign="center"
            >
              Milkias Hailu's portfolio
            </Text>
          </Float>
        </PresentationControls>
      </Suspense>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
