<script setup>
import { useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
const route = useRoute()
const projectId = route.params.id
</script>

<template>
  <NavBar />
  <main>
    <h1>Project {{ projectId }} Details</h1>
    <p>This page contains detailed information about Project {{ projectId }}.</p>
    <!-- Afegeix més detalls aquí -->
  </main>
</template>

<style scoped>
main {
  padding: 2rem;
  max-width: 800px;
  margin: 8rem auto 0;
  text-align: center;
  min-height: calc(100vh - 8rem);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
}
</style>