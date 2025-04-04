<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from '../components/NavBar.vue'

const router = useRouter()
const projectsRef = ref(null)
const showPoints = ref(false)
const pointsPosition = ref({ x: 0, y: 0 })

const scrollToProjects = () => {
  projectsRef.value.scrollIntoView({ behavior: 'smooth' })
}

const handleSayHi = (event) => {
  // Guardar la posició del clic
  pointsPosition.value = {
    x: event.clientX - 20,
    y: event.clientY - 20
  }
  showPoints.value = true
  
  // Redirigir després d'un petit delay per mostrar l'animació
  setTimeout(() => {
    showPoints.value = false
    router.push('/contact')
  }, 250)
}

const projects = [
  {
    id: 1,
    title: "Programem.com",
    description: "Plataforma educativa revolucionària que empodera la propera generació de desenvolupadors a través d'experiències d'aprenentatge interactives",
    image: "/path/to/programem.jpg",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    category: "Educació"
  },
  {
    id: 2,
    title: "Portfolio 2024",
    description: "Portafoli modern i interactiu que mostra el meu viatge i experiència en el desenvolupament web",
    image: "/path/to/portfolio.jpg",
    technologies: ["Vue 3", "Vite", "TailwindCSS"],
    category: "Personal"
  },
  {
    id: 3,
    title: "Assistent de Xat IA",
    description: "Interfície de conversa intel·ligent impulsada per tecnologia d'IA d'avantguarda",
    image: "/path/to/ai-chat.jpg",
    technologies: ["Python", "TensorFlow", "FastAPI"],
    category: "IA"
  },
  {
    id: 4,
    title: "Plataforma de Comerç Electrònic",
    description: "Botiga en línia d'alt rendiment amb experiència d'usuari fluida i pagaments segurs",
    image: "/path/to/ecommerce.jpg",
    technologies: ["React", "Node.js", "Stripe"],
    category: "Negocis"
  }
]
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
    <button class="contact-button" @click="handleSayHi">Say Hi</button>
    <div class="arrow-down" @click="scrollToProjects"></div>
  </main>

  <!-- Animació de punts -->
  <div 
    v-if="showPoints" 
    class="floating-points"
    :style="{ left: pointsPosition.x + 'px', top: pointsPosition.y + 'px' }"
  >
    +5
  </div>

  <section ref="projectsRef" class="projects">
    <h2>Featured Work</h2>
    <p class="projects-subtitle">Explore my latest projects and creative endeavors</p>
    
    <div class="project-list">
      <p class="in-progress">Work in progress...</p>
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
  font-size: 5.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(120deg, #2196F3, #E91E63, #2196F3);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 8s ease infinite;
  text-shadow: 0 0 30px rgba(33, 150, 243, 0.1);
  letter-spacing: -0.02em;
  line-height: 1.1;
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
  width: 12px;
  height: 12px;
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
  padding: 8rem 2rem;
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
  text-align: center;
}

.projects-subtitle {
  color: #64748b;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
}

.in-progress {
  font-size: 1.5rem;
  color: #666;
  text-align: center;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .projects {
    padding: 6rem 1rem;
  }
  
  .project-list {
    gap: 2rem;
  }
  
  .project-category {
    font-size: 0.75rem;
  }
}

.floating-points {
  position: fixed;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.2rem;
  pointer-events: none;
  z-index: 1000;
  animation: floatUp 0.6s ease-out forwards;
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.3);
}

@keyframes floatUp {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px) scale(1.2);
  }
}
</style>
