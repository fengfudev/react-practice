import React, { Component } from 'react'
import ReactDom from 'react-dom'
import App from './App'
import AppStore from './stores/AppStore'

ReactDom.render(<App store={AppStore} />, document.getElementById('app'))

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     ReactDom.render(<App />, document.getElementById('app'))
//   });
// }