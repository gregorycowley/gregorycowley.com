import React from 'react'
import { useParams } from 'react-router-dom'
import ListTable, { TitleLeft, ListContainerRight } from 'components/ListTable'


const headers = [
  { id: 'label', isHighlighted: true },
  { id: 'place', isHighlighted: false },
  { id: 'date', dateFormat: 'MMM yyyy', isHighlighted: false }
]
const talks = [
  {
    label: {
      fr: 'MOOC Digital Paris',
      en: null
    },
    place: {
      fr: 'Podcast',
      en: null
    },
    url: {
      fr: 'https://soundcloud.com/user-954776179/caroline-goulard-data-visualisation-juin-2020',
      en: null
    },
    date: new Date('2020-05-01')
  },
  {
    label: {
      fr: 'Data Stories #159',
      en: 'Data Stories #159'
    },
    place: {
      fr: 'Podcast',
      en: 'Podcast'
    },
    url: {
      fr: 'https://datastori.es/159-viz-agencies-dataveyes-and-accurat/',
      en: 'https://datastori.es/159-viz-agencies-dataveyes-and-accurat/'
    },
    date: new Date('2020-04-01')
  },
  {
    label: {
      fr: 'DataViz Live',
      en: 'DataViz Live'
    },
    place: {
      fr: 'Londres, Royaume-Uni',
      en: 'London, UK'
    },
    url: {
      fr: 'https://tucana-global.com/datavizlive-london/',
      en: 'https://tucana-global.com/datavizlive-london/'
    },
    date: new Date('2020-02-01')
  },
  {
    label: {
      fr: 'EU Dataviz',
      en: 'EU Dataviz'
    },
    place: {
      fr: 'Luxembourg',
      en: 'Luxembourg'
    },
    url: {
      fr: 'https://www.youtube.com/watch?v=s24eYh2_1X8&t=24978s',
      en: 'https://www.youtube.com/watch?v=s24eYh2_1X8&t=24978s'
    },
    date: new Date('2019-11-01')
  },
  {
    label: {
      fr: 'Data Materialisation',
      en: 'Data Materialisation'
    },
    place: {
      fr: 'Paris, France',
      en: 'Paris, France'
    },
    url: {
      fr: 'https://www.centrepompidou.fr/cpv/agenda/event.action?param.id=FR_R-d314bf7c3e67466cef352e2f6d2ecae9&param.idSource=FR_E-d314bf7c3e67466cef352e2f6d2ecae9',
      en: 'https://www.centrepompidou.fr/cpv/agenda/event.action?param.id=FR_R-d314bf7c3e67466cef352e2f6d2ecae9&param.idSource=FR_E-d314bf7c3e67466cef352e2f6d2ecae9'
    },
    date: new Date('2019-11-01')
  },
  {
    label: {
      fr: 'Encode',
      en: 'Encode'
    },
    place: {
      fr: 'Londres, Royaume-Uni',
      en: 'London, UK'
    },
    url: {
      fr: 'https://www.youtube.com/watch?v=BUg3b9KNTwY',
      en: 'https://www.youtube.com/watch?v=BUg3b9KNTwY'
    },
    date: new Date('2019-09-01')
  },
  {
    label: {
      fr: 'VISU',
      en: 'VISU'
    },
    place: {
      fr: 'Paris, France',
      en: 'Paris, France'
    },
    url: {
      fr: 'https://journee-visu.github.io/',
      en: 'https://journee-visu.github.io/'
    },
    date: new Date('2019-06-01')
  },
  {
    label: {
      fr: 'Strata Data Conference',
      en: 'Strata Data Conference'
    },
    place: {
      fr: 'Londres, Royaume-Uni',
      en: 'London, UK'
    },
    url: {
      fr: 'https://www.oreilly.com/library/view/strata-data-conference/9781492050568/video325060.html',
      en: 'https://www.oreilly.com/library/view/strata-data-conference/9781492050568/video325060.html'
    },
    date: new Date('2019-04-01')
  },
  {
    label: {
      fr: 'IEE VIS - VISAP',
      en: 'IEE VIS - VISAP'
    },
    place: {
      fr: 'Berlin, Allemagne',
      en: 'Berlin, Germany'
    },
    url: {
      fr: 'https://visap.net/2018/workshop',
      en: 'https://visap.net/2018/workshop'
    },
    date: new Date('2018-10-01')
  },
  {
    label: {
      fr: 'OpenVis',
      en: 'OpenVis'
    },
    place: {
      fr: 'Paris, France',
      en: 'Paris, France'
    },
    url: {
      fr: 'https://www.youtube.com/watch?v=9aVUtluzvNE',
      en: 'https://www.youtube.com/watch?v=9aVUtluzvNE'
    },
    date: new Date('2018-05-01')
  },
  {
    label: {
      fr: 'KIKK Festival',
      en: null
    },
    place: {
      fr: 'Namur, Belgique',
      en: null
    },
    url: {
      fr: 'https://vimeo.com/309070643',
      en: null
    },
    date: new Date('2018-11-01')
  },
  {
    label: {
      fr: 'Assembly of European Regions',
      en: 'Assembly of European Regions'
    },
    place: {
      fr: 'Bruxelles, Belgique',
      en: 'Brussels, Belgium'
    },
    url: {
      fr: 'https://aer.eu/tackling-ethics-ai/',
      en: 'https://aer.eu/tackling-ethics-ai/'
    },
    date: new Date('2017-11-01')
  },
  {
    label: {
      fr: 'Tech&Co - BFM Business',
      en: null
    },
    place: {
      fr: 'Paris, France',
      en: null
    },
    url: {
      fr: 'https://www.dailymotion.com/video/x6a84ul',
      en: null
    },
    date: new Date('2017-11-01')
  },
  {
    label: {
      fr: 'Algolia Tech Lunch',
      en: 'Algolia Tech Lunch'
    },
    place: {
      fr: 'Paris, France',
      en: 'Paris, France'
    },
    url: {
      fr: 'https://www.youtube.com/watch?v=mNTEXjhBNiU',
      en: 'https://www.youtube.com/watch?v=mNTEXjhBNiU'
    },
    date: new Date('2017-04-01')
  },
  {
    label: {
      fr: 'Push Conference',
      en: 'Push Conference'
    },
    place: {
      fr: 'Munich, Allemagne',
      en: 'Munich, Germany'
    },
    url: {
      fr: 'https://push-conference.com/2017/speakers/caroline-goulard/',
      en: 'https://push-conference.com/2017/speakers/caroline-goulard/'
    },
    date: new Date('2017-10-01')
  },
  {
    label: {
      fr: 'Tech&Co - BFM Business',
      en: null
    },
    place: {
      fr: 'Paris, France',
      en: null
    },
    url: {
      fr: 'https://www.dailymotion.com/video/x54k9dq',
      en: null
    },
    date: new Date('2016-12-01')
  },
  {
    label: {
      fr: 'World Policy Conference',
      en: 'World Policy Conference'
    },
    place: {
      fr: 'Doha, Qatar',
      en: 'Doha, Qatar'
    },
    url: {
      fr: 'https://www.youtube.com/watch?v=L-f-_XP3dkk',
      en: 'https://www.youtube.com/watch?v=L-f-_XP3dkk'
    },
    date: new Date('2016-11-01')
  },
  {
    label: {
      fr: 'Tech&Co - BFM Business',
      en: null
    },
    place: {
      fr: 'Paris, France',
      en: null
    },
    url: {
      fr: 'https://www.dailymotion.com/video/x3l3pru',
      en: null
    },
    date: new Date('2016-01-01')
  },
  {
    label: {
      fr: 'Nipconf',
      en: null
    },
    place: {
      fr: 'Lausanne, Suisse',
      en: null
    },
    url: {
      fr: 'https://www.youtube.com/watch?v=vwr1Z1i0Si8',
      en: null
    },
    date: new Date('2015-10-01')
  },
  {
    label: {
      fr: 'Tech&Co - BFM Business',
      en: null
    },
    place: {
      fr: 'Paris, France',
      en: null
    },
    url: {
      fr: 'https://www.dailymotion.com/video/x2u88x7',
      en: null
    },
    date: new Date('2015-06-01')
  },
  {
    label: {
      fr: 'Tech&Co - BFM Business',
      en: null
    },
    place: {
      fr: 'Paris, France',
      en: null
    },
    url: {
      fr: 'https://www.dailymotion.com/video/x2p7wzj',
      en: null
    },
    date: new Date('2015-05-01')
  },
  {
    label: {
      fr: 'SXSW',
      en: 'SXSW'
    },
    place: {
      fr: 'Austin, Ã‰tats-Unis',
      en: 'Austin, US'
    },
    url: {
      fr: 'https://schedule.sxsw.com/2015/2015/events/event_IAP43145',
      en: 'https://schedule.sxsw.com/2015/2015/events/event_IAP43145'
    },
    date: new Date('2015-03-01')
  },
  {
    label: {
      fr: 'Tech&Co - BFM Business',
      en: null
    },
    place: {
      fr: 'Paris, France',
      en: null
    },
    url: {
      fr: 'https://www.dailymotion.com/video/x2hxud4',
      en: null
    },
    date: new Date('2015-02-01')
  },
  {
    label: {
      fr: 'Freedom and Solidarity Forum',
      en: 'Freedom and Solidarity Forum'
    },
    place: {
      fr: 'Caen, France',
      en: 'Caen, France'
    },
    url: {
      fr: 'https://youtu.be/69RhDe2Lfr4?t=924',
      en: 'https://youtu.be/69RhDe2Lfr4?t=924'
    },
    date: new Date('2014-06-01')
  },
  {
    label: {
      fr: 'Visualized',
      en: 'Visualized'
    },
    place: {
      fr: 'New-York, Ã‰tats-Unis',
      en: 'New-York, US'
    },
    url: {
      fr: 'https://vimeo.com/90340682',
      en: 'https://vimeo.com/90340682'
    },
    date: new Date('2014-02-01')
  },
  {
    label: {
      fr: 'ConfÃ©rence Google : Un temps dâ€™avance',
      en: null
    },
    place: {
      fr: 'Paris, France',
      en: null
    },
    url: {
      fr: 'https://sites.google.com/site/untempsdavanceevent/intervenants',
      en: null
    },
    date: new Date('2013-11-01')
  },
  {
    label: {
      fr: 'TEDx PanthÃ©on-Sorbonne',
      en: null
    },
    place: {
      fr: 'Paris, France',
      en: null
    },
    url: {
      fr: 'https://www.youtube.com/watch?v=yjWXVfIzgQg',
      en: null
    },
    date: new Date('2012-11-01')
  }
]

const Talks = ({ isDarkTheme }) => {
  const { lang } = useParams()
  const filteredTalks = talks.filter((d) => d.label[lang])
  if (!filteredTalks.length) return null
  return (
    <>
      <TitleLeft>
        FormattedMessage: last-talks-title
      </TitleLeft>
      <ListContainerRight>
        <ListTable
          list={filteredTalks}
          headers={headers}
          gridTemplateColumns='6fr 4fr 4fr'
          isDarkTheme={isDarkTheme}
        />
      </ListContainerRight>
    </>
  )
}

export default Talks
export { talks }
