import { createRouter, createWebHistory } from 'vue-router';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Contact',
    component: ContactView
  },
  // 重定向/contact到根路径，以防用户访问/contact
  {
    path: '/contact',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;