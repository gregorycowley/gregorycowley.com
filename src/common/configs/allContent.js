const allContent = [
	{
		about: {
			slug: "about",
			title: "About Greg",
			subtitle: "ARTIST/DESIGNER/ENGINEER",
			description: "I'm a seasoned creative and technical professional working out of San Francisco, CA. I have held many different roles throughout my career, but all with a common theme: creating visual experiences, tools and interfaces for clients.",
			date: "19990000",
			client: "",
			firm: "",
			author: "Gregory Cowley, b. 1970",
			status: "Missing",
			heroImage: "avatars/gregorycowley_h1_svqhne",
			category: "design",
			categoryAlt: "Unused",
			discipline: "Developer",
			projecttype: "Digital Production",
			type: "n/a",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/about.md"
		}
	},
	{
		artist: {
			slug: "artist",
			title: "Artist",
			subtitle: "Electronic",
			description: "Description of an artist.",
			date: "20200101",
			author: "Gregory Cowley",
			status: "",
			category: "artist",
			discipline: "",
			type: "",
			heroImage: "disciplines/artist/TheTESTProject-top-54_ugpci2",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/disciplines/artist.md"
		}
	},
	{
		designer: {
			slug: "designer",
			title: "Designer",
			subtitle: "Graphics, Visual, Interaction",
			description: "Description of a Designer.",
			date: "20200101",
			author: "Gregory Cowley",
			status: "",
			category: "designer",
			discipline: "",
			type: "",
			heroImage: "disciplines/designer/spcontrols_com_ishurs",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/disciplines/designer.md"
		}
	},
	{
		educator: {
			slug: "educator",
			title: "Educator",
			subtitle: "Adjunct Professor of Interaction Design",
			description: "Description of an educator.",
			date: "20200101",
			author: "Gregory Cowley",
			status: "",
			category: "educator",
			discipline: "",
			type: "",
			heroImage: "disciplines/educator/CCA-top-161_ulsybv",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/disciplines/educator.md"
		}
	},
	{
		engineer: {
			slug: "engineer",
			title: "Engineer",
			subtitle: "Software and Front-end",
			description: "Description of an engineer.",
			date: "20200101",
			author: "Gregory Cowley",
			status: "",
			category: "engineer",
			discipline: "",
			type: "",
			heroImage: "disciplines/engineer/Cingular-right-68_alonhh",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/disciplines/engineer.md"
		}
	},
	{
		entrepreneur: {
			slug: "entrepreneur",
			title: "Entrepreneur",
			subtitle: "Serial Startups",
			description: "Description of an Entrepreneur.",
			date: "20200101",
			author: "Gregory Cowley",
			status: "",
			category: "entrepreneur",
			discipline: "",
			type: "",
			heroImage: "disciplines/entrepreneur/greg-b_q4dugd",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/disciplines/entrepreneur.md"
		}
	},
	{
		photographer: {
			slug: "photographer",
			title: "Photographer",
			subtitle: "Editorial and Portrait",
			description: "Description of a photographer.",
			date: "20200101",
			author: "Gregory Cowley",
			status: "",
			category: "photographer",
			discipline: "",
			projecttype: "",
			heroImage: "disciplines/photographer/022_inprint_ptc4ce",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/disciplines/photographer.md"
		}
	},
	{
		index: {
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/index.md"
		}
	},
	{
		project2: {
			title: "Balance Table",
			author: "Gregory Cowley",
			date: "2020-04-28T00:00:00.000Z",
			heroImage: "/images/1920x1080.jpg",
			detail_images: [
				{
					src: "/images/portfolio/2020-portfolio/2020-portfolio.001.png"
				},
				{
					src: "/images/portfolio/2020-portfolio/2020-portfolio.001.png"
				},
				{
					src: "/images/portfolio/2020-portfolio/2020-portfolio.001.png"
				}
			],
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/mock/project-2.md"
		}
	},
	{
		_3mps: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Three-Minute Picture Show",
			date: "20190000",
			description: "As a designer and technical producer of the Three-Minute Picture Show, an annual festival of short films, I executed the branding, website, marketing materials, and collateral. I also managed technical coordination of the film screenings, including the conversion of the various formats that were submitted into a consistent playable format for the theater. All the events took place in art house theaters in San Francisco and Portland.",
			discipline: "Discipline",
			firm: "Three-Minute Picture Show",
			heroImage: "projects/3MPS/3MPS-top-64_zuaifg",
			imagePath: "/projects/3MPS",
			limageSourceDirName: "3MPS",
			leftImages: [
				{
					src: null
				}
			],
			projectType: "Project Type",
			public_id_path: "v1600180222/projects/3MPS/",
			rightImages: [
				{
					src: "projects/3MPS/3MPS-right-65_qi6xyt"
				}
			],
			slug: "3mps",
			status: "active",
			subtitle: "A DIY Film Festival.",
			title: "Three-Minute Picture Show",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/3mps.md"
		}
	},
	{
		_4by6: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "4by6",
			date: "20190000",
			description: "While working for 4by6.com, I architected an automated production system driven by a printing portal website. This system allowed users to upload their graphics files to be pre-flighted and validated for printing. Problem files were sorted out, and the clients were notified.\n\nFiles that were ready for printing were organized into a grid system. The resulting grid could be printed on a single sheet of paper, lowering costs and make the more efficient use of resources. The system was fully automated, using web technologies as well as dedicated machines on-site and custom software.",
			discipline: "Discipline",
			firm: "4by6",
			heroImage: "projects/4by6/4by6-top-140_sfqgck",
			imagePath: "/projects/4by6",
			limageSourceDirName: "4by6",
			leftImages: null,
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: null,
			slug: "project-slug",
			status: "active",
			subtitle: "A Fully Automated Online Printing Service.",
			title: "4by6",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/4by6.md"
		}
	},
	{
		adobe: {
			author: "Gregory Cowley",
			category: "photographer",
			categoryAlt: "Unused",
			client: "Adobe Elements",
			date: "20190000",
			description: "Acting as producer and lead photographer, I created images for the packaging of Adobe Photoshop Elements and Adobe Premiere Elements.\n\nI worked closely with the client to coordinate the initial casting sessions, prop procurement, and managed cast and crew to get the job done on schedule and within budget.",
			discipline: "Discipline",
			firm: "Adobe Elements",
			heroImage: "projects/Adobe/Adobe-top-125_ytysrq",
			imagePath: "/projects/Adobe",
			limageSourceDirName: "Adobe",
			leftImages: [
				{
					src: "projects/Adobe/Adobe-left-128_x9frln"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Adobe/Adobe-right-126_vau5df"
				},
				{
					src: "projects/Adobe/Adobe-right-127_zm9qrp"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Photoshop and Premiere Elements Packaging.",
			title: "Adobe Elements",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/adobe.md"
		}
	},
	{
		blurbbookify: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Blurb",
			date: "20190000",
			discipline: "Discipline",
			firm: "Blurb",
			heroImage: "projects/BlurbBookify/BlurbBookify-top-148_aicunm",
			imagePath: "/projects/BlurbBookify",
			limageSourceDirName: "BlurbBookify",
			leftImages: [
				{
					src: "projects/BlurbBookify/BlurbBookify-left-150_tfkho0"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/BlurbBookify/BlurbBookify-right-144_rpgvcz"
				},
				{
					src: "projects/BlurbBookify/BlurbBookify-right-145_mfpydw"
				},
				{
					src: "projects/BlurbBookify/BlurbBookify-right-146_kynhpn"
				},
				{
					src: "projects/BlurbBookify/BlurbBookify-right-147_m7vyuf"
				},
				{
					src: "projects/BlurbBookify/BlurbBookify-right-149_gcpfww"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Online Book Design Web Application.",
			title: "Blurb Bookify",
			type: "Component",
			description: "As an engineer for Blurb, I was solely responsible for Bookify, a legacy product application built using Adobe Flex technology. The original application had not been updated in years. Finding more efficient ways to improve the user experience was part of the job. I pruned unused code and improved performance by 300%. My job also included adding new features and maintaining the API connections with Facebook, Instagram, Flickr, and other photo-sharing websites. Users could also upload photos directly to the application in their web browser. I built a system for tracking errors, measuring performance, and managing customer support issues.",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/blurbbookify.md"
		}
	},
	{
		branding: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Various",
			date: "20190000",
			description: "As a branding designer, I've worked with clients from sketch through implementation for product and business identities. I understand the branding process intrinsically, including maintaining a consistent brand identity, creating and following style guides, as well as enforcing adherence to brand standards.",
			discipline: "Discipline",
			firm: "Various",
			heroImage: "projects/Branding/Branding-top-159_j9lddy",
			imagePath: "/projects/Branding",
			limageSourceDirName: "Branding",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Branding/Branding-right-151_me1czi"
				},
				{
					src: "projects/Branding/Branding-right-152_draeq2"
				},
				{
					src: "projects/Branding/Branding-right-153_tzstx2"
				},
				{
					src: "projects/Branding/Branding-right-154_n9wk4e"
				},
				{
					src: "projects/Branding/Branding-right-155_ei6sbk"
				},
				{
					src: "projects/Branding/Branding-right-156_muomac"
				},
				{
					src: "projects/Branding/Branding-right-157_qumsql"
				},
				{
					src: "projects/Branding/Branding-right-158_z9pcfo"
				},
				{
					src: "projects/Branding/Branding-right-160_i0sgcx"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Logo Development for Various Clients.",
			title: "ID Development and Branding",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/branding.md"
		}
	},
	{
		briggo: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Briggo",
			date: "20190000",
			description: "For the Briggo automated coffee cart, I worked from layouts supplied by a designer to create interactive animations that would guide customers through the ordering process. This kiosk used interactive touchscreens for both input and feedback to the client regarding the status of their order. Coffee was prepared by a robot, and customers were notified when their order was ready through feedback from an order queue screen.",
			discipline: "Discipline",
			firm: "Fuseproject",
			heroImage: "projects/Briggo/Briggo-top-226_bywddn",
			imagePath: "/projects/Briggo",
			limageSourceDirName: "Briggo",
			leftImages: [
				{
					src: "projects/Briggo/Briggo-left-228_diwudq"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Briggo/Briggo-right-224_fpnhum"
				},
				{
					src: "projects/Briggo/Briggo-right-225_oa6xeb"
				},
				{
					src: "projects/Briggo/Briggo-right-227_orh4me"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Multi-screen kiosk User Interface Development.",
			title: "Briggo Automated Coffee Cart",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/briggo.md"
		}
	},
	{
		cavallopoint: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Cavallo Point Resort",
			date: "20190000",
			description: "I worked with the designer who supplied PSD files for development. My job was to prepare the assets, code the HTML/CSS, and deploy the resort website. The site worked as a delivery tool for marketing collateral and a booking tool for the resort.",
			discipline: "Discipline",
			firm: "Passport Resorts",
			heroImage: "projects/CavalloPoint/CavalloPoint-top-129_rh7tvy",
			imagePath: "/projects/CavalloPoint",
			limageSourceDirName: "CavalloPoint",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/CavalloPoint/CavalloPoint-right-130_txfsc7"
				},
				{
					src: "projects/CavalloPoint/CavalloPoint-right-131_v72osf"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Website for marketing a unique resort experience in San Francisco.",
			title: "Cavallo Point Resort",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/cavallopoint.md"
		}
	},
	{
		cca: {
			author: "Gregory Cowley",
			category: "educator",
			categoryAlt: "Unused",
			client: "California College of the Arts",
			date: "20190000",
			description: "I have been teaching at the California College of the Arts since 2002, where I began as a professor teaching in the graphic design department. I am currently teaching in the interaction design department as an adjunct professor. I teach sophomore and junior-level  Core fundamental courses.\n\nI have taught summer programs in Oakland and Paris. I've also taught and mentored graduate students in self-study programs.",
			discipline: "Discipline",
			firm: "California College of the Arts",
			heroImage: "projects/CCA/CCA-top-161_scxam8",
			imagePath: "/projects/CCA",
			limageSourceDirName: "CCA",
			leftImages: [
				{
					src: "projects/CCA/CCA-left-167_lb0opa"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/CCA/CCA-right-162_fgpxiu"
				},
				{
					src: "projects/CCA/CCA-right-163_x01be6"
				},
				{
					src: "projects/CCA/CCA-right-164_ndipqw"
				},
				{
					src: "projects/CCA/CCA-right-165_xugttd"
				},
				{
					src: "projects/CCA/CCA-right-166_bpt7ds"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Professor of Design since 2002.",
			title: "California College of the Arts",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/cca.md"
		}
	},
	{
		chronopolis: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Chronopolis",
			date: "20020926",
			description: "Developed in response to the 911 atrocities, Chronopolis was a large-scale interactive projection installation that was presented in Paris at the La Villette Numerique festival.\n\nChronolopis was a conceptual city represented by a graphic clock. This fictional place existed in between standard and metric time. Responding to the gathering of people on the floor, a computer measured the population to interpret the effect that the population has on the perception of time.",
			discipline: "Artist",
			firm: "MAD",
			heroImage: "projects/Chronopolis/Chronopolis-top-83_cphdyb",
			imagePath: "/projects/Chronopolis",
			limageSourceDirName: "Chronopolis",
			leftImages: [
				{
					src: "projects/Chronopolis/Chronopolis-left-82_lcjliq"
				},
				{
					src: "projects/Chronopolis/Chronopolis-left-85_dxurp7"
				}
			],
			projectType: "Project Type",
			projecttype: "Digital Production",
			rightImages: [
				{
					src: "projects/Chronopolis/Chronopolis-right-78_bmdom0"
				},
				{
					src: "projects/Chronopolis/Chronopolis-right-79_ibq6bl"
				},
				{
					src: "projects/Chronopolis/Chronopolis-right-80_bzxg2l"
				},
				{
					src: "projects/Chronopolis/Chronopolis-right-81_x1kx2a"
				},
				{
					src: "projects/Chronopolis/Chronopolis-right-84_zhjoao"
				}
			],
			slug: "chronopolis",
			status: "active",
			subtitle: "Large Scale Interactive Installation in Paris.",
			title: "Chronopolis",
			type: "Experience Design",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/chronopolis.md"
		}
	},
	{
		cingular: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Cingular RAEM",
			date: "20190000",
			description: "I produced an interactive Software Development portal that was built in Flash. It allowed for searching, browsing, and consumption of the content related to developing on the Cingular(AT&T) Mobile Platform. I worked closely with their team to build an application that would import and display dynamic content. The client was able to produce content and deliver it to the app in the form of XML for presentation. ",
			discipline: "Discipline",
			firm: "Punchcut",
			heroImage: "projects/Cingular/Cingular-top-66_zkc4pd",
			imagePath: "/projects/Cingular",
			limageSourceDirName: "Cingular",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Cingular/Cingular-right-67_os6dk5"
				},
				{
					src: "projects/Cingular/Cingular-right-68_hw9abh"
				},
				{
					src: "projects/Cingular/Cingular-right-69_lwoubj"
				},
				{
					src: "projects/Cingular/Cingular-right-70_wihxxt"
				},
				{
					src: "projects/Cingular/Cingular-right-71_havurr"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Interactive SDK Documentation for Developers",
			title: "Cingular RAEM",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/cingular.md"
		}
	},
	{
		cms: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Content Mangement Systems",
			date: "20190000",
			description: "From 2005 through 2015, I worked almost exclusively with various content management systems. Coded mostly in PHP, I was given Photoshop documents to produce HTML CSS. temp templates for open-source CMS products such as WordPress, Magento, Joomla, and Drupal",
			discipline: "Discipline",
			firm: "Various",
			heroImage: "projects/CMS/CMS-top-44_xzaysf",
			imagePath: "/projects/CMS",
			limageSourceDirName: "CMS",
			leftImages: [
				{
					src: "projects/CMS/CMS-left-42_iezgiy"
				},
				{
					src: "projects/CMS/CMS-left-43_kpvmfc"
				},
				{
					src: "projects/CMS/CMS-left-50_jklths"
				},
				{
					src: "projects/CMS/CMS-left-52_ghncra"
				},
				{
					src: "projects/CMS/CMS-left-53_u2dqhq"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/CMS/CMS-right-45_zutr65"
				},
				{
					src: "projects/CMS/CMS-right-46_fjrmy6"
				},
				{
					src: "projects/CMS/CMS-right-47_qpgoy9"
				},
				{
					src: "projects/CMS/CMS-right-48_ghg4bd"
				},
				{
					src: "projects/CMS/CMS-right-49_bgvxid"
				},
				{
					src: "projects/CMS/CMS-right-51_prdpcj"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Wordpress, Drupal, Magento, and Joomla Sites Built and Maintained for Various Clients.",
			title: "Content Mangement Systems",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/cms.md"
		}
	},
	{
		cncmachine: {
			slug: "cncmachine",
			title: "Homemade CNC Machine",
			subtitle: "I constructed a fully operational 4 by 8 foot CNC machine based on the Open Source Maslow CNC system.",
			description: "I've had a longtime interest in the fabrication of furniture and large scale products, but lacked the resources to produce such products. Instead, I often would build things by hand, limited by the tools I had. Many of the best designs I created were out of the range of my abilities.\n\nI wanted to work with computer-controlled rapid prototyping, and finally, I had the opportunity to build a CNC machine on my own using open source content from Maslow CNC. I created the initial CNC machine to work with four by eight sheets of plywood. Over time I've made continuous improvements to improve accuracy and speed. I've learned computer-controlled fabrication technology from the inside out.",
			date: "20200926",
			client: "Homemade CNC Machine",
			firm: "Self",
			author: "Gregory Cowley",
			status: "active",
			heroImage: "placehoders/GeoHex-bg07_vtenlp",
			category: "engineer",
			categoryAlt: "",
			discipline: "",
			projecttype: "",
			type: "",
			detail_images: [
				{
					src: "placehoders/GeoHex-bg07_vtenlp"
				},
				{
					src: "placehoders/GeoHex-bg07_vtenlp"
				},
				{
					src: "placehoders/GeoHex-bg07_vtenlp"
				}
			],
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/cncmachine.md"
		}
	},
	{
		cowleystudios: {
			author: "Gregory Cowley",
			category: "photographer",
			categoryAlt: "Unused",
			client: "Cowley Studios",
			date: "20190000",
			description: "In 2005, while continuing to work on Content Management Systems, I branched out to explore my lifelong interest in photography.\n\nI built a commercial photography studio located in the Dogpatch area of San Francisco. There I worked with clients including IDEO, Adobe, University Games, and Intel. I also had hundreds of individuals come through the studio doors for portraiture and custom commissions.\n\nAlthough the studio itself is now closed, I cultivated relationships with editorial clients whom I continue to work with and am able to take on new clients. The physical activity and artistry involved with my photography business provides a nice balance to my work in web development.",
			discipline: "Discipline",
			firm: "Cowley Studios",
			heroImage: "projects/CowleyStudios/CowleyStudios-top-132_vxbaqi",
			imagePath: "/projects/CowleyStudios",
			limageSourceDirName: "CowleyStudios",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/CowleyStudios/CowleyStudios-right-133_u2u7zd"
				},
				{
					src: "projects/CowleyStudios/CowleyStudios-right-134_ug9hwa"
				},
				{
					src: "projects/CowleyStudios/CowleyStudios-right-135_tzsyqo"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Professional White Box Photography Studio in Dogpatch, SF.",
			title: "Cowley Studios",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/cowleystudios.md"
		}
	},
	{
		disneyvmk: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Disney Vitrual Magic Kingdom",
			date: "20190000",
			description: "The Disney Virtual Magic Kingdom was an online portal for kids who were planning a trip to Disneyland. The colorful VMK interactive experience was built entirely in Flash. It consisted of a series of games and activities that would generate excitement about specific rides at the park. It incorporated video editing mashups, maps, and a daily event planner.",
			discipline: "Discipline",
			firm: "Punchcut",
			heroImage: "projects/DisneyVMK/DisneyVMK-top-72_ktn30w",
			imagePath: "/projects/",
			limageSourceDirName: "DisneyVMK",
			leftImages: null,
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/DisneyVMK/DisneyVMK-right-73_bkmniy"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Flash-based games and activities to assist children in planning their trip to Disneyland.",
			title: "Disney Vitrual Magic Kingdom",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/disneyvmk.md"
		}
	},
	{
		doceri: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Doceri Branding and Marketing Collateral",
			date: "20190000",
			description: "Doceri was a new product offering from SP Controls. Designed for the classroom, Doceri allowed teachers to use the iPad as a handheld whiteboarding tool. The software, linked with proprietary hardware, controlled project screens, lighting, sound, and content to be displayed. Doceri also included an early implementation of a stylus for an iPad. ",
			discipline: "Discipline",
			firm: "SP Controls",
			heroImage: "projects/Doceri/Doceri-top-179_tfv45i",
			imagePath: "/projects/Doceri",
			limageSourceDirName: "Doceri",
			leftImages: [
				{
					src: "projects/Doceri/Doceri-left-177_neecjc"
				},
				{
					src: "projects/Doceri/Doceri-left-178_kyty4o"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Doceri/Doceri-right-175_mlwvnq"
				},
				{
					src: "projects/Doceri/Doceri-right-176_mouewa"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Development of a brand identity and user interface for an iPad application.",
			title: "Doceri Branding and Marketing Collateral",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/doceri.md"
		}
	},
	{
		drpepperAcademyofcountrymusic: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Academy of Country Music",
			date: "20020000",
			description: "Dr Pepper was a major sponsor of the Academy of Country Music Awards. They wanted a marketing piece in the form of a CDROM to be distributed throughout Walmart stores. We created content that included games, videos, and musical toys related to the Academy of Country Music Awards. The finished disks were placed in displays and included free with the purchase of Dr Pepper products. ",
			discipline: "Developer",
			firm: "DR Pepper",
			heroImage: "projects/DrPepper/DrPepper-top-86_kikwd4",
			imagePath: "projects/DrPepper",
			limageSourceDirName: "DrPepper",
			leftImages: [
				{
					src: "projects/DrPepper/DrPepper-left-89_qa6mzt"
				}
			],
			projectType: "Project Type",
			projecttype: "Digital Production",
			rightImages: [
				{
					src: "projects/DrPepper/DrPepper-right-92_xh9syk"
				},
				{
					src: "projects/DrPepper/DrPepper-right-91_ojbaer"
				},
				{
					src: "rojects/DrPepper/DrPepper-right-90_l8krug"
				},
				{
					src: "projects/DrPepper/DrPepper-right-87_yxy9kq"
				},
				{
					src: "projects/DrPepper/DrPepper-right-88_xn5gta"
				},
				{
					src: "projects/DrPepper/DrPepper-right-92_xh9sy"
				}
			],
			slug: "drpepper-academyofcountrymusic",
			status: "active",
			subtitle: "One million CDROMs distributed throughout Walmart stores to promote the ACM awards. Produced for both the 2002 and 2004 events.",
			title: "Academy of Country Music",
			type: "Interaction",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/drpepper-academyofcountrymusic.md"
		}
	},
	{
		drpepper: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Dr Pepper Promotional CDROMS",
			date: "20190000",
			description: "Dr. Pepper was a major supporter of the American Red Cross. They commissioned an educational series of CDROMs geared towards kids. The disks were loaded with creative content that taught kids about the focus of the Red Cross. These included a range of life-saving relief services running from basic first aid to recovering from natural disasters.",
			discipline: "Discipline",
			firm: "Dr Pepper",
			heroImage: "projects/DrPepper/DrPepper-top-86_kikwd4",
			imagePath: "/projects/DrPepper",
			limageSourceDirName: "DrPepper",
			leftImages: [
				{
					src: "projects/DrPepper/DrPepper-left-89_qa6mzt"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/DrPepper/DrPepper-right-87_yxy9kq"
				},
				{
					src: "projects/DrPepper/DrPepper-right-88_xn5gta"
				},
				{
					src: "projects/DrPepper/DrPepper-right-90_l8krug"
				},
				{
					src: "projects/DrPepper/DrPepper-right-91_ojbaer"
				},
				{
					src: "projects/DrPepper/DrPepper-right-92_xh9syk"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "CDROMS Created for promotional partnerships with the Red Cross and the Academy of Country Music. More than a million disks were created for each event.",
			title: "Dr Pepper Promo CDROMS",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/drpepper.md"
		}
	},
	{
		drtingleton: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Dr Tingleton Miracle Apps",
			date: "20111206",
			description: "I developed a series of iPhone apps meant for the live social environment. The apps fostered fun for social events in bars, restaurants, at parties, and at work.\n\nThe applications included an animated wheel of fortune to choose what drink you were going to order, a compliment generator that on upon shaking the phone would give you a nice compliment, and a message correspondence app that allows for sending handwritten notes to friends.",
			discipline: "Designer",
			firm: "Dr Tingleton Miracle Apps",
			heroImage: "projects/DrTingleton/DrTingleton-top-243_jye5hw",
			imagePath: "/projects/DrTingleton",
			limageSourceDirName: "DrTingleton",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Digital Production",
			rightImages: [
				{
					src: "projects/DrTingleton/DrTingleton-right-239_tu9jtp"
				},
				{
					src: "projects/DrTingleton/DrTingleton-right-240_a67mh3"
				},
				{
					src: "projects/DrTingleton/DrTingleton-right-241_tcjk1z"
				},
				{
					src: "projects/DrTingleton/DrTingleton-right-242_lkrbns"
				}
			],
			slug: "dr-tingleton",
			status: "active",
			subtitle: "A series of user entertainment apps that encouraged live social interaction.",
			title: "Dr Tingleton Miracle Apps",
			type: "---",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/drtingleton.md"
		}
	},
	{
		dwellvisualizer: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Dwell Magazine Visualizer",
			date: "20190000",
			description: "As a content visualizer for the Dwell Magazine website, a Flash-based application was created to allow users to filter and browse past articles, images, and other content that appeared within the pages of Dwell Magazine throughout its history. ",
			discipline: "Discipline",
			firm: "Punchcut",
			heroImage: "projects/DwellVisualizer/DwellVisualizer-top-245_zxud8n",
			imagePath: "/projects/DwellVisualizer",
			limageSourceDirName: "DwellVisualizer",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/DwellVisualizer/DwellVisualizer-right-244_d8xcob"
				},
				{
					src: "projects/DwellVisualizer/DwellVisualizer-right-246_eiora4"
				},
				{
					src: "projects/DwellVisualizer/DwellVisualizer-right-247_skrxpg"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "A dynamic image browser for Dwell Magazine images, back issues and archived content.",
			title: "Dwell Magazine Visualizer",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/dwellvisualizer.md"
		}
	},
	{
		exploratorium: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Exploratorium",
			date: "20190000",
			description: "Middleground, an Exploratorium external site project, was a series of towers that encouraged people to interact with activities and each other. Middleground itself is a rehabilitation and recovery program. The installation acted as a happy place to further encourage this recovery and introduce people to the work Middleground does. The structure was installed in Civic Center, near City Hall in front of the San Francisco Public Library.",
			discipline: "Discipline",
			firm: "Exploratorium",
			heroImage: "projects/Exploratorium/Exploratorium-top-105_kydzgr",
			imagePath: "/projects/Exploratorium",
			limageSourceDirName: "Exploratorium",
			leftImages: [
				{
					src: "projects/Exploratorium/Exploratorium-left-113_f86h46"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Exploratorium/Exploratorium-right-106_nmb9fj"
				},
				{
					src: "projects/Exploratorium/Exploratorium-right-107_g044lo"
				},
				{
					src: "projects/Exploratorium/Exploratorium-right-108_rz3izd"
				},
				{
					src: "projects/Exploratorium/Exploratorium-right-109_q7pbem"
				},
				{
					src: "projects/Exploratorium/Exploratorium-right-110_ngqt0q"
				},
				{
					src: "projects/Exploratorium/Exploratorium-right-111_hoyn2c"
				},
				{
					src: "projects/Exploratorium/Exploratorium-right-112_judovq"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Fabrication, and some design, for an outdoor installation project installed in Civic Center, San Francisco. The exhibit encouraged social interaction using tangible interfaces controlled by hidden computer technology. ",
			title: "Exploratorium Exhibit Creation",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/exploratorium.md"
		}
	},
	{
		famsf: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Fine Art Museums of San Francisco",
			date: "20190000",
			description: "Fine Arts Museums of San Francisco (FAMSF) is the parent organization of the de Young Museum and The Palace Legion of Honor museum. Wolf-Olins was the design firm that handled the rebranding of the institution. Wolf-Olins and I produced the style guide for the rebranding that existed digitally as a Flash application. The style-guide was easily distributed as cross-platform application.",
			discipline: "Discipline",
			firm: "Wolf-Olins",
			heroImage: "projects/FAMSF/FAMSF-top-188_rqqwn0",
			imagePath: "/projects/FAMSF",
			limageSourceDirName: "FAMSF",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/FAMSF/FAMSF-right-186_o8lm9k"
				},
				{
					src: "projects/FAMSF/FAMSF-right-187_rwljwp"
				},
				{
					src: "projects/FAMSF/FAMSF-right-189_farn46"
				},
				{
					src: "projects/FAMSF/FAMSF-right-190_pgakdt"
				},
				{
					src: "projects/FAMSF/FAMSF-right-191_njhgcd"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "An interactive digital brand guidelines document for the De Young Museum and the California Palace of the Legion of Honor in San Francisco.",
			title: "Fine Art Museums of San Francisco",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/famsf.md"
		}
	},
	{
		fitdeck: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Fit Deck",
			date: "20141229",
			description: "Fit-Deck was a mobile application derived from a physical deck of cards. The deck's purpose was to randomize your workout by selecting cards from a deck that would give you a series of physical activities to do.\n\nThe application timed and tracked your performance and gave you recommendations for further improvement.",
			discipline: "Developer",
			firm: "Perfect Fitness",
			heroImage: "projects/FitDeck/FitDeck-top-253_douay2",
			imagePath: "/projects/FitDeck",
			limageSourceDirName: "FitDeck",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Digital Production",
			rightImages: [
				{
					src: "projects/FitDeck/FitDeck-right-254_malcru"
				},
				{
					src: "projects/FitDeck/FitDeck-right-255_k5jeyt"
				},
				{
					src: "projects/FitDeck/FitDeck-right-256_kexon1"
				},
				{
					src: "projects/FitDeck/FitDeck-right-257_yjyyhv"
				}
			],
			slug: "fitdeck",
			status: "active",
			subtitle: "A personal training application based on a digital deck of cards. Randomized workouts were presented through card-like digital screens.",
			title: "Fit Deck",
			type: "Mobile Application",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/fitdeck.md"
		}
	},
	{
		hondansx: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Honda",
			date: "20190000",
			description: "Honda launched the released its new supercar. I used HTML, CSS, and JavaScript to develop the presentation layer that was added to the existing Honda website backend.\n\nHonda's latest supercar incarnation, the venerable Honda NSX, was being released. The website to mark the occasion was designed by Razorfish in Los Angeles. I joined the team to do the front-end development and the visual presentation layer for this subsection of the Honda USA website.",
			discipline: "Discipline",
			firm: "Razorfish ",
			heroImage: "projects/HondaNSX/HondaNSX-top-278_nwrujr",
			imagePath: "/projects/HondaNSX",
			limageSourceDirName: "HondaNSX",
			leftImages: [
				{
					src: "projects/HondaNSX/HondaNSX-left-279_c5udo2"
				},
				{
					src: "projects/HondaNSX/HondaNSX-left-280_tvm4kf"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/HondaNSX/HondaNSX-right-275_mxi2kv"
				},
				{
					src: "projects/HondaNSX/HondaNSX-right-276_b5v3ym"
				},
				{
					src: "projects/HondaNSX/HondaNSX-right-277_r9pekk"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Honda launched the released its new supercar. I used HTML, CSS, and JavaScript to develop the presentation layer that was added to the existing Honda website backend.",
			title: "Relaunch of the new Honda NSX Supercar",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/hondansx.md"
		}
	},
	{
		hpgarage: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "HP",
			date: "20190000",
			description: "HP Garage was the name given to planned innovation spaces that would be developed on HPs campuses. The innovation space would include activities, directives, motivation tools for employees to work together for both team building and improvement of their products using IDEO's human-centered design approach.",
			discipline: "Discipline",
			firm: "IDEO",
			heroImage: "projects/HPGarage/HPGarage-top-136_koijpe",
			imagePath: "/projects/HPGarage",
			limageSourceDirName: "HPGarage",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/HPGarage/HPGarage-right-137_uz83wq"
				},
				{
					src: "projects/HPGarage/HPGarage-right-138_yxuibz"
				},
				{
					src: "projects/HPGarage/HPGarage-right-139_qe5sfo"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "This project was team collaboration and brainstorming in the true IDEO style. I joined a team of bright minds for multiple weeks of discussion and deep thought to develop an innovation and training system for HP employees.",
			title: "HP Garage Innovation System",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/hpgarage.md"
		}
	},
	{
		ibmdb2: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "IBM",
			date: "20190000",
			description: "This was a Motion Graphics based video for the launch of IBM's new DB2 database product. The video was created using innovative graphic animations, interviews, and visual icons to inform and entertain the audience. The purpose of the video presented to the employees of IBM was to create enthusiasm for the new product.",
			discipline: "Discipline",
			firm: "MAD",
			heroImage: "projects/IBMDB2/IBMDB2-top-174_athtrg",
			imagePath: "/projects/IBMDB2",
			limageSourceDirName: "IBMDB2",
			leftImages: [
				{
					src: "projects/IBMDB2/IBMDB2-left-168_ld6qlm"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/IBMDB2/IBMDB2-right-169_f9qqpl"
				},
				{
					src: "projects/IBMDB2/IBMDB2-right-170_je3w9y"
				},
				{
					src: "projects/IBMDB2/IBMDB2-right-171_z2uauu"
				},
				{
					src: "projects/IBMDB2/IBMDB2-right-172_q2nm3a"
				},
				{
					src: "projects/IBMDB2/IBMDB2-right-173_o9ytlg"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Detailed motion graphics for the internal presentation and launch of a new IBM software product. ",
			title: "IBM DB2 Launch Video",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/ibmdb2.md"
		}
	},
	{
		ideoIntelinterfaces: {
			author: "Gregory Cowley",
			category: "design",
			categoryAlt: "Unused",
			client: "Intel",
			date: "20060000",
			discipline: "Developer",
			firm: "IDEO",
			heroImage: "projects/IDEOInterfaces/IDEOInterfaces-top-249_fhq7xw",
			imagePath: "/projects/IDEOInterfaces",
			limageSourceDirName: "IDEOInterfaces",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Digital Production",
			rightImages: [
				{
					src: "projects/IDEOInterfaces/IDEOInterfaces-right-250_quxjau"
				},
				{
					src: "projects/IDEOInterfaces/IDEOInterfaces-right-251_nyut6v"
				},
				{
					src: "projects/IDEOInterfaces/IDEOInterfaces-right-252_vnrkgz"
				}
			],
			slug: "ideo-intelinterfaces",
			status: "active",
			subtitle: "I created the motion graphics for a series of short films showcasing hypothetical digital devices seamlessly interfacing into everyday life.",
			title: "Intel Lifestyle Interfaces",
			type: "Content Creation",
			description: "Intel's Mobile Platform Group (MPG) has a mission to propose mobile devices that use Intel technology. They worked closely with IDEO to build prototypes that implemented Intel technologies and could be licensed by equipment manufacturers. Cinema quality videos with dramatic storylines were created to weave narratives around how the technologies would be used in the real world.\n\nA professional film production company was hired to produce these vignettes, which showed the hypothetical products being used in real-life situations. Within the videos, the actors would use props and green screens. My job was to animate graphics and overlay them in-post using After Effects. These non-functional prototypes were brought to life and responded to the interactions of the actors.",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/ideo-intelinterfaces.md"
		}
	},
	{
		ideoNewyears: {
			author: "Gregory Cowley",
			category: "design",
			categoryAlt: "Unused",
			client: "IDEO",
			date: "20200926",
			description: "IDEO began introducing an annual digital New Year's card that allowed its employees around the world to contribute memories of the year through an interactive format. For the inaugural design, each employee could make their own personal snowflake, which included a favorite memory and information about the employee. The snowflakes floated in a 3D interactive environment allowing team members to learn about each creator and their memory for that year.",
			discipline: "Discipline",
			firm: "IDEO",
			heroImage: "projects/IDEONewYear/IDEONewYear-top-195_otf8ur",
			imagePath: "/projects/IDEONewYear",
			limageSourceDirName: "IDEONewYear",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/IDEONewYear/IDEONewYear-right-192_z1fdxu"
				},
				{
					src: "projects/IDEONewYear/IDEONewYear-right-193_vlraif"
				},
				{
					src: "projects/IDEONewYear/IDEONewYear-right-194_cd24i1"
				}
			],
			slug: "idea-new-years",
			status: "active",
			subtitle: "A digital holiday card that encouraged IDEO employees to share their best experiences of the year. Each card transformed each contributed memory into a collection of dynamic and interactive visual animations.",
			title: "IDEO New Years Digital Cards",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/ideo-newyears.md"
		}
	},
	{
		landor: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Various",
			date: "20190000",
			description: "For over ten years, I worked with teams at Landor Associates to brand and create corporate identities for companies including the Olympics, American Airlines, Clorox, HP, Rice a Roni, Ford Motor Company, and John Deere. As the leading brand identity and corporate identity company, it was a privilege to be a team player in both their San Francisco and Hong Kong offices. ",
			discipline: "Discipline",
			firm: "Landor Associates",
			heroImage: "projects/Landor/Landor-top-16_lij4zf",
			imagePath: "/projects/Landor",
			limageSourceDirName: "Landor",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Landor/Landor-right-17_zwhlfz"
				},
				{
					src: "projects/Landor/Landor-right-18_hrdg4u"
				},
				{
					src: "projects/Landor/Landor-right-19_whasu6"
				},
				{
					src: "projects/Landor/Landor-right-20_s2lw6g"
				},
				{
					src: "projects/Landor/Landor-right-21_veysur"
				},
				{
					src: "projects/Landor/Landor-right-22_jwgd9n"
				},
				{
					src: "projects/Landor/Landor-right-23_hzpn7y"
				},
				{
					src: "projects/Landor/Landor-right-24_iwkxmj"
				},
				{
					src: "projects/Landor/Landor-right-25_xbh4ua"
				},
				{
					src: "projects/Landor/Landor-right-26_xbm1su"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Contributor to numerous branding, packaging, and product design projects and a working relationship that lasted over 10 years.",
			title: "Landor Associates Corporate Identity",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/landor.md"
		}
	},
	{
		luminox: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Luminox Watch",
			date: "20190000",
			description: "Luminox makes military-grade watches marketed towards the military and outdoor enthusiasts. I worked closely with the company founders to create an online catalog of their products. The site included a custom content management system that I hand-coded using PHP. The admin section of the site allowed the marketing team to add new products and update information.",
			discipline: "Discipline",
			firm: "DRDC Group",
			heroImage: "projects/Luminox/Luminox-top-213_weu0tp",
			imagePath: "/projects/Luminox",
			limageSourceDirName: "Luminox",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Luminox/Luminox-right-206_r2cybq"
				},
				{
					src: "projects/Luminox/Luminox-right-207_zn7dyg"
				},
				{
					src: "projects/Luminox/Luminox-right-208_xy7xoc"
				},
				{
					src: "projects/Luminox/Luminox-right-209_cdioaq"
				},
				{
					src: "projects/Luminox/Luminox-right-210_tisuv9"
				},
				{
					src: "projects/Luminox/Luminox-right-211_uyx0dr"
				},
				{
					src: "projects/Luminox/Luminox-right-212_frxd6k"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Design and development for an online catalog with a custom CMS backend. ",
			title: "Luminix Watch Website",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/luminox.md"
		}
	},
	{
		macromedia: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Macromedia",
			date: "20200926",
			description: "Macromedia launched their new website with a particular area they called the Flexible Messaging Area (FMA) on the front page. This was an ever-evolving and interactive space focused on specific products and offerings from Macromedia. It offered entertainment and showed the capabilities of tools using Flash, their flagship product.",
			discipline: "Discipline",
			firm: "Macromedia",
			heroImage: "projects/Macromedia/Macromedia-top-196_mc3ezv",
			imagePath: "/projects/Macromedia",
			limageSourceDirName: "Macromedia",
			leftImages: [
				{
					src: "projects/Macromedia/Macromedia-left-202_r2nhx3"
				},
				{
					src: "projects/Macromedia/Macromedia-left-203_b6sixh"
				},
				{
					src: "projects/Macromedia/Macromedia-left-204_wvsmeu"
				},
				{
					src: "projects/Macromedia/Macromedia-left-205_luzydt"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Macromedia/Macromedia-right-197_zg2l4x"
				},
				{
					src: "projects/Macromedia/Macromedia-right-198_ckizex"
				},
				{
					src: "projects/Macromedia/Macromedia-right-199_gvqm1q"
				},
				{
					src: "projects/Macromedia/Macromedia-right-200_w0wkx4"
				},
				{
					src: "projects/Macromedia/Macromedia-right-201_opwbeb"
				}
			],
			slug: "balance-table",
			status: "active",
			subtitle: "The Flexible Messaging Area (FMA) on the Macromedia.com homepage highlighted the usefulness and abilities of Macromedia digital products.",
			title: "Macromedia.com FMA IxD",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/macromedia.md"
		}
	},
	{
		motorola: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Motorola",
			date: "20190000",
			description: "Motorola had several internal projects that ranged from prototypes for the interaction of screens on their line of mobile phones to an internal competition to develop innovative ideas for features to be added to future products.\n\nI designed and animated the finalists' proposals, which were presented for voting during the competition. These included illustrations, diagrams, and animations of how each entry worked.",
			discipline: "Discipline",
			firm: "Augmentum",
			heroImage: "projects/Motorola/Motorola-top-98_m9e3fb",
			imagePath: "/projects/Motorola",
			limageSourceDirName: "Motorola",
			leftImages: [
				{
					src: "projects/Motorola/Motorola-left-100_emrn3o"
				},
				{
					src: "projects/Motorola/Motorola-left-99_duryt2"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Motorola/Motorola-right-93_qyfbnc"
				},
				{
					src: "projects/Motorola/Motorola-right-94_xrqgqr"
				},
				{
					src: "projects/Motorola/Motorola-right-95_sluxjo"
				},
				{
					src: "projects/Motorola/Motorola-right-96_jtvcji"
				},
				{
					src: "projects/Motorola/Motorola-right-97_ee0nxb"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Creation of animated presentation material for an internal innovation contest. Produced interactive demos for Motorola user interfaces and use case scenarios.",
			title: "Motorola Innovation Projects",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/motorola.md"
		}
	},
	{
		mpps: {
			title: "MPPS: The Mobile Phone Photo Show",
			subtitle: "The first gallery exhibit of its kind showing the work of over 400 participants from around the world. Coinciding with the release of camera phones, MPPS allowed participants to send images into the gallery in real-time during a defined time period. The result was a meta-snapshot of the world from the hands of people in each region.",
			author: "Gregory Cowley",
			date: "20200926",
			heroImage: "placehoders/GeoHex-bg07_vtenlp",
			category: "artist",
			slug: "mpps",
			description: "The Mobile Phone Photo Show was the first cell phone photography show. The emergence of the mobile phone camera also opened up a new means of self-expression. \n\nThe conceptual gallery exhibit acted as an inversion of the traditional gallery show. Artists We're spread out all over the world, with more than 400 contributors and their mobile phones submitting work into the gallery where it would be printed out and stuck on the walls. This outward in approach created a meta-snapshot of the world at that point in time. The event took place in San Francisco, but the images were submitted from as far away as Siberia, South Africa, India, Argentina, Australia, and Japan.",
			detail_images: [
				{
					src: "placehoders/GeoHex-bg07_vtenlp"
				},
				{
					src: "placehoders/GeoHex-bg07_vtenlp"
				},
				{
					src: "placehoders/GeoHex-bg07_vtenlp"
				}
			],
			client: "Kurt Bigenho and Gregory Cowley",
			firm: "Self",
			status: "active",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/mpps.md"
		}
	},
	{
		nikeskateboarding: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Nike",
			date: "20200926",
			description: "Odopod created the Nike skateboarding website, which showcases skateboarding shoes and the Nike sponsored skaters that endorse them.\n\nI created an interactive shoe browsing interface that included an animated filtering system. Users could manipulate the settings to cause shoes to fall off the shelves and new shoes to fly back up to replace them.",
			discipline: "Discipline",
			firm: "Odopod",
			heroImage: "projects/NikeSkateboarding/NikeSkateboarding-top-214_qleth8",
			imagePath: "/projects/NikeSkateboarding",
			limageSourceDirName: "NikeSkateboarding",
			leftImages: [
				{
					src: "projects/NikeSkateboarding/NikeSkateboarding-left-218_hdoscq"
				},
				{
					src: "projects/NikeSkateboarding/NikeSkateboarding-left-219_xpzusr"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/NikeSkateboarding/NikeSkateboarding-right-215_yilomy"
				},
				{
					src: "projects/NikeSkateboarding/NikeSkateboarding-right-216_dqk6b7"
				},
				{
					src: "projects/NikeSkateboarding/NikeSkateboarding-right-217_sbjahe"
				}
			],
			slug: "balance-table",
			status: "active",
			subtitle: "A prestige project for Nike skateboarding shoes, this project was the creation of a dynamic shoe browser that used animation to entertain and wow. ",
			title: "Nike Skateboarding Website",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/nikeskateboarding.md"
		}
	},
	{
		openwave: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Openwave",
			date: "20190000",
			description: "A short description",
			discipline: "Discipline",
			firm: "3feetofftheground",
			heroImage: "projects/Openwave/Openwave-top-223_kahckm",
			imagePath: "/projects/Openwave",
			limageSourceDirName: "Openwave",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Openwave/Openwave-right-220_qdnegl"
				},
				{
					src: "projects/Openwave/Openwave-right-221_ztkt9w"
				},
				{
					src: "projects/Openwave/Openwave-right-222_qkn3i3"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Creation of keynote introduction videos, dramatic effects, and informative content for Las Vegas Presentations.",
			title: "Openwave Trade Show Video Content",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/openwave.md"
		}
	},
	{
		opesadvisors: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Opes Advisors",
			date: "20190000",
			description: "Opes Advisors, a financial investment advising firm, needed an intranet for their employees to be able to manage their clients and internal documents. In addition, they required a public-facing site for marketing and blogging purposes. For this project, both the internet and extranet versions were built on Joomla.",
			discipline: "Discipline",
			firm: "Elixir Design",
			heroImage: "projects/OpesAdvisors/OpesAdvisors-top-122_whsjr5",
			imagePath: "/projects/OpesAdvisors",
			limageSourceDirName: "OpesAdvisors",
			leftImages: [
				{
					src: "projects/OpesAdvisors/OpesAdvisors-left-124_hxe7kf"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/OpesAdvisors/OpesAdvisors-right-120_x3bvir"
				},
				{
					src: "projects/OpesAdvisors/OpesAdvisors-right-121_rxoerv"
				},
				{
					src: "projects/OpesAdvisors/OpesAdvisors-right-123_xgyr3n"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "An online public-facing website and internal intranet for a financial services firm.",
			title: "Opes Advisors Website and Intranet",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/opesadvisors.md"
		}
	},
	{
		ouya: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Ouya Game Console",
			date: "20190000",
			description: "Working from design team sketches, I created a working prototype of the console's user interface. This UI allowed users to browse games, videos, and other content using a game controller.",
			discipline: "Discipline",
			firm: "Fuseproject",
			heroImage: "projects/Ouya/Ouya-top-102_pd8rjb",
			imagePath: "/projects/Ouya",
			limageSourceDirName: "Ouya",
			leftImages: [
				{
					src: "projects/Ouya/Ouya-left-104_sx2jl1"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Ouya/Ouya-right-101_f0puhq"
				},
				{
					src: "projects/Ouya/Ouya-right-103_slrc2n"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Prototyping of the animation and user interaction for the Ouya Game Console.",
			title: "UI Development for Ouya Game Console",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/ouya.md"
		}
	},
	{
		pbsmediaplayer: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "PBS",
			date: "20190000",
			description: "The PBS media player was a browser for short videos contained on the PBS website. I designed and developed the interface that included a video player for the media segments.",
			discipline: "Discipline",
			firm: "Flax Media",
			heroImage: "projects/PBSMediaPlayer/PBSMediaPlayer-top-274_vvuzbl",
			imagePath: "/projects/PBSMediaPlayer",
			limageSourceDirName: "PBSMediaPlayer",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/PBSMediaPlayer/PBSMediaPlayer-right-264_prfubp"
				},
				{
					src: "projects/PBSMediaPlayer/PBSMediaPlayer-right-265_bhpfla"
				},
				{
					src: "projects/PBSMediaPlayer/PBSMediaPlayer-right-266_dr9tfc"
				},
				{
					src: "projects/PBSMediaPlayer/PBSMediaPlayer-right-267_exsojo"
				},
				{
					src: "projects/PBSMediaPlayer/PBSMediaPlayer-right-268_bwkdub"
				},
				{
					src: "projects/PBSMediaPlayer/PBSMediaPlayer-right-269_ixzi2d"
				},
				{
					src: "projects/PBSMediaPlayer/PBSMediaPlayer-right-270_srdkbw"
				},
				{
					src: "projects/PBSMediaPlayer/PBSMediaPlayer-right-271_ye2tfg"
				},
				{
					src: "projects/PBSMediaPlayer/PBSMediaPlayer-right-272_jlbt3r"
				},
				{
					src: "projects/PBSMediaPlayer/PBSMediaPlayer-right-273_sn7jyv"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "A Flash-based user interface for browsing online video content",
			title: "PBS Media Player UI",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/pbsmediaplayer.md"
		}
	},
	{
		photoworks: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Photoworks",
			date: "20200926",
			description: "Photoworks, a high-quality photo lab based in San Francisco, specialized in creative, unique photo printing services. I designed and built an application for this client that allowed users to select from Photoworks' product offerings, upload photos directly from their phones, and pay for orders.",
			discipline: "Discipline",
			firm: "Photoworks",
			heroImage: "projects/Photoworks/Photoworks-top-258_j5bhdu",
			imagePath: "/projects/Photoworks",
			limageSourceDirName: "Photoworks",
			leftImages: [
				{
					src: "projects/Photoworks/Photoworks-left-262_e41ph8"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Photoworks/Photoworks-right-259_czcqfw"
				},
				{
					src: "projects/Photoworks/Photoworks-right-260_kvhrbi"
				},
				{
					src: "projects/Photoworks/Photoworks-right-261_schbyi"
				},
				{
					src: "projects/Photoworks/Photoworks-right-263_vgakcr"
				}
			],
			slug: "balance-table",
			status: "active",
			subtitle: "A mobile iOS app that allowed customers to order real prints from the photos on their phones.",
			title: "Photoworks iOS Photo Ordering App",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/photoworks.md"
		}
	},
	{
		quicktime: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Apple",
			date: "20190000",
			description: "Quicktime was an Apple product released in the mid-1990s for playing video on a Macintosh. It was a video component player that was included with the operating system but could also be downloaded separately.\nOnce installed, the demo animation I created would play to confirm the software was correctly installed. In addition, I also designed and animated the Quicktime TV logo for Apple's Quicktime TV offering. This was a very early version of what would become the AppleTV.",
			discipline: "Discipline",
			firm: "CKS",
			heroImage: "projects/Quicktime/Quicktime-top-142_qpb2gl",
			imagePath: "/projects/Quicktime",
			limageSourceDirName: "Quicktime",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Quicktime/Quicktime-right-141_lveysr"
				},
				{
					src: "projects/Quicktime/Quicktime-right-143_dq3vil"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "For the launch of Apple's first built-in video player, I created the test animation included with every download.",
			title: "Quicktime/Qtv Animation and Design",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/quicktime.md"
		}
	},
	{
		razorfish: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Various",
			date: "20190000",
			description: "Rocket Lawyer is an online legal services company that allows users to create legally binding documents or other legal entities. I worked closely with the marketing team to produce Optimizely A/B tests for improving customer turnover and customer engagement.",
			discipline: "Discipline",
			firm: "Razorfish ",
			heroImage: "projects/Razorfish/Razorfish-top-117_nrhpbg",
			imagePath: "/projects/Razorfish",
			limageSourceDirName: "Razorfish",
			leftImages: [
				{
					src: "projects/Razorfish/Razorfish-left-118_drsv3v"
				},
				{
					src: "projects/Razorfish/Razorfish-left-119_lhgrjo"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Razorfish/Razorfish-right-114_bjceeu"
				},
				{
					src: "projects/Razorfish/Razorfish-right-115_pswoed"
				},
				{
					src: "projects/Razorfish/Razorfish-right-116_sjjabn"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Worked as a staff designer at the first Razorfish office in San Francisco.",
			title: "Razorfish Design and Development",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/razorfish.md"
		}
	},
	{
		rocketlawyer: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Rocket Lawyer",
			date: "20200926",
			description: "Rocket Lawyer is an online legal services company. It's a place to create a legal legally binding contract or one of many other legal entities based on offerings that the company had. I worked closely with the marketing team to produce Optimizely A B testing stuff for improving customer turnover and customer engagement. ",
			discipline: "Discipline",
			firm: "Rocket Lawyer",
			heroImage: "projects/RocketLawyer/RocketLawyer-top-237_gb1kop",
			imagePath: "/projects/RocketLawyer",
			limageSourceDirName: "RocketLawyer",
			leftImages: [
				{
					src: "projects/RocketLawyer/RocketLawyer-left-238_fpph29"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/RocketLawyer/RocketLawyer-right-234_kzfmlc"
				},
				{
					src: "projects/RocketLawyer/RocketLawyer-right-235_nf0rm7"
				},
				{
					src: "projects/RocketLawyer/RocketLawyer-right-236_mzuvpg"
				}
			],
			slug: "balance-table",
			status: "active",
			subtitle: "Developer for marketing material primarily using Optimizely to manage A/B testing and user response.",
			title: "Rocket Lawyer Online Product",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/rocketlawyer.md"
		}
	},
	{
		rxgallery: {
			author: "Gregory Cowley",
			category: "artist",
			categoryAlt: "Unused",
			client: "RX Gallery",
			date: "20190000",
			description: "RX Gallery Art and Technology Space in the SF Tenderloin.\nRX Gallery was an art bar with a focus on art and technology-centered in the Tenderloin area of San Francisco. At the time, it was the pinnacle of art and technology in the region. We worked closely with artists and arts institutions that shared our interest in digital and electronic expression. The gallery operated from 2003 to 2008.",
			discipline: "Discipline",
			firm: "Self",
			heroImage: "projects/RXGallery/RXGallery-top-01_utszqm",
			imagePath: "/projects/RXGallery",
			limageSourceDirName: "RXGallery",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/RXGallery/RXGallery-right-02_llm3tu"
				},
				{
					src: "projects/RXGallery/RXGallery-right-03_jbydnr"
				},
				{
					src: "projects/RXGallery/RXGallery-right-04_hefgj5"
				},
				{
					src: "projects/RXGallery/RXGallery-right-05_qsfzdf"
				},
				{
					src: "projects/RXGallery/RXGallery-right-06_lqqror"
				}
			],
			slug: "rxgallery",
			status: "active",
			subtitle: "Original founding partner of a wine bar and gallery space devoted to electronic arts, robotics, new media, and video art.",
			title: "RX Gallery-Art and Technology",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/rxgallery.md"
		}
	},
	{
		safariu: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "O'Reilly Media",
			date: "20190000",
			description: "O'Reilly Media's SafariU allowed teachers to create curriculums and generate content for their courses from O'Reilly's vast library of books and media. Students could purchase, download, and print course material. I created the website as well as an explainer video about how the course building process worked.",
			discipline: "Discipline",
			firm: "O'Reilly Media",
			heroImage: "projects/SafariU/SafariU-top-229_higgx0",
			imagePath: "/projects/SafariU",
			limageSourceDirName: "SafariU",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/SafariU/SafariU-right-230_xro6p8"
				},
				{
					src: "projects/SafariU/SafariU-right-231_jqstgo"
				},
				{
					src: "projects/SafariU/SafariU-right-232_vysbru"
				},
				{
					src: "projects/SafariU/SafariU-right-233_qoceij"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Website design and development for O'Reilly Media's educational customization service. ",
			title: "Safari U Website",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/safariu.md"
		}
	},
	{
		spcontrols: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "SP Controls",
			date: "20200926",
			description: "SP controls created Classroom present AV presentation control systems so that they would control projectors, projection screens, internal controlled lighting, audio, whiteboards, electronic whiteboards, and so on, So I design Designed collateral and materials for trade shows Where SP Controls would demo their products.",
			discipline: "Discipline",
			firm: "SP Controls",
			heroImage: "projects/SPControls/SPControls-top-185_raljju",
			imagePath: "/projects/SPControls",
			limageSourceDirName: "SPControls",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/SPControls/SPControls-right-180_htzscv"
				},
				{
					src: "projects/SPControls/SPControls-right-181_lm61cs"
				},
				{
					src: "projects/SPControls/SPControls-right-182_zckjdf"
				},
				{
					src: "projects/SPControls/SPControls-right-183_oulstr"
				},
				{
					src: "projects/SPControls/SPControls-right-184_h3gvas"
				}
			],
			slug: "balance-table",
			status: "active",
			subtitle: "Print design, display booth graphics, and video demonstrations for Las Vegas trade shows.",
			title: "SP Controls Trade Show Collateral",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/spcontrols.md"
		}
	},
	{
		thesak: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "The Sak",
			date: "20190000",
			description: "While contracting as a photographer for The Sak, I produced catalog content, including product photography and lifestyle photography, working with models on location. Additionally, I developed and engineered a dynamic website catalog with 3D page turning interactions for this client.",
			discipline: "Discipline",
			firm: "The Sak",
			heroImage: "projects/TheSak/TheSak-top-74_bqi9je",
			imagePath: "/projects/TheSak",
			limageSourceDirName: "TheSak",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/TheSak/TheSak-right-75_dx8r8s"
				},
				{
					src: "projects/TheSak/TheSak-right-76_dzl7wm"
				},
				{
					src: "projects/TheSak/TheSak-right-77_c9lrim"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Development of an online interactive catalog for handbags and other fashion accessories designed by The Sak.",
			title: "The Sak Catalog Photography",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/thesak.md"
		}
	},
	{
		thetestproject: {
			author: "Gregory Cowley",
			category: "artist",
			categoryAlt: "Unused",
			client: "The TEST:Project",
			date: "20200926",
			description: "As a founder of the TEST:Project, I created live, computer-controlled sight, sound, and spatial experiences. These involved immersive multi-screen projections that surrounded the audience.\n\nThe primary driving medium was standard 2x2 slides. I used slide projectors instead of video projectors to create a mechanical zoetrope that would play short sequences of animation with quarter-second intervals. The animations were shot using a 35-millimeter camera with a motor wind. Slides were loaded into the slide projector in the same order and played in looping fashion. It was a computer-controlled system, which allowed me to manipulate the projectors, up to 32 at a time, through a digital control panel. I would use up to 10 screens for a single performance. Video projection would also be a component.\n\nThe purpose of the test project was to explore how memories are recalled in a fabricated or fractured fashion. Rarely do we remember things as a continuous stream of events. It's usually small moments. Moments filled with feeling. Moments filled with fluttering details.\n\nI was also exploring the possibility of implanted memories. By using iconic, generic, and agnostic imagery that would relate to broad experiences, I aimed to trigger memories in the viewer.",
			discipline: "Discipline",
			firm: "The TEST:Project",
			heroImage: "projects/TheTESTProject/TheTESTProject-top-54_xzbfjb",
			imagePath: "/projects/TheTESTProject",
			limageSourceDirName: "TheTESTProject",
			leftImages: [
				{
					src: "projects/TheTESTProject/TheTESTProject-left-62_q0aycn"
				},
				{
					src: "projects/TheTESTProject/TheTESTProject-left-63_s3cdh4"
				}
			],
			projectType: "Project Type",
			rightImages: [
				{
					src: "projects/TheTESTProject/TheTESTProject-right-55_cfpvqv"
				},
				{
					src: "projects/TheTESTProject/TheTESTProject-right-56_xrchyp"
				},
				{
					src: "projects/TheTESTProject/TheTESTProject-right-57_rdbd9r"
				},
				{
					src: "projects/TheTESTProject/TheTESTProject-right-58_fvodhu"
				},
				{
					src: "projects/TheTESTProject/TheTESTProject-right-59_wnhckq"
				},
				{
					src: "projects/TheTESTProject/TheTESTProject-right-60_yzo7i7"
				},
				{
					src: "projects/TheTESTProject/TheTESTProject-right-61_mm40hk"
				}
			],
			slug: "the-test-project",
			status: "active",
			subtitle: "A conceptual and experiential new media arts project using projection for live performances and installations.",
			title: "The TEST:Project",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/thetestproject.md"
		}
	},
	{
		transcinema: {
			author: "Gregory Cowley",
			category: "artist",
			categoryAlt: "Unused",
			client: "Transcinema",
			date: "20200926",
			description: "Transcinema existed to create an audience and appreciation for a global group of new media artists. The emerging new digital media were an acquired taste, and many traditional art spaces weren't recognizing the importance of this new genre. Transcinema was a means to educate the public about digital experiences, and the contemplations these experiences can evoke. \n\nThe emergence of new media was inspiring creative works. Transcinema intended to bring together a worldwide collection of artists who were working in similar media. \n\nIn order to foster universal recognition of this work, Transcinema sought to bring those artists together and create an audience with understanding and appreciation for new media artworks.",
			detail_images: [
				{
					src: "placehoders/GeoHex-bg07_vtenlp"
				},
				{
					src: "placehoders/GeoHex-bg07_vtenlp"
				},
				{
					src: "placehoders/GeoHex-bg07_vtenlp"
				}
			],
			discipline: "Discipline",
			firm: "Self",
			heroImage: "placehoders/GeoHex-bg07_vtenlp",
			imagePath: "/placehoders",
			limageSourceDirName: null,
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "project-right-33.jpg"
				},
				{
					src: "project-right-35.jpg"
				}
			],
			slug: "transcinema",
			status: "active",
			subtitle: "An International New Media Festival Based in San Francisco.",
			title: "Transcinema",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/transcinema.md"
		}
	},
	{
		voicebase: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Voicebase",
			date: "20190000",
			description: "As a software engineer at VoiceBase, a startup that works with voice recognition and AI analytics for call centers, I was responsible for creating a visual transcription player. This audio player would play through an audio recording and highlight the words in a written AI-generated transcript. The player was the only front-end for what was almost entirely an API voice recognition and voice analytics service. \n\nI worked with the team to create a developer portal to add to the company offering that would give further visual control to developers for the API. The motivation was also to allow upper management, which is not familiar with an API system's inner workings, to visualize and understand VoiceBase's product and to create visualization tools for a non-technical audience.",
			discipline: "Engineer",
			firm: "Voicebase",
			heroImage: "projects/Voicebase/Voicebase-top-34_jjewrl",
			imagePath: "/projects/Voicebase",
			limageSourceDirName: "Voicebase",
			leftImages: [
				{
					src: "projects/Voicebase/Voicebase-left-40_x2yr1b"
				},
				{
					src: "projects/Voicebase/Voicebase-left-41_ww8jwv"
				}
			],
			projectType: "Project Type",
			projecttype: "Digital Production",
			rightImages: [
				{
					src: "projects/Voicebase/Voicebase-right-33_gy7khx"
				},
				{
					src: "projects/Voicebase/Voicebase-right-35_srkhdl"
				},
				{
					src: "projects/Voicebase/Voicebase-right-36_hcrsi9"
				},
				{
					src: "projects/Voicebase/Voicebase-right-37_rhmslw"
				},
				{
					src: "projects/Voicebase/Voicebase-right-38_bmpkbd"
				},
				{
					src: "projects/Voicebase/Voicebase-right-39_sflgap"
				}
			],
			slug: "voicebase",
			status: "active",
			subtitle: "Worked as a software engineer with a team to create two products for a voice recognition startup.",
			title: "Developer Portal and Player",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/voicebase.md"
		}
	},
	{
		wantedsanta: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "ESET",
			date: "20190000",
			description: "Wanted Santa was a creation for ESET, a European online security company.\n\nWanted Santa allowed you to get arrested, have your mugshot taken, write a message, and then share it freely with your friends. It was a fun Flash-based microsite that incorporated features such as the ability to upload your photo to customize the message written on the picture and then forward it as a single JPEG image to multiple friends.\n\nBecause ESET was a reasonably large company, we built the system to handle a massive load of users using load-balancing technology.",
			discipline: "Discipline",
			firm: "Teak Motion Digital",
			heroImage: "projects/WantedSanta/WantedSanta-top-248_yi27w9",
			imagePath: "/projects/WantedSanta",
			limageSourceDirName: "WantedSanta",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "project-right-33.jpg"
				},
				{
					src: "project-right-35.jpg"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "An interactive microsite for playing Santa, getting arrested, and letting all your friends know.",
			title: "ESET Interactive Holliday Promo ",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/wantedsanta.md"
		}
	},
	{
		wineries: {
			author: "Gregory Cowley",
			category: "engineer",
			categoryAlt: "Unused",
			client: "Various",
			date: "20190000",
			description: "I built a number of websites for the niche market that is Napa wineries. Napa is a very close community, and several companies focus almost entirely on producing websites for the wineries.\n\nFor these projects, I translated Photoshop designs supplied by these firms into HTML, CSS, and Flash. ",
			discipline: "Discipline",
			firm: "Various",
			heroImage: "projects/Wineries/Wineries-top-15_nkawql",
			imagePath: "/projects/Wineries",
			limageSourceDirName: "Wineries",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Wineries/Wineries-right-07_sfngl4"
				},
				{
					src: "projects/Wineries/Wineries-right-08_x5nike"
				},
				{
					src: "projects/Wineries/Wineries-right-09_fl8s65"
				},
				{
					src: "projects/Wineries/Wineries-right-10_i6e85u"
				},
				{
					src: "projects/Wineries/Wineries-right-11_vnhimw"
				},
				{
					src: "projects/Wineries/Wineries-right-12_tqcsxr"
				},
				{
					src: "projects/Wineries/Wineries-right-13_yuiecy"
				},
				{
					src: "projects/Wineries/Wineries-right-14_wetlb6"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Development of various websites for Napa based wineries.",
			title: "Websites for Napa Websites",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/wineries.md"
		}
	},
	{
		zephyros: {
			author: "Gregory Cowley",
			category: "designer",
			categoryAlt: "Unused",
			client: "Intel",
			date: "20190000",
			description: "Fully produced in-house by Gregory Cowley Studios, the Zephyros presentation was a project initiated by the Intel mobile platforms group. It involved prototype products produced in collaboration with IDEO.\n\nThe prototypes were portable electronics foreshadowing the coming of the iPhone and the iPad. Items that we now take for granted as universal mobile technology. The Zephyros project included an interactive presentation that showed the use of hypothetical products in context. Vignettes of different countries around the world were simulated. The presentation took the audience from Beijing to Seoul, to San Francisco, Sao Paulo, Munich, and New Delhi.\n\nThe presentation starred a range of users from business professionals to students, backpackers, travelers, and ordinary people. Zephyros was meant to show how these products can be integrated into everyday life and to show how the products could enhance work and life experiences.",
			discipline: "Discipline",
			firm: "Intel",
			heroImage: "projects/Zephyros/Zephyros-top-31_dmugne",
			imagePath: "/projects/Zephyros",
			limageSourceDirName: "Zephyros",
			leftImages: [
				{
					src: "project-left-40.jpg"
				},
				{
					src: "project-left-41.jpg"
				}
			],
			projectType: "Project Type",
			projecttype: "Project Type",
			rightImages: [
				{
					src: "projects/Zephyros/Zephyros-right-27_cayp0t"
				},
				{
					src: "projects/Zephyros/Zephyros-right-28_ekq6nr"
				},
				{
					src: "projects/Zephyros/Zephyros-right-29_vetgyy"
				},
				{
					src: "projects/Zephyros/Zephyros-right-30_csk7hm"
				},
				{
					src: "projects/Zephyros/Zephyros-right-32_e1jdr3"
				}
			],
			slug: "project-slug",
			status: "active",
			subtitle: "Directed and produced a fully non-linear interactive presentation for a prototype product created through a partnership between IDEO and Intel. ",
			title: "Intel Mobile Platform Group - Zephyros",
			type: "Component",
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/projects/zephyros.md"
		}
	},
	{
		_0Role: {
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/resume/0_role.md"
		}
	},
	{
		_1Skills: {
			Tools: {
				Languages: [
					"JavaScript/NodeJS",
					"HTML5/LESS/SCSS",
					"ActionScript/Java",
					"PHP",
					"Lua",
					"Objective-C",
					"Python"
				],
				Frameworks: [
					"React/Redux",
					"RxJS",
					"AngularJS",
					"Apache Flex",
					"jQuery"
				],
				Workflow: [
					"Git",
					"NPM/Yarn",
					"Webpack/Neutrino",
					"Ant/Grunt/Gulp"
				],
				QA: [
					"ESLint",
					"Jest/Enzyme",
					"Selenium"
				],
				DevOps: [
					"Jenkins",
					"Docker",
					"Vagrant",
					"Chef",
					"AWS/CloudFront",
					"MySQL/PostgreSQL"
				],
				Methodologies: [
					"Agile with Jira/Slack",
					"Scrum"
				],
				OtherKeyKools: [
					"Photoshop",
					"Animation",
					"SVG Illustration",
					"Sketch",
					"Adobe XD"
				]
			},
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/resume/1_skills.md"
		}
	},
	{
		_2experience: {
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/resume/2_experience.md"
		}
	},
	{
		_3education: {
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/resume/3_education.md"
		}
	},
	{
		clients: {
			slug: "client",
			title: "Clients",
			status: "draft",
			subtitle: "Firms and projects",
			description: "Clients",
			date: 20201007,
			clients: {
				GregoryCowleyStudios: {
					clients: [
						"O'Reilly Media",
						"Jandy Pools",
						"The Sak",
						"Wired Magazine",
						"Macromedia",
						"Intel",
						"Motorola",
						"SFMOMA",
						"Duty Free Shoppers",
						"4by6.com",
						"University Games"
					]
				},
				MarchFIRSTCKS: {
					clients: [
						"Apple Computer",
						"Levi's",
						"Barbie.com",
						"Nike"
					]
				},
				_3feetofftheground: {
					clients: [
						"Oracle Open World",
						"Eight Inc.",
						"Openwave",
						"hp"
					]
				},
				Razorfish: {
					clients: [
						"Honda NSX",
						"Microsoft"
					]
				},
				FineDesign: {
					clients: [
						"Stag's Leap Winery"
					]
				},
				Metadesign: {
					clients: [
						"PCWorld.com",
						"Four Seasons Hotels"
					]
				},
				IDEO: {
					clients: [
						"Intel",
						"Hp",
						"Chase Bank",
						"ASUS",
						"Audi"
					]
				},
				Intuit: null,
				TollesonDesign: {
					clients: [
						"Adobe Elements Packaging"
					]
				},
				DrPepper: {
					clients: [
						"Academy of Country Music",
						"Red Cross"
					]
				},
				ButlerShineandStern: {
					clients: [
						"Specialized Bicycles"
					]
				},
				LandorAssociates: {
					clients: [
						"KFC Rebranding",
						"2002 Olympics",
						"American Airlines",
						"Thai Airways",
						"Clorox",
						"Lucent Technologies",
						"Radio Shack",
						"hp",
						"Lucky Goldstar",
						"Ford Motor Company",
						"Frito Lay",
						"FedEx"
					]
				},
				Punchcut: {
					clients: [
						"Dwell Magazine",
						"Disney's VMK.com",
						"Cingular",
						"Nokia",
						"Intel"
					]
				},
				ElevenInc: null,
				GilmourCraves: {
					clients: [
						"Wells Fargo",
						"Savoir Faire",
						"Adaptive Planning",
						"Detour Bar"
					]
				},
				Odopod: {
					clients: [
						"NikeSkateboarding.com",
						"Hp",
						"Intel"
					]
				},
				PropaneStudio: {
					clients: [
						"Kaiser Permanente",
						"Palo Alto Medical Foundation",
						"Grocery Outlet"
					]
				},
				CompassMarketing: null,
				ElixirDesign: {
					clients: [
						"Opes Advisors",
						"Sundance Resorts"
					]
				},
				BlurbInc: null,
				RocketLawyer: null,
				Voicebase: null
			},
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/sidebars/clients.md"
		}
	},
	{
		tools: {
			author: "Gregory Cowley",
			category: "Category Name",
			categoryAlt: "Unused",
			date: "20200000",
			description: "Understanding that specific \"tech\" names are just tools, not the underlying technology.",
			discipline: "Discipline",
			projectType: "Project Type",
			projecttype: "Project Type",
			slug: "tools",
			status: "draft",
			subtitle: "Digital Skillset",
			title: "Tools",
			type: "Component",
			tools: {
				Languages: [
					"JavaScript veteran fluent with the most current frameworks and paradigms going back to 1995",
					"Apache Flex/",
					"ActionScript 3.0",
					"ES3",
					"ES5+",
					"NodeJS",
					"Java",
					"Python",
					"Objective-C/Native",
					"iOS",
					"C++",
					"LUA",
					"PHP",
					"Ruby"
				],
				Backend: [
					"Jenkins",
					"Docker",
					"Vagrant",
					"Chef",
					"AWS/CloudFront",
					"MySQL/PostgreSQL"
				],
				VisualEffects: [
					"AfterEffects",
					"Houdini"
				],
				Design: [
					"Illustrator",
					"XD",
					"Sketch",
					"Figma",
					"PhotoSho",
					"Lightroom"
				],
				Trends: [
					"React",
					"Redux",
					"Redux Saga",
					"BottleJS",
					"AngularJS",
					"Angular",
					"RxJS"
				],
				Workflow: [
					"NPM",
					"Yarn",
					"Maven",
					"PIP",
					"Brew"
				],
				CVSManagement: [
					"Lerna",
					"Git/Github"
				],
				Markup: [
					"HTML",
					"LESS/SCSS",
					"Postprocesors"
				],
				ABTesting: [
					"Optimizely multi-page A/B and multivariate tests"
				],
				BuildTools: [
					"Grunt",
					"Gulp",
					"Ant",
					"Webpack",
					"Neutrino"
				],
				Methodologies: [
					"Agile with Atlassian tools",
					"Sprints and Release Cycles",
					"Scrum"
				],
				CMS: [
					"Drupal",
					"WordPress",
					"Magneto",
					"Joomla",
					"HippoCMS"
				],
				QA: [
					"ESLint",
					"Jest/Enzyme",
					"Phantom/Casper",
					"Selenium"
				],
				CloudComputing: [
					{
						AmazonWebServices: [
							"EC2",
							"S3",
							"CloudFront",
							"Lex/Sumerian"
						]
					}
				],
				Deployment: [
					"Jenkins",
					"Chef",
					"Capistrano",
					"Apple App Store and iTunes Connect"
				],
				Analytics: [
					"Google Analytics",
					"Mixpanel",
					"MicroStrategy",
					"SumoLogic",
					"Tableau Extentions and integrations"
				],
				API: [
					"RESTful",
					"oAuth",
					"SAML"
				],
				Templating: [
					"Frontmatter",
					"ERB",
					"Handlebars"
				]
			},
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/sidebars/tools.md"
		}
	},
	{
		contactInfo: {
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/skills/contact-info.md"
		}
	},
	{
		headInfo: {
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/skills/head-info.md"
		}
	},
	{
		spIndex1: {
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/skills/spIndex1.md"
		}
	},
	{
		spIndex2: {
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/skills/spIndex2.md"
		}
	},
	{
		spIndex3: {
			path: "/Users/gregorycowley/Projects/g-w--sites-master/submodules/gregorycowley.com/content/skills/spIndex3.md"
		}
	}
];

export default allContent;