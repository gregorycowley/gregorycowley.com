export default {
	HOME: {
		menu: {
			col: 1,
			order: 1
		},
		isHome: true,
		isHeaderDark: true,
		isBodyDark: false,
		footerOrder: 1
	},
	PROJECTS: {
		menu: {
			col: 1,
			order: 2
		},
		isHeaderDark: false,
		isBodyDark: false,
		footerOrder: 3
	},
	PROJECT: {
		menu: {
			col: null,
			order: null
		},
		isHeaderDark: true, // each project provides a background color for PageHeader
		isBodyDark: false
	},
	EXPERIMENTS: {
		menu: {
			col: 1,
			order: 3
		},
		isHeaderDark: true,
		isBodyDark: true,
		footerOrder: 4
	},
	EXPERIMENT: {
		menu: {
			col: null,
			order: null
		},
		isHeaderDark: true, // each project provides a background color for PageHeader
		isBodyDark: true
	},
	ABOUT: {
		disableOverflow: true,
		menu: {
			col: 2,
			order: 1
		},
		isHeaderDark: false,
		isBodyDark: false,
		footerOrder: 5
	},
	SERVICES: {
		disableOverflow: true,
		menu: {
			col: 1,
			order: 1
		},
		isHeaderDark: false,
		isBodyDark: false,
		footerOrder: 2
	},
	CONTACT: {
		menu: {
			col: 2,
			order: 3
		},
		isHeaderDark: false,
		isBodyDark: false,
		footerOrder: 10
	},
	STORIES: {
		menu: {
			col: 2,
			order: 2
		},
		isHeaderDark: false,
		isBodyDark: false,
		footerOrder: 6
	},
	PRESSKIT: {
		menu: {
			col: null,
			order: null
		},
		isHeaderDark: false,
		isBodyDark: false,
		footerOrder: 9
	},
	// GUIDELINES: {
	//   menu: {
	//     col: null,
	//     order: null
	//   },
	//   isHeaderDark: false,
	//   isBodyDark: false,
	//   footerOrder: 8
	// },
	TERMS: {
		menu: {
			col: null,
			order: null
		},
		isHeaderDark: false,
		isBodyDark: false
	},
	NOT_FOUND: {
		menu: {
			col: null,
			order: null
		},
		isHeaderDark: true,
		isBodyDark: true
	}
};
