<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

const route = useRoute()
const router = useRouter()
const projectId = route.params.id

const projects = {
  1: {
    title: "Programem.com",
    description: "Revolutionary educational platform empowering the next generation of developers through interactive learning experiences",
    longDescription: `
      Programem.com is an innovative educational platform designed to transform how people learn programming. 
      Built with a focus on interactive learning and real-world applications, this platform serves thousands 
      of students across multiple countries.
    `,
    image: "/path/to/programem.jpg",
    gallery: [
      "/path/to/programem-1.jpg",
      "/path/to/programem-2.jpg",
      "/path/to/programem-3.jpg"
    ],
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    category: "Education",
    features: [
      "Interactive code editor with real-time feedback",
      "Comprehensive curriculum covering multiple programming languages",
      "Progress tracking and achievement system",
      "Community forums and collaborative learning spaces",
      "Integration with GitHub for project submissions"
    ],
    challenges: [
      "Implementing real-time code execution with security measures",
      "Creating an intuitive UI for complex programming concepts",
      "Scaling the platform to handle increasing user load"
    ],
    metrics: [
      { label: "Active Users", value: "10,000+" },
      { label: "Course Completion Rate", value: "87%" },
      { label: "Student Satisfaction", value: "4.8/5" }
    ],
    links: {
      live: "https://programem.com",
      github: "https://github.com/programem",
      case_study: "/case-studies/programem.pdf"
    }
  }
  // Add more projects following the same structure
}

const project = ref(projects[projectId])
const currentImageIndex = ref(0)

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % project.value.gallery.length
}

const prevImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? project.value.gallery.length - 1 
    : currentImageIndex.value - 1
}

onMounted(() => {
  if (!project.value) {
    router.push('/404')
  }
})
</script>

<template>
  <NavBar />
  <main v-if="project">
    <header class="project-header">
      <div class="breadcrumb">
        <router-link to="/">Home</router-link> / 
        <router-link to="/#projects">Projects</router-link> / 
        <span>{{ project.title }}</span>
      </div>
      <h1>{{ project.title }}</h1>
      <p class="category">{{ project.category }}</p>
    </header>

    <section class="project-showcase">
      <div class="gallery">
        <button class="gallery-nav prev" @click="prevImage">←</button>
        <img 
          :src="project.gallery[currentImageIndex]" 
          :alt="`${project.title} screenshot ${currentImageIndex + 1}`"
        />
        <button class="gallery-nav next" @click="nextImage">→</button>
        <div class="gallery-dots">
          <span 
            v-for="(_, index) in project.gallery" 
            :key="index"
            :class="{ active: index === currentImageIndex }"
            @click="currentImageIndex = index"
          ></span>
        </div>
      </div>

      <div class="project-info">
        <div class="tech-stack">
          <span 
            v-for="tech in project.technologies" 
            :key="tech" 
            class="tech-badge"
          >
            {{ tech }}
          </span>
        </div>

        <div class="description">
          <p>{{ project.longDescription }}</p>
        </div>

        <div class="metrics">
          <div 
            v-for="metric in project.metrics" 
            :key="metric.label" 
            class="metric-card"
          >
            <h3>{{ metric.value }}</h3>
            <p>{{ metric.label }}</p>
          </div>
        </div>

        <div class="features">
          <h2>Key Features</h2>
          <ul>
            <li v-for="feature in project.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="challenges">
          <h2>Challenges & Solutions</h2>
          <ul>
            <li v-for="challenge in project.challenges" :key="challenge">
              {{ challenge }}
            </li>
          </ul>
        </div>

        <div class="project-links">
          <a 
            v-if="project.links.live" 
            :href="project.links.live" 
            target="_blank" 
            class="btn primary"
          >
            Visit Live Site
          </a>
          <a 
            v-if="project.links.github" 
            :href="project.links.github" 
            target="_blank" 
            class="btn secondary"
          >
            View Code
          </a>
          <a 
            v-if="project.links.case_study" 
            :href="project.links.case_study" 
            target="_blank" 
            class="btn outline"
          >
            Read Case Study
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.project-header {
  padding: 8rem 2rem 4rem;
  text-align: center;
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
}

.breadcrumb {
  margin-bottom: 2rem;
  color: #64748b;
}

.breadcrumb a {
  color: #64748b;
  text-decoration: none;
}

.breadcrumb a:hover {
  color: var(--primary-color);
}

.category {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border-radius: 20px;
  color: #475569;
  font-size: 0.875rem;
  margin-top: 1rem;
}

.project-showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.gallery {
  position: relative;
  margin-bottom: 4rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.gallery img {
  width: 100%;
  height: auto;
  display: block;
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-nav.prev { left: 0; }
.gallery-nav.next { right: 0; }

.gallery-nav:hover {
  background: rgba(0, 0, 0, 0.8);
}

.gallery-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.gallery-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-dots span.active {
  background: white;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tech-badge {
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border-radius: 20px;
  color: #475569;
  font-size: 0.875rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.metric-card {
  text-align: center;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.metric-card h3 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.features, .challenges {
  margin: 3rem 0;
}

.features ul, .challenges ul {
  list-style: none;
  padding: 0;
}

.features li, .challenges li {
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.features li:hover, .challenges li:hover {
  transform: translateX(10px);
  background: #f1f5f9;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn.primary {
  background: var(--primary-color);
  color: white;
}

.btn.secondary {
  background: #1f2937;
  color: white;
}

.btn.outline {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .project-links {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
  
  .metrics {
    grid-template-columns: 1fr;
  }
}
</style>