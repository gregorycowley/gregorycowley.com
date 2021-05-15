import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

import App from './App'

const rootElement = document.getElementById('root')

Modal.setAppElement(rootElement)

const render = (Component) => {
  if (rootElement.hasChildNodes()) {
    console.log("Hydrating");
    return ReactDOM.hydrate(<Component />, rootElement)
  } else {
    console.log("Rendering");
    return ReactDOM.render(<Component />, rootElement)
  }
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}
