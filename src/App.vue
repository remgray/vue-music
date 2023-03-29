<script setup lang="ts">
import { onMounted } from 'vue'
// firebase imports
import { db } from './firebase/config'
import { collection, query, getDocs } from 'firebase/firestore'

onMounted(async () => {
  const q = query(collection(db, 'songs'))

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.data())
  })
})
</script>

<template>
  <main></main>
</template>

<style scoped></style>
