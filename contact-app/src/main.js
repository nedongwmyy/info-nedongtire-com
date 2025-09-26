import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'

createApp(App).use(router).mount('#app')
