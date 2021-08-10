import React from "react";
import { useParams } from "react-router-dom";


// images body
import imgBody1 from "./assets/body/saint-gobain_img_0001.jpg";
import imgBody2 from "./assets/body/saint-gobain_img_0002.jpg";
import imgBody3 from "./assets/body/saint-gobain_img_0003.jpg";

// images carousel
import imgCarousel1 from "./assets/carousel/saintgobain_img_carousel_0001.jpg";
import imgCarousel2 from "./assets/carousel/saintgobain_img_carousel_0002.jpg";
import imgCarousel3 from "./assets/carousel/saintgobain_img_carousel_0003.jpg";

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

const SaintGobainAnalyzer = () => {
  
	const isFr = false;
	return (
		<>
			<Section>
				<Chapo>
					{
						isFr
							? "Saint-Gobain Research Paris nous a confiÃ© la rÃ©alisation dâ€™un prototype mettant en avant le confort thermique procurÃ© par ses isolations de toiture, dont il cherchait alors Ã  amÃ©liorer la notoriÃ©tÃ©. Nous avons alliÃ© notre savoir-faire en design dâ€™interactions avec nos compÃ©tences en 3D et en algorithmique, pour livrer une application de visualisation de donnÃ©es utile, Ã©clairante et novatrice."
							: "Saint-Gobain Research Paris entrusted us with the creation of a prototype highlighting the thermal comfort provided by its roof insulation. It was part of an initiative to improve brand awareness for the product. We combined our know-how in interaction design with our 3D and algorithmic skills to deliver a useful, enlightening and innovative data visualization application."
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
							? "Le confort thermique est une notion difficile Ã  visualiser, car multifactorielle et subjective. Cette sensation dÃ©pend de la tempÃ©rature ressentie, du vent, de lâ€™orientation, et mÃªme de la physiologie et psychologie des personnes. Saint-Gobain nous a mis au dÃ©fi de trouver une reprÃ©sentation visuelle novatrice et convaincante du confort thermique, capable de restituer ces nombreux paramÃ¨tres."
							: "Thermal comfort is a difficult concept to visualize because it is multifactorial and subjective. It is ordinarily a feeling that depends on the temperature felt, the wind, the orientation, and even the physiology and psychology of the individual. Saint-Gobain challenged us to find an innovative and convincing visual representation of thermal comfort that was capable of conveying these parameters."
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
							? "Saint-Gobain Research Paris nous a fourni des donnÃ©es de simulation pour une maison dâ€™habitat social au BrÃ©sil, oÃ¹ Saint-Gobain commercialise des matÃ©riaux isolants. Chacune des quatre piÃ¨ces de la maison Ã©tait dÃ©coupÃ©e en 125\u00A0petits volumes, chacun associÃ© Ã  des tempÃ©ratures ressenties. Des paramÃ¨tres extÃ©rieurs complÃ©taient ces donnÃ©es : date, heure, tempÃ©rature extÃ©rieure, orientation de la maison, matÃ©riaux isolants, etc."
							: "Saint-Gobain Research Paris provided us with simulation data for a social housing property in Brazil, where the company markets insulating materials. Each of the four rooms in the house was cut into 125\u00A0small volumes, each associated with perceived temperatures. External parameters then supplemented this data: date, time, external temperature, orientation of the house, insulating materials, etc."
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
							? "La visualisation de donnÃ©es thermiques est un champ de recherche avec une littÃ©rature fournie. Dans nos premiers tests de visualisations, nous cherchions des solutions  radicalement originales, mais cela nâ€™Ã©tait pas convainquant. Ainsi, plutÃ´t que de repartir dâ€™une feuille blanche, nous avons rÃ©alisÃ© que le confort thermique pouvait Ãªtre apprÃ©hendÃ© grÃ¢ce Ã  des interactions riches, plus que grÃ¢ce Ã  une visualisation sophistiquÃ©e. Nous avons cherchÃ© Ã  rendre le  feedback aprÃ¨s les interactions trÃ¨s rapide afin dâ€™inciter les utilisateurs Ã  jouer avec lâ€™application."
							: "Thermal data visualization is a well-researched field. In our first visualization tests, we were looking for radically different solutions, but these did not prove convincing. So, rather than starting from scratch, we realized that thermal comfort could be understood through rich interactions, rather than through sophisticated visualization. We tried to ensure interaction feedback was fast in order to encourage users to play with the app."
					}
				</Paragraph1>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-solution
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Nous avons combinÃ© les jeux de donnÃ©es pour faire Ã©merger des corrÃ©lations entre les facteurs extÃ©rieurs, ou le type dâ€™isolant, et la tempÃ©rature ressentie. Ainsi, les utilisateurs visualisent lâ€™Ã©volution du confort dans la maison Ã  mesure quâ€™ils manipulent les nombreux interacteurs du prototype. Afin dâ€™incarner visuellement la tempÃ©rature ressentie au regard de des diffÃ©rents facteurs extÃ©rieurs, nous avons mobilisÃ© des algorithmes de distribution spatiale et de proximitÃ©."
							: "We combined the datasets to show correlations between external factors, or the type of insulation, and the temperature felt. Thus, users visualize the evolution of comfort in the home as they manipulate the various parameters of the prototype. In order to visually embody the temperature felt with regard to various external factors, we used spatial distribution and proximity algorithms."
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
								? "Le centre de lâ€™Ã©cran montre la comparaison cÃ´te-Ã -cÃ´te de la performance thermique de deux toitures avec des matÃ©riaux dâ€™isolation diffÃ©rents."
								: "The center of the screen shows a side-by-side comparison of the thermal performance of two roofs with different insulation materials."
						}
					</ImgLegend>
				</Section>
				<SectionImage>
					<Img hasBorder src={imgBody2} />
				</SectionImage>
				<Section>
					<ImgLegend>
						{
							isFr
								? "Un grand nombre dâ€™interacteurs permettent de manipuler des paramÃ¨tres temporels, spatiaux, mÃ©tÃ©orologiques, et de ressenti, avec une grande prÃ©cision et cÃ©lÃ©ritÃ©."
								: "A large number of interactors make it possible to manipulate temporal, spatial, meteorological, and feeling parameters, with great precision and speed."
						}
					</ImgLegend>
				</Section>
				<SectionImage>
					<Img hasBorder src={imgBody3} />
				</SectionImage>
				<Section>
					<ImgLegend>
						{
							isFr
								? "GrÃ¢ce aux interactions riches et immÃ©diates, le confort thermique peut Ãªtre ressenti et comparÃ©, devenant ainsi un jeu."
								: "Thanks to the rich and immediate interactions, thermal comfort can be felt and compared, thus becoming a game."
						}
					</ImgLegend>
				</Section>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-main-point
				</SectionTitle>
				<Section>
					<Paragraph1>
						{
							isFr
								? "Au centre du prototype figurent deux habitats cÃ´te-Ã -cÃ´te, montrant la diffÃ©rence de performance entre deux toitures chacune isolÃ©e avec un matÃ©riau diffÃ©rent. Notre prototype permet de manipuler plusieurs dimensions complÃ©mentaires sur ces habitats :"
								: "At the heart of the prototype are two houses side by side, showing the difference in performance between two roofs, each insulated with a different material. Our prototype allows users to manipulate several complementary dimensions on these houses."
						}
					</Paragraph1>
				</Section>
				<Section>
					<Paragraph1>
						{
							isFr
								? "PremiÃ¨re dimension, le temps\u00A0: lâ€™utilisateur peut choisir une saison, un mois, une heure de la journÃ©e, et mÃªme les jours les plus reprÃ©sentatifs dâ€™une saison dans lâ€™annÃ©e."
								: "The first dimension is time. The user can choose a season, a month, an hour of the day, or even the most representative days of a season in the year."
						}
					</Paragraph1>
					<Paragraph1>
						{
							isFr
								? "Ensuite, lâ€™espace\u00A0: lâ€™utilisateur manipule un plan 3d simplifiÃ© de la maison, montrant les murs, portes et fenÃªtres. Chaque piÃ¨ce de la maison change de couleur et de particules Ã  mesure que lâ€™utilisateur se dÃ©place dans le temps ou modifie les paramÃ¨tres extÃ©rieurs."
								: "The next dimension is space. The user manipulates a simplified 3D plan of the house, showing the walls, doors and windows. Each room in the house changes color and particles as the user moves through time or changes the exterior settings."
						}
					</Paragraph1>
					<Paragraph1>
						{
							isFr
								? "Enfin, les paramÃ¨tres externes\u00A0: lâ€™utilisateur peut modifier lâ€™orientation de la maison, le degrÃ© dâ€™humiditÃ© ou de sÃ©cheresse, le type de toiture, et mÃªme exprimer sa sensibilitÃ© en dÃ©finissant une fourchette de confort autour de la tempÃ©rature idÃ©ale."
								: "Finally there are the external parameters. The user can modify the orientation of the house, the degree of humidity or dryness, the type of roof, and even experiment with sensitivity by defining different ranges of comfort around the ideal temperature."
						}
					</Paragraph1>
				</Section>
				<Section>
					<Paragraph1>
						{
							isFr
								? "Les interactions ont un effet simultanÃ© sur les deux habitats comparÃ©s dans lâ€™application\u00A0: les rotations et translations dans la fenÃªtre 3D sont synchronisÃ©es. Cela simplifie les interactions et dÃ©livre lâ€™utilisateur dâ€™une charge cognitive qui pourrait rÃ©sulter de la comparaison visuelle de deux objets dissemblables."
								: "All these interactions have a simultaneous effect on the two homes compared in the application: the rotations and translations in the 3D window are synchronized. This simplifies interactions and eases the cognitive load of having to make visual comparisons of two dissimilar objects."
						}
					</Paragraph1>
				</Section>
			</Section>
			<Section marginBottom='spacingXL'>
				<LongVideo uri='428084394' />
			</Section>
		</>
	);
};

const infosSaintGobainAnalyzer = {
	component: SaintGobainAnalyzer,
	client: "Saint-Gobain R&D",
	label: "Thermal Comfort Analyzer",
	theme: {
		isDark: true,
		background: "#1C0B22"
	},
	video: "427639516",
	results: "Used by Saint-Gobain to advance research on the representation of thermal comfort as part of their Multi-Comfort\u00A0Buildings initiative.",
	chapo: "Make people feel the thermal comfort of a home from physical simulation data.",
	quote: "The Dataveyes team listened to our needs and identified our challenge successfully. They shined a new light on the problem, by applying a very professional process and remaining agile during the applicationâ€™s development.",
	author: {
		name: "Thierry Voillequin",
		position: "Virtual Reality Director, chez Saint-Gobain Research Paris",
	},
	category: "Prototype",
	date: "2018 - 3 months",
	carousel: {
		isBig: false,
		pics: [imgCarousel1, imgCarousel2, imgCarousel3]
	},
	slug: "saint-gobain-thermal-comfort-analyzer",
	isOnHome: false,
	serviceId: "data-storytelling",
	galleryPics: []
};

export default SaintGobainAnalyzer;
export { infosSaintGobainAnalyzer };
