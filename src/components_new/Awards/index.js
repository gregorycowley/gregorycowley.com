import React from 'react'

import ListTable, { TitleLeft, ListContainerRight } from 'components/ListTable'


const headers = [
  { id: 'label', isHighlighted: true },
  { id: 'category', isHighlighted: false },
  { id: 'date', dateFormat: 'yyyy', isHighlighted: false }
]
const awards = [
  {
    label: {
      fr: 'Silver award - Commute',
      en: 'Silver award - Commute'
    },
    url: {
      fr: 'https://www.informationisbeautifulawards.com/showcase/4203',
      en: 'https://www.informationisbeautifulawards.com/showcase/4203'
    },
    category: 'Information is Beautiful',
    date: new Date('2019-11-01')
  },
  {
    label: {
      fr: 'FWA of the day - Crea Carte',
      en: 'FWA of the day - Crea Carte'
    },
    url: {
      fr: 'https://thefwa.com/cases/crea-carte',
      en: 'https://thefwa.com/cases/crea-carte'
    },
    category: 'FWA',
    date: new Date('2015-01-01')
  },
  {
    label: {
      fr: 'Site of the day - Crea Carte',
      en: 'Site of the day - Crea Carte'
    },
    url: {
      fr: 'https://www.awwwards.com/sites/crea-carte',
      en: 'https://www.awwwards.com/sites/crea-carte'
    },
    category: 'Awwwards',
    date: new Date('2015-01-01')
  },
  {
    label: {
      fr: 'Prix Data Visualisation',
      en: 'Data Visualisation award'
    },
    url: {
      fr: 'https://www.journaldunet.com/solutions/analytics/1136448-les-vainqueurs-des-data-intelligence-awards-2014/',
      en: 'https://www.journaldunet.com/solutions/analytics/1136448-les-vainqueurs-des-data-intelligence-awards-2014/'
    },
    category: 'Data Intelligence Award',
    date: new Date('2014-01-01')
  },
  {
    label: {
      fr: 'Site of the day - Dataveyes website',
      en: 'Site of the day - Dataveyes website'
    },
    url: {
      fr: 'https://www.awwwards.com/sites/dataveyes-human-data-interactions',
      en: 'https://www.awwwards.com/sites/dataveyes-human-data-interactions'
    },
    category: 'Awwwards',
    date: new Date('2014-01-01')
  },
  {
    label: {
      fr: 'FWA of the day - Dataveyes website',
      en: 'FWA of the day - Dataveyes website'
    },
    url: {
      fr: 'https://thefwa.com/cases/dataveyes-human-data-interactions',
      en: 'https://thefwa.com/cases/dataveyes-human-data-interactions'
    },
    category: 'FWA',
    date: new Date('2014-01-01')
  },
  {
    label: {
      fr: 'Start-up de l\'annÃ©e',
      en: 'Start-up of the year'
    },
    url: {
      fr: 'https://www.presse-citron.net/dataveyes-remporte-le-trophee-startup-presse-citron-2013/',
      en: 'https://www.presse-citron.net/dataveyes-remporte-le-trophee-startup-presse-citron-2013/'
    },
    category: 'Presse Citron',
    date: new Date('2013-01-01')
  },
  {
    label: {
      fr: 'Silver Cristal - Rennes MÃ©tropole',
      en: 'Silver Cristal - Rennes MÃ©tropole'
    },
    category: 'Cristal Festival',
    date: new Date('2013-01-01')
  },
  {
    label: {
      fr: 'Site of the day - Dataveyes website',
      en: 'Site of the day - Dataveyes website'
    },
    url: {
      fr: 'https://www.awwwards.com/sites/dataveyes',
      en: 'https://www.awwwards.com/sites/dataveyes'
    },
    category: 'Awwwards',
    date: new Date('2012-01-01')
  }

]

const Awards = ({ isDarkTheme }) => {
  if (!awards.length) return null
  return (
    <>
      <TitleLeft>
        FormattedMessage: awards-title
      </TitleLeft>
      <ListContainerRight id='award'>
        <ListTable
          list={awards}
          headers={headers}
          gridTemplateColumns='6fr 4fr 4fr'
          isDarkTheme={isDarkTheme}
        />
      </ListContainerRight>
    </>
  )
}

export default Awards
export { awards }
