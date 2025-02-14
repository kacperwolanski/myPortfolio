import React, { useRef, useState, useEffect } from "react";
import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Interpolation } from "@react-spring/web";
import { Group, Mesh, Material } from "three";

interface ModelProps {
  open: boolean;
  hinge: Interpolation<number, 1.575 | -0.425>;
  htmlPageContent: JSX.Element;
}

interface GLTFResult {
  nodes: {
    Cube008: Mesh;
    Cube008_1: Mesh;
    Cube008_2: Mesh;
    keyboard: Mesh;
    Cube002: Mesh;
    Cube002_1: Mesh;
    touchbar: Mesh;
  };
  materials: {
    aluminium: Material;
    "matte.001": Material;
    "screen.001": Material;
    keys: Material;
    trackpad: Material;
    touchbar: Material;
  };
}

const Model: React.FC<ModelProps> = ({
  open,
  hinge,
  htmlPageContent,
  ...props
}) => {
  const group = useRef<Group>(null);
  const lidRef = useRef<Group>(null);

  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + "/mac-draco.glb"
  ) as unknown as GLTFResult;

  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame((state) => {
    if (!lidRef.current) return;
    const t = state.clock.getElapsedTime();
    const openRotation = THREE.MathUtils.lerp(
      lidRef.current.rotation.x,
      1.575,
      (Math.cos(t) + 1) / 20
    );
    const closingRotation = THREE.MathUtils.lerp(
      lidRef.current.rotation.x,
      -0.425,
      (Math.cos(t) + 1) / 20
    );

    const targetRotation = open ? openRotation : closingRotation;

    lidRef.current.rotation.x = targetRotation;
  });

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 10 + 0.25 : 0,
      0.05
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 4 : 0,
      0.05
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 10 : 0,
      0.05
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-2 + Math.sin(t)) / 3 : -4.3,
      0.05
    );
  });
  const pageContent = (
    <Html
      className="content"
      rotation-x={-Math.PI / 2}
      position={[0, 0.04, -0.09]}
      transform
      occlude
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        maxWidth: "500px",
        padding: "0px",
      }}
    >
      <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
        <main>{htmlPageContent}</main>
      </div>
    </Html>
  );
  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
      dispose={null}
    >
      <group
        dispose={null}
        ref={lidRef}
        rotation-x={-0.425}
        position={[0, -0.04, 0.41]}
      >
        <group position={[0, 2.965, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.aluminium}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials["matte.001"]}
          />
          <mesh geometry={nodes["Cube008_2"].geometry}>{pageContent}</mesh>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard.geometry}
        material={materials.keys}
        position={[1.793, 0, 3.451]}
      />
      <group position={[0, -0.1, 3.394]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.aluminium}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.trackpad}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.touchbar.geometry}
        material={materials.touchbar}
        position={[0, -0.027, 1.201]}
      />
    </group>
  );
};

export default Model;
