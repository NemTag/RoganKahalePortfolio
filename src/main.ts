import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import FrontPage from './components/FrontPage.vue'
import MusicPage from './components/MusicPage.vue'
import ContactPage from './components/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: FrontPage },
    // /music is All; the subpages reuse the same component, filtered by category
    { path: '/music', component: MusicPage },
    { path: '/music/:category(jazz|orchestral|fakebook)', component: MusicPage, props: true },
    { path: '/contact', component: ContactPage },
  ],
})

createApp(App).use(router).mount('#app')
