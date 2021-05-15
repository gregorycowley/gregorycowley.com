import React, { useEffect, useRef } from 'react'
import { useFrame } from "@react-three/fiber";

import {
  PlaneBufferGeometry,
  InstancedBufferGeometry,
  InstancedBufferAttribute,
  ShaderMaterial,
  Mesh
} from 'three'

import edgeShader from './shader'

const EdgeComponent = (props) => {
  const parentRef = useRef()
  const geoRef = useRef()

  const [from, to] = props.buffers

  useEffect(() => {
    const parentRefCurrent = parentRef.current
    const t = new PlaneBufferGeometry(1, 1)
    const geometry = new InstancedBufferGeometry()
    geometry.index = t.index
    geometry.attributes = t.attributes

    geometry.setAttribute('instanceFrom', new InstancedBufferAttribute(from, 3))
    geometry.setAttribute('instanceTo', new InstancedBufferAttribute(to, 3))

    const material = new ShaderMaterial(edgeShader)
    const mesh = new Mesh(geometry, material)
    mesh.frustumCulled = false
    mesh.matrixWorldNeedsUpdate = false
    mesh.matrixAutoUpdate = false
    parentRef.current.add(mesh)

    geoRef.current = mesh

    return () => parentRefCurrent.remove(mesh)
  }, [from, to])

  useEffect(() => {
    geoRef.current.visible = props.display
  }, [props])

  useEffect(() => {
    geoRef.current.material.uniforms.opacity.value = props.opacity
  }, [props.opacity])

  useFrame(() => {
    geoRef.current.geometry.attributes.instanceFrom.needsUpdate = true
    geoRef.current.geometry.attributes.instanceTo.needsUpdate = true
  })

  return <group ref={parentRef} renderOrder={0} />
}

export default EdgeComponent
