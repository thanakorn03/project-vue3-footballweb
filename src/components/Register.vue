<template>
    <div class="Register">
      <h2>สมัครสมาชิก</h2>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="username">ชื่อผู้ใช้:</label>
          <input type="text" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email">อีเมล:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">รหัสผ่าน:</label>
          <input type="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">ยืนยันรหัสผ่าน:</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">สมัครสมาชิก</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p>มีบัญชีอยู่แล้ว? <router-link to="/login">เข้าสู่ระบบ</router-link></p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
      };
    },
    methods: {
      registerUser() {
        if (this.password !== this.confirmPassword) {
          this.errorMessage = 'รหัสผ่านไม่ตรงกัน!';
          return;
        }
  
        // ตัวอย่างการสมัครสมาชิก (สามารถปรับตามการใช้งานจริง)
        const userData = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
  
        // นี่คือตัวอย่างการส่งข้อมูลไปยัง API (สามารถปรับตามที่ใช้งานจริง)
        console.log('สมัครสมาชิก:', userData);
        
        // ทำการรีเซ็ตฟอร์มหลังจากส่งข้อมูล
        this.username = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.errorMessage = ''; // ล้างข้อความผิดพลาด
      },
    },
  };
  </script>
  
  <style scoped>
  .register {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
  }
  </style>
  