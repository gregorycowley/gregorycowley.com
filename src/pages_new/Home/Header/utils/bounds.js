import { groupBy, uniq } from 'lodash'
import { extent } from 'd3-array'
import { scaleLinear } from 'd3-scale'

export function getDataInfos (data) {
  const allTasksByProject = data.map((input) => `${input.project}-${input.task}`)
  const tasksByProjectGroups = groupBy(uniq(allTasksByProject), (d) => d.split('-')[0])
  const tasksByProject = Object.keys(tasksByProjectGroups)
    .reduce((p, c) => {
      return [...p, ...tasksByProjectGroups[c]]
    }, [])

  const accessors = {
    clients: (input) => input.client,
    startDay: (input) => input.startDay,
    startTime: (input) => input.startTime,
    collaborationNumber: (input) => input.collabLinks.length,
    users: (input) => input.user,
    projects: (input) => input.project,
    projectTasks: (input) => tasksByProject.indexOf(`${input.project}-${input.task}`)
  }

  const values = {
    startDay: uniq(data.map(accessors.startDay)),
    startTime: uniq(data.map(accessors.startTime)),
    collaborationNumber: uniq(data.map(accessors.collaborationNumber)),
    users: uniq(data.map(accessors.users)),
    projects: uniq(data.map(accessors.projects)),
    projectTasks: uniq(data.map(accessors.projectTasks))
  }

  const bounds = {
    startDay: extent(values.startDay),
    startTime: extent(values.startTime),
    collaborationNumber: extent(data.map((d) => d.collabLinks.length)),
    users: extent(values.users),
    projects: extent(values.projects),
    projectTasks: extent(values.projectTasks)
  }

  return {
    accessors,
    bounds,
    values
  }
}

export function getColorScales ({ values, bounds }) {
  const collaborationNumberLinearScale = scaleLinear()
    .domain(bounds.collaborationNumber)
    .range(['#3F248C', '#9FE8FF'])

  const scale = scaleLinear()
    .domain([0, 0.25, 0.5, 0.75, 1])
    .range(['#48D982', '#CDFF62', '#26CBFF', '#81FF62', '#0E6EFF'])
  const projectLinearScale = (input) => {
    return scale(
      (values.projects.length - input.project) / values.projects.length
    )
  }

  const scales = {
    users: (input) => userScale[input.user - 1],
    projects: (input) => projectLinearScale(input),
    collaborationNumber: (input) => {
      return collaborationNumberLinearScale(input.collabLinks.length)
    }
  }

  return {
    scales
  }
}

const userScale = [
  '#C63361',
  '#F4B63F',
  '#45BADF',
  '#5837AA',
  '#A54E92',
  '#E25D33',
  '#C2CA51',
  '#3C59A5',
  '#832DA4',
  '#fd3a5c'
]
