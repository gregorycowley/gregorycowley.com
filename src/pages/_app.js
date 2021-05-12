import React from 'react'

import App from "next/app";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
  matchPath
} from 'react-router-dom'

import { HelmetProvider } from 'react-helmet-async'
import { divide, find, map } from 'lodash'
import { ThemeProvider } from '@emotion/react'

import GlobalStyles from 'components/GlobalStyles';
// import 'react-medium-image-zoom/dist/styles.css'

// // common
import ConnectedIntlProvider from 'common/wording/intl'
import theme from 'common/styles/theme';
import ROUTES, { PATH } from 'common/routes';
import LANG from 'common/wording/lang';
import layoutConfig from 'common/configs/layout';

// // components
import Header from 'components/Header';
import Footer from 'components/Footer';
import Metas from 'components/Metas';
import GridHelper from 'components/GridHelper';
import ScrollManagement from 'components/ScrollManagement';

// pages
import Home from 'pages/Home'
import Projects from 'pages/Projects'
import Project from 'pages/Project'
import Experiments from 'pages/Experiments'
import Experiment from 'pages/Experiment'
import About from 'pages/About'
import Services from 'pages/Services'
import Contact from 'pages/Contact'
import Guidelines from 'pages/Guidelines'
import Terms from 'pages/Terms'
import Page404 from 'pages/404'

const isDevMode = process.env.NODE_ENV === 'development'

const getPageConfig = (location, lang) => {
  const routesArray = map(ROUTES, (route, key) => {
    return {
      ...route,
      key
    }
  })

  const value = find(routesArray, (value) => {
    return matchPath(location.pathname, {
      path: `/${lang}/${value.PATH}`,
      exact: true
    })
  })

  return layoutConfig[value ? value.key : 'NOT_FOUND']
}

const AppWithLang = () => {
  const location = useLocation();
  const config = getPageConfig(location, PATH.LANG);

  // console.log(">> config << ", config);

  return (
    <ConnectedIntlProvider>
      <GlobalStyles
        isBodyDark={config.isBodyDark}
        disableOverflow={config.disableOverflow}
      />
      {/* {/* <ScrollManagement /> */}
      <Metas wording="main" />
      {isDevMode && <GridHelper />}
      <Header
        isHome={config.isHome}
        isHeaderDark={config.isHeaderDark}
        isBodyDark={config.isBodyDark}
      />
      <Switch>
        <Route path={`/${PATH.LANG}/${ROUTES.HOME.PATH}`} exact>
          <Home />
        </Route>
        <Route path={`/${PATH.LANG}/${ROUTES.PROJECTS.PATH}`} exact>
          <Projects />
        </Route>
        <Route path={`/${PATH.LANG}/${ROUTES.PROJECT.PATH}`}>
          <Project />
        </Route>
        <Route path={`/${PATH.LANG}/${ROUTES.EXPERIMENTS.PATH}`} exact>
          <Experiments />
        </Route>
        <Route path={`/${PATH.LANG}/${ROUTES.EXPERIMENT.PATH}`}>
          <Experiment />
        </Route>
        <Route path={`/${PATH.LANG}/${ROUTES.ABOUT.PATH}`} exact>
          <About />
        </Route>
        <Route path={`/${PATH.LANG}/${ROUTES.SERVICES.PATH}`} exact>
          <Services />
        </Route>
        <Route path={`/${PATH.LANG}/${ROUTES.CONTACT.PATH}`} exact>
          <Contact />
        </Route>
        <Route path={`/${PATH.LANG}/${ROUTES.TERMS.PATH}`} exact>
          <Terms />
        </Route>
        <Route path={`/${PATH.LANG}/${ROUTES.GUIDELINES.PATH}`} exact>
          <Guidelines />
        </Route>
        <Route
          path={`/${PATH.LANG}/${ROUTES.NOT_FOUND.PATH}`}
          component={Page404}
          exact
        />
        <Redirect to={`/${PATH.LANG}/${ROUTES.NOT_FOUND.PATH}`} />
      </Switch>
      <Footer isDarkTheme />
    </ConnectedIntlProvider>
  );
};




class MyApp extends App {
  render() {



  const isBrowserFrench = navigator.language.slice(0, 2) === "fr";
  // console.log(">> PATH << ", PATH);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path={`/${PATH.LANG}`} component={AppWithLang} />
            <Redirect
              to={`/${isBrowserFrench ? LANG.FR.SLUG : LANG.EN.SLUG}`}
            />
          </Switch>
        </Router>
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

export default MyApp;







// const App = () => {
//   const isBrowserFrench = navigator.language.slice(0, 2) === "fr";
//   // console.log(">> PATH << ", PATH);

//   return (
//     <HelmetProvider>
//       <ThemeProvider theme={theme}>
//         <Router>
//           <Switch>
//             <Route path={`/${PATH.LANG}`} component={AppWithLang} />
//             <Redirect
//               to={`/${isBrowserFrench ? LANG.FR.SLUG : LANG.EN.SLUG}`}
//             />
//           </Switch>
//         </Router>
//       </ThemeProvider>
//     </HelmetProvider>
//   );
// };

// export default App

