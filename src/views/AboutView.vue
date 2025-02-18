<script setup>
import NavBar from '../components/NavBar.vue'
import { ref, onMounted } from 'vue'

const images = ref([
  '/src/assets/img/about/img1.webp',
  '/src/assets/img/about/img2.png',
  '/src/assets/img/about/img3.webp'
])

const currentImageIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length
  }, 3000)
})
</script>

<template>
  <main>
    <NavBar />
    <div class="about-container">
      <div class="text-content">
        <div class="title-container"></div>
        <h1>A little bit about me</h1>
        <p class="description">
          I'm a front-end developer, podcaster, creator, and rocket league driver. I'm currently building small companies at <strong>SparkBox Agency</strong>.
        </p>
        <p class="description">
          In terms of some more things I enjoy, sometimes I like to go <strong>hiking</strong> and I list my trails that I explore on all trails.
        </p>
        <p class="description">
          Alongside that, here and there I compete within some driving games and stuff like that.
        </p>
        <div class="work-experience">
          <h2>Work Experience</h2>
          <ul>
            <li>Marketing Designer at Ring 2015 - 2017</li>
            <li>Product Designer at Ring 2017 - 2019</li>
            <li>Product Designer at Tekametrics 2019 -</li>
          </ul>
        </div>
      </div>
      <div class="image-container">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :class="{ active: index === currentImageIndex }"
          alt="Profile Image"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.about-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 8rem auto 0; /* Afegit margin-top per compensar la navbar fixa */
  padding: 2rem;
  min-height: calc(100vh - 8rem); /* Ajusta l'alçada mínima tenint en compte la navbar */
  animation: fadeIn 0.8s ease-out;
}

.text-content {
  flex: 1;
  margin-right: 2rem;
  animation: slideIn 0.8s ease-out;
}

.image-container {
  position: relative;
  width: 200px;
  height: 200px;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  animation: scaleIn 0.6s ease-out;
  transition: transform 0.3s ease;
}

.image-container img.active {
  opacity: 1;
}

.image-container img:hover {
  transform: scale(1.05);
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.work-experience {
  margin-top: 2rem;
  animation: fadeIn 0.8s ease-out 0.4s backwards;
}

.work-experience h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.work-experience ul {
  list-style: none;
  padding: 0;
}

.work-experience li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>