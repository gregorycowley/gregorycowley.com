import React from 'react'
import { useParams } from 'react-router-dom'


import LongVideo from 'components/PieceOfWork/LongVideo'
import GIFVideo from 'components/PieceOfWork/GIFVideo'

// images carousel
import imgCarousel1 from './assets/carousel/malakoff_img_carousel_0001.jpg'
import imgCarousel2 from './assets/carousel/malakoff_img_carousel_0002.jpg'
import imgCarousel3 from './assets/carousel/malakoff_img_carousel_0003.jpg'

import {
  Chapo,
  SectionTitle,
  ImgLegend,
  Section
} from 'components/PieceOfWork/Gallery/shared'
import LANG from 'common/wording/lang'
import { Paragraph1 } from 'components/Paragraphs'

const MalakoffMedericBarometre = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons aidÃ© Malakoff Humanis Ã  partager ses donnÃ©es d\'une faÃ§on qui encourage leur rÃ©utilisation. Nous avons rendus comparables les rÃ©sultats de dix ans d\'enquÃªtes sur les conditions de vie au travail, et mis au point une mÃ©thode pour permettre l\'ajout de nouvelles enquÃªtes chaque annÃ©e. Surtout, nous avons construit une plateforme qui permet d\'explorer les donnÃ©es, tout en les plaÃ§ant en contexte de grands enseignements sociologiques.'
              : 'We devised a way for Malakoff Humanis to share their data in a way that encourages its reuse. We did this by making it easy to compare the results of 10 annual surveys on working conditions, while also providing a way for new surveys to be added each year. Most importantly, the project allows the general public to place and explore data in a broader sociological context.'
          }
        </Chapo>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-problem
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Tous les ans Malakoff Humanis rÃ©alise des enquÃªtes sur les conditions de vie au travail. Publier un communiquÃ© de presse ne suffisait plus :\u00A0Malakoff Humanis recevait de plus en plus de demandes dâ€™accÃ¨s aux donnÃ©es. Pour marquer les dix ans de son baromÃ¨tre, Malakoff Humanis nous a confiÃ© la rÃ©alisation d\'une plateforme de mise Ã  disposition des donnÃ©es des enquÃªtes, et de partage de leurs principaux enseignements.'
              : 'Malakoff Humanis conducts annual surveys on working conditions. More and more, they were being asked for access to their data. To mark the 10th anniversary of their working life barometer, Malakoff Humanis entrusted us with the creation of a platform to provide and share key findings from the surveys.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429913437' />
        <ImgLegend>
          {
            isFr
              ? 'Les choix de visualisations mettent en valeur les Ã©volutions, depuis dix ans, des conditions de vie au travail.'
              : 'The choices of visualizations highlight the changes to working conditions over the past 10 years.'
          }
        </ImgLegend>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-data
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Les enquÃªtes sont chaque annÃ©e portÃ©es par un institut d\'Ã©tude et d\'opinion. Nous avons travaillÃ© avec les donnÃ©es sources de chacune de ces enquÃªtes depuis dix ans.'
              : 'A market research group has conducted the surveys for Malakoff Humanis each year for 10 years. We worked with the source data for each of these surveys.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-method
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons homogÃ©nÃ©isÃ© les questions des enquÃªtes pour rendre les rÃ©sultats comparables au fil du temps, et nous avons proposÃ© une grille de mÃ©tadonnÃ©es pour que la plateforme puisse accueillir de nouvelles enquÃªtes dans les annÃ©es Ã  venir,  sans notre intervention. Nous avons construit l\'architecture d\'information de toute la plateforme sur ce rÃ©fÃ©rentiel\u00A0: les pages sont automatiquement gÃ©nÃ©rÃ©es Ã  partir des rÃ©sultats d\'enquÃªte insÃ©rÃ©s dans la base de donnÃ©es.'
              : 'Firstly, we standardized the survey questions to enable the results to be compared over time. We then developed a metadata grid to ensure future survey results can be fed directly into the system and explored by the public without further technical intervention. The platform\'s architecture provides templates that are used to automatically create pages from survey results as they are inserted into the database.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429913403' />
        <ImgLegend>
          {
            isFr
              ? 'Les visualisations permettent de comparer les conditions de vie au travail de plusieurs segments de population, selon l\'Ã¢ge, le type de mÃ©tier, la taille de l\'entreprise, etc.'
              : 'The visualizations make it possible to compare the conditions at work across several segments of the population in line with age, profession, company size, etc.'
          }
        </ImgLegend>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-solution
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'En plus de mettre Ã  disposition les donnÃ©es brutes, la plateforme propose un outil dâ€™exploration visuel, conÃ§u pour mettre tous les publics en capacitÃ© de sâ€™approprier les donnÃ©es. Les visualisations de donnÃ©es facilitent la comparaison des rÃ©sultats dans le temps, selon diffÃ©rents profils de populations et d\'entreprises. Elles rÃ©vÃ¨lent leurs atouts pour comprendre comment nos conditions de vie au travail ont Ã©voluÃ© en dix ans.'
              : 'In addition to making raw data available, the platform offers a visual exploration tool that\'s designed to allow audiences to engage with the data. Data visualizations make it easier to compare results over time in line with different populations or company profiles. The data and the way itâ€™s presented aid our understanding of how work-life conditions have evolved over the 10 years.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-main-point
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Plusieurs pages sont dÃ©diÃ©es au storytelling des donnÃ©es\u00A0: les principaux enseignements des enquÃªtes sont mis en scÃ¨ne Ã  travers des illustrations animÃ©es. Elle renforcent la visibilitÃ© et l\'attractivitÃ© de la plateforme pour le grand public et les mÃ©dias. Elles sont conÃ§ues pour faire circuler les visiteurs vers les pages consacrÃ©es Ã  la mise Ã  disposition des donnÃ©es, et servent Ã  mettre en contexte ces donnÃ©es.'
              : 'Several pages are dedicated to storytelling data: the key lessons taken from the surveys are presented through animated illustrations. They enhance the visibility and attractiveness of the platform for both the general public and the media. The animations are designed to help visitors find relevant data and to place it in context.'
          }
        </Paragraph1>
      </Section>
      <Section marginBottom='spacingXL'>
        <LongVideo uri='428062710' />
      </Section>
    </>
  )
}

const infosMalakoffMedericBarometre = {
  component: MalakoffMedericBarometre,
  client: {
    fr: 'Malakoff Humanis',
    en: 'Malakoff Humanis'
  },
  label: {
    fr: 'BaromÃ¨tre de la qualitÃ© de vie au travail',
    en: 'Measuring quality of life at work'
  },
  theme: {
    isDark: true,
    background: '#0A103C'
  },
  video: '427637944',
  results: {
    fr: 'Les visiteurs consultent en moyenne 5 pages par session.',
    en: 'Site visitors view an average of 5 pages per session.'
  },
  src: {
    url: 'http://10ans-barometre-sante-qualite-vie-travail.lecomptoirmm.com/',
    label: '10ans-barometre-sante-qualite-vie-travail.lecomptoirmm.com'
  },
  chapo: {
    fr: 'Favoriser le partage et la rÃ©utilisation des donnÃ©es via une plateforme open data grand public.',
    en: 'Foster the sharing and reuse of data via an open data platform for the general public.'
  },
  quote: {
    fr: 'Avec un accompagnement d\'un grand professionnalisme et leur double expertise en communication et sur le travail de la donnÃ©e, Dataveyes nous a permis de renforcer notre proposition de valeur sur le dÃ©cryptage des enjeux du capital humain.',
    en: 'With their professionalism and combined expertise in communication and data processing, Dataveyes has enabled us to strengthen our value proposition in terms of bettering understanding human capital.',
    author: {
      name: 'Marc Fargeas',
      position: {
        fr: 'Responsable Veille, Prospective, Ã‰tudes StratÃ©giques - Malakoff Humanis',
        en: 'Monitoring, Prospective, Strategic Studies Manager, Malakoff Humanis'
      }
    }
  },
  category: {
    fr: 'Plateforme opendata',
    en: 'Opendata platform'
  },
  date: {
    fr: '2018 - 4 mois',
    en: '2018 - 4 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel2, imgCarousel3, imgCarousel1]
  },
  slug: 'malakoff-mederic-barometre-sante-travail',
  isOnHome: false,
  serviceId: 'data-storytelling',
  galleryPics: []
}

export default MalakoffMedericBarometre
export { infosMalakoffMedericBarometre }
