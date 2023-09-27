import React from 'react'
import ReactDOM from 'react-dom/client'
import singleSpaReact from 'single-spa-react'
import App from './App'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM:ReactDOM.createRoot(
      document.getElementById('react')
  ),
  // renderType:  ReactDOM.createRoot(
  //             document.getElementById('root')
  //   ),
 rootComponent: App,
   // domElementGetter: () => document.getElementById('react'),
  suppressComponentDidCatchWarning: true,
})

export const bootstrap = [reactLifecycles.bootstrap]

export const mount = [reactLifecycles.mount]

export const unmount = [reactLifecycles.unmount]
