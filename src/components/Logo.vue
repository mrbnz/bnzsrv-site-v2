<template>
  <router-link to="/" class="logo">
    <img src="../assets/img/logo/bridgestone.svg" alt="Genís Puig Logo" />
    <span>Genís Puig</span>
  </router-link>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 700;
  font-size: 1.2rem;
}

.logo img {
  height: 2rem;
  width: auto;
  transition: transform 0.3s ease;
}

.logo:hover img {
  transform: rotate(10deg);
}

.logo span {
  color: var(--text-dark);
  font-weight: 700;
}
</style> 