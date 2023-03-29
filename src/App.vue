<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getSongs } from '@/firebase/songs'
// import types
import type { Song } from '@/types/songs'
// components
import SongsList from '@/components/SongsList.vue'

const songs = ref<Song[]>([])

onMounted(() => {
  getSongs(songs)
})
</script>

<template>
  <div class="app">
    <songs-list :songs="songs" />
  </div>
</template>

<style scoped></style>
