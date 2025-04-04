import { ref } from 'vue'

export function useAvailabilityStatus() {
  const isAvailable = ref(true)
  const availabilityMessage = ref('Available for small to medium projects')
  
  const setAvailability = (status, message) => {
    isAvailable.value = status
    if (message) availabilityMessage.value = message
  }
  
  return {
    isAvailable,
    availabilityMessage,
    setAvailability
  }
} 