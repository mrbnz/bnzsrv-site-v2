<script setup>
const navItems = [
  { name: 'Inici', path: '#home' },
  { name: 'Sobre mi', path: '#about' },
  { name: 'Contacte', path: '#contact' },
  { name: 'Tots els projectes', path: '#projects' }
]
</script>

<template>
  <main>
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.name">
          <a :href="item.path" class="nav-button">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
    <h1>Genís Puig</h1>
    <p class="subtitle">Disponible per a projectes de petita a mitjana envergadura</p>
    <p class="description">
      Sóc desenvolupador front-end, podcaster, creador i conductor de rocket league.
      Actualment estic creant petites empreses a <strong>SparkBox Agency</strong>.
    </p>
    <button class="contact-button">Saluda'm</button>
  </main>
</template>

<style scoped>
/* Reinici bàsic i font */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #f7f2ed; /* Color de fons beix suau */
}

/* Contenidor principal (main) */
main {
  /* Deixa espai a dalt perquè el nav és fix */
  margin: 100px auto 0 auto;
  /* Limita l'amplada i centra */
  max-width: auto;
  /* Alçada mínima per omplir bona part de la pantalla */
  min-height: calc(100vh - 100px);
  background-color: #ffffff; /* Fons blanc */
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Barra de navegació */
nav {
  width: 100%;
  background-color: #ffffff;
  padding: 1rem 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Ombra més suau i més gran */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(8px); /* Efecte de vidre esmerilat */
  background-color: rgba(255, 255, 255, 0.95); /* Fons semi-transparent */
  border-bottom: 1px solid rgba(0, 0, 0, 0.05); /* Vora subtil */
  transition: all 0.3s ease; /* Transició suau */
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  margin: 0;
}

nav a.nav-button {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 2px solid transparent;
}

nav a.nav-button:hover {
  color: #3498db;
  border-color: #3498db;
  background-color: rgba(52, 152, 219, 0.1);
}

/* Títol principal */
h1 {
  font-size: 4rem;
  font-weight: 600;
  color: black;
  margin-bottom: 1rem;
}

/* Subtítol */
.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1rem;
}

/* Descripció */
.description {
  font-size: 1rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto 2rem;
}

/* Botó de contacte */
.contact-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: #555;
}
</style>
