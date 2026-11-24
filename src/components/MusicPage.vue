<script setup lang="ts">
// Base works page. Used as-is it's the All page; JazzPage / OrchestralPage / FakebookPage
// wrap it with their own title, songs and footer.
import { allSongs, type Song } from '../songs'
import allFooter from '../assets/Visual Elements/8.jpg' // uncropped

withDefaults(defineProps<{ title?: string; songs?: Song[]; footer?: string }>(), {
  title: 'All Works',
  songs: () => allSongs,
  footer: allFooter,
})

// Subpage buttons. `sound` plays on click (files live in public/); one player per sound,
// so a repeat click restarts it instead of stacking copies. No sound = silent.
const links = [
  { to: '/music/jazz', label: 'My Jazz Works', sound: new Audio(import.meta.env.BASE_URL + 'freeform-jazz.mp3') },
  { to: '/music/orchestral', label: 'My Orchestral Works', sound: new Audio(import.meta.env.BASE_URL + 'orchestra-hit-hq.mp3') },
  { to: '/music/fakebook', label: 'My Fakebook', sound: new Audio(import.meta.env.BASE_URL + 'hawaiian-flower-3-spongebob-squarepants.mp3') },
  { to: '/music', label: 'All' },
]
function play(sound?: HTMLAudioElement) {
  if (!sound) return
  sound.currentTime = 0
  sound.play().catch(() => {}) // e.g. file blocked or missing; never break navigation over it
}
</script>

<template>
  <section>
    <nav class="subnav">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to" @click="play(link.sound)">
        {{ link.label }}
      </RouterLink>
    </nav>

    <h1>{{ title }}</h1>

    <article v-for="song in songs" :key="song.title" class="song">
      <h2>{{ song.title }}</h2>
      <div class="song-body">
        <img :src="song.image" :alt="song.title" />
        <div class="song-side">
          <p v-if="song.description">{{ song.description }}</p>
          <a v-if="song.pdf" :href="song.pdf" target="_blank" rel="noopener">Sheet music (PDF)</a>
        </div>
      </div>
    </article>

    <footer
      v-if="footer"
      class="page-footer"
      :style="{ backgroundImage: `url('${footer}')` }"
      aria-hidden="true"
    ></footer>
  </section>
</template>

<style scoped>
.subnav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.subnav a {
  padding: 0.75rem 1.25rem;
  background: url('../assets/Visual Elements/10.jpg') center / cover;
  color: var(--text);
  font-weight: bold;
  text-decoration: none;
  /* same outline as the header so pink stays readable on the art */
  text-shadow:
    -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
}

.subnav a:hover,
.subnav a.router-link-exact-active {
  outline: 3px solid var(--accent);
}

.song {
  margin-top: 2rem;
}

/* Looped like the header (image comes from the `footer` prop). Breaks out of main's 960px
   column to span the full window, and cancels main's bottom padding to sit flush. */
.page-footer {
  height: 96px;
  width: 100vw;
  margin: 3rem 0 -2rem calc(50% - 50vw);
  background-position: left center;
  background-size: auto 100%;
  background-repeat: repeat-x;
}

.song-body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}

.song-side {
  flex: 1 1 240px;
}

.song-side p {
  margin-bottom: 1rem;
  white-space: pre-line; /* \n in a description = line break (e.g. before the duration) */
}

.song-body img {
  width: min(100%, 400px);
  height: auto;
}

.song-body a {
  color: var(--text);
}
</style>
