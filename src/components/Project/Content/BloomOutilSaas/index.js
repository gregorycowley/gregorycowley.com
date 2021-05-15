import React from 'react'
import { useParams } from 'react-router-dom'


// Images Gallery
import imgGallery1 from './assets/gallery/bloom_gallery_0001.jpg'
import imgGallery2 from './assets/gallery/bloom_gallery_0002.jpg'
import imgGallery3 from './assets/gallery/bloom_gallery_0003.jpg'

// images body
import imgBody1 from './assets/body/bloom_img_0001.jpg'
import imgBody2 from './assets/body/bloom_img_0002.jpg'
import imgBody3 from './assets/body/bloom_img_0003.jpg'

// images carousel
import imgCarousel1 from './assets/carousel/bloom_img_carousel_0001.jpg'
import imgCarousel2 from './assets/carousel/bloom_img_carousel_0002.jpg'
import imgCarousel3 from './assets/carousel/bloom_img_carousel_0003.jpg'

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
import LongVideo from 'components/PieceOfWork/LongVideo'

const BloomOutilSaas = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Avec ce projet, nous avons rendu les utilisateurs de lâ€™outil Bloom capables de rÃ©aliser en autonomie des analyses puissantes des conversations sur les rÃ©seaux sociaux. Pour cela, nous avons conÃ§u une interface de visualisation de graphes relationnels qui montre les principales dynamiques des conversations â€“\u00A0mots clÃ©s saillants, acteurs influents\u00A0â€“ tout en autorisant une grande libertÃ© d\'exploration grÃ¢ce aux filtres et Ã  l\'interactivitÃ©.'
              : 'With this project, we have made it possible for users of the Bloom tool to perform their own powerful and independent analyses of conversations on social networks. To do this, we designed a visualization interface for social graphs which shows the main dynamics of conversationsâ€”such as salient keywords and key participantsâ€”while allowing freedom of exploration thanks to filters and interactivity.'
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
              ? 'Bloom Ã©dite une plateforme d\'analyse profonde des Ã©changes sur les rÃ©seaux sociaux par infÃ©rence sociale et sÃ©mantique. Son produit repose sur des algorithmes de traitement de donnÃ©es sophistiquÃ©s, mais s\'adresse Ã  des utilisateurs non experts, qui ont besoin d\'Ãªtre aidÃ©s dans la comprÃ©hension et l\'utilisation des informations. La rÃ©ussite du produit de Bloom dÃ©pend alors de la qualitÃ© de son interface utilisateur. Pour cette raison, Bloom nous a confiÃ© la rÃ©alisation d\'une interface qui rende ses donnÃ©es comprÃ©hensibles et faciles Ã  utiliser.'
              : 'Bloom publishes a platform for deep analysis of conversations on social networks by social and semantic inference. Their product is based on sophisticated data processing algorithms. This means that users, who are not data experts, need help understanding and using the information. The success of Bloom\'s product therefore depends on the quality of its user interface. For this reason, Bloom entrusted us with the creation of an interface that makes the data easier to understand and use.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody3} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'L\'outil permet de visualiser des graphes de mots clÃ©s utilisÃ©s dans les conversations et des graphes d\'acteurs auteurs de ces conversations.'
                : 'The tool makes it possible to visualize both graphs of key words used in conversations, as well as graphs of the authors of these conversations.'
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
              ? 'L\'outil exploite les conversations publiques sur les rÃ©seaux sociaux. Ces donnÃ©es sociales sont retraitÃ©es et enrichies par les algorithmes de Bloom pour extraire des acteurs clÃ©s, des thÃ¨mes dominants, des tendances, et des communautÃ©s de discussions.'
              : 'The tool is based on public conversations on social media networks. This data is reprocessed and enriched by Bloom\'s algorithms to extract key players, dominant themes, trends, and community discussions.'
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
                ? 'Les graphes mettent Ã  jour des communautÃ©s de conversations cohÃ©rentes, centrÃ©es autour d\'un mÃªme thÃ¨me.'
                : 'The graphs reveal community conversations that revolve around similar topics.'
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
              ? 'Nous avons travaillÃ© main dans la main avec l\'Ã©quipe produit et l\'Ã©quipe technique de Bloom. En nous appuyant sur des mÃ©thodes agiles de gestion projet et une approche du design centrÃ©e sur les utilisateurs, nous avons pu rÃ©aliser ensemble une premiÃ¨re version viable du produit en quatre mois.'
              : 'We worked hand-in-hand with Bloomâ€™s product and technical teams. Using agile project management methods and a user-centric design approach, we worked together to achieve an initial version of the product in four months.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionImage>
          <Img src={imgBody2} />
        </SectionImage>
        <Section>
          <ImgLegend>
            {
              isFr
                ? 'L\'interactivitÃ© permet d\'explorer le graphe, de le filtrer et de le rÃ©organiser pour l\'adapter aux questionnements de chaque utilisateur.'
                : 'Interactivity allows you to explore the graph, filter it and reorganize it in line with each userâ€™s questions.'
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
              ? 'Nous avons conÃ§u et dÃ©veloppÃ© une interface qui rÃ©sout plusieurs contraintes en combinant ergonomie, visualisation de donnÃ©es et interaction avec les donnÃ©es :\u00A0prÃ©senter de l\'information synthÃ©tique tout en permettant l\'accÃ¨s aux dÃ©tails, faciliter l\'apprÃ©hension d\'indicateurs compliquÃ©s, rendre utilisables des graphes trÃ¨s riches de relations entre mots-clÃ©s ou entre acteurs.'
              : 'We designed and developed an interface that combines usability, data visualization and data interaction to overcome several challenges: the interface must present synthetic data while at the same time allowing access to details. It must also facilitate the understanding of complicated indicators, and make very rich graphs of relationships between keywords or between participants more user-friendly.'
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
              ? 'Au delÃ  des choix de reprÃ©sentation, les Ã©lÃ©ments qui entourent un graphique -\u00A0titres, lÃ©gendes, pictogrammes, mise en contexte, etc.\u00A0- jouent beaucoup dans sa comprÃ©hension. Nous avons donc beaucoup travaillÃ© sur le vocabulaire et la pÃ©dagogie des concepts d\'analyse des conversations sociales pour les rendre accessibles Ã  un public non expert.'
              : 'Beyond the choices of representation, the elements that surround a graphicâ€”such as titles, legends, pictograms, and contextualizationâ€”influence a userâ€™s understanding. We therefore worked at length on the vocabulary and pedagogy of the concepts related to the analysis of the social conversations to make them accessible to audiences with little technical experience.'
          }
        </Paragraph1>
      </Section>
      <Section marginBottom='spacingL'>
        <LongVideo uri='428062900' />
      </Section>
    </>
  )
}

const infosBloomOutilSaas = {
  component: BloomOutilSaas,
  client: {
    fr: 'Bloom',
    en: 'Bloom'
  },
  label: {
    fr: 'Visualisation de graphes sociaux',
    en: 'Visualization of social graphs'
  },
  theme: {
    isDark: true,
    background: '#0D1136'
  },
  video: '426967283',
  results: {
    fr: 'â€œJe trouve Ã§a vraiment cool, Ã§a commence Ã  me parlerâ€. â€œJâ€™ai trouvÃ© lâ€™outil intuitif, simpleâ€\u00A0: citations tirÃ©es de tests utilisateurs, suite Ã  notre re-design de lâ€™outil.',
    en: '\'I find it really cool, it\'s starting to speak to me.\'  \'I found the tool intuitive, simple.\' â€”Quotes from users who tested our redesign of the tool.'
  },
  chapo: {
    fr: 'Faciliter l\'utilisation et la comprÃ©hension d\'algorithmes d\'analyse des conversations sur les rÃ©seaux sociaux.',
    en: 'Facilitate the use and understanding of algorithms for analyzing conversations on social media.'
  },
  category: {
    fr: 'Outil',
    en: 'Tool'
  },
  date: {
    fr: '2019 & 2020',
    en: '2019 & 2020'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'bloom-outil-saas',
  isOnHome: true,
  serviceId: 'product-design',
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

export default BloomOutilSaas
export { infosBloomOutilSaas }
