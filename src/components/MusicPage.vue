<script setup lang="ts">
import placeholder from '../assets/Visual Elements/11.jpg'

// Add a song = add a line to match the array
const songs = [
  { title: 'Song Title One', image: placeholder, pdf: 'https://example.com/song-one.pdf' },
  { title: 'Song Title Two', image: placeholder, pdf: 'https://example.com/song-two.pdf' },
]
</script>

<template>
  <section>
    <h1>My works</h1>

    <article v-for="song in songs" :key="song.title" class="song">
      <h2>{{ song.title }}</h2>
      <div class="song-body">
        <img :src="song.image" :alt="song.title" />
        <a :href="song.pdf" target="_blank" rel="noopener">Sheet music (PDF)</a>
      </div>
    </article>
  </section>
</template>

<style scoped>
.song {
  margin-top: 2rem;
}

.song-body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
}

.song-body img {
  width: min(100%, 400px);
  height: auto;
}

.song-body a {
  color: var(--text);
}
</style>
