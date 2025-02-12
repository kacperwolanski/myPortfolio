import { useSpring } from "@react-spring/web";
import React, { Suspense, useState } from "react";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import Model from "./Model";

const FloatingMac = () => {
  const [open, setOpen] = useState(true);

  const props = useSpring({
    open: open ? 0 : 1,
    config: { mass: 2, tension: 170, friction: 26 },
  });

  return (
    <web.main
      style={{
        width: "100vw",
        height: "100vh",
        maxHeight: "800px",
        maxWidth: "1000px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",

        zIndex: 1000,
        flexDirection: "column",
      }}
    >
      <web.h1
        style={{
          opacity: 1,
          transform: props.open.to(
            (o) => `translate3d(-50%,${o * 50 - 100}px,0)`
          ),
        }}
      >
        {open ? "click to open" : "click to close"}
      </web.h1>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 28 }}>
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
            <Model open={open} hinge={props.open.to([0, 1], [-0.425, 1.575])} />
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
