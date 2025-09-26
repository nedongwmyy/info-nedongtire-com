<template>
  <div class="col-md-6 col-lg-4">
    <a :href="social.link" class="social-card" target="_blank">
      <div class="d-flex align-items-center">
        <div 
          class="social-icon" 
          :class="social.colorClass"
        >
          <i :class="'fab ' + social.icon"></i>
        </div>
        <div>
          <div class="social-name">{{ social.name }}</div>
          <div class="social-link">{{ social.description }}</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialCard',
  props: {
    social: {
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
