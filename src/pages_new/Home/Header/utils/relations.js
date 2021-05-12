import { groupBy, reduce } from 'lodash'
import { tree, hierarchy as hierarchyFn } from 'd3-hierarchy'

export default function getLinks (inputs, deduped) {
  const result = inputs.reduce((p, c, index) => {
    if (c.collabLinks.length) {
      c.collabLinks.forEach((i) => {
        const target = inputs.find((d) => d.i === i)
        if (target) {
          p.push({
            from: index,
            to: inputs.indexOf(target)
          })
        }
      })
    }
    return p
  }, [])

  if (!deduped) return result

  return result.reduce((p, c) => {
    const id = `${c.from}-${c.to}`
    const oppositeId = `${c.to}-${c.from}`

    if (!p.dict[id] && !p.dict[oppositeId]) {
      p.dict[id] = 1
      p.dict[oppositeId] = 1
      p.deduped.push(c)
    }

    return p
  }, {
    dict: {},
    deduped: []
  }).deduped
}

export const logicLinks = (inputs) => {
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

  const paths = Object.keys(groups).reduce((p, c) => {
    Object.keys(groups[c]).forEach((k) => {
      p[`${c}-${k}`] = groups[c][k]
    })
    return p
  }, {})

  return reduce(
    paths,
    (p, c) => {
      let last = c[0]
      c.forEach((d) => {
        p.push({
          from: last.i,
          to: d.i
        })
        last = d
      })
      return p
    },
    []
  )
}

export const hierarchyRelation = (inputs) => {
  const inputsForProject = [...inputs]
  const groups = reduce(
    groupBy(
      inputsForProject.sort((a, b) => a.startDray - b.startDray),
      (d) => d.user
    ),
    (p, c, k) => {
      p.push(groupBy(c, (d) => `${d.project}-${d.task}`))
      return p
    },
    []
  )

  const paths = Object.keys(groups).reduce((p, c) => {
    Object.keys(groups[c]).forEach((k) => {
      p[`${c}-${k}`] = null
    })
    return p
  }, {})

  const first = inputsForProject.shift()
  const hierarchie = {
    name: first.i,
    path: `${first.user}-${first.project}-${first.task}`,
    children: []
  }
  paths[hierarchie.path] = hierarchie
  let last = paths[hierarchie.path]

  inputsForProject.forEach((d, i) => {
    const path = `${d.user}-${d.project}-${d.task}`

    if (!paths[path]) {
      const obj = {
        name: d.i,
        path,
        children: []
      }
      last.children.push(obj)
      paths[path] = obj
      last = obj
    } else {
      const obj = {
        name: d.i,
        path,
        children: []
      }
      paths[path].children.push(obj)
      paths[path] = obj
      last = obj
    }
  })

  const treeFn = tree()
  const root = treeFn(hierarchyFn(hierarchie))

  return root.links().map((d) => {
    return {
      from: d.source.data.name,
      to: d.target.data.name
    }
  })
}
