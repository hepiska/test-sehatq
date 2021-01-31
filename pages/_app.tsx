import { Provider } from 'react-redux'
import { useStore } from '../store'
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import "../styles/index.css"


export default function App({ Component , pageProps }:any) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
