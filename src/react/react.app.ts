import React from 'react'
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react'
import App from './App'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  domElementGetter: () => document.getElementById('react'),
  suppressComponentDidCatchWarning: true,
})

export const bootstrap = [reactLifecycles.bootstrap]

export const mount = [reactLifecycles.mount]

export const unmount = [reactLifecycles.unmount]
