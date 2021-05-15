import React, { useEffect, useRef } from 'react'
import { useFrame } from "@react-three/fiber";
import { cloneDeep } from 'lodash'

import {
  CircleBufferGeometry,
  InstancedBufferGeometry,
  InstancedBufferAttribute,
  ShaderMaterial,
  InstancedMesh
} from 'three'

import pointShader from './shader'

export default function Index(props) {
  const parentRef = useRef()
  const meshRef = useRef()

  const [positions, colors, scales, opacities] = props.buffers

  useEffect(() => {
    const parentRefCurrent = parentRef.current

    const geometry = new CircleBufferGeometry(2, 30)
    const instanceGeometry = new InstancedBufferGeometry()
    instanceGeometry.index = geometry.index
    instanceGeometry.attributes = geometry.attributes

    instanceGeometry.setAttribute('instancePosition', new InstancedBufferAttribute(positions, 3))
    instanceGeometry.setAttribute('instanceColor', new InstancedBufferAttribute(colors, 3))
    instanceGeometry.setAttribute('instanceScale', new InstancedBufferAttribute(scales, 1))
    instanceGeometry.setAttribute('instanceOpacity', new InstancedBufferAttribute(opacities, 1))

    const material = new ShaderMaterial(cloneDeep(pointShader))
    const mesh = new InstancedMesh(instanceGeometry, material, scales.length)
    mesh.matrixWorldNeedsUpdate = false
    mesh.matrixAutoUpdate = false
    mesh.frustumCulled = false

    parentRefCurrent.add(mesh)
    meshRef.current = mesh

    return () => parentRefCurrent.remove(mesh)
  }, [positions, colors, scales, opacities])

  useEffect(() => {
    meshRef.current.visible = props.display
  }, [props])

  useFrame(() => {
    meshRef.current.material.uniforms.paillette.value += 0.03
    meshRef.current.geometry.attributes.instancePosition.needsUpdate = true
    meshRef.current.geometry.attributes.instanceColor.needsUpdate = true
    // meshRef.current.geometry.attributes.instanceScale.needsUpdate = true
    meshRef.current.geometry.attributes.instanceOpacity.needsUpdate = true
  })

  return <group ref={parentRef} renderOrder={0} />
}
