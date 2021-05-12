import React from 'react'
import { useParams } from 'react-router-dom'


import LongVideo from 'components/PieceOfWork/LongVideo'
import Link from 'components/Links'
import GIFVideo from 'components/PieceOfWork/GIFVideo'

// Images Gallery
import imgGallery1 from './assets/gallery/edf-maquette-peda_gallery_0001.jpg'
import imgGallery2 from './assets/gallery/edf-maquette-peda_gallery_0002.jpg'
import imgGallery3 from './assets/gallery/edf-maquette-peda_gallery_0003.jpg'

// images body
import imgBody1 from './assets/body/edf-maquette-peda_img_0001.jpg'
import imgBody2 from './assets/body/edf-maquette-peda_img_0002.jpg'
import imgBody3 from './assets/body/edf-maquette-peda_img_0003.jpg'
import imgBody4 from './assets/body/edf-maquette-peda_img_0004.jpg'

// images carousel
import imgCarousel1 from './assets/carousel/edfmaquettepedagogique_img_carousel_0001.jpg'
import imgCarousel2 from './assets/carousel/edfmaquettepedagogique_img_carousel_0002.jpg'
import imgCarousel3 from './assets/carousel/edfmaquettepedagogique_img_carousel_0003.jpg'
import imgCarousel4 from './assets/carousel/edfmaquettepedagogique_img_carousel_0004.jpg'

import {
  Chapo,
  SectionTitle,
  Section,
  SectionImage,
  Img,
  ImgLegend
} from 'components/PieceOfWork/Gallery/shared'
import LANG from 'common/wording/lang'
import { Paragraph1 } from 'components/Paragraphs'

const EDFMaquettePedagogique = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons rÃ©alisÃ© un simulateur pÃ©dagogique pour faire connaÃ®tre le concept de flexibilitÃ© Ã©nergÃ©tique, et le potentiel quâ€™il reprÃ©sente pour rendre notre consommation Ã©lectrique plus soutenable. En quatre mois de travail entre notre Ã©quipe et les chercheurs dâ€™EDF R&D, nous avons fait la preuve quâ€™ il est possible dâ€™amener un large public Ã  comprendre des phÃ©nomÃ¨nes Ã©nergÃ©tiques compliquÃ©s, en sâ€™appuyant sur la visualisation, et lâ€™interaction physique et le jeu.'
              : 'We produced an educational simulator to raise awareness of energy flexibility, and its potential to make our electricity consumption more sustainable. In four monthsâ€™ work with EDFâ€™s R&D researchers, we demonstrated that itâ€™s possible to help large audiences understand complicated energy concepts. We did this by using visualization, physical interaction and play.'
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
              ? 'La flexibilitÃ© Ã©nergÃ©tique caractÃ©rise la capacitÃ© de nos appareils Ã©lectriques Ã  moduler leur consommation dâ€™Ã©lectricitÃ© au cours de la journÃ©e. De cette faÃ§on, ils peuvent sâ€™effacer pendant les heures de pointe ou lisser les pics de consommation pour moins peser sur le rÃ©seau Ã©lectrique global. Cela invite les citoyens Ã  consommer de faÃ§on plus soutenable grÃ¢ce Ã  de meilleures dÃ©cisions dâ€™Ã©quipement et de pilotage. Nos interlocuteurs chez EDF R&D souhaitaient proposer une dÃ©monstration de ce phÃ©nomÃ¨ne suffisamment pÃ©dagogique pour Ãªtre comprise par un public de relais d\'opinion\u00A0: dÃ©cideurs, constructeurs, journalistes, etc.'
              : 'Energy flexibility relates to the ability of our electrical devices to vary their electricity consumption during the day. For instance, if a device is not used during peak hours, this can help smooth consumption peaks and take pressure off the overall power grid. This encourages citizens to consume energy more sustainably thanks to better equipment and management decisions. The EDF R&D team wanted to raise awareness of this concept in a way that could be understood by trend-setters such as decision-makers, manufacturers, journalists, etc.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody1} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Les visiteurs dÃ©couvrent comment effacer leur courbe de charge pendant les heures de pointe sur le rÃ©seau Ã©lectrique par intuition et dÃ©duction.'
                : 'Visitors use intuition and deduction to learn how to clear their load curve during peak hours on the electrical network.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-data
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Pour ce projet, nous avons travaillÃ© directement avec des chercheurs dâ€™EDF R&D. Ils nous ont fourni des donnÃ©es issues de simulation et de modÃ©lisation de la consommation Ã©lectrique de logements tÃ©moins.'
              : 'We worked directly with EDFâ€™s R&D researchers, who provided us with data from the simulation and modeling of the electricity consumption in sample homes.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody4} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Nous avons enroulÃ© sur elles-mÃªme les courbes de charge pour rapprocher le graphique principal dâ€™une horloge.'
                : 'We rolled up the load curves to make the main graphic look like a clock.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-method
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons voulu inciter les visiteurs du showroom Ã  passer Ã  l\'action, sans se limiter Ã  une simple prise de conscience que la flexibilitÃ© est un concept intÃ©ressant. Pour placer lâ€™utilisateur dans une posture dâ€™acteur, nous avons travaillÃ© sur trois axes\u00A0: d\'une part, la comprÃ©hension active, dans une approche '
              : 'We wanted to encourage showroom visitors to take action, and to go beyond simply realizing that energy flexibility is an interesting concept. To place the user at the center of the app as an actor, we worked on introducing three central lines of investigation: on active understanding and taking an explorable '
          }
          <Link target='_blank' href='https://explorabl.es/all/'>
            {
              isFr
                ? 'explorable explanation'
                : 'explanation approach'
            }
          </Link>
          {
            isFr
              ? ', d\'autre part lâ€™interactivitÃ© renforcÃ©e, via un dispositif actionnable par son tÃ©lÃ©phone mobile, et enfin la dimension ludique, grÃ¢ce Ã  un mode collaboratif.'
              : ' on enhanced interactivity via a mobile phone-activated device and on a playful dimension that took a collaborative approach.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <GIFVideo uri='429911565' />
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-solution
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons pour conÃ§u une application de visualisation de donnÃ©es avec laquelle les visiteurs peuvent tester la flexibilitÃ© de diffÃ©rents appareils Ã©lectriques dans diffÃ©rentes configurations de logement. Les utilisateurs comparent le niveau de flexibilitÃ©, et les effets de cette flexibilitÃ© sur la consommation dâ€™Ã©lectricitÃ©, la tempÃ©rature dans le logement, ou la facture payÃ©e.'
              : 'We designed a data visualization application that visitors can use to test the flexibility of different electrical devices in different housing configurations. Users can compare the level of flexibility and its effects on such factors as electricity consumption, the temperature in the home, and the bill paid.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <Section>
          <SectionImage>
            <Img src={imgBody3} />
          </SectionImage>
          <Section>
            <ImgLegend>
              {
                isFr
                  ? 'Les visiteurs du showroom peuvent faire Ã©voluer lâ€™information prÃ©sentÃ©e sur lâ€™Ã©cran en filtrant ou en dÃ©plaÃ§ant un curseur sur leur tÃ©lÃ©phone mobile.'
                  : 'Showroom visitors can change the information on the screen by filtering or moving cursors on their mobile phones.'
              }
            </ImgLegend>
          </Section>
          <SectionImage>
            <Img src={imgBody2} />
          </SectionImage>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-main-point
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'L\'installation est projetÃ©e sur un Ã©cran gÃ©ant pour qu\'un grand nombre de visiteurs puisse observer les reprÃ©sentations visuelles et profiter des explications. GrÃ¢ce Ã  une technologie de pairing, les visiteurs peuvent en prendre le contrÃ´le avec leur tÃ©lÃ©phone mobile, qui sert alors de tÃ©lÃ©commande pour sÃ©lectionner des Ã©lÃ©ments et interagir avec les visualisations de donnÃ©es.'
              : 'The installation is projected on a giant screen so that a large number of visitors can see the visual representations and benefit from the explanations. Using pairing technology, visitors can take control of the app with their mobile phone, which then acts as a remote control to select items and interact with data visualizations.'
          }
        </Paragraph1>
        <Paragraph1>
          {
            isFr
              ? 'Lâ€™application possÃ¨de aussi un mode multijoueur dans lequel plusieurs participants interagissent ensemble sur le grand Ã©cran, chacun depuis son tÃ©lÃ©phone. Tous ensemble, ils prennent le contrÃ´le dâ€™un petit village et essaient dâ€™en amÃ©liorer la consommation dâ€™Ã©lectricitÃ©. La dimension ludique de lâ€™exercice, et le fait quâ€™il pousse chacun Ã  se prÃ©occuper du comportement des autres, renforce le rÃ´le pÃ©dagogique du projet.'
              : 'The app also has a multiplayer mode that allows several participants to interact on a big screen, each from their phone. Together, they take control of a small village and try to improve electricity consumption. This playful dimensionâ€”and the fact that it makes everyone care about the behavior of othersâ€”strengthens the educational aspect of the project.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <LongVideo uri='428060882' />
      </Section>
    </>
  )
}

const infosEDFMaquettePedagogique = {
  component: EDFMaquettePedagogique,
  client: {
    fr: 'EDF R&D',
    en: 'EDF R&D'
  },
  label: {
    fr: 'DÃ©monstrateur sur la flexibilitÃ© Ã©nergÃ©tique',
    en: 'Flexible energy simulator'
  },
  theme: {
    isDark: true,
    background: '#15153E'
  },
  video: '427637151',
  results: {
    fr: 'ProjetÃ© sur grand Ã©cran dans plusieurs showrooms dâ€™EDF.',
    en: 'Projected on a big screen in several EDF showrooms.'
  },
  chapo: {
    fr: 'Convaincre de lâ€™importance de la flexibilitÃ© Ã©nergÃ©tique avec un dÃ©monstrateur pÃ©dagogique.',
    en: 'Use an educational simulator to highlight the importance of energy flexibility.'
  },
  caseStudy: {
    en: {
      label: 'An educational simulator to understand the concept of energy flexibility',
      url: 'https://stories.dataveyes.com/an-educational-simulator-to-understand-the-concept-of-energy-flexibility-9f98dbfe97f2'
    },
    fr: {
      label: 'Un simulateur pÃ©dagogique pour comprendre la flexibilitÃ© Ã©nergÃ©tique',
      url: 'https://medium.com/dataveyes-stories-vf/un-simulateur-p%C3%A9dagogique-pour-comprendre-la-flexibilit%C3%A9-%C3%A9nerg%C3%A9tique-86bec2f68a70'
    }
  },
  category: {
    fr: 'Installation crÃ©ative',
    en: 'Creative installation'
  },
  date: {
    fr: '2014 - 4 mois',
    en: '2014 - 4 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
  },
  slug: 'edf-maquette-pedagogique',
  isOnHome: false,
  serviceId: 'data-storytelling',
  galleryPics: [
    {
      src: imgGallery1
    },
    {
      src: imgGallery2
    },
    {
      src: imgGallery3
    }
  ]
}

export default EDFMaquettePedagogique
export { infosEDFMaquettePedagogique }
