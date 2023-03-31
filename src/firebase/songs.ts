// Firebase imports
import { db } from './config'
import { collection, query, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'

// import types
import type { Song } from '@/types/songs'
import type { Ref } from 'vue'

const DB_NAME = 'songs'

export const getSongs = async (songs: Ref<Song[]>) => {
  const q = query(collection(db, DB_NAME))

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

export const addSongs = async (song: Song) => {
  await addDoc(collection(db, DB_NAME), {
    title: song.title,
    artist: song.artist,
    year: song.year
  })
}

export const deleteSong = async (songId: string) => {
  await deleteDoc(doc(db, DB_NAME, songId))
}
