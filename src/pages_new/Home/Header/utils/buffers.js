import { useMemo } from 'react'

export function useNodesBuffers (inputs) {
  return useMemo(() => {
    const howMany = inputs.length
    const positionBuffer = new Float32Array(howMany * 3)
    const colorBuffer = new Float32Array(howMany * 3)
    const sizeBuffer = new Float32Array(howMany)
    const opacityBuffer = new Float32Array(howMany)
    const lerpPositionBuffer = new Float32Array(howMany * 3)

    const addRad = (Math.PI * 2) / howMany

    Array(howMany).fill()
      .forEach((_, i) => {
        const v3index = i * 3
        const rad = addRad * i
        const radius = 2000 + Math.random() * 100000
        positionBuffer[v3index + 0] = Math.cos(rad) * radius
        positionBuffer[v3index + 1] = Math.sin(rad) * radius
        sizeBuffer[i] = 1
        opacityBuffer[i] = Math.random() * (Math.PI * 2)
      })

    lerpPositionBuffer.set(positionBuffer)

    return [
      [
        positionBuffer,
        colorBuffer,
        sizeBuffer,
        opacityBuffer,
        lerpPositionBuffer
      ],
      howMany
    ]
  }, [inputs])
}

export function useEdgesBuffers (inputs) {
  return useMemo(() => {
    const howMany = inputs.length
    const fromBuffer = new Float32Array(howMany * 3)
    const toBuffer = new Float32Array(howMany * 3)
    const opacityBuffer = new Float32Array(howMany)
    const widthBuffer = new Float32Array(howMany)
    const lerpPositionBuffer = new Float32Array(howMany)

    return [
      [
        fromBuffer,
        toBuffer,
        opacityBuffer,
        widthBuffer,
        lerpPositionBuffer
      ],
      howMany
    ]
  }, [inputs])
}
