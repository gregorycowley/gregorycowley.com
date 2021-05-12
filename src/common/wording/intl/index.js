import { IntlProvider } from "react-intl";
import { withRouter } from "react-router-dom";
import { compose, withProps } from "recompose";

import messagesFr from "common/wording/fr.json5";
import messagesEn from "common/wording/en.json5";

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

// const messages = {
//   fr: {},
//   en: {},
// };

export default compose(
  withRouter,
  withProps((props) => {

    // console.log(">> Props <<", props);
    
    if ( props ) {
      const {
        params: { lang },
      } = props.match;
      return { locale: lang, messages: messages[lang] };
    } else {
      return { locale: "en", messages: messages["en"] };
    }
  })
)(IntlProvider);
