<template>
  <v-card class="mx-auto pa-2" max-width="300">
    <v-list>
      <v-list-subheader>FAVORITE SONGS</v-list-subheader>

      <div v-if="isLoading" class="d-flex justify-center align-center loading-height">
        Loading...
      </div>
      <div v-else-if="songs.length < 1" class="d-flex justify-center align-center loading-height">
        List is empty
      </div>
      <v-list-item
        v-for="(song, i) in songs"
        :key="i"
        :value="song"
        active-color="primary"
        rounded="shaped"
        v-else
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-headphones"></v-icon>
        </template>

        <template v-slot:append>
          <v-icon @click="deleteSong(song.id)" icon="mdi-close"></v-icon>
        </template>

        <v-list-item-title>
          {{ song.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import type { Song } from '@/types/songs'
import { deleteSong } from '@/firebase/songs'
defineProps<{
  songs: Song[]
  isLoading: boolean
}>()
</script>
