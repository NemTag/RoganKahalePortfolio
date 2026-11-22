import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import FrontPage from './components/FrontPage.vue'
import MusicPage from './components/MusicPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: FrontPage },
    { path: '/music', component: MusicPage },
  ],
})

createApp(App).use(router).mount('#app')
