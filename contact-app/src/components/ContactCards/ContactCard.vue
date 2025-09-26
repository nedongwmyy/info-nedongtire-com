<template>
  <div class="col-md-6 col-lg-3">
    <div class="contact-card h-100 p-4">
      <div 
        class="card-icon" 
        :class="{
          'bg-primary-icon': contact.type === 'phone',
          'bg-secondary-icon': contact.type === 'email',
          'bg-accent-icon': contact.type === 'address',
          'bg-dark-icon whatsapp': contact.type === 'whatsapp'
        }"
      >
        <i :class="'fas ' + contact.icon"></i>
      </div>
      <h3 class="card-title text-center">{{ contact.title }}</h3>
      <p class="card-text text-center">{{ contact.info }}</p>
      <div class="text-center mt-auto">
        <a 
          :href="contact.link" 
          class="btn btn-contact text-white"
          target="_blank"
          v-if="contact.type === 'address'"
        >
          {{ contact.action }}
        </a>
        <a 
          :href="contact.link" 
          class="btn btn-contact text-white"
          v-else
        >
          {{ contact.action }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
/* Styles are inherited from the parent component */
</style>
</file>
