import React from "react";
import { useParams } from "react-router-dom";


// images body
import imgBody1 from "./assets/body/odsee_img_0001.jpg";
import imgBody2 from "./assets/body/odsee_img_0002.jpg";
import imgBody3 from "./assets/body/odsee_img_0003.jpg";
import imgBody4 from "./assets/body/odsee_img_0004.jpg";

// images carousel
import imgCarousel1 from "./assets/carousel/odsee_img_carousel_0001.jpg";
import imgCarousel2 from "./assets/carousel/odsee_img_carousel_0002.jpg";
import imgCarousel3 from "./assets/carousel/odsee_img_carousel_0003.jpg";

import {
	Chapo,
	SectionTitle,
	Section,
	SectionImage,
	Img,
	ImgLegend
} from "components/PieceOfWork/Gallery/shared";

import { Paragraph1 } from "components/_ui/Paragraphs";
import GIFVideo from "components/PieceOfWork/GIFVideo";

const MetrolabODsee = () => {
  
	const isFr = false;
	return (
		<>
			<Section>
				<Chapo>
					{
						isFr
							? "En 2016, nous avons dÃ©veloppÃ© avec le groupe RATP et lâ€™IFSTTAR lâ€™outil ODsee, pour modÃ©liser et visualiser les dÃ©placement des utilisateurs des transports en commun, Ã  partir de grands volumes de donnÃ©es origine-destination (OD). ODsee fournit aux opÃ©rateurs de transport de lâ€™information utile pour mieux mettre en adÃ©quation leurs offres avec la demande de mobilitÃ©."
							: "In 2016, we worked with the RATP group and IFSTTAR to develop the ODsee tool. ODsee uses large volumes of origin-destination (OD) data to visualize the movements of commuters. It provides transport operators with useful information to better match their services to mobility demand."
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
							? "Le groupe RATP cherchait Ã  amÃ©liorer les mÃ©thodes de construction des offres de transports en commun en exploitant de faÃ§on plus riche les larges bases de donnÃ©es OD (origine-destination des voyageurs) Ã  sa disposition. NÃ©anmoins, le volume de ces donnÃ©es les rend impossibles Ã  analyser sans un outil dÃ©diÃ© et performant. En 2016, il nâ€™existait pas dâ€™outil sur Ã©tagÃ¨re pour traiter des volumes de donnÃ©es aussi importants tout en rÃ©pondant aux enjeux spÃ©cifiques au monde du transport en commun. Le groupe RATP a dÃ©cidÃ© de remÃ©dier Ã  ce manque en initiant la rÃ©alisation de lâ€™outil ODsee avec Dataveyes et l'IFSTTAR."
							: "The RATP group wanted to make better use of their large OD (commuter origin-destination) databases in order to improve their methods of devising public transport services. However, the volume of this data made it impossible to analyze without a dedicated and efficient tool. In 2016, there was no â€˜off-the-shelfâ€™ tool that could process such large volumes of data while also meeting the specific challenges of the public transport world. To address this, the RATP group worked with Dataveyes and IFSTTAR to create the ODsee tool."
					}
				</Paragraph1>
			</Section>
			<Section>
				<Section>
					<GIFVideo hasBorder uri='429912531' />
				</Section>
				<Section>
					<ImgLegend>
						{
							isFr
								? "Nous avons optimisÃ© l'expÃ©rience utilisateur pour maximiser la dÃ©couvrabilitÃ© de lâ€™information et donner aux utilisateurs une grande souplesse dans lâ€™exploration des donnÃ©es."
								: "We optimized the user experience to make it more possible to discover new information and to give users increased flexibility in terms of data mining."
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
							? "Les donnÃ©es OD (pour  â€œOrigine-Destinationâ€) dÃ©crivent combien de personnes ont rÃ©alisÃ© un trajet entre une station dâ€™origine dâ€™un rÃ©seau de transport (O) et une station de destination (D), et ce pour chaque couple entre deux stations, pour des pÃ©riodes de lâ€™ordre de quinze minutes ou une heure, sur plusieurs annÃ©es dâ€™historique. Ces jeux de donnÃ©es reprÃ©sentent plusieurs dizaines de millions de lignes par an. Ils sont susceptibles dâ€™Ãªtre collectÃ©s en continu dans les rÃ©seaux de transports oÃ¹ les passagers valident leurs entrÃ©es et leurs sorties avec des cartes magnÃ©tiques. Enfin, pour Ãªtre correctement analysÃ©es, ces donnÃ©es ont Ã©tÃ© enrichies avec des donnÃ©es dÃ©crivant la structure du rÃ©seau, lâ€™offre existante de transport, ou les Ã©vÃ©nements significatifs dâ€™un calendrier."
							: "OD data describes how many people travel between an origin station (O) and a destination station (D) on a transport network. It also describes how many people travelled between a given pair of stations every 15 minutes over a period of several years. These datasets represent several tens of millions of lines per year. They are usually collected continuously on transport networks where passengers validate their entries and exits with magnetic cards. To be properly analyzed, this data was enriched with data that describes the structure of the network, existing transport services, or significant public events."
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
							? "Nous avons analysÃ© les informations nouvelles apportÃ©es par les donnÃ©es OD, puis nous avons identifiÃ© de quelles faÃ§ons ces informations Ã©taient utiles aux mÃ©tiers dâ€™un opÃ©rateur de transports en commun. Pour cela, nous avons rÃ©alisÃ© des interviews avec des reprÃ©sentants de diffÃ©rents mÃ©tier. Nous en avons extrait des problÃ¨mes dâ€™information et des tÃ¢ches pouvant Ãªtre facilitÃ©es par un meilleur usage des donnÃ©es OD. Nous avons ensuite menÃ© des ateliers de travail pour hiÃ©rarchiser les fonctionnalitÃ©s et les informations, ce qui nous a permis d'aboutir Ã  des parcours dâ€™utilisation cohÃ©rents au regard des habitudes de travail des utilisateurs ciblÃ©s. Ã€ partir dâ€™un premier prototype, nous avons rÃ©alisÃ© des tests utilisateurs pour vÃ©rifier la bonne prise en main de l'outil."
							: "We analyzed new information from the OD data and identified ways in which this information was useful for public transport operators. We carried out interviews with representatives of different departments and also studied how improved use of OD data could help solve problems or make certain tasks easier. We then conducted workshops to prioritize features and information, which allowed us to achieve consistent user journeys in terms of the work habits of targeted users. From the first prototype, we carried out tests to ensure users were engaging with the tool correctly."
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
								? "Nous avons crÃ©Ã© de nouveaux modes de visualisation de donnÃ©es, en particulier une nouvelle faÃ§on de construire des serpents de charge, mieux adaptÃ©e aux codes de lectures du monde du transport. Nous visualisons la charge -\u00A0le nombre de voyageurs\u00A0- entre les stations, plutÃ´t que sur chaque station, pour reflÃ©ter les flux de voyageurs."
								: "We created new methods of data visualization, in particular a new way of constructing load capacity graphs that are better adapted to the transport world. We visualized the loadâ€”the number of travelersâ€”moving between stations rather than the number of people actually at each station to better reflect passenger flows."
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
							? "Nous avons conÃ§u et dÃ©veloppÃ© l'outil ODsee pour qu'il soit utilisable par tous les mÃ©tiers de lâ€™exploitation et de la planification des rÃ©seaux de transport, quel que soit leur niveau de maÃ®trise technique. Son interface visuelle et ergonomique, ainsi que le recours Ã  la visualisation de donnÃ©es, rendent aisÃ© lâ€™accÃ¨s aux donnÃ©es dans toute leur profondeur, et favorise la dÃ©couverte dâ€™informations nouvelles."
							: "We designed and developed the ODsee tool for use by all levels of staff involved in the operation and planning of transport networks regardless of their technical skills. The visual and user-friendly interface, along with the data visualization itself, makes accessing the data in all its depth easier, and provides fresh insights into new information."
					}
				</Paragraph1>
			</Section>
			<Section>
				<Section>
					<SectionTitle>
            FormattedMessage: project-body-main-point
					</SectionTitle>
					<Paragraph1>
						{
							isFr
								? "En dÃ©crivant finement la demande de mobilitÃ©, l'outil ODsee fournit de lâ€™information stratÃ©gique aux opÃ©rateurs de transports en commun et les aide Ã  mieux sâ€™adapter Ã  la demande. En plus dâ€™amÃ©liorer la comprÃ©hension des territoires et des modes de vies, l'outil sert aussi Ã  prendre des dÃ©cisions dâ€™investissement et dâ€™amÃ©nagement du territoire."
								: "The ODsee tool describes in great detail the demand for mobility, providing strategic information to public transport operators to help them adapt their services to demand. In addition to improving the understanding of transport areas and commuter lifestyles, the tool is also used to make investment and spatial planning decisions."
						}
					</Paragraph1>
				</Section>
				<SectionImage>
					<Img hasBorder src={imgBody2} />
				</SectionImage>
				<Section>
					<ImgLegend>
						{
							isFr
								? "Nous avons conÃ§u ODsee pour rÃ©pondre aux lourdes contraintes posÃ©es par le grand volume de donnÃ©es\u00A0: l'outil repose sur une architecture multi-serveurs avec gestion de tÃ¢che asynchrone de faÃ§on Ã  assurer lâ€™Ã©volutivitÃ© et la performance de lâ€™outil."
								: "We designed ODsee to respond to the heavy constraints that large volumes of data impose. The tool is based on multi-server architecture with asynchronous task management to safeguard scalability and performance."
						}
					</ImgLegend>
				</Section>
				<SectionImage marginBottom='spacingM'>
					<Img hasBorder src={imgBody3} />
				</SectionImage>
				<SectionImage marginBottom='spacingXL'>
					<Img hasBorder src={imgBody4} />
				</SectionImage>
			</Section>
		</>
	);
};

const infosMetrolabODsee = {
	component: MetrolabODsee,
	client: "Groupe RATP",
	label: "ODSee",
	theme: {
		isDark: true,
		background: "#0F1F25"
	},
	video: "427804567",
	results: "ODsee was used by RATP Dev in Casablanca, Morocco, to optimize transport services during certain periods, such as Ramadan.",
	chapo: "Model and visualize millions of public transport journeys to better match transport services with demand.",
	category: "Tool",
	date: "2016 - 6 months",
	carousel: {
		isBig: false,
		pics: [imgCarousel1, imgCarousel2, imgCarousel3]
	},
	slug: "metrolab-odsee",
	isOnHome: false,
	serviceId: "user-research",
	galleryPics: []
};

export default MetrolabODsee;
export { infosMetrolabODsee };
