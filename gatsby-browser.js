import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hydrate } from 'emotion'

import createStore from './src/state/index'

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore()

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}

exports.onClientEntry = () => {
  if (
    /* eslint-disable no-underscore-dangle */
    typeof window !== `undefined` &&
    typeof window.__EMOTION_CRITICAL_CSS_IDS__ !== `undefined`
  ) {
    hydrate(window.__EMOTION_CRITICAL_CSS_IDS__);
  }
}

exports.onInitialClientRender = () => {
  require ('./src/assets/js/jquery-init.js');
}
