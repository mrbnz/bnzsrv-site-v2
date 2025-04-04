 // Start of Selection
<script setup>
import NavBar from '../components/NavBar.vue'
import { ref, onMounted } from 'vue'

const images = ref([
  '/src/assets/img/about/img4.png'
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
        <div class="title-container">
          <span class="tag">About Me</span>
        </div>
        <h1 class="title-gradient">Hello! I'm Genís</h1>
        <p class="description">
          I'm a full stack developer with a great passion for technology and web development. Currently, I'm working on innovative projects at <strong>programem.com</strong>.
        </p>
        <p class="description">
          I enjoy exploring new paths, both in code and in the mountains. I'm an enduro enthusiast and share my routes on TrailForks.
        </p>
        <p class="description">
          Additionally, I have a screen printing workshop where I constantly improve my skills.
        </p>
        <div class="work-experience">
          <h2>Professional Experience</h2>
          <div class="timeline">
            <div class="timeline-item">
              <span class="date">2024 - Present</span>
              <h3>Web Development</h3>
              <p>programem.com</p>
            </div>
            <div class="timeline-item">
              <span class="date">2023 - 2024</span>
              <h3>Salesperson</h3>
              <p>El Corte Inglés</p>
            </div>
          </div>
        </div>
      </div>
      <div class="image-container">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :class="{ active: index === currentImageIndex }"
          alt="Profile Picture"
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
  max-width: 1200px;
  margin: 8rem auto 0;
  padding: 2rem;
  min-height: calc(100vh - 8rem);
  animation: fadeIn 0.8s ease-out;
}

.text-content {
  flex: 1;
  margin-right: 4rem;
  animation: slideIn 0.8s ease-out;
}

.tag {
  background: linear-gradient(135deg, var(--primary-color), #2ecc71);
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.image-container {
  position: relative;
  width: 400px;
  height: 500px;
  border-radius: 30px;
  overflow: hidden;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  filter: grayscale(20%);
}

.image-container img.active {
  opacity: 1;
}

.image-container img:hover {
  transform: scale(1.05);
  filter: grayscale(0%);
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.work-experience {
  margin-top: 4rem;
  animation: fadeIn 0.8s ease-out 0.4s backwards;
}

.work-experience h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--text-dark), var(--text-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
  padding-left: 1rem;
  border-left: 2px solid var(--primary-color);
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -0.5rem;
  top: 0;
  width: 1rem;
  height: 1rem;
  background: var(--primary-color);
  border-radius: 50%;
}

.timeline-item .date {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-bottom: 0.5rem;
  display: block;
}

.timeline-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  color: var(--text-dark);
}

.timeline-item p {
  color: var(--text-light);
}
</style>