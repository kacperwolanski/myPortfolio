import { useSpring } from "@react-spring/web";
import React, { Suspense, useState } from "react";
import { a as three } from "@react-spring/three";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "theme/useThemeStore";
import { MainContainer, ResponsiveTitle } from "./floatingMac.styles";

interface Props {
  htmlPageContent: JSX.Element;
}
const FloatingMac = ({ htmlPageContent }: Props) => {
  const [open, setOpen] = useState(true);
  const { currentTheme } = useThemeStore();
  const { t: translate } = useTranslation();
  const props = useSpring({
    open: open ? 0 : 1,
    config: { mass: 2, tension: 170, friction: 26 },
  });

  return (
    <MainContainer theme={currentTheme}>
      <ResponsiveTitle theme={currentTheme}>
        {open ? translate("clickToOpen") : translate("clickToClose")}
      </ResponsiveTitle>
      <Canvas camera={{ position: [0, 0, -30], fov: 28 }}>
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={"#f0f0f0"}
        />
        <Suspense fallback={null}>
          <group
            position={[0, 1, 0]}
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <Model
              open={open}
              hinge={props.open.to([0, 1], [-0.425, 1.575])}
              htmlPageContent={htmlPageContent}
            />
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
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />
      </Canvas>
    </MainContainer>
  );
};

export default FloatingMac;
