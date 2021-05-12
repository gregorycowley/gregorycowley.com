// import { useMemo, useEffect } from 'react'
// import Worker from 'workerize-loader!./worker' // eslint-disable-line import/no-webpack-loader-syntax
// import { run } from './worker'

// // import MyWorker = require('worker-loader!./worker/import.worker');

// let iteration = 0
// const worker = false

// export function useLerp (
//   [nodesFromBuffers, nodesToBuffers],
//   [edgesFromBuffer, edgesToBuffer, relations]
// ) {
//   const workerInstance = useMemo(() => {
//     const workerInstance = worker
//       ? new Worker()
//       : null
//     return workerInstance
//   }, [])

//   useEffect(() => {
//     let raf
//     let running = true
//     const currentIter = iteration

//     function update () {
//       if (currentIter === iteration) {
//         if (!worker) {
//           run(
//             [nodesFromBuffers, nodesToBuffers],
//             [edgesFromBuffer, edgesToBuffer, relations]
//           )
//           if (running) raf = window.requestAnimationFrame(update)
//         } else {
//           workerInstance
//             .run(
//               [nodesFromBuffers, nodesToBuffers],
//               [edgesFromBuffer, edgesToBuffer, relations]
//             )
//             .then((resultBuffer) => {
//               nodesFromBuffers.set(resultBuffer[0])
//               edgesToBuffer.set(resultBuffer[1])
//               edgesFromBuffer.set(resultBuffer[2])
//               if (running) raf = window.requestAnimationFrame(update)
//             })
//         }
//       }
//     }

//     raf = window.requestAnimationFrame(update)
//     return () => {
//       running = false
//       if (raf) window.cancelAnimationFrame(raf)
//       iteration++
//     }
//   }, [
//     workerInstance,
//     nodesFromBuffers, nodesToBuffers,
//     edgesFromBuffer, edgesToBuffer, relations
//   ])
// }
