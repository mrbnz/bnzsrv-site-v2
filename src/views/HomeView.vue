<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

const projectsRef = ref(null)

const scrollToProjects = () => {
  projectsRef.value.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <main>
    <NavBar />
    <h1>Genís Puig</h1>
    <div class="status">
      <div class="green-light"></div>
      <p class="subtitle">Available for small to medium projects</p>
    </div>
    <p class="description">
      I'm a passionate full-stack developer, entrepreneur, creator and avid gamer.
      Currently working towards a better future with <strong>Programem.com</strong>,
      where I help build innovative technological solutions.
    </p>
    <button class="contact-button" @click="$router.push('/contact')">Say Hi</button>
    <div class="arrow-down" @click="scrollToProjects"></div>
  </main>

  <section ref="projectsRef" class="projects">
    <h2>Featured Projects</h2>
    <br>
    <div class="project-list">
      <div
        class="project"
        v-for="n in 4"
        :key="n"
        @click="$router.push(`/project/${n}`)"
      >
        <img :src="`/path/to/image${n}.jpg`" alt="Project Image" />
        <h3>Project {{ n }}</h3>
        <p class="project-description">
          This is a brief description of Project {{ n }}. It includes key features and highlights.
        </p>
        <ul class="project-points">
          <li>Key Point 1</li>
          <li>Key Point 2</li>
          <li>Key Point 3</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Contenidor principal (main) */
main {
  margin: 100px auto 0 auto;
  max-width: auto;
  min-height: calc(100vh - 100px);
  background-color: #ffffff;
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Títol principal */
h1 {
  font-size: 5rem;
  font-weight: 600;
  color: black;
  margin-bottom: 1rem;
  animation: shine 6s linear infinite;
  background: linear-gradient(90deg, #333, #666, #333);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
h2 {
  font-size: 2rem;
  font-weight: 600;
  color: black;
  margin-bottom: 1rem;
}

/* Estat amb llum verda */
.status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  animation: fadeIn 0.8s ease-out 0.2s backwards;
}

.green-light {
  width: 8px;
  height: 8px;
  background-color: var(--primary-color);
  border-radius: 50%;
  animation: glowPulse 2s infinite;
  flex-shrink: 0;
}

.status .subtitle {
  margin: 0;
  line-height: 1;
}

/* Subtítol */
.subtitle {
  font-size: 1.2rem;
  color: #666;
}

/* Descripció */
.description {
  font-size: 1rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto 2rem;
  animation: fadeIn 0.8s ease-out 0.4s backwards;
}

/* Botó de contacte */
.contact-button {
  background: linear-gradient(45deg, #333, #555, #333);
  background-size: 200% 200%;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  animation: gradientBg 3s ease infinite;
  transition: transform 0.3s ease;
  animation: scaleIn 0.6s ease-out 0.6s backwards;
}

.contact-button:hover {
  transform: scale(1.05);
  background-size: 200% 200%;
}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid #333;
  position: absolute;
  bottom: 20px;
  animation: bounce 2s infinite;
  cursor: pointer;
}

/* Projectes */
.projects {
  padding: 4rem 2rem;
  background-color: #f7f2ed;
  text-align: center;
}

.project-list {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.project {
  border: 1px solid #ccc;
  padding: 2rem;
  width: 300px;
  text-align: left;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  animation: slideUpFade 0.6s ease-out;
}

.project:hover {
  animation: float 3s ease-in-out infinite;
}

.project img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 4px;
}

.project-description {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.project-points {
  list-style: disc;
  padding-left: 1.5rem;
}

.project-points li {
  margin-bottom: 0.5rem;
}
</style>
