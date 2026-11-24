<script setup lang="ts">
import MusicPage from './MusicPage.vue'
import { orchestralSongs } from '../songs'
import footer from '../assets/orchestral-footer.jpg' // 10.jpg cropped to the drawing
</script>

<template>
  <MusicPage title="My Orchestral Works" :songs="orchestralSongs" :footer="footer" />
</template>
