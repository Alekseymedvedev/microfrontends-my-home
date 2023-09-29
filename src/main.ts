import { registerApplication, start } from 'single-spa';
import { createStore } from './store/index';


  const store = createStore();

registerApplication(
  'vue',
  () => import('./vue/vue.app'),
  () => location.pathname.startsWith('/')
)

registerApplication(
  'react',
  () => import('./react/react.app'),
  () => location.pathname.startsWith('/')
)

start()

export default store