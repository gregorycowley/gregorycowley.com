import React from 'react'
import { useParams } from 'react-router-dom'


import LANG from 'common/wording/lang'
import { Paragraph1 } from 'components/Paragraphs'

import {
  Chapo,
  SectionTitle,
  Section,
  SectionImage,
  Img,
  ImgLegend
} from 'components/PieceOfWork/Gallery/shared'
import LongVideo from 'components/PieceOfWork/LongVideo'

// Images Gallery
import imgGallery1 from './assets/gallery/bitcoin_gallery_0001.jpg'
import imgGallery2 from './assets/gallery/bitcoin_gallery_0002.jpg'
import imgGallery3 from './assets/gallery/bitcoin_gallery_0003.jpg'

// images body
import imgBody1 from './assets/body/bitcoin_img_0001.jpg'
import imgBody2 from './assets/body/bitcoin_img_0002.jpg'

// images carousel
import imgCarousel1 from './assets/carousel/bitcoin_img_carousel_0001.jpg'
import imgCarousel2 from './assets/carousel/bitcoin_img_carousel_0002.jpg'
import imgCarousel3 from './assets/carousel/bitcoin_img_carousel_0003.jpg'

const DVBitcoinVisualizer = ({ isDarkTheme }) => {
  const { lang } = useParams()
  const isFr = lang === LANG.FR.SLUG
  return (
    <>
      <Section>
        <Chapo>
          {
            isFr
              ? 'Nous avons conÃ§u et dÃ©veloppÃ© une visualisation ambiante pour montrer aux spectateurs la blockchain Bitcoin, ses transactions et ses blocs. Cette expÃ©rience rend visible le rythme de vie de la blockchain, comme la crÃ©ation de nouveaux blocs et lâ€™absorption des transactions en leur sein. Au croisement des compÃ©tences de Dataveyes, ce projet montre comment une visualisation esthÃ©tique peut aider Ã  faire comprendre des concepts complexes.'
              : 'We designed and developed an ambient visualization to explain the Bitcoin blockchain, and to show viewers its transactions and blocks. It makes the pace of blockchain more visible and demonstrates the creation of new blocks and the absorption of transactions within them. This project showcases our vast skill sets to show how an aesthetic visualization can help explain complex concepts.'
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
              ? 'Les cryptomonnaies et la blockchain sont des concepts mÃ©connus et difficiles Ã  vulgariser. Comment les faire comprendre au grand public sans les dÃ©former, tout en apportant de lâ€™information utile\u00A0?'
              : 'Cryptocurrencies and blockchain are still largely obscure concepts and they can be difficult to make accessible to mainstream audiences. How can we help people to better understand these concepts and what information can we use to make this possible?'
          }
        </Paragraph1>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-data
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Nous avons dÃ©veloppÃ© un serveur connectÃ© Ã  lâ€™API de Bitcoin. Pour cela, nous avons dÃ» initier notre propre nÅ“ud Bitcoin sur le rÃ©seau. GrÃ¢ce Ã  ce serveur, nous avons ensuite pu rÃ©cupÃ©rer en temps rÃ©el tous les Ã©vÃ¨nements de la blockchain, comme par exemple la crÃ©ation de blocs ou les transactions non-confirmÃ©es.'
              : 'We developed a server connected to the Bitcoin API by initiating our own Bitcoin node on the network. Thanks to this server, we were then able to retrieve all blockchain eventsâ€”such as the creation of blocks and unconfirmed transactionsâ€”in real time.'
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
                ? 'Chaque barre verticale reprÃ©sente un bloc de blockchain Bitcoin. Les blocs sont triÃ©s par ordre chronologique, les plus rÃ©cents Ã  droite et les plus anciens Ã  gauche.'
                : 'Each vertical bar represents a block in the Bitcoin blockchain. The blocks are sorted in chronological order, the most recent on the right and the oldest on the left.'
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
              ? 'Les cryptomonnaies et la blockchain Ã©tant des sujets peu ou mal connus, nous avons dÃ» rendre la visualisation dâ€™autant plus attirante. Câ€™est pourquoi nous avons dÃ©veloppÃ© une visualisation esthÃ©tique en 3D, ne montrant quâ€™une partie de la blockchain et de ses concepts. En combinant notre expertise technique, notre capacitÃ© Ã  simplifier un problÃ¨me complexe, et un design soignÃ©, nous avons rendu la blockchain tangible et accessible.'
              : 'We had to make our visualization all the more attractive given that cryptocurrencies and blockchain are little known subjects. Thatâ€™s why we developed an aesthetic 3D visualization showing only part of the blockchain and its concepts. We combined a careful design with our technical expertise and our experience simplifying complex problems to make the blockchain world more tangible and accessible.'
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
                ? 'Dans lâ€™attente dâ€™un nouveau bloc, des transactions non-confirmÃ©es sâ€™accumulent sous forme de particules Ã  droite de lâ€™Ã©cran. DÃ¨s quâ€™un nouveau bloc est crÃ©Ã©, ces transactions y sont absorbÃ©es et disparaissent avec une animation.'
                : 'While waiting for a new block, unconfirmed transactions accumulate in the form of particles on the right-hand side of the screen. As soon as a new block is created, these transactions are absorbed and disappear by way of an animation.'
            }
          </ImgLegend>
        </Section>
      </Section>
      <Section>
        <SectionTitle>
          FormattedMessage: project-body-main-point
        </SectionTitle>
        <Paragraph1>
          {
            isFr
              ? 'Cette visualisation Ã©tait destinÃ©e Ã  un Ã©vÃ©nement ponctuel, une confÃ©rence dâ€™une dizaine de minutes au Live Magazine, et devait donc se marier avec un exposÃ© oral. Nous avons fait une capture vidÃ©o de lâ€™application Ã  un moment intÃ©ressant, et lâ€™avons synchronisÃ© avec le script de la confÃ©rence. Les explications orales ont ainsi aidÃ© les visiteurs Ã  comprendre la visualisation.'
              : 'The visualization was designed for a one-off eventâ€”a 10-minute conference at Live Magazineâ€”and it had to be combined with an oral presentation. We took a screen recording of the app at a key moment and synchronized this with the conference script to help reinforce understanding of the visualization alongside the oral explanations.'
          }
        </Paragraph1>
      </Section>
      <Section>
        <LongVideo uri='428090354' />
      </Section>
    </>
  )
}

const infosDVBitcoinVisualizer = {
  component: DVBitcoinVisualizer,
  label: {
    fr: 'Bitcoin Blockchain Visualizer',
    en: 'Bitcoin Blockchain Visualizer'
  },
  theme: {
    isDark: true
  },
  video: '424103968',
  date: {
    fr: '2017',
    en: '2017'
  },
  results: {
    fr: 'La visualisation a Ã©tÃ© projetÃ©e devant des milliers de spectateurs au Casino de Paris, lors du Live Magazine de septembre 2017.',
    en: 'The visualization was projected in front of thousands of spectators during the September 2017 edition of Live Magazine at Casino de Paris.'
  },
  chapo: {
    fr: 'Visualiser en temps rÃ©el le rythme de la blockchain Bitcoin, pour expliquer ses concepts.',
    en: 'Explain the basic concept of the Bitcoin blockchain by visualizing it in real time.'
  },
  category: {
    fr: 'Prototype',
    en: 'Prototype'
  },
  carousel: {
    isBig: false,
    pics: [imgCarousel1, imgCarousel2, imgCarousel3]
  },
  slug: 'bitcoin-visualizer',
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

export default DVBitcoinVisualizer
export { infosDVBitcoinVisualizer }
