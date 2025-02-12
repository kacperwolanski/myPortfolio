import { useSpring } from "@react-spring/web";
import React, { Suspense, useState, useEffect } from "react";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import Model from "./Model";

const FloatingMac = () => {
  const [open, setOpen] = useState(true);

  const props = useSpring({
    open: open ? 1 : 0,
    config: { mass: 5, tension: 200, friction: 30 },
  });

  return (
    <web.main
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={"#f0f0f0"}
        />
        <Suspense fallback={null}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <Model open={open} hinge={props.open.to([1, 0], [1.575, -0.425])} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </web.main>
  );
};

export default FloatingMac;
