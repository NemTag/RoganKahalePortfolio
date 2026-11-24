<script setup lang="ts">
import MusicPage from './MusicPage.vue'
import { fakebookSongs } from '../songs'
import footer from '../assets/fakebook-footer.jpg' // 12.jpg rotated flat, cropped to the drawing
</script>

<template>
  <MusicPage title="My Fakebook" :songs="fakebookSongs" :footer="footer" />
</template>
