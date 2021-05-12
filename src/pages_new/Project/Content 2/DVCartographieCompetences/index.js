import React from 'react'
import { useParams } from 'react-router-dom'


// Images Gallery
import imgGallery1 from './assets/gallery/carto-competence_gallery_0001.jpg'
import imgGallery2 from './assets/gallery/carto-competence_gallery_0002.jpg'

// images body
import imgBody1 from './assets/body/carto-competence_img_0001.jpg'
import imgBody2 from './assets/body/carto-competence_img_0002.jpg'
import imgBody3 from './assets/body/carto-competence_img_0003.jpg'

// images carousel
import imgCarousel1 from './assets/carousel/cartocompetences_img_carousel_0001.jpg'
import imgCarousel2 from './assets/carousel/cartocompetences_img_carousel_0002.jpg'
import imgCarousel3 from './assets/carousel/cartocompetences_img_carousel_0003.jpg'
import imgCarousel4 from './assets/carousel/cartocompetences_img_carousel_0004.jpg'

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

const DVCartographieCompetences = () => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons conÃ§u un outil dâ€™aide Ã  la dÃ©cision basÃ© sur l\'exploitation des donnÃ©es tirÃ©es des fiches de poste et des mobilitÃ©s internes. Nous avons rÃ©vÃ©lÃ© le riche potentiel de ces donnÃ©es pour orienter la stratÃ©gie de gestion des emplois et des carriÃ¨res.'
              : 'We designed a decision support tool based on the use of data from job descriptions and internal mobility. We revealed the rich potential of this data to guide human resources strategy in terms of managing jobs and careers.'
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
              ? 'Notre client avait Ã  sa disposition un riche historique de fiches de poste et de mobilitÃ©s internes entre postes, pour tous les mÃ©tiers de son entreprise. Ces fiches n\'avait jamais Ã©tÃ© exploitÃ©es en tant que base de donnÃ©es, ni dans une perspective temporelle. Notre client nous a sollicitÃ©s pour crÃ©er un outil qui mette ces donnÃ©es au service dâ€™une meilleure stratÃ©gie de gestion des emplois et des carriÃ¨res.'
              : 'Our client had a large set of historical files cataloguing job descriptions and internal mobility between positions for all areas of their business. These files had never been used as a database, nor analyzed retrospectively. Our client asked us to create a tool to enable this data to be used as part of an improved job and career management strategy.'
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
                ? 'L\'outil montre l\'organigramme de faÃ§on vivante\u00A0: chaque Ã©quipe correspond Ã  un nÅ“ud, et les liens traduisent les relations hiÃ©rarchiques.'
                : 'The tool shows the organizational chart in a lively way: each team corresponds to a node, and the links translate the hierarchical relationships.'
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
              ? 'Les fiches de postes sont riches pour comprendre une entreprise\u00A0: elle racontent lâ€™Ã©volution de lâ€™organisation humaine, comment chacun se forme, fait Ã©voluer son mÃ©tier, change de trajectoire, etc. Notre client possÃ©dait une version propre et numÃ©risÃ©e de l\'ensemble de ces fiches de poste, rendant possible leur exploitation en tant que base de donnÃ©es.'
              : 'Job descriptions are a rich source of information to help understand a business: they tell the story of human organization, staff development, changes to professions and career trajectories, etc. Our client had a clean and digitized version of all their job descriptions, making it possible to use them as a database.'
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
                ? 'La cartographie des compÃ©tences visualise l\'ensemble des savoir-faire dÃ©crits dans les fiches de poste, le nombre de personnes qui les possÃ¨dent et leur proximitÃ©, lorsque plusieurs personnes possÃ¨dent des compÃ©tences en commun.'
                : 'The skills mapping shows all the skills described in the job descriptions, the number of people who have them and their proximity, as well as when several people have skills in common.'
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
              ? 'Nous avons analysÃ© les donnÃ©es tirÃ©es des fiches de postes, puis nous avons rÃ©alisÃ© une vingtaine dâ€™interviews avec diffÃ©rents dÃ©cideurs stratÃ©giques et responsables des ressources humaines. Cette phase exploratoire nous a permis d\'identifier oÃ¹ et comment des donnÃ©es RH peuvent aider Ã  la prise de dÃ©cision, et surtout, la faÃ§on dont il fallait visualiser ces donnÃ©es pour libÃ©rer leur potentiel informationnel.'
              : 'We analyzed the data that was drawn from the job descriptions before carrying out around 20 interviews with strategic decision-makers and human resources managers. This initial phase helped us identify where and how the HR data could help decision-making. It also helped us to understand how to visualize this data in order to unlock its potential as an information source.'
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
                ? 'L\'outil visualise toutes les carriÃ¨res menÃ©es dans l\'entreprise : Ã  partir d\'un mÃ©tier, il est possible de s\'orienter vers les autres postes.'
                : 'The tool visualizes all the career options at the company, and it shows how it is possible to progress from one job into other roles.'
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
              ? 'Lâ€™outil rÃ©alisÃ© utilise la visualisation de donnÃ©es pour aider les dirigeants du groupe Ã  apprÃ©hender les Ã©volutions de leur entreprise sous diffÃ©rents points de vue\u00A0: lâ€™Ã©volution des compÃ©tences, lâ€™Ã©volution des mÃ©tiers, lâ€™Ã©volution des besoins de recrutement, lâ€™Ã©volution de lâ€™organisation, etc. GrÃ¢ce Ã  sa dimension visuelle et interactive, lâ€™outil agit comme un rÃ©vÃ©lateur des transformations du groupe. Il aide ses utilisateurs Ã  y projeter lâ€™impact de leur futures dÃ©cisions, et apporte un cadre Ã  leurs choix stratÃ©giques.'
              : 'The tool we produced uses data visualization to help the organizationâ€™s leaders to understand the changes in their business from different points of view: changes in skill sets, changes in jobs, changes in recruitment needs, organizational development, etc. Thanks to its visual and interactive dimensions, the tool reveals the companyâ€™s evolution. It helps its users to project the impact of their future decisions, and provides a framework for their strategic choices.'
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
              ? 'En plus de la capacitÃ© Ã  traiter de gros historiques de donnÃ©es, l\'outil a mis en valeur lâ€™importance de la visualisation de donnÃ©es pour lâ€™aide Ã  la dÃ©cision RH.'
              : 'In addition to the ability to process large data histories, the tool highlighted the importance of data visualization as an HR decision support mechanism.'
          }
        </Paragraph1>
      </Section>
    </>
  )
}

const infosDVCartographieCompetences = {
  component: DVCartographieCompetences,
  client: {
    fr: 'Confidentiel',
    en: 'Confidential'
  },
  label: {
    fr: 'Cartographie des compÃ©tences',
    en: 'Skills mapping'
  },
  theme: {
    isDark: true,
    background: '#11242E'
  },
  video: '427805393',
  results: {
    fr: 'Le prototype a Ã©tÃ© utilisÃ© pour faire Ã©voluer la politique de recrutement de notre client en 2017.',
    en: 'The prototype was used to develop our client\'s recruitment policy in 2017.'
  },
  chapo: {
    fr: 'Favoriser de meilleures stratÃ©gies RH en visualisant lâ€™organisation, les compÃ©tences et les carriÃ¨res.',
    en: 'Foster better HR strategies by visualizing the organization, its skill sets and career pathways.'
  },
  category: {
    fr: 'Outil',
    en: 'Tool'
  },
  date: {
    fr: '2016 - 6 mois',
    en: '2016 - 6 months'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
  },
  slug: 'cartographie-competences',
  isOnHome: false,
  serviceId: 'decision-tools',
  galleryPics: [
    {
      src: imgGallery1
    },
    {
      src: imgGallery2
    }
  ]
}

export default DVCartographieCompetences
export { infosDVCartographieCompetences }
