import React from "react";


// images carousel
import imgCarousel1 from "./assets/carousel/swisscom_img_carousel_0001.jpg";
import imgCarousel2 from "./assets/carousel/swisscom_img_carousel_0002.jpg";
import imgCarousel3 from "./assets/carousel/swisscom_img_carousel_0003.jpg";
import imgCarousel4 from "./assets/carousel/swisscom_img_carousel_0004.jpg";

import {
	Chapo,
	SectionTitle,
	Section,
	ImgLegend
} from "components/PieceOfWork/Gallery/shared";
import { Paragraph1 } from "components/_ui/Paragraphs";
import GIFVideo from "components/PieceOfWork/GIFVideo";
import LongVideo from "components/PieceOfWork/LongVideo";

const SwisscomMobilityInsights = () => {
	const isFr = false;
	return (
		<>
			<Section>
				<Chapo>
					{
						isFr
							? "Nous avons rÃ©vÃ©lÃ© le potentiel des donnÃ©es de Mobility Insights pour aider Ã  prendre de meilleures dÃ©cisions. Les visualisations de donnÃ©es crÃ©Ã©es pour ce projet mettent en valeur non seulement la richesse et la qualitÃ© des donnÃ©es, mais aussi le respect de la vie privÃ©e attachÃ© Ã  leur traitement."
							: "We have unveiled the potential of Mobility Insightsâ€™ data to help make better decisions. The data visualizations created for this project not only highlight the richness and quality of the data, but also underscore its privacy."
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
							? "L'opÃ©rateur tÃ©lÃ©com Swisscom Ã©dite la plateforme Mobility Insights, une source de donnÃ©es trÃ¨s dÃ©taillÃ©es sur la mobilitÃ© en Suisse. Swisscom souhaitait faire mieux connaÃ®tre ces donnÃ©es et leur potentiel. Pour cela, leur simple mise Ã  disposition ne suffisait pas\u00A0: Swisscom voulait rendre perceptible et tangible la valeur apportÃ©e par ces donnÃ©es, en l'illustrant par des cas d'usage."
							: "Telecom operator Swisscom is the publisher of the Mobility Insights platform, a source of highly detailed data on mobility in Switzerland. Swisscom wanted to raise awareness about this data and its potential. To achieve this, making the data available wasnâ€™t enough: Swisscom wanted to make the value of this data more evident and tangible, by showing exciting use cases."
					}
				</Paragraph1>
			</Section>
			<Section>
				<GIFVideo uri='429915452' />
				<ImgLegend>
					{
						isFr
							? "Visualisation de l'affluence selon les diffÃ©rents mode de transport."
							: "Visualization of traffic flow for various modes of transport."
					}
				</ImgLegend>
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-data
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Les donnÃ©es de la plateforme Mobility Insights sont collectÃ©es Ã  partir des informations du rÃ©seau de tÃ©lÃ©phones mobiles de Swisscom. Elles sont ensuite agrÃ©gÃ©es et anonymisÃ©es pour garantir le respect de la vie privÃ©e."
							: "The Mobility Insights platformâ€™s data is collected using information from the Swisscom mobile phone network. This data is then aggregated and anonymized to guarantee privacy."
					}
				</Paragraph1>
			</Section>
			<Section>
				<GIFVideo uri='429915476' />
			</Section>
			<Section>
				<SectionTitle>
          FormattedMessage: project-body-method
				</SectionTitle>
				<Paragraph1>
					{
						isFr
							? "Nous avons privilÃ©giÃ© le prototypage rapide. Une premiÃ¨re phase d'exploration des donnÃ©es et de discussion avec Swisscom nous a permis d'identifier des cas d'usage prometteurs. Puis nous avons mis en scÃ¨ne chaque cas d'usage Ã  travers un mode de visualisation des donnÃ©es propice Ã  raconter une histoire. Nous avons travaillÃ© de faÃ§on agile, en affinant semaine aprÃ¨s semaine les visualisations produites."
							: "We have opted for rapid prototyping. An initial phase of data exploration and discussion with Swisscom helped us identify interesting use cases. Each use case was embodied by a data visualization mode with compelling storytelling. We worked in an agile way, refining our visualizations week after week."
					}
				</Paragraph1>
			</Section>
			<Section>
				<GIFVideo uri='429915490' />
				<ImgLegend>
					{
						isFr
							? "Visualisation de la densitÃ© de population Ã  Zurich."
							: "Visualization of the population density in Zurich."
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
							? "Nous avons travaillÃ© avec des exports de donnÃ©es trÃ¨s volumineux du dÃ©but Ã  la fin du projet. GrÃ¢ce Ã  cela, nous avons conÃ§u des modes de visualisation adaptÃ©s au grand volume des donnÃ©es et Ã  leurs particularitÃ©s. Nous avons dÃ©veloppÃ© des prototypes web pour chacun de ces modes de visualisation. Enfin, nous avons automatisÃ© un export vidÃ©o de ces visualisations pour rÃ©pondre aux besoins de communication du projet."
							: "We worked with massive data exports from start to finish. This allowed us to design visualization modes that were ideally suited for such a large volume of data and their specificities. We developed web prototypes for each of these visualization modes. Finally, we automated a video export of these visualizations to meet the projectâ€™s communication requirements."
					}
				</Paragraph1>
			</Section>
			<Section>
				<GIFVideo uri='429915513' />
				<ImgLegend>
					{
						isFr
							? "Visualisation des flux de population lors du Montreux Jazz Festival."
							: "Visualization of population flows during the Montreux Jazz Festival."
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
							? "Chaque mode de visualisation a Ã©tÃ© conÃ§u et dÃ©veloppÃ© spÃ©cifiquement pour rÃ©pondre Ã  une interrogation d'un mÃ©tier prÃ©cis\u00A0: urbaniste, investisseur, logisticien, transporteur, etc. Au delÃ  des usages mÃ©tiers, ces visualisations permettent aussi de rassurer sur le respect de la vie privÃ©e car elles montrent comment les donnÃ©es sont agrÃ©gÃ©es avant d'Ãªtre analysÃ©es."
							: "Each visualization mode has been designed and developed to answer one question about a specific trade: urban planner, investor, logistician, carrier, etc. Beyond their business applications, these visualizations also help reassure people on the subject of privacy, as they reveal how the data is aggregated before being processed."
					}
				</Paragraph1>
			</Section>
			<Section marginBottom='spacingXL'>
				<LongVideo uri='428085646' />
			</Section>
		</>
	);
};

const infosSwisscomMobilityInsights = {
	component: SwisscomMobilityInsights,
	client: "Swisscom Mobility Insights",
	label: "How Switzerland moves",
	theme: {
		isDark: true,
		background: "#010B46"
	},
	video: "427641215",
	results: "The visualization is at the heart of the Mobility Insights showcase website.",
	chapo: "Conveying the value of Swisscomâ€™s mobility data to better understand urban mobility.",
	category: "Prototype",
	date: "2019 - 4 months",
	src: {
		url: "https://www.swisscom.ch/fr/business/enterprise/offre/enterprise-mobile/mobility-insights.html",
		label: "https://www.swisscom.ch/fr/busin..."
	},
	carousel: {
		isBig: false,
		pics: [imgCarousel1, imgCarousel2, imgCarousel3, imgCarousel4]
	},
	slug: "swisscom-mobility-insights",
	isOnHome: false,
	serviceId: "data-driven-strategy",
	galleryPics: []
};

export default SwisscomMobilityInsights;
export { infosSwisscomMobilityInsights };
