<template>
    <div class="header">
      <div class="logo-container">
        <img src="@/assets/logo.png" alt="Team Logo" class="logo" />
      </div>
      <nav class="navbar">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/liveMatches" class="nav-link">Live Matches</router-link>
        <router-link to="/schedule" class="nav-link">Schedule</router-link>
        <router-link to="/scoreTable" class="nav-link">Score Table</router-link>
        <router-link to="/search" class="nav-link">Search</router-link>
        <i class="fas fa-search search-icon"></i>
        <!-- Menu Icon ที่สามารถคลิกเพื่อแสดงเมนูย่อย -->
        <div class="menu-icon" @click="toggleDropdown">
          <span></span>
          <span></span>
          <span></span>
          <!-- เมนูย่อย -->
          <div v-if="showDropdown" class="dropdown-menu">
            <router-link to="/login" class="dropdown-link">🔑 ล็อกอิน</router-link>
            <router-link to="/News" class="dropdown-link">📰 ข่าวสาร</router-link>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    data() {
      return {
        showDropdown: false, // ค่าควบคุมการแสดงเมนูย่อย
      };
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown; // เปลี่ยนค่า showDropdown เมื่อคลิก
      },
    },
  }
  </script>
  
  <style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff5e5e;
    padding: 10px 20px;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 50px;
    height: auto;
  }
  
  .navbar {
    display: flex;
    align-items: center;
  }
  
  .nav-link {
    margin: 0 15px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
  }
  
  .nav-link:hover {
    color: #ffe5e5;
  }
  
  .search-icon {
    margin-left: 15px;
    font-size: 18px;
    color: white;
    cursor: pointer;
  }
  
  .menu-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-left: 20px;
  }
  
  .menu-icon span {
    width: 25px;
    height: 2px;
    background-color: black;
    margin: 3px 0;
  }
  
  /* เมนูย่อย (dropdown) */
  .dropdown-menu {
    position: absolute;
    top: 50px; /* ปรับตำแหน่งให้ตรงกับไอคอน */
    right: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  
  .dropdown-link {
    margin: 5px 0;
    color: #ff5e5e;
    text-decoration: none;
    font-size: 16px;
    padding: 5px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .dropdown-link:hover {
    background-color: #ff5e5e;
    color: #fff;
    border-radius: 5px;
  }
  </style>
  