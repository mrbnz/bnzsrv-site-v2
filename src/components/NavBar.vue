<template>
  <nav :class="{ 'nav-scrolled': isScrolled }">
    <div class="nav-container">
      <Logo />
      
      <!-- Botó mòbil -->
      <button class="mobile-menu-btn" @click="isMenuOpen = !isMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Menú -->
      <ul :class="{ 'menu-open': isMenuOpen }">
        <li v-for="item in navItems" :key="item.name">
          <router-link 
            v-if="!item.scroll" 
            :to="item.path" 
            class="nav-button"
            @click="isMenuOpen = false"
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
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Logo from './Logo.vue'

const router = useRouter()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleClick = async (action) => {
  if (action.path && action.scroll) {
    isMenuOpen.value = false
    if (router.currentRoute.value.path !== '/') {
      await router.push('/')
    }
    await nextTick()
    const element = document.querySelector(action.scroll)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const navItems = [
  { name: 'Home', path: '/', scroll: false },
  { name: 'About Me', path: '/about', scroll: false },
  { name: 'Contact', path: '/contact', scroll: false },
  { name: 'Projects', scroll: true, action: { path: '/', scroll: '.projects' }}
]
</script>

<style scoped>
nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.nav-scrolled {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-button {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-button:hover::after {
  width: 100%;
}

.nav-button:hover {
  color: var(--primary-color);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-btn span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--text-dark);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }

  nav ul {
    position: fixed;
    top: 72px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.98);
    padding: 1rem;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  nav ul.menu-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-button {
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem;
  }

  .mobile-menu-btn.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-btn.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>