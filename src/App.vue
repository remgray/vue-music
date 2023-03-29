<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getSongs } from '@/firebase/songs'
// import types
import type { Song } from '@/types/songs'
// components
import SongsList from '@/components/SongsList.vue'
import SongsPlayer from '@/components/SongsPlayer.vue'

const songs = ref<Song[]>([])

onMounted(() => {
  getSongs(songs)
})
</script>

<template>
  <div class="app">
    <main>
      <songs-player />
      <songs-list :songs="songs" />
    </main>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  place-content: center;
  min-height: 100vh;
}
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
