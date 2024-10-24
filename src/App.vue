<template>
  <div id="app">
    <!-- เพิ่ม HeaderComponent ที่นี่ -->
    <HeaderComponent />
    
    <!-- คอนเทนต์หลักของเว็บไซต์ -->
    <main class="main-content">
      <h1>ยินดีต้อนรับสู่เว็บไซต์ฟุตบอลของเรา</h1>
      <p>นี่คือเว็บไซต์สำหรับข่าวสาร ตารางการแข่งขัน และผลคะแนนล่าสุด</p>
    </main>

    <!-- แสดงเนื้อหาของแต่ละหน้า (ถ้ามีการใช้ Router) -->
    <div class="content">
      <router-view />
    </div>

    <!-- เพิ่ม Footer -->
    <CustomFooter />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'; // นำเข้า HeaderComponent
import CustomFooter from "./components/Footer.vue"; // นำเข้า Footer

export default {
  name: 'App',
  components: {
    HeaderComponent, // ระบุชื่อคอมโพเนนต์ที่นำเข้า
    CustomFooter, // ระบุชื่อคอมโพเนนต์ที่นำเข้า
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0;
  text-align: center;
}

.content {
  padding: 20px;
}

img {
  max-width: 100%; /* ทำให้โลโก้ปรับขนาดตามหน้าจอ */
  height: auto;
}
</style>
