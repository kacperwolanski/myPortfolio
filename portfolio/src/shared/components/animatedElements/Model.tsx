import React, { useRef, useState, useEffect } from "react";
import { Html, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Interpolation } from "@react-spring/web";
import { Group, Mesh, Material } from "three";

interface ModelProps {
  open: boolean;
  hinge: Interpolation<number, 1.575 | -0.425>;
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

const Model: React.FC<ModelProps> = ({ open, hinge, ...props }) => {
  const group = useRef<Group>(null);
  const lidRef = useRef<Group>(null);

  // Load model
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + "/mac-draco.glb"
  ) as unknown as GLTFResult;

  // Handle cursor state
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // Apply hinge rotation
  useEffect(() => {
    if (lidRef.current) {
      lidRef.current.rotation.x = hinge.get();
    }
  }, [hinge]);

  // Make it float in the air when opened
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 10 + 0.25 : 0,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 4 : 0,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 10 : 0,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-2 + Math.sin(t)) / 3 : -4.3,
      0.1
    );
  });
  return (
    <group
      ref={group}
      {...props}
      position={[0, -1.5, 0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      dispose={null}
    >
      <group
        ref={lidRef}
        position={[0, -0.04, 0.41]}
        rotation-x={[hinge.get(), 0, 0]}
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
          <Html
            className="content"
            rotation-x={-Math.PI / 2}
            position={[0, 0.05, -0.09]}
            transform
            occlude
          >
            <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
              werciaaaa
            </div>
          </Html>
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
