<template>
  <a 
    :href="href" 
    :target="external ? '_blank' : undefined" 
    class="card"
    :class="{ 'card--hoverable': hoverable }"
  >
    <div v-if="icon" class="icon">{{ icon }}</div>
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  external: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  hoverable: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.card--hoverable:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-color);
}
</style> 