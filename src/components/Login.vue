<template>
    <div class="login-page">
      <h2>เข้าสู่ระบบ</h2>
      <form @submit.prevent="login" class="login-form">
        <input v-model="username" placeholder="ชื่อผู้ใช้" required class="input-field" />
        <input v-model="password" type="password" placeholder="รหัสผ่าน" required class="input-field" />
        <button type="submit" class="login-button">เข้าสู่ระบบ</button>
      </form>
      <p class="register-text">ยังไม่มีบัญชีใช่หรือไม่? 
        <router-link to="/register" class="register-link">ลงทะเบียนที่นี่</router-link>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        console.log(`Logging in with ${this.username}`);
        // เพิ่ม logic การเข้าสู่ระบบที่นี่ เช่น การเรียก API
      },
    },
  }
  </script>
  
  <style>
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f5f5f5;
    padding: 20px;
  }
  
  h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  
  .input-field {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .login-button {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 16px;
  }
  
  .login-button:hover {
    background-color: #0056b3;
  }
  
  .register-text {
    margin-top: 15px;
    font-size: 14px;
  }
  
  .register-link {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    margin-left: 5px;
  }
  
  .register-link:hover {
    text-decoration: underline;
  }
  </style>
  