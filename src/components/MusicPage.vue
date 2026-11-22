<script setup lang="ts">
import { computed } from 'vue'
import placeholder from '../assets/Visual Elements/11.jpg'
import jazzFooter from '../assets/jazz-footer.jpg' // 4.jpg rotated flat, cropped to the drawing
import orchestralFooter from '../assets/orchestral-footer.jpg' // 10.jpg cropped to the drawing
import fakebookFooter from '../assets/fakebook-footer.jpg' // 12.jpg rotated flat, cropped to the drawing
import allFooter from '../assets/Visual Elements/8.jpg' // uncropped

// No category = the All page (/music)
const props = defineProps<{ category?: string }>()

// Subpage slug (used in the URL) -> page title. Add a subpage = add a line here and to the route in main.ts.
const categories: Record<string, string> = {
  jazz: 'My Jazz Works',
  orchestral: 'My Orchestral Works',
  fakebook: 'My Fakebook',
}

// Add a song = add an entry. `category` decides which subpage it lands on; All shows every song.
const songs = [
  {
    title: 'Jazz Song One', category: 'jazz', image: placeholder,
    description: 'Description goes here.',
    pdf: 'https://example.com/jazz-one.pdf',
  },
  {
    title: 'Jazz Song Two', category: 'jazz', image: placeholder,
    description: 'Description goes here.',
    pdf: 'https://example.com/jazz-two.pdf',
  },
  {
    title: 'Orchestral Piece One', category: 'orchestral', image: placeholder,
    description: 'Description goes here.',
    pdf: 'https://example.com/orch-one.pdf',
  },
  {
    title: 'Orchestral Piece Two', category: 'orchestral', image: placeholder,
    description: 'Description goes here.',
    pdf: 'https://example.com/orch-two.pdf',
  },
  {
    title: 'Fakebook Tune One', category: 'fakebook', image: placeholder,
    description: 'Description goes here.',
    pdf: 'https://example.com/fake-one.pdf',
  },
  {
    title: 'Fakebook Tune Two', category: 'fakebook', image: placeholder,
    description: 'Description goes here.',
    pdf: 'https://example.com/fake-two.pdf',
  },
]

// Looping footer art per subpage (`all` = the All page). Subpages not listed get no footer.
const footers: Record<string, string> = {
  jazz: jazzFooter,
  orchestral: orchestralFooter,
  fakebook: fakebookFooter,
  all: allFooter,
}

// Sound played when a subpage button is clicked (files live in public/). Subpages not listed are silent.
// One player per sound: a repeat click restarts it instead of stacking copies.
const sounds: Record<string, HTMLAudioElement> = {
  jazz: new Audio('/freeform-jazz.mp3'),
  orchestral: new Audio('/orchestra-hit-hq.mp3'),
  fakebook: new Audio('/hawaiian-flower-3-spongebob-squarepants.mp3'),
}
function playSound(slug: string) {
  const sound = sounds[slug]
  if (!sound) return
  sound.currentTime = 0
  sound.play().catch(() => {}) // e.g. file blocked or missing; never break navigation over it
}

const footer = computed(() => footers[props.category ?? 'all'])
const title = computed(() => (props.category ? categories[props.category] : 'All Works'))
const shown = computed(() => (props.category ? songs.filter((s) => s.category === props.category) : songs))
</script>

<template>
  <section>
    <nav class="subnav">
      <RouterLink
        v-for="(name, slug) in categories"
        :key="slug"
        :to="`/music/${slug}`"
        @click="playSound(slug)"
      >{{ name }}</RouterLink>
      <RouterLink to="/music">All</RouterLink>
    </nav>

    <h1>{{ title }}</h1>

    <article v-for="song in shown" :key="song.title" class="song">
      <h2>{{ song.title }}</h2>
      <div class="song-body">
        <img :src="song.image" :alt="song.title" />
        <div class="song-side">
          <p>{{ song.description }}</p>
          <a :href="song.pdf" target="_blank" rel="noopener">Sheet music (PDF)</a>
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

/* Looped like the header (image comes from `footers`). Breaks out of main's 960px
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
}

.song-body img {
  width: min(100%, 400px);
  height: auto;
}

.song-body a {
  color: var(--text);
}
</style>
