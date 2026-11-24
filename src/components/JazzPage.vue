<script setup lang="ts">
import MusicPage from './MusicPage.vue'
import { jazzSongs } from '../songs'
import footer from '../assets/jazz-footer.jpg' // 4.jpg rotated flat, cropped to the drawing
</script>

<template>
  <MusicPage title="My Jazz Works" :songs="jazzSongs" :footer="footer" />
</template>
