<template>
  <nav>
    <ul>
      <li v-for="item in navItems" :key="item.name">
        <router-link 
          v-if="!item.scroll" 
          :to="item.path" 
          class="nav-button"
        >
          {{ item.name }}
        </router-link>
        <a 
          v-else 
          href="#" 
          @click.prevent="handleClick(item.action)" 
          class="nav-button"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = async (action) => {
  if (action.path && action.scroll) {
    // Si no estem a la pàgina home, primer naveguem a ella
    if (router.currentRoute.value.path !== '/') {
      await router.push('/')
    }
    // Esperem al següent tick per assegurar que el DOM s'ha actualitzat
    await nextTick()
    // Busquem l'element i fem scroll
    const element = document.querySelector(action.scroll)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const navItems = [
  { 
    name: 'Home', 
    path: '/',
    scroll: false 
  },
  { 
    name: 'About Me', 
    path: '/about',
    scroll: false 
  },
  { 
    name: 'Contact', 
    path: '/contact',
    scroll: false 
  },
  { 
    name: 'Projects', 
    scroll: true,
    action: { 
      path: '/',
      scroll: '.projects'
    }
  }
]
</script>

<style scoped>
nav {
  width: 100%;
  background-color: #ffffff;
  padding: 1.5rem 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: slideIn 0.6s ease-out;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 15rem;
  padding: 0;
  margin: 0;
}

nav a.nav-button {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.75rem 1.5rem; 
  border-radius: 5px;
  border: 2px solid transparent;
  position: relative;
}

nav a.nav-button:hover {
  transform: translateY(-2px);
  color: var(--primary-color);
  background-color: rgba(57, 255, 20, 0.1);
}

nav a.nav-button::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

nav a.nav-button:hover::after {
  width: 100%;
}
</style>