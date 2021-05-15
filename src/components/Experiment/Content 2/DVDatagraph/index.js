import React from 'react'
import { useParams } from 'react-router-dom'


import LANG from 'common/wording/lang'
import { Paragraph1 } from 'components/Paragraphs'

import {
  Chapo,
  SectionTitle,
  Section,
  SectionImage,
  Img
} from 'components/PieceOfWork/Gallery/shared'
import LongVideo from 'components/PieceOfWork/LongVideo'
import GIFVideo from 'components/PieceOfWork/GIFVideo'

// images body
import imgBody1 from './assets/body/datagraph_img_0001.jpg'
import imgBody2 from './assets/body/datagraph_img_0002.jpg'
import imgBody3 from './assets/body/datagraph_img_0003.jpg'
import imgBody4 from './assets/body/datagraph_img_0004.jpg'

// images carousel
import imgCarousel1 from './assets/carousel/datagraph_img_carousel_0001.jpg'
import imgCarousel2 from './assets/carousel/datagraph_img_carousel_0002.jpg'
import imgCarousel3 from './assets/carousel/datagraph_img_carousel_0003.jpg'

const DVDatagraph = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Datagraph est un robot low-tech qui dessine des visualisations de donnÃ©es sur de grandes surfaces verticales. Cette installation crÃ©ative allie lâ€™impression 3D, la mÃ©canique, la gÃ©omÃ©trie et les commandes Arduino pour donner une existence physique aux flux de donnÃ©es.'
              : 'Datagraph is a low-tech robot that draws data visualizations on large vertical surfaces. This creative installation combines 3D printing, mechanics, geometry and Arduino commands to give data flows a physical existence.'
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
              ? 'Les algorithmes et les bases de donnÃ©es sont, par nature, abstraits et difficiles Ã  apprÃ©hender pour le grand public. Nous cherchions Ã  donner Ã  ces nouvelles technologies une dimension plus proche des humains, pour faciliter leur prise en main par un public peu expert.'
              : 'Algorithms and databases are, by their nature, abstract and difficult for the general public to grasp. To allow inexperienced audiences to use these new technologies, we wanted to present them with more of a human dimension.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <Section>
          <GIFVideo isDarkTheme uri='429916242' />
        </Section>
        <SectionImage>
          <Img src={imgBody2} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-solution
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Le systÃ¨me fonctionne avec une carte Arduino. Il comporte une partie hardware\u00A0: poulies, servomoteurs, structure, alimentation\u00A0; et une partie software avec un micrologiciel de contrÃ´le des moteurs, un logiciel dâ€™optimisation des tracÃ©s pour rÃ©duire la durÃ©e des dÃ©placements, et enfin un logiciel de visualisation de lâ€™Ã©tat du dessin pour suivre le tracÃ© en cours, le nombre de tracÃ©s et lâ€™estimation du temps restants.'
              : 'The system works with an Arduino board. It includes a hardware part: pulleys, servo motors, structure, power supply. Its software includes motor controller firmware and tracking optimization software to reduce movement time. Finally, we added a status display in order to monitor current and upcoming drawings, as well as the estimated time remaining.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage marginBottom='spacingM'>
          <Img src={imgBody4} />
        </SectionImage>
        <SectionImage marginBottom='spacingM'>
          <Img src={imgBody3} />
        </SectionImage>
        <SectionImage>
          <Img src={imgBody1} />
        </SectionImage>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-main-point
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'La machine Ã  dessiner peut Ãªtre branchÃ©e sur des flux de donnÃ©es et les traduire en visualisation dessinÃ©e, en temps rÃ©el.'
              : 'The drawing machine can be connected to data streams and translate them into visualizations in real time.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <Section>
          <GIFVideo vertical isDarkTheme uri='429917062' />
        </Section>
      </Section>
      <Section marginBottom='spacingXL'>
        <LongVideo uri='428090405' />
      </Section>
    </>
  )
}

const infosDVDatagraph = {
  component: DVDatagraph,
  label: {
    fr: 'Datagraph',
    en: 'Datagraph'
  },
  theme: {
    isDark: true
  },
  results: {
    fr: 'UtilisÃ© par Twitter France en 2018 lors de sa soirÃ©e publique Best of Tweets.',
    en: 'Used by Twitter France in 2018 during its â€˜Best of Tweetsâ€™ public party.'
  },
  video: '426959689',
  date: {
    fr: '2018',
    en: '2018'
  },
  chapo: {
    fr: 'Sensibiliser le grand public aux nouvelles technologies grÃ¢ce Ã  un robot qui dessine avec les donnÃ©es.',
    en: 'Educate the general public about new technologies using a robot that draws with data.'
  },
  category: {
    fr: 'Installation crÃ©ative',
    en: 'Creative installation'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'datagraph'
}

export default DVDatagraph
export { infosDVDatagraph }
