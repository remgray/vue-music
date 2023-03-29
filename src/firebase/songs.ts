// Firebase imports
import { db } from './config'
import { collection, query, onSnapshot } from 'firebase/firestore'

// import types
import type { Song } from '@/types/songs'
import type { Ref } from 'vue'

export const getSongs = async (songs: Ref<Song[]>) => {
  const q = query(collection(db, 'songs'))

  onSnapshot(q, (querySnapshot) => {
    const tempSongs: Song[] = []
    querySnapshot.forEach((doc) => {
      tempSongs.push({
        id: doc.id,
        ...doc.data()
      } as Song)
    })
    songs.value = tempSongs
  })
}
