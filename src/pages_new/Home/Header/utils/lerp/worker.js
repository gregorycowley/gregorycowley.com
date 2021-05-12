import lerp from 'lerp'

export function run (
  [nodesFromBuffer, nodesToBuffer],
  [edgesFromBuffer, edgesToBuffer, relations]
) {
  const factor = 0.05

  var i = 0
  var total = (nodesToBuffer.length / 3)
  while (total > i) {
    const v3index = i * 3
    const ffactor = factor - (i / total) / 100
    nodesFromBuffer[v3index] = lerp(nodesFromBuffer[v3index], nodesToBuffer[v3index], ffactor)
    nodesFromBuffer[v3index + 1] = lerp(nodesFromBuffer[v3index + 1], nodesToBuffer[v3index + 1], ffactor)
    nodesFromBuffer[v3index + 2] = lerp(nodesFromBuffer[v3index + 2], nodesToBuffer[v3index + 2], ffactor)
    i++
  }

  i = 0
  while (relations.length > i) {
    const v3index = i * 3
    const fromV3index = relations[i].from * 3
    const toV3index = relations[i].to * 3

    edgesFromBuffer[v3index] = nodesFromBuffer[fromV3index]
    edgesFromBuffer[v3index + 1] = nodesFromBuffer[fromV3index + 1]
    edgesFromBuffer[v3index + 2] = nodesFromBuffer[fromV3index + 2]

    edgesToBuffer[v3index] = nodesFromBuffer[toV3index]
    edgesToBuffer[v3index + 1] = nodesFromBuffer[toV3index + 1]
    edgesToBuffer[v3index + 2] = nodesFromBuffer[toV3index + 2]
    i++
  }

  return [nodesFromBuffer, edgesFromBuffer, edgesToBuffer]
}
