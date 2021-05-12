import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useParams } from 'react-router-dom'

// photos
import photoCarolineGoulard from './assets/Caroline_Goulard.jpg'
import photoLeoGourven from './assets/Leo_Gourven.jpg'
import photoBenoitVidal from './assets/Benoit_Vidal.jpg'
import photoNicolasForestier from './assets/Nicolas_Forestier.jpg'

// components
import { Paragraph1 } from 'components/Paragraphs'
import mq from 'common/styles/breakpoints'
import ImageRatio from 'components/ImageRatio'
import useIsSmall from 'common/hooks/useIsSmall'

const Container = styled.div(({ theme }) => css`
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: 6fr 6fr 6fr;
  grid-column-gap: 2px;
  padding-bottom: ${theme.spacingL}px;
  ${mq('small')} {
    grid-template-columns: 1fr;
    padding-bottom: 0;
  }
`)

const Portrait = styled.div(({ theme, isHovered }) => css`
  padding-bottom: ${theme.spacingL}px;
  opacity: ${isHovered ? 1 : 0.3};
  transition: opacity 0.25s ease;
`)

const Name = styled(Paragraph1)(({ theme }) => css`
  padding-top: ${theme.spacingS}px;
`)

const Title = styled(Paragraph1)(({ theme }) => css`
  color: ${theme.secondary};
`)

const team = [
  {
    name: 'Caroline Goulard',
    title: {
      fr: 'CEO, co-fondatrice',
      en: 'CEO, co-founder'
    },
    photoUrl: photoCarolineGoulard
  },
  {
    name: 'LÃ©o Gourven',
    title: {
      fr: 'CTO, co-fondateur',
      en: 'CTO, co-founder'
    },
    photoUrl: photoLeoGourven
  },
  {
    name: 'BenoÃ®t Vidal',
    title: {
      fr: 'co-fondateur',
      en: 'co-founder'
    },
    photoUrl: photoBenoitVidal
  },
  {
    name: 'Nicolas Forestier',
    title: {
      fr: 'DÃ©veloppeur crÃ©atif',
      en: 'Creative Coder'
    },
    photoUrl: photoNicolasForestier
  }
]

const Portraits = ({ hovered, onHover }) => {
  const isSmall = useIsSmall()
  const { lang } = useParams()
  return (
    <Container>
      {team.map((member, i) => {
        const isHovered = hovered === null || i === hovered
        return (
          <Portrait
            key={i}
            isHovered={isSmall ? true : isHovered}
            onTouchEnd={() => {
              if (!isSmall) onHover((i === hovered) ? null : i)
            }}
            onMouseEnter={() => !isSmall && onHover(i)}
            onMouseLeave={() => !isSmall && onHover(null)}
          >
            <ImageRatio width={1020} height={1200} src={member.photoUrl} alt={member.name} />
            <Name>{member.name}</Name>
            <Title>{member.title[lang]}</Title>
          </Portrait>
        )
      })}
    </Container>
  )
}

export default Portraits
