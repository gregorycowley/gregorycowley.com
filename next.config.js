const glob = require("glob");
const path = require("path");
const withImages = require("next-images");

const ESLintPlugin = require("eslint-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const webpack = require("webpack");

const ASSET_PATH = process.env.ASSET_PATH || "/";

/**
 * next.config.js
 */

module.exports = withImages({
	// basePath: "",

	cssModules: false,

	future: {
		webpack5: true,
	},

	env: {
		ASSET_PATH: ASSET_PATH,
	},

	// webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

	webpack: (config, options) => {
		config.mode = "development";

		// config.entry = './src/index.js';

		// config.output = {
		//   filename: 'bundle.js',
		//   path: path.resolve(__dirname, 'dist'),
		// },

		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader",
		});

		config.module.rules.push({
			test: /\.json5$/i,
			loader: "json5-loader",
			type: "javascript/auto",
		});

		config.module.rules.push({
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ["babel-loader"],
		});

		// config.module.rules.push({
		// 	test: /\.(png|svg|jpg|jpeg|gif)$/i,
		// 	type: "asset/resource",
		// 	// generator: {
		// 	//   filename: "public/[name].[hash][ext]",
		// 	// },
		// });

		config.module.rules.push({
			test: /\.(svg)$/i,
			type: "asset/resource",
			generator: {
				filename: "svgs/[name].[hash][ext]",
			},
		});
		config.module.rules.push({
			test: /\.(jpe?g|png|gif)$/i,
			use: [
				{
					loader: ImageMinimizerPlugin.loader,
					options: {
						deleteOriginalAssets: true,
						filename: "media/[name].[hash].webp",
						severityError: "warning", // Ignore errors on corrupted images
						minimizerOptions: {
							plugins: ["imagemin-webp"],
						},
					},
				},
			],
		});

		config.resolve.extensions.concat(["*", ".js", ".jsx"]);

		config.resolve.alias = {
			...config.resolve.alias,
			assets: path.resolve(__dirname, "src/assets/"),
			common: path.resolve(__dirname, "src/common/"),
			components: path.resolve(__dirname, "src/components/"),
			content: path.resolve(__dirname, "src/content/"),
			data: path.resolve(__dirname, "src/data/"),
			hooks: path.resolve(__dirname, "src/hooks/"),
			styles: path.resolve(__dirname, "src/styles/"),
			lib: path.resolve(__dirname, "src/lib/"),
		};

		// config.plugins.push(new webpack.HotModuleReplacementPlugin());

		// config.plugins.push(
		// 	new ImageMinimizerPlugin({
		// 		deleteOriginalAssets: true,
		// 		filename: "public/media/[name].webp",
		// 		minimizerOptions: {
		// 			plugins: ["imagemin-webp"],
		// 		},
		// 	})
		// );

		// config.plugins.push(
		// 	new webpack.debug.ProfilingPlugin({
		// 		outputPath: path.join(__dirname, "profiling/profileEvents.json"),
		// 	})
		// );

		// config.plugins.push(
		// 	new webpack.ProgressPlugin({
		// 		activeModules: false,
		// 		entries: true,
		// 		handler(percentage, message, ...args) {
		// 			// custom logic
		// 		},
		// 		modules: true,
		// 		modulesCount: 5000,
		// 		profile: false,
		// 		dependencies: true,
		// 		dependenciesCount: 10000,
		// 		percentBy: null,
		// 	})
		// );

		config.plugins.push(
			new ESLintPlugin({
				outputReport: true,
				context: ".src/",
			})
		);

		return config;
	},
	pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
	exportPathMap: async function () {
		const routes = {
			"/": { page: "/" },
			"/about": { page: "/about" },
			"/resume": { page: "/resume" },
			"/skills": { page: "/skills" },
			"/tools": { page: "/tools" },
		};
		return routes;
	},
});
