<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getSongs, addSongs } from '@/firebase/songs'
// import types
import type { Song } from '@/types/songs'
// components
import SongsList from '@/components/SongsList.vue'
import SongsPlayer from '@/components/SongsPlayer.vue'

const songs = ref<Song[]>([])
const isLoading = ref(false)

const playingSongs: Song[] = [
  {
    id: '1',
    title: 'So What',
    artist: 'Miles Davis',
    year: 1959
  },
  {
    id: '2',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    year: 1991
  },
  {
    id: '3',
    title: 'What a Wonderful World',
    artist: 'Louis  Armstrong',
    year: 1967
  },
  {
    id: '4',
    title: 'The Look',
    artist: 'Roxette',
    year: 1988
  }
]

onMounted(() => {
  getSongs(songs, isLoading)
})

const addToFavorite = async (songId: string) => {
  const song = playingSongs.find((song) => song.id === songId)
  if (song) {
    await addSongs(song)
  }
}
</script>

<template>
  <div class="app">
    <main>
      <songs-player @add-to-favorite="addToFavorite" :songs="playingSongs" />
      <songs-list :isLoading="isLoading" :songs="songs" />
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
  max-width: 300px;
}
main > * {
  width: 100%;
}
</style>
