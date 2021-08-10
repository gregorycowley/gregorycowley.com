import React from "react";
import { useParams } from "react-router-dom";


// Images Gallery
import imgGallery1 from "./assets/gallery/suggest-dv_gallery_0001.jpg";
import imgGallery2 from "./assets/gallery/suggest-dv_gallery_0002.jpg";
import imgGallery3 from "./assets/gallery/suggest-dv_gallery_0003.jpg";

// images body
import imgBody1 from "./assets/body/suggest-dv_img_0001.jpg";
import imgBody2 from "./assets/body/suggest-dv_img_0002.jpg";
import imgBody3 from "./assets/body/suggest-dv_img_0003.jpg";
import imgBody4 from "./assets/body/suggest-dv_img_0004.jpg";

// images carousel
import imgCarousel1 from "./assets/carousel/suggestdv_img_carousel_0001.jpg";
import imgCarousel2 from "./assets/carousel/suggestdv_img_carousel_0002.jpg";
import imgCarousel3 from "./assets/carousel/suggestdv_img_carousel_0003.jpg";
import imgCarousel4 from "./assets/carousel/suggestdv_img_carousel_0004.jpg";

import {
	Chapo,
	SectionTitle,
	Section,
	SectionImage,
	Img,
	ImgLegend
} from "components/PieceOfWork/Gallery/shared";

import { Paragraph1 } from "components/_ui/Paragraphs";
import LongVideo from "components/PieceOfWork/LongVideo";

const DigimindSuggest = () => {
  
	const isFr = false;
	return (
		<>
			<Section>
				<Chapo>
					{
						isFr
							? "Nous avons aidÃ© un Ã©diteur de logiciels dâ€™e-rÃ©putation Ã  amÃ©liorer lâ€™expÃ©rience utilisateurs de ses outils. Nous avons conÃ§u pour lui de nouvelles interfaces permettant de suivre aisÃ©ment la visibilitÃ© dâ€™une marque dans les rÃ©sultats de Google, et de comparer son positionnement avec celui dâ€™autres marques."
							: "We helped an online reputation software provider improve the user experience of their tools. We designed new interfaces to make it easier to track a brand's visibility in Google results, and to also compare that brandâ€™s position relative to other brands."
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
							? "Notre client avait des technologies puissantes pour collecter et qualifier des donnÃ©es dâ€™e-rÃ©putation, mais ses interfaces de restitution Ã©taient peu apprÃ©ciÃ©es, mal utilisÃ©es et amenaient les clients Ã  se dÃ©tourner de sa solution.  Nous avons Ã©tÃ© sollicitÃ©s pour repenser le design de ces interfaces afin qu'elles mettent mieux en valeur la qualitÃ© des analyses tirÃ©es des donnÃ©es."
							: "Our client was using powerful technologies to collect and qualify online reputation data, but their interfaces were poorly used and off-putting for customers. We were asked to rethink the design of these interfaces so that they better enhanced the quality of the analyses drawn from the data."
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
								? "Nous faisons Ã©merger les tendances les plus significatives dans la masse de donnÃ©es\u00A0: les fortes hausses ou fortes baisses dans les recherches Google."
								: "We bring out the most significant trends from the dataset: the sharp increases or decreases in Google searches."
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
							? "L'outil se concentre sur les suggestions automatiques proposÃ©es par le moteur de recherche Google au moment de saisir une requÃªte. Ces suggestions correspondent aux recherches les plus frÃ©quentes, et reflÃ¨tent ainsi les tendances de recherche. Elles sont utiles pour surveiller les associations dâ€™idÃ©es des internautes concernant une marque."
							: "The tool focuses on the automated suggestions offered by Google when entering a query. These suggestions align with the most frequent searches, and therefore reflect search trends. They are useful for monitoring the associations users make about brands."
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
								? "L'outil aide Ã  se concentrer sur l'essentiel, en montrant les suggestions les plus visibles par les utilisateurs et les plus menaÃ§antes pour une marque."
								: "The tool helps to focus on the essentials, showing the suggestions that are most visible to users and most threatening to a brand."
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
							? "Des interviews et des tests avec les utilisateurs nous ont aidÃ© Ã  amÃ©liorer lâ€™ergonomie de lâ€™interface, et Ã  la simplifier au maximum pour des utilisateurs qui ont moins besoin dâ€™analyses sophistiquÃ©es que dâ€™Ãªtre alertÃ©s lorsque les donnÃ©es rÃ©vÃ¨lent un risque pour leur marque."
							: "Interviews and tests with users helped us to improve the usability of the interface, as well as to simplify it for users who would benefit from a warningâ€”rather than sophisticated analysisâ€”when the data reveals a risk to their brand."
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
								? "L'outil aide Ã  se comparer avec ses concurrents, grÃ¢ce Ã  un vocabulaire visuel simple, qui explicite comment les donnÃ©es sont collectÃ©es et traitÃ©es."
								: "The tool helps make comparisons with competitors thanks to a simple visual vocabulary that explains how the data is collected and processed."
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
							? "Nous avons particuliÃ¨rement travaillÃ© sur les fonctionnalitÃ©s qui aident une marque Ã  suivre dans le temps son positionnement, et Ã  anticiper les tendances Ã  venir. Nous avons choisi des graphiques simples, centrÃ©s sur les positions dans le temps plus que la lecture de valeurs prÃ©cises. Nous facilitons aussi la comparaison dâ€™une marque avec ses concurrents pour lâ€™aider Ã  mettre en contexte ses rÃ©sultats."
							: "We focused in particular on the functionalities that help a brand to follow its positioning over time, and to anticipate future trends. We therefore chose simple graphs, centered on positions over time rather than precise values. Our solution also helps a brand to draw comparisons with competitors in order to put results into context."
					}
				</Paragraph1>
			</Section>
			<Section>
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
							? "Nous avons crÃ©Ã© un vocabulaire propre Ã  lâ€™outil, en favorisant des mÃ©taphores liÃ©es au corps humain."
							: "We created a vocabulary specific to the tool, favoring human body metaphors."
					}
				</Paragraph1>
			</Section>
			<Section>
				<LongVideo uri='428090155' />
			</Section>
		</>
	);
};

const infosDigimindSuggest = {
	component: DigimindSuggest,
	client: "Confidential",
	label: "Suggest",
	theme: {
		isDark: true,
		background: "#2C313B"
	},
	video: "427804937",
	results: "Launch of a new online reputation product.",
	chapo: "Rethink the design of an online reputation management tool to make it easier to read and use.",
	category: "Tool",
	date: "2013 - 3 months",
	carousel: {
		isBig: false,
		pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
	},
	slug: "suggest",
	isOnHome: false,
	serviceId: "product-design",
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

export default DigimindSuggest;
export { infosDigimindSuggest };
