<script setup lang="ts">
// Plays when "Who?" is clicked (file lives in public/). Repeat clicks restart it.
const reveal = new Audio(import.meta.env.BASE_URL + 'among-us-role-reveal-sound-effect.mp3')
function playReveal() {
  reveal.currentTime = 0
  reveal.play().catch(() => {}) // never break navigation over a sound
}
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/">Rogan Kahale Tinsley</RouterLink>
    <nav>
      <RouterLink to="/" @click="playReveal">Who?</RouterLink>
      <RouterLink to="/music">My works</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 96px;
  padding: 1rem 2rem;
  /* tile scales to bar height and repeats across; zoom changes how many tiles fit */
  background: url('./assets/header-bg.jpg') left center / auto 100% repeat-x;
}

.site-header a {
  color: var(--text);
  font-weight: bold;
  text-decoration: none;
  /* dark outline keeps pink readable over the busy orange/blue art */
  text-shadow:
    -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
}

.brand {
  font-weight: bold;
  font-size: 1.25rem;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a:hover,
nav a.router-link-exact-active {
  text-decoration: underline;
}

main {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
