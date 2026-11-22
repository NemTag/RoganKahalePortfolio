<script setup lang="ts">
import signature from '../assets/Visual Elements/My signature on yellow.jpg'
import squiggle from '../assets/Visual Elements/9.jpg'
</script>

<template>
  <section class="bio">
    <h1>Mahalo, I'm Rogan Kahale</h1>
    <p class="greeting">Hi!</p>
    <p>
      My name is Rogan Kahale Tinsley. I am a saxophonist, composer, ethnomusicologist, and sound
      artist, currently based out of Seattle, Washington.
    </p>
    <p>
      As a composer, I specialize in creating music which fuses indigenous sensibilities with
      Western musical practices. My musical practice combines contemporary performance practices
      with indigenous sensibilities and storytelling. You can find samples of my works below, or on
      my instagram/youtube channels, which you can also find links to below.
    </p>
    <p>
      I am the current resident composer/arranger for the Julia Keefe Indigenous Big Band, a New
      York-based all-indigenous jazz big band dedicated to showcasing the history of indigenous
      people in jazz music. I also tour with the Julia Keefe Band as lead alto saxophone, performing
      my works in prestigious venues such as the Kennedy Center, Birdland, Yale University, and
      more. During my time as a touring musician, I have had the honor of sharing the stage with
      acts such as Esperanza Spalding, US Poet Laureate Joy Harjo, Kansas, Theo Katzman, Allen
      Stone, and many more.
    </p>
    <p>
      In addition to my work with Julia Keefe, I also co-direct, manage, and compose for my own
      Spokane-based big band, the Imagine Jazz Big Band. The IJBB is dedicated to creating a space
      for young composers and musicians to create new, cutting edge music. As the director of the
      Imagine Jazz Big Band, I have curated a collection of over 50 big band charts, composed by or
      arranged entirely by local musicians.
    </p>
    <p>
      Last spring, I graduated with a Bachelor of Arts in music from Washington State University,
      and I am currently a full-time touring musician and composer with multiple groups across
      America.
    </p>
    <p>
      If you are interested in joining the Imagine Jazz Big Band, or if you are interested in
      commissioning me for a composition/arrangement, please reach out to me via any of the methods
      listed below. Thank you and I hope to hear from you soon!
    </p>
    <div class="sign-off">
      <img class="signature" :src="signature" alt="Rogan Kahale Tinsley's signature" />
      <div class="stack">
        <img :src="squiggle" alt="" />
        <img :src="squiggle" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Matches the source doc: blank line between paragraphs, first line indented, greeting not */
.bio p {
  margin-top: 1em;
  text-indent: 3em;
}

/* Signature (half the bio's width) + two 9.jpg copies stacked to its right,
   each exactly half the signature's height, so the three read as one image */
.sign-off {
  display: flex;
  margin-top: 1.5em;
}

.sign-off img {
  display: block;
}

.signature,
.stack {
  width: 50%;
}

/* Box = signature's width x half its height (2610x1927 source). 9.jpg is wider than
   that, so `cover` trims its sides, which are mostly empty orange. */
.stack img {
  width: 100%;
  aspect-ratio: 2610 / 963.5;
  object-fit: cover;
}

.bio .greeting {
  text-indent: 0;
}
</style>
