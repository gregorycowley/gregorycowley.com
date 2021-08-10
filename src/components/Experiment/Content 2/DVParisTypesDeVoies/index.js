import React from "react";
import { useParams } from "react-router-dom";



import { Paragraph1 } from "components/_ui/Paragraphs";

import {
	Chapo,
	SectionTitle,
	Section,
	SectionImage,
	Img
} from "components/PieceOfWork/Gallery/shared";
import LongVideo from "components/PieceOfWork/LongVideo";

// body
import imgBody1 from "./assets/body/voies_paris_img_0001.jpg";
import imgBody2 from "./assets/body/voies_paris_img_0002.jpg";
import imgBody3 from "./assets/body/voies_paris_img_0003.jpg";

// images carousel
import imgCarousel1 from "./assets/carousel/voieparis_img_carousel_0001.jpg";
import imgCarousel2 from "./assets/carousel/voieparis_img_carousel_0002.jpg";
import imgCarousel3 from "./assets/carousel/voieparis_img_carousel_0003.jpg";

const DVParisTypesDeVoies = () => {
  
	const isFr = false;
	return (
		<>
			<Section>
				<Chapo>
					{
						isFr
							? "Nous avons rendu explorable et ludique une base de donnÃ©es dÃ©crivant plus de 6\u00A0000 voies Ã  Paris."
							: "We made a database describing more than 6,000 roads and streets in Paris fun and easy to explore."
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
							? "Les donnÃ©es dÃ©crivant les rues de Paris racontent l'histoire de la capitale\u00A0: ses tendances architecturales, ses Ã©vÃ©nements historiques, ses modes d'organisation de la propriÃ©tÃ©, etc. Nous avons voulu rendre perceptibles ces fragments historiques Ã  travers la visualisation de donnÃ©es."
							: "Data describing the streets of Paris tells the history of the capital: its architectural trends, its historical events, the way it has been organized and built, etc. We wanted to make these historical fragments accessible through data visualization."
					}
				</Paragraph1>
			</Section>
			<Section>
				<SectionImage>
					<Img src={imgBody3} />
				</SectionImage>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-data
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Le projet exploite le jeu de donnÃ©es VOIE mis Ã  disposition par lâ€™Atelier Parisien d'Urbanisme (Apur)."
							: "The project uses the VOIE dataset made available by Atelier Parisien d'Urbanisme (Apur)."
					}
				</Paragraph1>
			</Section>
			<Section>
				<SectionImage>
					<Img src={imgBody1} />
				</SectionImage>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-solution
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "A travers ce projet, nous avons cherchÃ© Ã  rÃ©soudre des problÃ¨mes techniques de fluiditÃ© et de performance. L'utilisateur peut interagir trÃ¨s rapidement avec plus de 6\u00A0000 objets cartographiques, sans friction."
							: "We sought to solve technical problems such as fluidity and performance. The user can quickly and seamlessly interact with more than 6,000 geographic elements."
					}
				</Paragraph1>
			</Section>
			<Section>
				<SectionImage>
					<Img src={imgBody2} />
				</SectionImage>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-main-point
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Pour chaque type de voie, nous apportons du contexte, une dÃ©finition, des rÃ©fÃ©rences historiques, et de petites histoires."
							: "For each type of road, we provide context, definition, historical references, and short stories."
					}
				</Paragraph1>
			</Section>
			<Section marginBottom='spacingXL'>
				<LongVideo uri='428091127' />
			</Section>
		</>
	);
};

const infosDVParisTypesDeVoies = {
	component: DVParisTypesDeVoies,
	label: {
		fr: "Les rues de Paris",
		en: "The streets of Paris"
	},
	theme: {
		isDark: true
	},
	video: "426935531",
	date: {
		fr: "2019",
		en: "2019"
	},
	chapo: {
		fr: "RÃ©vÃ©ler l'unicitÃ© des rues parisiennes.",
		en: "Reveal the uniqueness of Parisian streets."
	},
	results: {
		fr: "Application responsive -\u00A0smartphone, tablette, desktop\u00A0- et performante, malgrÃ© le gros volume de donnÃ©es cartographiques.",
		en: "A responsive application for smartphones, tablets and desktops that has performance and fluidity despite a large volume of geographic data."
	},
	src: {
		url: "https://paris.dataveyes.com ",
		label: "paris.dataveyes.com "
	},
	category: {
		fr: "Application",
		en: "Application"
	},
	carousel: {
		isBig: false,
		pics: [imgCarousel1, imgCarousel2, imgCarousel3]
	},
	slug: "paris-types-de-voies"
};

export default DVParisTypesDeVoies;
export { infosDVParisTypesDeVoies };
