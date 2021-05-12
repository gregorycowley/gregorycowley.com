import React from 'react'

import ListTable, { TitleLeft, ListContainerRight } from 'components/ListTable'


const headers = [
  { id: 'label', isHighlighted: true },
  { id: 'place', isHighlighted: false },
  { id: 'year', isHighlighted: false }
]
const exhibitions = [
  {
    label: {
      fr: 'Designer(s) du Design',
      en: 'Design Designer(s)'
    },
    url: {
      fr: 'https://www.designiscapital.com/programme/designers-du-design',
      en: 'https://www.designiscapital.com/en/program/design-designers'
    },
    place: 'Lille, France',
    year: '2020'
  },
  {
    label: 'Futur.e.s',
    url: {
      fr: 'https://futures.paris/evenement/commute-metronome/',
      en: 'https://futures.paris/evenement/commute-metronome/'
    },
    place: 'Paris, France',
    year: '2013, 2014, 2015, 2016, 2019'
  },
  {
    label: 'GROW',
    place: 'Paris, France',
    year: '2018'
  },
  {
    label: 'Vivatech',
    place: 'Paris, France',
    year: '2017, 2018'
  },
  {
    label: '123 data exhibition',
    url: {
      fr: 'https://fondation.edf.com/evenements/123-data/',
      en: 'https://fondation.edf.com/evenements/123-data/'
    },
    place: 'Paris, France',
    year: '2018'
  }
]

const Exhibitions = ({ isDarkTheme }) => {
  if (!exhibitions.length) return null
  return (
    <>
      <TitleLeft>
        FormattedMessage: exhibitions-title
      </TitleLeft>
      <ListContainerRight id='award'>
        <ListTable
          list={exhibitions}
          headers={headers}
          gridTemplateColumns='6fr 4fr 4fr'
          isDarkTheme={isDarkTheme}
        />
      </ListContainerRight>
    </>
  )
}

export default Exhibitions
