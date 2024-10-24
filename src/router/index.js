import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import LiveMatches from '../components/LiveMatches.vue'; 
import Schedule from '../components/Schedule.vue';
import ScoreTable from '../components/ScoreTable.vue'; 
import Login from '../components/Login.vue';
import SearchComponent from '../components/Search.vue'; // นำเข้าคอมโพเนนต์ที่ต้องการ




const routes = [
  { path: '/', component: Home },
  { path: '/liveMatches', component: LiveMatches }, // เปลี่ยนเป็น /liveMatches
  { path: '/schedule', component: Schedule },
  { path: '/scoreTable', component: ScoreTable }, // เปลี่ยนเป็น /scoreTable
  { path: '/login', component: Login },
  { path: '/search', component: SearchComponent },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
