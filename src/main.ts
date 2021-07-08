import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)
app.use(VueLazyLoad)
app.mount('#app')