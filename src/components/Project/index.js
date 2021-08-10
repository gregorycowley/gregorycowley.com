import React from "react";
import { find, isEmpty } from "lodash";
import { useParams } from "react-router-dom";

import projects from "common/data/projects";
import services from "common/data/services";

import layout from "common/configs/layout";
import ROUTES from "common/routes";

import Infos from "components/PieceOfWork/Infos";
import ShortVideo from "components/PieceOfWork/ShortVideo";
import ProjectsNav from "components/PieceOfWork/ProjectsNav";
import ClientsOpinion from "components/PieceOfWork/ClientsOpinion";
import Gallery from "components/PieceOfWork/Gallery";
import { Metas, GridContainer, PageHeader, LinkToService } from "components";
import { RightColWithGutter } from "components/_layout/Layout/3Cols";

/*
<LayoutAlt>
				<div className="project">
					<Hero classname="project-hero" img={this.post.hero_image} />
					<div className="project-nav">
						{this.post.prevItem != this.post.slug && (
							<a href={`/projects/${this.post.prevItem}`}>Previous</a>
						)}
						{this.post.nextItem != this.post.slug && (
							<a href={`/projects/${this.post.nextItem}`}>Next</a>
						)}
					</div>
					<div className="project-header">
						<h1>{this.post.title}</h1>
						<h2>{this.post.subtitle}</h2>
						{description}
					</div>

					<ProjectDetails {...this.images}>
						<MarkdownBlocks blocks={this.blocks} /> 
					</ProjectDetails>
				</div>
			</LayoutAlt>
			*/


// console.log(projects);

// Common template for a single project page
const Project = ( props ) => {
	// const { projectSlug } = useParams();
	// const { messages } = useIntl()

	/*
{
    "title": "Safari U Website",
    "subtitle": "Website design and development for O'Reilly Media's educational customization service. ",
    "description": "O'Reilly Media's SafariU allowed teachers to create curriculums and generate content for their courses from O'Reilly's vast library of books and media. Students could purchase, download, and print course material. I created the website as well as an explainer video about how the course building process worked.",
    "date": "20190000",
    "slug": "sample",
    "author": "Gregory Cowley",
    "content": "\n\n#### PROTOTYPE\n\n# Better Driving Community\n\n> We visualized the routes taken by a community of 50,000 drivers equipped with a specialized device. This project helped Michelin demonstrate the value of their 'Better Driving Community', a community initiative for drivers eager to improve their driving habits. The visualization tool highlights how cities and manufacturers can use this data to improve road infrastructure.\n\n### Problem\n\nWith its department dedicated to data intelligence and its community of connected drivers, Michelin pursues an ambitious approach to data valorization in order to improve our roads. Until now, these efforts lacked visibility and remained a topic for experts. Michelin wanted to promote its approach to smart data through visual storytelling.\n\nThe animated map fast-forwards through all the trips made by the community over one year. The color encodes the speed.\n\n### Data\n\nMichelin runs the 'Better Driving Community': a community of more than 50,000 drivers who share their trips's data: speed, braking, position, etc. This data speaks as much about our mobility habits as it does about the state of our road network.\n\n### Method\n\nWe worked in very short, exploratory iterations: based on the data set containing several hundred thousand trips, we tested different data visualization approaches. Every week, we produced new tests and shared them with the Michelin team. Each new iteration allowed us to select the most meaningful tests, and explore them further.\n\nThe prototype allows filtering and visualizing all of the community's trips in 3D.\n\n### Solution\n\nWe made two interfaces. First, a video replaying an entire year of the community's trips, which Michelin uses to illustrate their conferences and trade shows. Second, a data exploration tool with filters and sorting functions to visually query various driving behaviors or types of trips, and visualize the results on a 3D map.\n\n![michelin_img_0003.31db0e61](michelin_img_0003.31db0e61.jpg)\n\nThrough aggregation, the visualization highlights trends in driving behaviors.\n\n### Highlight\n\nWe produced visualization modes that underscore both the extensive data granularity—individual trips—and the information that emerges when these trips are aggregated: driving behavior, congestion zones, urban mobility patterns, etc.\n\n![michelin_img_0004.bf965244](michelin_img_0004.bf965244.jpg)\n\n![michelin_img_0005.48c86085](michelin_img_0005.48c86085.jpg)\n\n![michelin_gallery_0001.72398c82](michelin_gallery_0001.72398c82.jpg)\n\n![michelin_gallery_0002.fc2eb2c1](michelin_gallery_0002.fc2eb2c1.jpg)\n\n![michelin_gallery_0003.05c5a187](michelin_gallery_0003.05c5a187.jpg)",
    "firm": "O'Reilly Media",
    "client": "O'Reilly Media",
    "status": "active",
    "hero_image": "projects/SafariU/SafariU-top-229",
    "left_images": [],
    "right_images": [
        {
            "src": "projects/SafariU/SafariU-right-233"
        },
        {
            "src": "projects/SafariU/SafariU-right-230"
        },
        {
            "src": "projects/SafariU/SafariU-right-231"
        },
        {
            "src": "projects/SafariU/SafariU-right-232"
        }
    ],
    "prevItem": "quicktime",
    "nextItem": "spcontrols"
}

	*/

	const project = props.post;
	// const project = find(projects, p => p.slug === projectSlug);
	const isDarkTheme = project.theme ? project.theme.isDark : layout.PROJECT.isHeaderDark;
	const service = find(services, s => s.id === project.serviceId);

	// console.log(service);
	// console.log(props)
	

	return (
		<>
			<Metas
				wording="project"
				values={{
					LABEL: project.title,
				}}
			/>
			<PageHeader
				isDarkTheme={isDarkTheme}
				background={project.theme.background}
				backTo={`/${ROUTES.PROJECTS.SLUG_INDEX}`}
				backToLabel="project-back-link"
				titleCategory={project.category}
				titleMain={`${project.backToLabel}`}
				chapo={project.chapo}
				noBorder
			/>
			{/* <ShortVideo background={project.theme.background} uri={project.video} /> */}
			<GridContainer>
				<Infos project={project} />
				<RightColWithGutter>
					{/* <project.component /> */}
					{props.children}
				</RightColWithGutter>
				{project.quote && (
					<ClientsOpinion
						quote={project.quote}
					/>
				)}

				{/* {!isEmpty(project.galleryPics) && <Gallery pics={project.galleryPics} />} */}
				<LinkToService service={service} />
				<ProjectsNav
					baseUrl={`/${ROUTES.PROJECTS.SLUG_INDEX}`}
					current={project}
					list={projects}
				/>
			</GridContainer>
		</>
	);
};

export default Project;
