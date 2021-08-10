import React from "react";
import { useParams } from "react-router-dom";


// images body
import imgBody1 from "./assets/body/orange_img_0001.jpg";
import imgBody2 from "./assets/body/orange_img_0002.jpg";
import imgBody3 from "./assets/body/orange_img_0003.jpg";

// images carousel
import imgCarousel1 from "./assets/carousel/orange_img_carousel_0001.jpg";
import imgCarousel2 from "./assets/carousel/orange_img_carousel_0002.jpg";
import imgCarousel3 from "./assets/carousel/orange_img_carousel_0003.jpg";

import {
	Chapo,
	SectionTitle,
	Section,
	SectionImage,
	Img
} from "components/PieceOfWork/Gallery/shared";

import { Paragraph1 } from "components/_ui/Paragraphs";
import LongVideo from "components/PieceOfWork/LongVideo";

const OrangeHall = () => {
  
	const isFr = false;
	return (
		<>
			<Section>
				<Chapo>
					{
						isFr
							? "Nous avons alliÃ© le storytelling des donnÃ©es, la visualisation 3D et l'animation pour proposer Ã  Orange France une expÃ©rience d'information originale. Cette installation, projetÃ©e sur grand Ã©cran, anime dÃ©sormais le hall d'accueil du siÃ¨ge social de la marque."
							: "We combined data storytelling, 3D visualization and animation to offer Orange France an original information experience. This installation, projected on a big screen, is now displayed in the lobby of the companyâ€™s headquarters."
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
							? "Pour animer son nouveau hall d'accueil, Orange France souhaitait proposer une installation sur grand Ã©cran qui raconte des histoires Ã  partir de ses donnÃ©es. Ã€ travers ce projet, Orange France portait plusieurs ambitions\u00A0: faire dÃ©couvrir aux visiteurs son univers, susciter leur curiositÃ©, mais aussi leur donner une image positive des donnÃ©es."
							: "To help bring their new reception hall to life, Orange France wanted to project an installation on a big screen to tell stories about their data. With this project, Orange France had several objectives. They wanted to help visitors discover their universe and to arouse the curiosity of viewers, but also to provide a positive image of the data."
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
							? "Pour ce projet, Orange nous a confiÃ© l'analyse de grands volumes de donnÃ©es dÃ©crivant la consommation de donnÃ©es 3G/4G, de SMS et dâ€™appels, agrÃ©gÃ©es par ville et par profil client. Nous avons ainsi identifiÃ© des tendances de consommation diffÃ©rentes selon les pÃ©riodes de l'annÃ©e, les Ã¢ges mais aussi le lieu de vie des clients."
							: "For this project, Orange entrusted us with the analysis of large volumes of data relating to 3G/4G use, SMS and calls, aggregated by city and by customer profile. We used this data to identify different consumer trends according to the time of year, the ages of customers and their home environments."
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
          FormattedMessage: project-body-method
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Nous avons d'abord explorÃ© les donnÃ©es pour identifier des histoires intÃ©ressantes. Nous avons ensuite prototypÃ© avec les donnÃ©es pour incarner ces histoires, et les traduire visuellement. Enfin, nous avons travaillÃ© les animations et les transitions pour obtenir une application prÃªte Ã  Ãªtre diffusÃ©e en continu sur grand Ã©cran."
							: "We started by exploring the data to identify interesting stories. We then used the data to develop a prototype that embodied these stories, and translated them visually. Finally, we worked on the animations and transitions to develop an application that could be broadcast continuously on a big screen."
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
							? "L'application associe la visualisation de donnÃ©es 3D Ã  l'animation et au texte pour proposer aux visiteurs une expÃ©rience d'information originale. Nous avons choisi des reprÃ©sentations immersives, qui donnent au spectateur lâ€™impression dâ€™Ãªtre immergÃ© dans les donnÃ©es dâ€™Orange France, et dâ€™en dÃ©couvrir les coulisses."
							: "The application combines the visualization of 3D data with moving images and text to offer visitors an original information experience. We chose immersive representations to give the viewer the feeling of being immersed in Orange France's data, and to provide them with a behind-the-scenes insight."
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
							? "Pour Ã©viter de lasser les visiteurs en rÃ©pÃ©tant les mÃªmes informations, les sÃ©quences de visualisation sont branchÃ©es sur de vraies donnÃ©es, et varient en permanence. Ã€ chaque nouvelle diffusion une ville, ou un profil client, est piochÃ© au hasard dans la base de donnÃ©es."
							: "The viewing sequences are connected to real data and vary constantly to maintain the interest of viewers. With each new broadcast, a city or a customer profile is drawn at random from the database."
					}
				</Paragraph1>
			</Section>
			<Section marginBottom='spacingXL'>
				<LongVideo uri='428064443' />
			</Section>
		</>
	);
};

const infosOrangeHall = {
	component: OrangeHall,
	client: "Orange",
	label: "Stories",
	theme: {
		isDark: true,
		background: "#110500"
	},
	video: "427638601",
	results: "The installation is projected in the hall of Orange France's head office and reaches 10,000\u00A0visitors every month.",
	chapo: "Highlight interesting stories from the masses of data relating to activity on telecommunications networks.",
	category: "Creative installation ",
	date: "2019 - 3 months",
	carousel: {
		isBig: false,
		pics: [imgCarousel1, imgCarousel2, imgCarousel3]
	},
	slug: "orange-hall",
	isOnHome: false,
	serviceId: "data-storytelling",
	galleryPics: []
};

export default OrangeHall;
export { infosOrangeHall };
