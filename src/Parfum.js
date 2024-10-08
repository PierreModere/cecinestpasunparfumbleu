/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/parfum.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[0, 1.699, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.225, 1.225, 1.281]}
      />
    </group>
  )
}

useGLTF.preload('/parfum.glb')
