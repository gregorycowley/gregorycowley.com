import { scaleLinear } from 'd3-scale'
import { uniq, groupBy, reduce } from 'lodash'
import { tree, hierarchy as hierarchyFn } from 'd3-hierarchy'
import { forceSimulation, forceManyBody, forceLink, forceX, forceY, forceZ } from 'd3-force-3d'

import { logicLinks } from './relations'

export const coral = (axis1, axis2, axis3, inputs) => {
  const inputsForProject = [...inputs]
  const groups = reduce(
    groupBy(
      inputsForProject.sort((a, b) => a.startDay - b.startDay),
      (d) => d.user
    ),
    (p, c, k) => {
      p.push(groupBy(c, (d) => `${d.project}-${d.task}`))
      return p
    },
    []
  )

  const { paths, durations } = Object.keys(groups).reduce((p, c) => {
    Object.keys(groups[c]).forEach((k) => {
      p.paths[`${c}-${k}`] = null
      p.durations[`${c}-${k}`] = groups[c][k].reduce((p, c) => p + c.duration, 0) / groups[c][k].length
    })
    return p
  }, { paths: {}, durations: {} })

  const first = inputsForProject.shift()
  const hierarchie = {
    name: first.i,
    path: `${first.user}-${first.project}-${first.task}`,
    couuunt: 0,
    duration: first.duration,
    addRrad: 0.3 + (Math.random() - 0.5) * (Math.PI * 0.05),
    children: []
  }
  paths[hierarchie.path] = hierarchie
  let last = paths[hierarchie.path]

  let couuunt = 0

  inputsForProject.forEach((d) => {
    const path = `${d.user}-${d.project}-${d.task}`

    if (!paths[path]) {
      couuunt++
      const obj = {
        name: d.i,
        path,
        duration: d.duration,
        couuunt,
        addRrad: (Math.random() - 0.5) * (Math.PI * 0.05),
        children: []
      }
      last.children.push(obj)
      paths[path] = obj
      last = obj
    } else {
      const obj = {
        name: d.i,
        path,
        couuunt,
        duration: d.duration,
        addRrad: paths[path].addRrad,
        children: []
      }
      paths[path].children.push(obj)
      paths[path] = obj
      last = obj
    }
  })

  const treeFn = tree()
  const root = treeFn(hierarchyFn(hierarchie))

  root.x = 0
  root.y = 0

  root.rad = {
    min: 0,
    max: Math.PI * 2
  }

  const radius = 10
  const ppoints = {}

  ppoints[root.data.name] = [root.x, root.y]

  const recursivePos = (node) => {
    if (node.children) {
      const radAdd = (node.rad.max - node.rad.min) / (node.children.length * 1)

      node.children.forEach((d, i) => {
        const addDiff = ((durations[d.data.path] - d.data.duration) || 0) * Math.PI
        const rad = node.rad.min + (radAdd * i) + (0.5 * radAdd) + node.data.addRrad + addDiff

        d.x = node.x + Math.cos(rad) * radius
        d.y = node.y - Math.sin(rad) * radius

        const obj = [d.y, (d.data.couuunt * 4) - (couuunt * 0.58) * 4, d.x]
        ppoints[d.data.name] = obj

        d.rad = {
          min: rad - Math.PI * 0.15,
          max: rad + Math.PI * 0.15
        }

        recursivePos(d)
      })
    }
  }

  recursivePos(root)

  return (input) => {
    if (input && ppoints[input.i]) {
      return [
        ppoints[input.i][0],
        ppoints[input.i][1],
        ppoints[input.i][2] || 0
      ]
    }
    return [
      -1000, -1000, 0
    ]
  }
}

export const CircleLayoutConfig = {
  axis1: {
    step: 10,
    min: 0,
    max: 720,
    values: [0, 360]
  },
  axis2: {
    step: 10,
    min: 0,
    max: 1000,
    values: [100, 500]
  },
  axis3: {
    step: 5,
    min: -600,
    max: 600,
    values: [-300, 300]
  }
}
export function CircleLayout (axis1, axis2, axis3) {
  const radScale = scaleLinear()
    .domain([axis1.bounds[0], axis1.bounds[1]])
    .range(axis1.range)
  const radiusScale = scaleLinear()
    .domain(axis2.bounds)
    .range(axis2.range)
  const elevationScale = scaleLinear()
    .domain(axis3.bounds)
    .range(axis3.range)

  return (input) => {
    const rad = radScale(axis1.accessor(input)) * 0.0174533
    const radius = radiusScale(axis2.accessor(input))
    const elevation = elevationScale(axis3.accessor(input))

    return [
      Math.cos(rad) * radius,
      Math.sin(rad) * radius,
      elevation + (Math.random() * 5)
    ]
  }
}

export const GridLayoutConfig = {
  axis1: {
    step: 10,
    min: -1000,
    max: 1000,
    values: [-500, 500]
  },
  axis2: {
    step: 10,
    min: -1000,
    max: 1000,
    values: [-300, 300]
  },
  axis3: {
    step: 5,
    min: -600,
    max: 600,
    values: [-300, 300]
  }
}
export function GridLayout (axis1, axis2, axis3) {
  const xScale = scaleLinear()
    .domain(axis1.bounds)
    .range(axis1.range)
  const yScale = scaleLinear()
    .domain(axis2.bounds)
    .range(axis2.range)
  const elevationScale = scaleLinear()
    .domain(axis3.bounds)
    .range(axis3.range)

  return (input) => {
    const x = xScale(axis1.accessor(input))
    const y = yScale(axis2.accessor(input))
    const elevation = elevationScale(axis3.accessor(input))

    return [
      x,
      y,
      elevation
    ]
  }
}

const notNull = (d) => d !== undefined && d !== null

export const forceLayout = (axis1, axis2, axis3, inputs) => {
  const filtered = inputs

  const projectGroups = groupBy(filtered, (d) => d.project)
  const projects = uniq(filtered.map((d) => d.project))
  const taskToProject = reduce(
    projectGroups,
    (p, c, k) => {
      c.forEach((d) => {
        p[d.task] = k
      })
      return p
    },
    {}
  )

  const tasks = uniq(filtered.map((d) => d.task))

  const ppoints = {}
  const availableNodes = filtered.reduce((p, c, i) => {
    p[c.i] = i
    return p
  }, {})
  const links = [
    ...logicLinks(filtered)
      .map((d) => {
        if (
          notNull(availableNodes[d.from]) &&
          notNull(availableNodes[d.to])
        ) {
          return {
            source: availableNodes[d.from],
            target: availableNodes[d.to],
            strength: 1
          }
        } else {
          return null
        }
      }).filter((d) => !!d),
    ...filtered.map((d) => ({
      source: availableNodes[d.i],
      target: filtered.length + tasks.indexOf(d.task),
      strength: 1
    })),
    ...filtered.map((d) => ({
      source: availableNodes[d.i],
      target: filtered.length + tasks.indexOf(d.task) + projects.indexOf(taskToProject[d]),
      strength: 0.5
    })),
    ...tasks.map((d) => ({
      source: filtered.length + tasks.indexOf(d.task),
      target: filtered.length + tasks.indexOf(d.task) + projects.indexOf(taskToProject[d]),
      strength: 1
    }))
  ]

  const force = forceSimulation(
    [
      ...filtered.map((d) => ({
        ...d,
        index: availableNodes[d.i]
      })),
      ...tasks
        .sort((a, b) => a - b)
        .map((d, i) => ({
          index: filtered.length + i,
          i: d,
          label: d
        })),
      ...projects
        .sort((a, b) => a - b)
        .map((d, i) => ({
          index: filtered.length + tasks.length + i,
          i: d,
          label: d
        }))
    ],
    3
  )

  force
    .force('link', forceLink(links).distance(-10).strength((d) => d.strength * 2))
    .force('charge', forceManyBody().strength(-100))
    .force('x', forceX())
    .force('y', forceY())
    .force('z', forceZ())

  force.stop()

  Array(10).fill().forEach(() => {
    force.tick()
  })

  force.nodes()
    .forEach((d) => {
      ppoints[d.i] = [d.x, d.y, (d.z || 0) / 1]
    })

  return (input) => {
    if (input && ppoints[input.i]) {
      return ppoints[input.i]
    } else {
      return [0, 0, 0]
    }
  }
}

export const layouts = {
  circle: {
    layout: CircleLayout,
    config: CircleLayoutConfig
  },
  grid: {
    layout: GridLayout,
    config: GridLayoutConfig
  },
  forceLayout: {
    layout: forceLayout,
    config: GridLayoutConfig
  },
  coral: {
    layout: coral,
    config: CircleLayoutConfig
  }
}
