import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('opossum.glb')

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
        rotation={[0, 0, Math.PI / 2]}
        scale={active ? 0.35 : 0.3}
        onClick={() => setActive(!active)}
        ref={group}
      >
        <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials['Material.006']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane_1.geometry} material={materials['Material.007']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane_2.geometry} material={materials['Material.008']} />
      </group>
    </group>
  )
}

useGLTF.preload('/opossum.glb')
