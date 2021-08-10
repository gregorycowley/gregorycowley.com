import React from "react";
import { useParams } from "react-router-dom";


// Images Gallery
import imgGallery1 from "./assets/gallery/compagnon_gallery_0001.jpg";
import imgGallery2 from "./assets/gallery/compagnon_gallery_0002.jpg";
import imgGallery3 from "./assets/gallery/compagnon_gallery_0003.jpg";

// images body
import imgBody1 from "./assets/body/compagnon_img_0001.jpg";
import imgBody3 from "./assets/body/compagnon_img_0003.jpg";
import imgBody4 from "./assets/body/compagnon_img_0004.jpg";

// images carousel
import imgCarousel1 from "./assets/carousel/compagnon_img_carousel_0001.jpg";
import imgCarousel2 from "./assets/carousel/compagnon_img_carousel_0002.jpg";
import imgCarousel3 from "./assets/carousel/compagnon_img_carousel_0003.jpg";
import imgCarousel4 from "./assets/carousel/compagnon_img_carousel_0004.jpg";

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

const DVCompagnon = () => {
  
	const isFr = false;
	return (
		<>
			<Section>
				<Chapo>
					{
						isFr
							? "Nous avons imaginÃ© une application simple, pratique, ludique, pour comprendre et maÃ®triser la consommation Ã©lectrique de son domicile. Compagnon s'adresse au grand public, et entend dÃ©montrer comment de meilleures interfaces peuvent rÃ©concilier le grand public avec les donnÃ©es."
							: "We created a simple, practical and fun application to help the general public better understand and control energy consumption at home. Companion aims to demonstrate how better interfaces can change the publicâ€™s ideas about data."
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
							? "Ã‰conomiser les ressources Ã©nergÃ©tiques est un des dÃ©fis des smart cities, mettant les solutions de â€œsmart gridâ€ et de compteurs connectÃ©s sur le devant de la scÃ¨ne. MalgrÃ© les promesses Ã©conomiques et environnementales portÃ©es par ces technologies, les citoyens peinent Ã  sâ€™en saisir. Le sentiment que ces dispositifs sont trop compliquÃ©s, l'impression de ne pas Ãªtre la bonne personne pour rÃ©gler l'Ã©lectricitÃ© chez soi, ou tout simplement la peur de tout dÃ©rÃ©gler\u00A0: les retours d'utilisateurs laissent penser que les interfaces actuelles ce ces nouvelles technologies doivent Ãªtre amÃ©liorÃ©es."
							: "Saving energy is one of the key challenges facing smart cities, with the solutions like smart grids and connected meters now center stage. However, citizens are struggling to take advantage of the economic and environmental benefits that these technologies offer. Stumbling blocks include fears of disruption, misconceptions about devices being too complicated, and problems convincing individuals that they are the â€œrightâ€ person to regulate the electricity supply at home. This feedback suggests that interfaces on these new technologies need to be improved."
					}
				</Paragraph1>
			</Section>
			<Section>
				<SectionImage>
					<Img src={imgBody4} />
				</SectionImage>
				<Section>
					<ImgLegend>
						{
							isFr
								? "L'application fournit des incitations concrÃ¨tes via des conseils personnalisÃ©s."
								: "The app provides concrete incentives via personalized advice."
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
							? "Compagnon est conÃ§u pour se brancher sur les donnÃ©es des compteurs intelligents, comme Linky. Ces donnÃ©es ne sont aujourd'hui pas suffisamment ouvertes pour autoriser la connexion d'une telle application. Compagnon est avant tout un projet prospectif, militant pour rendre possibles des usages des donnÃ©es Ã©lectriques plus centrÃ©s sur les citoyens."
							: "Companion is designed to connect to data from smart meters, such as Linky, which is used in France. This data, however, is not currently open enough to facilitate a connection in this way. Companion is a forward-looking project thatâ€™s working to make the use of electricity data more focused on citizens."
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
								? "L'application aide Ã  contextualiser les donnÃ©es via la comparaison Ã  son historique, ou Ã  d'autres logements similaires."
								: "The app helps to contextualize the data by comparing it to older data, or to other similar dwellings."
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
							? "Nous avons cherchÃ© Ã  rÃ©pondre Ã  trois enjeux :"
							: "We sought to address three challenges."
					}
				</Paragraph1>
				<Paragraph1>
					{
						isFr
							? "La pÃ©dagogie d'abord\u00A0: aider les citoyens Ã  comprendre comment amÃ©liorer leur consommation Ã©nergÃ©tique."
							: "Firstly, education: helping citizens to understand how they can improve their own energy consumption."
					}
				</Paragraph1>
				<Paragraph1>
					{
						isFr
							? "Lâ€™attractivitÃ© ensuite\u00A0: leur donner envie dâ€™interagir avec ces nouvelles technologies et de dÃ©couvrir de nouveaux usages."
							: "Secondly, attractiveness: citizens need to want to interact with these new technologies and discover new uses."
					}
				</Paragraph1>
				<Paragraph1>
					{
						isFr
							? "La confiance enfin\u00A0: les mettre en capacitÃ© dâ€™adopter avec sÃ©rÃ©nitÃ© de nouveaux usages des donnÃ©es domestiques."
							: "Finally, trust: empowering citizens to embraceâ€”with peace of mindâ€”new ways of using domestic data."
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
								? "Nous utilisons le levier de la gamification avec un systÃ¨me de badges, et de comparaison des quartiers de la ville."
								: "We also use gaming principles with a system of badges, and allow users to compare data from different areas of the town or city."
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
							? "Lâ€™application Compagnon montre Ã  lâ€™utilisateur la consommation de son foyer, lui donne un rÃ©capitulatif quotidien ou mensuel, et lui permet de filtrer par appareil Ã©lectrique. Elle lui permet, par exemple, de prendre conscience que lave-linge et four sont toujours actifs en mÃªme temps, ou dâ€™anticiper quelles Ã©conomies pourraient Ãªtre faites en dÃ©calant lâ€™heure du lancement du lave-vaisselle."
							: "The Companion app shows the user their household consumption, provides a daily or monthly summary, and allows the data to be filtered by electrical device. It allows the user to, for example, realize that the washing machine and the oven are always active at the same time, or to predict what savings would result from delaying the start time of the dishwasher."
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
							? "Nous nous sommes inspirÃ©s des â€œnudges vertsâ€ (green nudges), une approche tirÃ©e de l'Ã©conomie comportementale visant Ã  favoriser des comportements socialement vertueux par lâ€™incitation, sans recourir Ã  la contrainte."
							: "We were inspired by â€˜green nudgesâ€™, an approach drawn from behavioral economics aimed at incentivizing socially responsible behavior without resorting to coercion."
					}
				</Paragraph1>
			</Section>
			<Section>
				<LongVideo uri='428091019' />
			</Section>
		</>
	);
};

const infosDVCompagnon = {
	component: DVCompagnon,
	client: "Confidential",
	label: "Companion",
	theme: {
		isDark: true,
		background: "#033838"
	},
	video: "426955466",
	results: "Cited in several books on good design practices.",
	chapo: "Demonstrate that a well-designed application can help the general public better manage their electricity consumption.",
	category: "Application",
	date: "2016 - 2 months",
	carousel: {
		isBig: false,
		pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
	},
	slug: "compagnon",
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

export default DVCompagnon;
export { infosDVCompagnon };
