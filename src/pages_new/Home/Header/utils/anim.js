import { useEffect } from 'react'
import { useThree } from "@react-three/fiber";
import { detect } from 'detect-browser'

import { layouts } from './layouts'

import anime from 'animejs'

var RAD2DEG = 180 / Math.PI
var DEG2RAD = Math.PI / 180

const baseWidth = 2560
const baseHeight = 1361
const width = window.innerWidth
const height = window.innerHeight

const xRatio = width / baseWidth
const yRatio = height / baseHeight
const ratio = Math.max(xRatio, yRatio)

const browser = detect()
const isMobile = browser && (browser.os === 'iOS' || browser.os === 'Android')

export const backgrounds = [
  '#030519',
  '#120319',
  '#031419'
]

export function moveCamera (lng, lat, radius = height * 0.5) {
  var phi = (90 - (lat * RAD2DEG)) * DEG2RAD
  var theta = ((lng * RAD2DEG) + 180) * DEG2RAD

  return [
    -(radius * Math.sin(phi) * Math.sin(theta)),
    radius * Math.cos(phi),
    -radius * Math.sin(phi) * Math.cos(theta)
  ]
}

export function Animation ({
  settings, setSettings, setEdgeOpacity, setBackground, setStep
}) {
  const { camera } = useThree()

  /* eslint-disable */
  useEffect(() => {
    function deplaceCAmera (lat, lng, radius) {
      camera.position.set(...moveCamera(lat, lng, radius))
      camera.lookAt(0, 0, 0)
    }
    const originalsettigs = { ...settings }
    const animations = []
    let running = true

    async function run () {
      let currentSettings = originalsettigs
      const state = {
        cameraLat: Math.PI,
        cameraLng: 0,
        cameraRadius: height * 0.5,
        edgeOpacity: 0
      }

      const activeSteps = {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true
      }

      if (running && activeSteps[1]) {
        const a = anime({
          targets: state,
          ...{
            cameraLat: Math.PI * 2,
            cameraRadius: state.cameraRadius / ratio
          },
          delay: 0,
          duration: 4000,
          easing: 'easeInOutExpo',
          changeBegin: function () {
            if (!running) return
            currentSettings = {
              layout: Object.keys(layouts)[0],
              colorScale: 'users',
              nodes: {
                display: true,
                opacity: 1,
                width: 1
              },
              axises: {
                axis1: {
                  value: 'startDay',
                  bounds: {
                    values: [0, 360]
                  }
                },
                axis2: {
                  value: 'startTime',
                  bounds: {
                    values: [100, 600]
                  }
                },
                axis3: {
                  value: 'collaborationNumber',
                  bounds: {
                    values: [-300, 300]
                  }
                }
              }
            }
            setBackground(backgrounds[0])
            setSettings(currentSettings)
            setEdgeOpacity(0)
            setStep(1)
          },
          update: function (v) {
            if (running && v.changeBegan) deplaceCAmera(state.cameraLat, state.cameraLng, state.cameraRadius)
          }
        }).finished
        animations.push(a)
        await a
      }

      if (running && activeSteps[2]) {
        animations.push(
          anime
            .timeline({
              easing: 'easeInOutExpo'
            })
            .add({
              targets: { i: 0 },
              ...{ i: 1 },
              delay: 2000,
              duration: 100,
              changeBegin: function () {
                if (!running) return
                currentSettings = {
                  ...currentSettings,
                  axises: {
                    ...currentSettings.axises,
                    axis3: {
                      value: 'users',
                      bounds: {
                        values: [
                          (-window.innerWidth * 0.3) / ratio,
                          (window.innerWidth * 0.3) / ratio
                        ]
                      }
                    }
                  }
                }
                setSettings(currentSettings)
                setStep(2)
              }
            })
        )
      }

      animations.push(
        anime
          .timeline({
            delay: 1000,
            duration: 12000
          })
          .add({
            easing: 'easeInOutExpo',
            targets: state,
            ...{
              cameraLat: Math.PI * 2.55,
              cameraRadius: (height * 0.9) / ratio
            },
            duration: 10000,
            changeBegin: function () {
              if (!running) false
              setStep(2)
            },
            update: function (v) {
              if (running && v.changeBegan) deplaceCAmera(state.cameraLat, state.cameraLng, state.cameraRadius)
            }
          })
      )

      if (running && activeSteps[3]) {
        const a = anime
          .timeline({
            easing: 'easeInOutExpo'
          })
          .add({
            targets: { opacity: 0 },
            opacity: 0.05,
            delay: 7000,
            easing: 'linear',
            duration: 4000,
            update: function (v) {
              if (running && v.changeBegan) setEdgeOpacity(v.animatables[0].target.opacity)
            }
          })
          .add({
            targets: { i: 0 },
            ...{ i: 1 },
            duration: 4000,
            delay: 6000,
            changeBegin: function () {
              if (!running) return
              currentSettings = {
                ...currentSettings,
                axises: {
                  ...currentSettings.axises,
                  axis2: {
                    value: 'projects',
                    bounds: {
                      values: [100, 700]
                    }
                  },
                  axis3: {
                    value: 'users',
                    bounds: {
                      values: [
                        (-window.innerWidth * 0.3) / ratio,
                        (window.innerWidth * 0.3) / ratio
                      ]
                    }
                  }
                }
              }
              setSettings(currentSettings)
              setStep(3)
            }
          }, 10).finished
        animations.push(a)
        await a
      }

      if (running && activeSteps[4]) {
        const a = anime
          .timeline({
            easing: 'easeInOutExpo'
          }).add({
            targets: state,
            ...{
              cameraLat: Math.PI * 2
            },
            duration: 2000,
            update: function (v) {
              if (running && v.changeBegan) deplaceCAmera(state.cameraLat, state.cameraLng, state.cameraRadius)
            }
          })
          .add({
            targets: { i: 0 },
            ...{ i: 1 },
            duration: 100,
            changeBegin: function () {
              if (!running) return
              setBackground(backgrounds[1])
              currentSettings = {
                ...currentSettings,
                colorScale: 'collaborationNumber',
                edges: {
                  ...currentSettings.edges,
                  opacity: 0.05,
                  width: 1,
                  display: true
                },
                axises: {
                  ...currentSettings.axises,
                  axis2: {
                    value: 'projectTasks',
                    bounds: {
                      values: [100, 500]
                    }
                  },
                  axis3: {
                    value: 'users',
                    bounds: {
                      values: [-1, 1]
                    }
                  }
                }
              }
              setSettings(currentSettings)
              setStep(4)
            }
          }, 200)
          .add({
            targets: { i: 0 },
            ...{ i: 1 },
            duration: 100,
            changeBegin: function () {
              if (!running) return
              currentSettings = {
                ...currentSettings,
                edges: {
                  ...currentSettings.edges,
                  opacity: 0.05,
                  width: 1,
                  display: true
                },
                axises: {
                  ...currentSettings.axises,
                  axis2: {
                    value: 'projectTasks',
                    bounds: {
                      values: [100, 500]
                    }
                  },
                  axis3: {
                    value: 'collaborationNumber',
                    bounds: {
                      values: [-1, 500]
                    }
                  }
                }
              }
              setSettings(currentSettings)
            }
          }, 1500)
          .add({
            easing: 'easeInOutExpo',
            targets: state,
            ...{
              cameraLng: Math.PI * -0.25,
              cameraRadius: (window.innerHeight * 0.65) / ratio
            },
            duration: 5000,
            update: function (v) {
              if (running && v.changeBegan) deplaceCAmera(state.cameraLat, state.cameraLng, state.cameraRadius)
            }
          }, 1000).finished
        animations.push(a)
        await a
      }

      if (running && activeSteps[5]) {
        const a = anime
          .timeline({
          }).add({
            targets: state,
            ...{
              cameraLng: 0,
              cameraRadius: (height * 0.71) / (isMobile ? yRatio : xRatio)
            },
            easing: 'easeInOutExpo',
            duration: 1000,
            update: function (v) {
              if (running && v.changeBegan) deplaceCAmera(state.cameraLat, state.cameraLng, state.cameraRadius)
            }
          })
          .add({
            targets: state,
            ...{
              cameraLat: state.cameraLat + Math.PI * 0.01,
              cameraRadius: (height * 0.62) / (isMobile ? yRatio : xRatio)
            },
            easing: 'linear',
            duration: 5000,
            update: function (v) {
              if (running && v.changeBegan) deplaceCAmera(state.cameraLat, state.cameraLng, state.cameraRadius)
            }
          }, 1000)
          .add({
            targets: { i: 0 },
            ...{ i: 1 },
            duration: 6000,
            changeBegin: function () {
              if (!running) return
              currentSettings = {
                ...currentSettings,
                layout: Object.keys(layouts)[1],
                colorScale: 'projects',
                edges: {
                  ...currentSettings.edges,
                  display: false
                },
                axises: {
                  axis1: {
                    value: 'startDay',
                    bounds: {
                      values: [-width * 0.48, width * 0.48]
                    }
                  },
                  axis2: {
                    value: 'projectTasks',
                    bounds: {
                      values: [-height * 0.45, height * 0.45]
                    }
                  },
                  axis3: {
                    value: 'collaborationNumber',
                    bounds: {
                      values: [-2, 2]
                    }
                  }
                }
              }
              setBackground(backgrounds[2])
              setSettings(currentSettings)
              setStep(5)
            }
          }, 0).finished
        animations.push(a)
        await a
      }

      animations.push(
        anime({
          targets: state,
          ...{
            cameraLat: Math.PI * 2.5,
            cameraRadius: (height * 1.1) / ratio
          },
          easing: 'linear',
          duration: 14000,
          delay: 0,
          complete: () => {
            if (running) run()
          },
          update: function (v) {
            if (running && v.changeBegan) deplaceCAmera(state.cameraLat, state.cameraLng, state.cameraRadius)
          }
        })
      )

      if (activeSteps[6]) {
        const a = anime
          .timeline({
            easing: 'easeInOutExpo'
          })
          .add({
            targets: { opacity: 0 },
            opacity: 0.05,
            duration: 3000,
            update: function (v) {
              if (running && v.changeBegan) setEdgeOpacity(v.animatables[0].target.opacity)
            }
          })
          .add({
            targets: { i: 0 },
            ...{ i: 1 },
            delay: 0,
            duration: 6000,
            changeBegin: function () {
              if (!running) return
              currentSettings = {
                ...currentSettings,
                layout: Object.keys(layouts)[3],
                edges: {
                  ...currentSettings.edges,
                  display: true,
                  opacity: 0.1
                }
              }
              setSettings(currentSettings)
              setStep(6)
            }
          }, 200).finished
        animations.push(a)
        await a
      }

      if (running && activeSteps[7]) {
        const a = anime
          .timeline({
            easing: 'easeInOutExpo',
            duration: 8000,
            delay: 3000
          })
          .add({
            targets: { i: 0 },
            ...{ i: 1 },
            delay: 1000,
            duration: 4000,
            changeBegin: function () {
              if (!running) return
              currentSettings = {
                ...currentSettings,
                layout: Object.keys(layouts)[2]
              }
              setSettings(currentSettings)
              setStep(7)
            }
          }, 200).finished
        animations.push(a)
        await a
      }
    }

    run()

    return () => {
      running = false
      animations.forEach((d) => {
        anime.remove(d)
      })
    }

  }, [])
  /* eslint-enable */

  return null
}
