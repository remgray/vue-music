<template>
  <v-card title="Player" class="Player">
    <v-card-text>
      <v-icon icon="mdi-play"></v-icon>
      {{ currentSong.id }}
      {{ currentSong.title }}
      {{ currentSong.year }}
    </v-card-text>
    <v-card-actions>
      <v-btn @click="emits('add-to-favorite', currentSong.id)">Add to Favorites</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { Song } from '@/types/songs'
import { ref } from 'vue'

const emits = defineEmits<{
  (e: 'add-to-favorite', id: string): void
}>()

const props = defineProps<{
  songs: Song[]
}>()

const getRandomSong = () => {
  return Math.floor(Math.random() * props.songs.length)
}

const currentSong = ref(props.songs[getRandomSong()])
</script>
