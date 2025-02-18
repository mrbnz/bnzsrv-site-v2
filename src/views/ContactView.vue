<template>
  <main>
    <NavBar />
    <div class="contact-container">
      <h1>Let's Connect</h1>
      <p class="subtitle">Choose your preferred way to get in touch</p>

      <div class="contact-grid">
        <!-- Email -->
        <a href="mailto:genis@example.com" class="contact-card">
          <div class="icon">📧</div>
          <h2>Email</h2>
          <p>gpm@tuta.com</p>
        </a>

        <!-- Telèfon -->
        <a href="tel:+34609744950" class="contact-card">
          <div class="icon">📱</div>
          <h2>Phone</h2>
          <p>+34 609 744 950</p>
        </a>

        <!-- LinkedIn -->
        <a href="https://linkedin.com/in/genispuig" target="_blank" class="contact-card">
          <div class="icon">💼</div>
          <h2>LinkedIn</h2>
          <p>linkedin.com/in/genispuig</p>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/mrbnz" target="_blank" class="contact-card">
          <div class="icon">💻</div>
          <h2>GitHub</h2>
          <p>github.com/mrbnz</p>
        </a>

        <!-- Twitter/X -->
        <a href="https://twitter.com/mrbnz" target="_blank" class="contact-card">
          <div class="icon">🐦</div>
          <h2>Twitter</h2>
          <p>@mrbnz</p>
        </a>
      </div>

      <div class="availability">
        <div class="status-indicator"></div>
        <p>Currently available for freelance projects</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<style scoped>
main {
  padding: 2rem;
  max-width: 1200px;
  margin: 8rem auto 0;
  min-height: calc(100vh - 8rem);
}

.contact-container {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #333, #666, #333);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* Afegit per compatibilitat */
  animation: shine 6s linear infinite;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 4rem;
  animation: fadeIn 0.8s ease-out 0.2s backwards;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 0 auto;
  max-width: 1000px;
  animation: fadeIn 0.8s ease-out 0.4s backwards;
}

.contact-card {
  position: relative;
  overflow: hidden;
  padding: 2rem;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
  animation: slideUpFade 0.6s ease-out;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(57, 255, 20, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.contact-card:hover::before {
  transform: translateX(100%);
}

.contact-card:hover {
  animation: float 3s ease-in-out infinite;
}

.icon {
  position: relative;
  z-index: 1;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.contact-card:hover .icon {
  animation: morphBorder 3s ease-in-out infinite;
}

.contact-card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.contact-card p {
  color: #666;
  font-size: 1rem;
}

.availability {
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.status-indicator {
  width: 10px;
  height: 10px;
  background-color: #39ff14;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

.availability p {
  color: #666;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style> 