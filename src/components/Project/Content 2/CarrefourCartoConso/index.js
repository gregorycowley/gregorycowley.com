import React from 'react'
import { useParams } from 'react-router-dom'


import LongVideo from 'components/PieceOfWork/LongVideo'

// images body
import imgBody1 from './assets/body/carrefour_img_0001.jpg'
import imgBody2 from './assets/body/carrefour_img_0002.jpg'
import imgBody3 from './assets/body/carrefour_img_0003.jpg'
import imgBody4 from './assets/body/carrefour_img_0004.jpg'

// images carousel
import imgCarousel1 from './assets/carousel/carrefour_img_carousel_0001.jpg'
import imgCarousel2 from './assets/carousel/carrefour_img_carousel_0002.jpg'
import imgCarousel3 from './assets/carousel/carrefour_img_carousel_0003.jpg'
import imgCarousel4 from './assets/carousel/carrefour_img_carousel_0004.jpg'

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

const CarrefourCartoConso = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons rÃ©alisÃ© une application de storytelling des donnÃ©es pour montrer l\'importance des nouvelles sources de donnÃ©es sociales aux directeurs des magasins du groupe Carrefour. En croisant les donnÃ©es de consommation, les donnÃ©es Google Trends, et des donnÃ©es dÃ©crivant les tendances sur Twitter, nous avons produit de nouveaux enseignements sur l\'ancrage local des produits du terroir.'
              : 'We created a data storytelling application for the Carrefour groupâ€™s store managers to highlight the importance of using social data. By combining consumer data, Google Trends data and data based on Twitter trends, we produced new insights into the anchoring of local products.'
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
              ? 'Pour encourager ses directeurs de magasin Ã  de plus riches usages des donnÃ©es, l\'Ã©quipe Data de Carrefour souhaitait produire une application Ã©clairante de visualisation de donnÃ©es. Son premier enjeu\u00A0: faire la preuve que de l\'information mÃ©tier nouvelle peut naÃ®tre de l\'analyse des donnÃ©es sociales.'
              : 'The Carrefour Data team wanted to produce an enlightening data visualization application to encourage store managers to make better use of data. The first challenge: to prove that new business information can be gleaned from the analysis of social media data.'
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
                ? 'L\'application aide les utilisateurs Ã  comparer les dynamiques locales d\'une sÃ©lection de produits du terroir.'
                : 'The application helps users compare the local dynamics of a selection of local products.'
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
              ? 'Trois sources de donnÃ©es ont Ã©tÃ© mobilisÃ©es. D\'une part les donnÃ©es de consommation en magasin d\'une sÃ©lection de produits du terroir. D\'autre part, des donnÃ©es Google Trends dÃ©crivant les volumes de recherche sur Google de ces mÃªmes produits. Enfin, des volumes de mentions sur les rÃ©seaux sociaux Twitter et Instagram de ces produits du terroir.'
              : 'Three sources of data were used. Firstly, we collected consumer data from a selection of local products sold in-store. Secondly, we compiled Google Trends data that described the search volumes for these products online. We then collated data relating to the number of Twitter and Instagram mentions for these local products.'
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
                ? 'Nous utilisons des visualisations small multiples pour raconter des histoires avec les donnÃ©es.'
                : 'We used visualizations called â€˜small multiplesâ€™ to tell stories with the data.'
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
              ? 'Dans une premiÃ¨re phase de recherche nous avons identifiÃ© le potentiel de ces donnÃ©es pour produire de nouvelles connaissances. Dans une seconde phase, nous avons conÃ§u les modes de visualisations adaptÃ©s Ã  la restitution de ces connaissances. Enfin, nous avons dÃ©veloppÃ©, testÃ© et dÃ©ployÃ© ces modes de visualisation au sein d\'une application web dynamique.'
              : 'In a first phase of research we identified the potential of this data to generate new knowledge and insights about the products. In a second phase, we designed visualization methods to present these insights. Finally, we developed, tested and deployed these visualization methods within a dynamic web application.'
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
                ? 'Les courbes mettent en lumiÃ¨re des coÃ¯ncidences ou des dÃ©calage entre le moment oÃ¹ certains produits sont recherchÃ©s sur Google et le moment oÃ¹ il sont achetÃ©s en magasin.'
                : 'The curves highlight coincidences or discrepancies related to the time a product is searched on Google and the moment it is bought in-store.'
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
              ? 'L\'application propose deux niveaux de lecture. Le premier met en scÃ¨ne les enseignements clÃ©s tirÃ©s des donnÃ©es. Le second laisse aux utilisateurs une grande libertÃ© d\'exploration des donnÃ©es Ã  travers diffÃ©rentes dimensions\u00A0: produits, gÃ©ographie, mode de consommation, etc.'
              : 'The application offers two reading levels. The first presents the key insights learned from the data. The second gives users greater freedom to explore data through different avenues, such as by focusing on a product, geography or the way a product is consumed.'
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
          FormattedMessage: project-body-main-point
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'L\'application propose deux niveaux de lecture. Le premier met en scÃ¨ne les enseignements clÃ©s tirÃ©s des donnÃ©es. Le second laisse aux utilisateurs une grande libertÃ© d\'exploration des donnÃ©es Ã  travers diffÃ©rentes dimensions : produits, gÃ©ographie, mode de consommation, etc.'
              : 'The application offers two reading levels. The first presents the key insights learned from the data. The second gives users greater freedom to explore data through different avenues, such as by focusing on a product, geography or the way a product is consumed.'
          }
        </Paragraph1>
      </Section>
      <Section marginBottom='spacingXL'>
        <LongVideo uri='428062158' />
      </Section>
    </>
  )
}

const infosCarrefourCartoConso = {
  component: CarrefourCartoConso,
  client: {
    fr: 'Carrefour',
    en: 'Carrefour'
  },
  label: {
    fr: 'Cartographie de la consommation',
    en: 'Mapping consumer data'
  },
  theme: {
    isDark: true,
    background: '#0B2E6B'
  },
  video: '426971022',
  chapo: {
    fr: 'Sensibiliser les Ã©quipes internes Ã  l\'importance de l\'analyse des donnÃ©es.',
    en: 'Make internal teams aware of the importance of data analysis.'
  },
  category: {
    fr: 'Application',
    en: 'Application'
  },
  date: {
    fr: '2017 - 4 mois',
    en: '2017 - 4 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel2, imgCarousel3, imgCarousel4, imgCarousel1]
  },
  slug: 'carrefour-carto-conso',
  isOnHome: false,
  serviceId: 'data-driven-strategy',
  galleryPics: []
}

export default CarrefourCartoConso
export { infosCarrefourCartoConso }
