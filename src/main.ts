import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import FrontPage from './components/FrontPage.vue'
import MusicPage from './components/MusicPage.vue'
import JazzPage from './components/JazzPage.vue'
import OrchestralPage from './components/OrchestralPage.vue'
import FakebookPage from './components/FakebookPage.vue'
import ContactPage from './components/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: FrontPage },
    { path: '/music', component: MusicPage }, // All works (the base page)
    { path: '/music/jazz', component: JazzPage },
    { path: '/music/orchestral', component: OrchestralPage },
    { path: '/music/fakebook', component: FakebookPage },
    { path: '/contact', component: ContactPage },
  ],
})

createApp(App).use(router).mount('#app')
