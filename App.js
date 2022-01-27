import React from 'react'
import { Provider } from 'react-redux'
import Navigation from './Navigation.js'
import { store } from './redux/store.js'

export default function App () {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
