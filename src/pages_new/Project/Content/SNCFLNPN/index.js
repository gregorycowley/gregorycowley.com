import React from 'react'
import { useParams } from 'react-router-dom'


// images body
import imgBody1 from './assets/body/sncf-lnpn_img_0001.jpg'
import imgBody2 from './assets/body/sncf-lnpn_img_0002.jpg'
import imgBody3 from './assets/body/sncf-lnpn_img_0003.jpg'
import imgBody4 from './assets/body/sncf-lnpn_img_0004.jpg'

// images carousel
import imgCarousel1 from './assets/carousel/sncflnpn_img_carousel_0001.jpg'
import imgCarousel2 from './assets/carousel/sncflnpn_img_carousel_0002.jpg'
import imgCarousel3 from './assets/carousel/sncflnpn_img_carousel_0003.jpg'
import imgCarousel4 from './assets/carousel/sncflnpn_img_carousel_0004.jpg'

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

const SNCFLNPN = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons construit l\'outil DECIDD pour aider SNCF RÃ©seau Ã  choisir et Ã  justifier quel sera le tracÃ© de la prochaine ligne de TGV Paris-Normandie, en tenant compte de plus de cent critÃ¨res dâ€™Ã©valuation.'
              : 'We built the DECIDD tool to help SNCF RÃ©seau choose and justify the route for the next TGV line from Paris to Normandy, taking into account more than 100 evaluation criteria. The tool uses data visualization to highlight the strengths and weaknesses of route options, while at the same time clarifying how they have been evaluated.'
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
              ? 'DÃ©cider oÃ¹ poser les rails de la future ligne de TGV Paris-Normandie est une lourde responsabilitÃ©\u00A0: selon le tracÃ© retenu, des gares seront â€“ ou non â€“ desservies, des paysages transformÃ©s, et des bassins Ã©cologiques chamboulÃ©s. Pour faire les bons choix, SNCF RÃ©seau s\'appuie sur des Ã©tudes qui rassemblent des centaines d\'indicateurs hÃ©tÃ©rogÃ¨nes. Nos interlocuteurs avaient besoin dâ€™un outil d\'aide Ã  la dÃ©cision capable de restituer visuellement l\'ensemble de ces informations, et de rendre plus transparent le processus de prise de dÃ©cision.'
              : 'Deciding where to lay the tracks for the new Paris-Normandy TGV line is a big responsibility: depending on the route, towns that willâ€”or wonâ€™tâ€”be served, landscapes transformed, and ecological basins turned upside down. To make the right decisions, SNCF RÃ©seau relies on studies that bring together hundreds of heterogeneous indicators. SNCF RÃ©seau needed a decision-making tool capable of reproducing all this information to help make the decision-making process more transparent.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody4} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-data
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Pour dÃ©terminer le meilleur tracÃ© possible dâ€™une nouvelle ligne de TGV, SNCF RÃ©seau dÃ©finit les zones gÃ©ographiques susceptibles dâ€™accueillir la future ligne et collecte des donnÃ©es sur chacune dâ€™entre elles. Ces donnÃ©es sont utilisÃ©es pour Ã©valuer les zones, grÃ¢ce Ã  une grille comptant plus de cent critÃ¨res et indicateurs, comme lâ€™impact environnemental du tracÃ©, son coÃ»t, le temps de trajet, le nombre de personnes desservies, ou lâ€™adhÃ©sion des citoyens locaux.'
              : 'To determine the best possible route for a new TGV line, SNCF RÃ©seau defines the geographical areas likely to accommodate the line and collects data on each of them. A grid with more than 100 criteria and indicatorsâ€”such as the environmental impact of the route, its cost, travel time, the number of people served, or the support of local citizensâ€”is used to help assess each of these zones.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody3} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'Un premier niveau de lecture trÃ¨s agrÃ©gÃ© montre la performance des tracÃ©s pour chaque grande famille dâ€™indicateurs. Lâ€™utilisateur dÃ©termine facilement, par exemple, quel est le scÃ©nario le plus Ã©cologique, contre celui qui est le plus rentable.'
                : 'A very aggregated first reading level shows the performance of the route for each major family of indicators. The user can easily compare, for example, the more environmentally friendly scenario and the most cost-effective option.'
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
              ? 'Nous avons concentrÃ© notre travail sur deux objectifs\u00A0: tout dâ€™abord, aider les utilisateurs Ã  sâ€™approprier la grille dâ€™Ã©valuation, pour, ensuite, leur permettre de comparer les diffÃ©rentes options de tracÃ© de la nouvelle ligne Paris-Normandie.'
              : 'We focused our work on two main objectives: first, to help users get to know and use the evaluation tool properly; secondly, to allow users to compare the different route options for the new Paris-Normandy line.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody2} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'L\'utilisateur consulte les points forts et les points faibles de chaque tracÃ©, par exemple les gains de temps par trajet.'
                : 'The user can check the strengths and weaknesses of each routeâ€”for example, time savings per trip.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-solution
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Pour faciliter la comparaison, l\'outil synchronise une carte des tracÃ©s avec une visualisation des indicateurs associÃ©s Ã  chaque tracÃ©. Il propose plusieurs niveaux de lecture sur chaque scÃ©nario, du plus agrÃ©gÃ© au plus dÃ©taillÃ©, et facilite lâ€™analyse multicritÃ¨res en prÃ©sentant ensemble tous les indicateurs.'
              : 'To make comparisons possible, the tool synchronizes a map of the routes with a visualization of the indicators associated with each route. It offers several reading levels for each scenario, from the most aggregated to the most detailed, and facilitates multi-criteria analysis by presenting all the indicators together.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img hasBorder src={imgBody1} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'L\'utilisateur peut identifier les critÃ¨res les plus discriminants du rÃ©fÃ©rentiel d\'Ã©valuation, câ€™est-Ã -dire ceux sur lesquels les scÃ©narios sâ€™opposent le plus fortement.'
                : 'The user can isolate within the system the criteria with values that contrast the most.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section marginBottom='spacingXL'>
        <SectionTitle>
          FormattedMessage: project-body-main-point
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'La visualisation est mise au service de la dÃ©marche de transparence de SNCF RÃ©seau. Pendant la concertation, les acteurs locaux ont pu sâ€™appuyer sur la visualisation comme outil de synthÃ¨se, pour discuter sans avoir en tÃªte les cent critÃ¨res dâ€™Ã©valuation en mÃªme temps. Une fois la dÃ©cision prise, lâ€™outil a permis de montrer aux citoyens les critÃ¨res qui ont guidÃ©s la concertation, et les avantages comparatifs du tracÃ© retenu par rapports aux autres options.'
              : 'Visualization is at the heart of SNCF RÃ©seau\'s approach to transparency. During the consultation, local stakeholders were able to use visualization as a synthesis tool to discuss route options without having to consider all the different evaluation criteria at the same timeâ€”the indicators were already compared and presented for them. Once the final route was selected, the tool made it possible to show citizens the criteria that guided the decision, and the comparative advantages of the route chosen compared to the other options.'
          }
        </Paragraph1>
      </Section>
    </>
  )
}

const infosSNCFLNPN = {
  component: SNCFLNPN,
  client: {
    fr: 'SNCF RÃ©seau',
    en: 'SNCF RÃ©seau'
  },
  label: {
    fr: 'DECIDD',
    en: 'DECIDD'
  },
  theme: {
    isDark: true,
    background: '#3F1D35'
  },
  video: '427034878',
  results: {
    fr: 'Lâ€™application a facilitÃ© la nÃ©gociation entre un grand nombre dâ€™acteurs.',
    en: 'The application was used during consultations involving a large number of stakeholders.'
  },
  chapo: {
    fr: 'Aider Ã  Ã©valuer les tracÃ©s proposÃ©s pour une nouvelle ligne TGV en visualisant conjointement plus de 100\u00A0indicateurs.',
    en: 'Concurrently view more than 100 indicators to help assess proposed routes for a new TGV line.'
  },
  category: {
    fr: 'Outil',
    en: 'Tool'
  },
  date: {
    fr: '2016 - 4 mois',
    en: '2016 - 4 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel2, imgCarousel3, imgCarousel4, imgCarousel1]
  },
  slug: 'sncf-decidd',
  isOnHome: false,
  serviceId: 'decision-tools',
  galleryPics: []
}

export default SNCFLNPN
export { infosSNCFLNPN }
