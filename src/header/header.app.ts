import React from 'react'
import singleSpaReact from 'single-spa-react'
import Header from './header'
import ReactDOMClient from "react-dom/client";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Header,
  domElementGetter: () => document.getElementById('header'),
  suppressComponentDidCatchWarning: true,
})

export const bootstrap = [reactLifecycles.bootstrap]

export const mount = [reactLifecycles.mount]

export const unmount = [reactLifecycles.unmount]
