import React from "react";
import { useParams } from "react-router-dom";



import { Paragraph1 } from "components/_ui/Paragraphs";

import {
	Chapo,
	SectionTitle,
	Section,
	SectionImage,
	Img,
	ImgLegend
} from "components/PieceOfWork/Gallery/shared";
import LongVideo from "components/PieceOfWork/LongVideo";
import GIFVideo from "components/PieceOfWork/GIFVideo";

// Images Gallery
import imgGallery1 from "./assets/gallery/metropolitain_gallery_0001.jpg";
import imgGallery2 from "./assets/gallery/metropolitain_gallery_0002.jpg";
import imgGallery3 from "./assets/gallery/metropolitain_gallery_0003.jpg";

// images body
import imgBody1 from "./assets/body/metropolitain_img_0001.jpg";
import imgBody2 from "./assets/body/metropolitain_img_0002.jpg";
import imgBody3 from "./assets/body/metropolitain_img_0003.jpg";
import imgBody4 from "./assets/body/metropolitain_img_0004.jpg";
import imgBody5 from "./assets/body/metropolitain_img_0005.jpg";

// images carousel
import imgCarousel1 from "./assets/carousel/metropolitain_img_carousel_0001.jpg";
import imgCarousel2 from "./assets/carousel/metropolitain_img_carousel_0002.jpg";
import imgCarousel3 from "./assets/carousel/metropolitain_img_carousel_0003.jpg";
import imgCarousel4 from "./assets/carousel/metropolitain_img_carousel_0004.jpg";

const Metropolitain = ({ isDarkTheme }) => {
  
	const isFr = false;
	return (
		<>
			<Section>
				<Chapo>
					{
						isFr
							? "MÃ©tropolitain permet de visualiser le temps de trajet et lâ€™affluence, pour chaque station du mÃ©tro. Avec ce projet, nous avons voulu rendre la carte du mÃ©tro plus fidÃ¨le Ã  la faÃ§on dont les passagers vivent le territoire parisien."
							: "Metropolitain allows you to view travel time and passenger flow for each metro station. We wanted to make the metro map more faithful to the way commuters experience Paris."
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
							? "Nous voulions remettre en question lâ€™approche traditionnelle de la carte de Paris en rÃ©vÃ©lant, grÃ¢ce aux donnÃ©es, de nouvelles perceptions du territoire. Nous cherchions Ã  montrer comment les donnÃ©es peuvent traduire deux axes importants du ressenti des voyageurs\u00A0: l'affluence dans les rames de mÃ©tro, et le temps nÃ©cessaire pour aller d'une station Ã  une autre."
							: "We wanted to use data to question the traditional approach to mapping Paris, while at the same time revealing new perceptions of the city. We wanted to show how data can communicate two important aspects of life as a commuter: the congestion in the metro, and the time it takes to go from one station to another."
					}
				</Paragraph1>
			</Section>
			<Section>
				<SectionImage marginBottom='spacingM'>
					<Img src={imgBody5} />
				</SectionImage>
				<SectionImage>
					<Img src={imgBody1} />
				</SectionImage>
				<Section>
					<ImgLegend>
						{
							isFr
								? "Une carte isochrone rÃ©organise la ville en fonction du temps nÃ©cessaire pour se rendre sur chaque station."
								: "An isochrone map reorganizes the city according to the time required to get to each station."
						}
					</ImgLegend>
				</Section>
				<Section>
					<GIFVideo uri='429920366' />
				</Section>
				<Section>
					<GIFVideo uri='429920410' />
				</Section>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-data
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Les donnÃ©es sur lâ€™affluence proviennent dâ€™un jeu de donnÃ©es open data ouvert par la RATP. Les donnÃ©es concernant le temps de transport entre deux stations nous ont Ã©tÃ© fournies par la start-up Isokron, qui Ã©ditait lâ€™application Locomote, une application de calcul dâ€™itinÃ©raires en transports en commun."
							: "The congestion data came from an open RATP data dataset. Data relating to the travel time between two stations was provided by the start-up Isokron, which published Locomote, an app that calculates public transport routes."
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
								? "Une carte de chaleur fait ressortir les zones de forte densitÃ© de voyageurs dans le mÃ©tro."
								: "A heat map highlights areas of congestion in the metro."
						}
					</ImgLegend>
				</Section>
				<Section>
					<GIFVideo uri='429920384' />
				</Section>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-solution
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Nous proposons une visualisation en 3D dans laquelle lâ€™utilisateur peut jouer en dÃ©formant le temps et lâ€™espace. Dâ€™une part, la carte de Paris nâ€™est plus dictÃ©e par le rÃ©fÃ©rentiel gÃ©ographique, elle adopte un rÃ©fÃ©rentiel temporel\u00A0: la distance entre deux points de la carte est proportionnelle au temps quâ€™il faut pour aller dâ€™un point Ã  un autre. Dâ€™autre part, l'Ã©lÃ©vation du terrain traduit l'affluence dans le mÃ©tro. Cette dimension est renforcÃ©e par une carte de chaleur\u00A0: plus la foule est dense, plus les couleurs de la carte sont chaudes."
							: "We developed a 3D visualization that the user can play by distorting time and space. Firstly, the map of Paris is no longer dictated by geography. Instead, it adopts a temporal reference: the distance between two points on the map is proportional to the time it takes to go from one point to another. Secondly, the elevation of the terrain reflects passenger flow in the metro. A heat map reinforces this dimension: the denser the crowd, the warmer the colors on the map."
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
								? "MÃ©tropolitain rÃ©vÃ¨le diffÃ©rentes perceptions de lâ€™accÃ¨s Ã  la ville selon le lieu depuis lequel on y accÃ¨de. Depuis une station trÃ¨s centrale ou trÃ¨s pÃ©riphÃ©rique, la forme de la ville varie du tout au tout."
								: "Metropolitain reveals different perceptions in terms of access to the city, depending on where it is accessed. From a very central or very peripheral station, the shape of the city varies completely."
						}
					</ImgLegend>
				</Section>
				<SectionImage>
					<Img src={imgBody4} />
				</SectionImage>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-main-point
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Ce projet a fait lâ€™objet dâ€™un travail de recherche sur la faÃ§on dont les utilisateurs interagissent face Ã  des interfaces 3D grÃ¢ce Ã  des tests utilisateurs. Nous avons ainsi mieux documentÃ© le passage du design visuel au design de service."
							: "This project was the subject of research work on how users interact with 3D interfaces through user tests. As a result, we have better documented the transition from visual design to service design."
					}
				</Paragraph1>
			</Section>

			<Section>
				<LongVideo uri='428088827' />
			</Section>
		</>
	);
};

const infosDVMetropolitain = {
	component: Metropolitain,
	label: {
		fr: "MÃ©tropolitain",
		en: "Metropolitain"
	},
	theme: {
		isDark: true
	},
	video: "426961678",
	date: {
		fr: "2013",
		en: "2013"
	},
	src: {
		url: "http://metropolitain.io",
		label: "metropolitain.io "
	},
	caseStudy: {
		fr: {
			url: "https://medium.com/dataveyes-stories-vf/une-nouvelle-repr%C3%A9sentation-du-territoire-construite-par-les-donn%C3%A9es-du-m%C3%A9tro-86707f2339c5",
			label: "Une nouvelle reprÃ©sentation du territoire construite par les donnÃ©es du mÃ©tro"
		},
		en: {
			url: "https://stories.dataveyes.com/a-new-representation-of-our-transport-network-shaped-by-metro-data-e7c62dfe5979",
			label: "A new representation of our transport network shaped by metro data"
		}
	},
	results: {
		fr: "Shortlist Kantar Information is Beautiful Awards en 2013",
		en: "Shortlist Kantar Information is Beautiful Awards en 2013."
	},
	chapo: {
		fr: "RÃ©vÃ©ler les dynamiques du mÃ©tro parisien en visualisant des donnÃ©es qui dÃ©crivent le quotidien des voyageurs.",
		en: "Reveal the dynamics of the Paris metro via the visualization of data that describes the daily lives of commuters."
	},
	category: {
		fr: "Application",
		en: "Application"
	},
	carousel: {
		isBig: false,
		pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
	},
	slug: "metropolitain",
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
};

export default Metropolitain;
export { infosDVMetropolitain };
