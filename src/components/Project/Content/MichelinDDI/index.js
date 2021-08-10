import React from "react";
import { useParams } from "react-router-dom";


// Images Gallery
import imgGallery1 from "./assets/gallery/michelin_gallery_0001.jpg";
import imgGallery2 from "./assets/gallery/michelin_gallery_0002.jpg";
import imgGallery3 from "./assets/gallery/michelin_gallery_0003.jpg";

// images body
import imgBody3 from "./assets/body/michelin_img_0003.jpg";
import imgBody4 from "./assets/body/michelin_img_0004.jpg";
import imgBody5 from "./assets/body/michelin_img_0005.jpg";

// images carousel
import imgCarousel1 from "./assets/carousel/michelin_img_carousel_0001.jpg";
import imgCarousel2 from "./assets/carousel/michelin_img_carousel_0002.jpg";
import imgCarousel3 from "./assets/carousel/michelin_img_carousel_0003.jpg";
import imgCarousel4 from "./assets/carousel/michelin_img_carousel_0004.jpg";

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

const MichelinDDI = () => {

	const isFr = false;
	return (
		<>
			<Section>
				<Chapo>
					{
						isFr
							? "Nous avons visualisÃ© les trajets rÃ©alisÃ©s par une communautÃ© de 50\u00A0000 conducteurs ayant Ã©quipÃ© leurs voitures de boÃ®tiers. Ce projet a permis Ã  Michelin de rendre tangible la valeur apportÃ©e par sa dÃ©marche â€œBetter Driving Communityâ€, une initiative communautaire entre conducteurs soucieux dâ€™adopter de bons rÃ©flexes de conduite. Lâ€™outil de visualisation rÃ©alisÃ© montre comment des villes ou des constructeurs peuvent utiliser ces donnÃ©es pour amÃ©liorer les infrastructures routiÃ¨res."
							: "We visualized the routes taken by a community of 50,000 drivers equipped with a specialized device. This project helped Michelin demonstrate the value of their 'Better Driving Community', a community initiative for drivers eager to improve their driving habits. The visualization tool highlights how cities and manufacturers can use this data to improve road infrastructure."
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
							? "Avec son dÃ©partement dÃ©diÃ© Ã  lâ€™intelligence des donnÃ©es, et sa communautÃ© de conducteurs connectÃ©s, Michelin a une dÃ©marche ambitieuse de valorisation de ses donnÃ©es pour amÃ©liorer nos routes. Cette dÃ©marche avait jusquâ€™Ã  prÃ©sent peu de visibilitÃ©, et restait un sujet rÃ©servÃ© aux experts. Michelin souhaitait faire rayonner son usage innovant des donnÃ©es grÃ¢ce au storytelling visuel."
							: "With its department dedicated to data intelligence and its community of connected drivers, Michelin pursues an ambitious approach to data valorization in order to improve our roads. Until now, these efforts lacked visibility and remained a topic for experts. Michelin wanted to promote its approach to smart data through visual storytelling."
					}
				</Paragraph1>
			</Section>
			<SectionImage>
				<LongVideo uri='429914498' />
				<ImgLegend>
					{
						isFr
							? "La carte animÃ©e joue en vitesse accÃ©lÃ©rÃ©e tous les trajets rÃ©alisÃ©s par la communautÃ© en un an. La couleur reflÃ¨te la vitesse."
							: "The animated map fast-forwards through all the trips made by the community over one year. The color encodes the speed."
					}
				</ImgLegend>
			</SectionImage>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-data
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Michelin anime la â€œBetter Driving Communityâ€ : une communautÃ© de plus de 50 000 conducteurs qui partagent les donnÃ©es lors de leurs trajets : vitesse, freinage, position, etc. Ces donnÃ©es parlent autant de nos habitudes de mobilitÃ© que de lâ€™Ã©tat de notre rÃ©seau routier."
							: "Michelin runs the 'Better Driving Community': a community of more than 50,000 drivers who share their tripsâ€™s data: speed, braking, position, etc. This data speaks as much about our mobility habits as it does about the state of our road network."
					}
				</Paragraph1>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-method
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Nous avons travaillÃ© par trÃ¨s courtes itÃ©rations exploratoires\u00A0: Ã  partir du jeu de donnÃ©es contenant plusieurs centaines de milliers de trajets, nous avons testÃ©s diffÃ©rents modes de visualisation de donnÃ©es. Chaque semaine, nous produisions de nouveaux tests, et les partagions Ã  lâ€™Ã©quipe Michelin. Chaque nouvelle itÃ©ration nous amenait Ã  sÃ©lectionner avec notre client les tests les plus parlants, pour ensuite les approfondir."
							: "We worked in very short, exploratory iterations: based on the data set containing several hundred thousand trips, we tested different data visualization approaches. Every week, we produced new tests and shared them with the Michelin team. Each new iteration allowed us to select the most meaningful tests, and explore them further."
					}
				</Paragraph1>
			</Section>
			<SectionImage>
				<LongVideo uri='428063580' />
			</SectionImage>
			<Section>
				<ImgLegend>
					{
						isFr
							? "Le prototype permet de visualiser et de filtrer tous les trajets de la communautÃ©, en 3D."
							: "The prototype allows filtering and visualizing all of the communityâ€™s trips in 3D."
					}
				</ImgLegend>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-solution
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Nous avons produit deux interfaces. Dâ€™abord une vidÃ©o rejouant les trajets de la communautÃ© pendant un an, que Michelin utilise pour animer des confÃ©rences et des salons. Ensuite, un outil dâ€™exploration des donnÃ©es oÃ¹ les filtres et les tris permettent de requÃªter visuellement les comportements de conduite ou les diffÃ©rents types de trajets, et de les visualiser sur une carte 3D."
							: "We made two interfaces. First, a video replaying an entire year of the communityâ€™s trips, which Michelin uses to illustrate their conferences and trade shows. Second, a data exploration tool with filters and sorting functions to visually query various driving behaviors or types of trips, and visualize the results on a 3D map."
					}
				</Paragraph1>
			</Section>
			<SectionImage>
				<Img src={imgBody3} />
			</SectionImage>
			<Section>
				<ImgLegend>
					{
						isFr
							? "La visualisation montre, par effet d'agrÃ©gation, les tendances dans les comportements de conduite."
							: "Through aggregation, the visualization highlights trends in driving behaviors."
					}
				</ImgLegend>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-main-point
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Nous avons mis en place des modes de visualisation qui montrent Ã  la fois la grande granularitÃ© des donnÃ©es â€“\u00A0les trajets individuels\u00A0â€“ et lâ€™information qui se dÃ©gage lorsquâ€™on les agrÃ¨ge\u00A0:\u00A0comportements de conduite, zones dâ€™encombrement, schÃ©mas de dÃ©placement en ville, etc."
							: "We produced visualization modes that underscore both the extensive data granularityâ€”individual tripsâ€”and the information that emerges when these trips are aggregated: driving behavior, congestion zones, urban mobility patterns, etc."
					}
				</Paragraph1>
			</Section>
			<SectionImage>
				<Img src={imgBody4} />
			</SectionImage>
			<SectionImage>
				<Img src={imgBody5} />
			</SectionImage>
		</>
	);
};

const infosMichelinDDI = {
	component: MichelinDDI,
	client: "Michelin DDI",
	label: "Better Driving Community",
	theme: {
		isDark: true,
		background: "#252F3A"
	},
	video: "427638306",
	results: "Presented at the Design designer(s) exhibition, part of the 'Lille World Design Capital 2020'.",
	chapo: "Highlighting how data from 50,000 connected drivers can contribute to improving road infrastructure.",
	category: "Prototype",
	date: "2019 - 2 months",
	carousel: {
		isBig: true,
		pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
	},
	slug: "michelin-ddi",
	isOnHome: true,
	serviceId: "prototyping",
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

export default MichelinDDI;
export { infosMichelinDDI };
