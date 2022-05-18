import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('possum.glb')

  //State for scale
  const [active, setActive] = useState(false)

  //Animation
  useFrame(({ clock }) => {
    const a = Math.sin(clock.getElapsedTime())
    group.current.rotation.y = a
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={active ? 1 : 1.2}
        onClick={() => setActive(!active)}
        ref={group}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground.geometry}
          material={materials.ground}
          position={[0, 0.18, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[-0.04, 1.89, -0.31]}
          rotation={[0.89, -1.45, 0.88]}
          scale={[0.16, 0.16, 0.16]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={nodes.Cube017.material}
          position={[0.58, 1.77, 0.14]}
          rotation={[-1.55, -0.83, -1.57]}
          scale={[0.15, 0.15, 0.15]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={nodes.Cube022.material}
          position={[0.07, 2.43, -0.08]}
          rotation={[0.02, 0.15, 0.11]}
          scale={0.16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.PossumMom}
          position={[0, 0.98, -0.41]}
          scale={0.3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[0, -0.08, -0.12]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[-0.2, 1.66, 0.88]}
          rotation={[-1.63, 1.34, 1.62]}
          scale={[0.13, 0.13, 0.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={nodes.Cube019.material}
          position={[-0.51, 1.57, 0.39]}
          rotation={[-1.59, 0.75, 1.57]}
          scale={[0.15, 0.15, 0.15]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('possum.glb')
