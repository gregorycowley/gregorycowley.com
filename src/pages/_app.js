import React from "react";
import App from "next/app";
// import Head from "next/head";

import { ThemeProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";

import "common/styles/css/sanitize.css";

import { GlobalStyles, Header, Footer, Metas } from "components";

import theme from "common/styles/theme";


class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		

		const config = {
			disableOverflow: false,
			isHome: true,
			isHeaderDark: false,
			isBodyDark: true,
		};

		return (
			<HelmetProvider>
				<ThemeProvider theme={theme}>
					<Metas wording="app" />
					<GlobalStyles
						isBodyDark={config.isBodyDark}
						disableOverflow={config.disableOverflow}
					/>
					<Header
						isHome={config.isHome}
						isHeaderDark={config.isHeaderDark}
						isBodyDark={config.isBodyDark}
					/>
					<Component {...pageProps} />
					<Footer isDarkTheme={true}/>
				</ThemeProvider>
			</HelmetProvider>
		);
	}
}

// // Only uncomment this method if you have blocking data requirements for
// // every single page in your application. This disables the ability to
// // perform automatic static optimization, causing every page in your app to
// // be server-side rendered.

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

// export default MyApp;

// MyApp.contextType = MyContext;
export default MyApp;

