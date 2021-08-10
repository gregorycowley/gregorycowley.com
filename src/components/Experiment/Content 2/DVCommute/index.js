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

// images gallery
import imgGallery1 from "./assets/gallery/commute_gallery_0001.jpg";
import imgGallery2 from "./assets/gallery/commute_gallery_0002.jpg";
import imgGallery3 from "./assets/gallery/commute_gallery_0003.jpg";

// images body
import imgBody1 from "./assets/body/commute_img_0001.jpg";
import imgBody2 from "./assets/body/commute_img_0002.jpg";
import imgBody3 from "./assets/body/commute_img_0003.jpg";
import imgBody4 from "./assets/body/commute_img_0004.jpg";
import imgBody5 from "./assets/body/commute_img_0005.jpg";

// images carousel
import imgCarousel1 from "./assets/carousel/commute_img_carousel_0001.jpg";
import imgCarousel2 from "./assets/carousel/commute_img_carousel_0002.jpg";
import imgCarousel3 from "./assets/carousel/commute_img_carousel_0003.jpg";
import imgCarousel4 from "./assets/carousel/commute_img_carousel_0004.jpg";

const DVCommute = ({ isDarkTheme }) => {
  
	const isFr = false;
	return (
		<>
			<Section>
				<Chapo>
					{
						isFr
							? "Commute est une expÃ©rience immersive, sonore et interactive pour explorer lâ€™empreinte sonore dâ€™une ligne de transport en commun."
							: "Commute is an immersive, interactive audio experience that explores the sound footprint of a public transportation line."
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
							? "Commute naquit d'une ambition\u00A0: Ã©veiller les consciences sur la pollution sonore subie en ville. Pour cela, nous voulions donner Ã  voir et Ã  entendre les bruits qui nous entourent au quotidien, et qui jouent sur notre fatigue comme notre santÃ©."
							: "The goal of Commute was to raise awareness of noise pollution in the city. We wanted to see and hear the noises that surround us each day  - noises that impact on our health and energy levels."
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
								? "Le mode de visualisation Wave rejoue un trajet en mÃ©tro, Ã  travers les formes, les couleurs et les sons."
								: "The spiral view mode replays a metro journey through shapes, colors and sounds."
						}
					</ImgLegend>
				</Section>
				<Section>
					<GIFVideo uri='429918423' />
				</Section>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-data
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "ArmÃ©s d'un sonomÃ¨tre et d'un enregistreur audio, nous avons parcouru de part en part toutes les lignes de mÃ©tro de Paris pour constituer une premiÃ¨re base de donnÃ©es sonore du transport parisien."
							: "Armed with a sound level meter and an audio recorder, we rode every Paris metro line to build the first sound database of the Paris transport system."
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
							? "Commute combine le visuel Ã  lâ€™audio dâ€™une maniÃ¨re poÃ©tique\u00A0: l'application dÃ©compose le bruit enregistrÃ© en frÃ©quences et en intensitÃ©s, puis les transforme en motifs visuels et sonores esthÃ©tiques. L'application propose ainsi de visualiser et \"d'Ã©couter\" les donnÃ©es dâ€™un trajet quotidien en mÃ©tro."
							: "Commute combines vision and audio in a poetic way: the app breaks recorded noise down into frequencies and intensities, and then transforms them into beautiful visual and sound patterns. The app therefore provides the opportunity to both listen to and watch data that relates to a daily metro journey."
					}
				</Paragraph1>
				<Paragraph1>
					{
						isFr
							? "Avec ce projet, nous avons expÃ©rimentÃ© la sonification de donnÃ©es. Dans Commute, les donnÃ©es gÃ©nÃ¨rent une mÃ©lodie harmonieuse grÃ¢ce Ã  un algorithme de correspondance entre les dÃ©cibels rÃ©coltÃ©s et des frÃ©quences harmoniques dans un systÃ¨me pentatonique."
							: "Throughout the project, we experimented with data sonication. In Commute, the data generates a harmonious melody thanks to an algorithm that matches the decibels collected with the harmonic frequencies in a pentatonic scale."
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
								? "Le mode de visualisation en spirale met l'accent sur la fatigue endurÃ©e par les voyageurs lors d'un trajet en mÃ©tro\u00A0: chaque minute passÃ©e au delÃ  de 80\u00A0dB dans la journÃ©e nuit Ã  notre santÃ©."
								: "The circular viewing mode highlights the impact of each metro trip on travelers: every minute spent above 80 dB in the day harms our health."
						}
					</ImgLegend>
				</Section>
				<Section>
					<GIFVideo uri='429918445' />
				</Section>
				<SectionImage marginBottom='spacingM'>
					<Img src={imgBody3} />
				</SectionImage>
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
							? "Commute fait le pari que lâ€™expÃ©rience immersive, lâ€™interactivitÃ© et le son peuvent redonner prise aux habitants de grandes villes sur leur quotidien."
							: "With Commute, we hope that the immersive experience, the interactivity and the sounds can give something back each day to people living in large cities."
					}
				</Paragraph1>
			</Section>
			<Section>
				<SectionImage>
					<Img src={imgBody5} />
				</SectionImage>
				<Section>
					<ImgLegend>
						{
							isFr
								? "En comparant l'empreinte sonore des diffÃ©rentes lignes de mÃ©tro, les utilisateurs peuvent mieux comprendre les causes de la pollution sonore."
								: "By comparing the noise footprint of different metro lines, users can better understand the causes of noise pollution."
						}
					</ImgLegend>
				</Section>
			</Section>
			<Section>
				<LongVideo uri='428090454' />
			</Section>
		</>
	);
};

const infosDVCommute = {
	component: DVCommute,
	label: {
		fr: "Commute",
		en: "Commute"
	},
	theme: {
		isDark: true
	},
	video: "426957099",
	date: {
		fr: "2018",
		en: "2018"
	},
	chapo: {
		fr: "Attirer l'attention du grand public sur la pollution sonore dans le mÃ©tro, grÃ¢ce Ã  de nouveaux modes de reprÃ©sentation des donnÃ©es.",
		en: "Use new ways of presenting data to raise awareness among the general public about noise pollution in the metro."
	},
	results: {
		fr: "Prix Silver Kantar Information is Beautiful Awards 2019.",
		en: "Silver Kantar Information is Beautiful Awards 2019."
	},
	src: {
		url: "https://commute.dataveyes.com  ",
		label: "commute.dataveyes.com  "
	},
	category: {
		fr: "Prototype",
		en: "Prototype"
	},
	carousel: {
		isBig: true,
		pics: [imgCarousel4, imgCarousel3, imgCarousel1, imgCarousel2]
	},
	slug: "commute",
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

export default DVCommute;
export { infosDVCommute };
