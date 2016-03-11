import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import persistState from 'redux-localstorage'

const createPersistentStore = compose(persistState())(createStore)
const store = createPersistentStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
