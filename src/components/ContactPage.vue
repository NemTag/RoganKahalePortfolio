<script setup lang="ts">
// Both are the originals with half the top/bottom orange cropped off
import left from '../assets/contact-art-left.jpg' // 4.jpg
import right from '../assets/contact-art-right.jpg' // 2.jpg
import under from '../assets/Visual Elements/9.jpg'
</script>

<template>
  <section class="contact">
    <img class="art left" :src="left" alt="" />
    <div class="info">
      <h1>Contact</h1>
      <p><span class="label">Call/text:</span> <a href="tel:+12089646337">(208)964-6337</a></p>
      <p><span class="label">Email:</span> <a href="mailto:rogantinsley648@gmail.com">rogantinsley648@gmail.com</a></p>
      <p><span class="label">Instagram:</span> <a href="https://www.instagram.com/rogan.kahale/" target="_blank" rel="noopener">@rogan.kahale</a></p>
      <p><span class="label">Youtube:</span></p>
      <p class="signoff">Malama,<br />Rogan</p>
      <img class="under" :src="under" alt="" />
    </div>
    <img class="art right" :src="right" alt="" />
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  text-align: center;
}

/* Narrow screens: text first, then the two panels side by side below it */
.info {
  flex-basis: 100%;
  order: -1;
}

/* Same box for both so they match; 4.jpg is narrower, so the box's
   background (the drawings' shared orange) fills its sides */
.art {
  width: 40%;
  aspect-ratio: 460 / 969;
  object-fit: contain;
  background: #fea501;
}

/* Wide screens: pin each panel to its window edge, hanging off the header.
   No `top` set, so they sit right under the header; margin cancels main's top padding.
   Width is capped by both window width and height so they never cover the text. */
@media (min-width: 900px) {
  .art {
    position: absolute;
    width: min(22vw, 33vh);
    margin-top: -2rem;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
}

.label {
  color: var(--accent);
}

a {
  color: var(--text);
}

.signoff {
  margin-top: 1.5rem;
}

/* capped so it fits between the side panels at the 900px breakpoint */
.under {
  display: block;
  width: min(100%, 480px);
  margin: 1.5rem auto 0;
}
</style>
