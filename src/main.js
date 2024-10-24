import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // นำเข้า router ถ้ามีการใช้ Vue Router

createApp(App)
  .use(router) // ใช้ router ถ้ามี
  .mount('#app');
