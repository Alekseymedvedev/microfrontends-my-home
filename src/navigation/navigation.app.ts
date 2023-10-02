import React from 'react'
import singleSpaReact from 'single-spa-react'
import Navigation from './navigation'
import ReactDOMClient from "react-dom/client";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Navigation,
  domElementGetter: () => document.getElementById('navigation'),
  suppressComponentDidCatchWarning: true,
})

export const bootstrap = [reactLifecycles.bootstrap]

export const mount = [reactLifecycles.mount]

export const unmount = [reactLifecycles.unmount]
