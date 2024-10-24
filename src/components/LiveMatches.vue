<template>
    <div class="live-matches-container">
      <h2 class="title">ดูบอลสด</h2>
      <p v-if="loading" class="loading-message">กำลังโหลด...</p> <!-- แสดงข้อความโหลด -->
      <p v-if="error" class="error-message">{{ error }}</p> <!-- แสดงข้อความข้อผิดพลาด -->
      <ul v-if="matches.length > 0" class="matches-list">
        <li v-for="match in matches" :key="match.id" class="match-item">
          <div class="match-details">
            <span class="team-name home-team">{{ match.homeTeam.name }}</span>
            <span class="vs">vs</span>
            <span class="team-name away-team">{{ match.awayTeam.name }}</span>
          </div>
          <div class="match-time">
            เวลา: {{ new Date(match.matchTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} <!-- แสดงเวลา -->
          </div>
        </li>
      </ul>
      <p v-if="matches.length === 0" class="no-matches-message">ไม่มีการแข่งขันในขณะนี้</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        matches: [], // รายการคู่ที่กำลังเตะ
        loading: true, // สถานะการโหลด
        error: null,   // สำหรับเก็บข้อความข้อผิดพลาด
      };
    },
    created() {
      // สร้างข้อมูลจำลองสำหรับคู่ที่กำลังเตะ
      this.matches = [
        {
          id: 1,
          homeTeam: { name: 'แมนเชสเตอร์ ยูไนเต็ด' },
          awayTeam: { name: 'ลิเวอร์พูล' },
          matchTime: new Date(Date.now() + 3600000), // 1 ชั่วโมงจากตอนนี้
        },
        {
          id: 2,
          homeTeam: { name: 'เชลซี' },
          awayTeam: { name: 'อาร์เซนอล' },
          matchTime: new Date(Date.now() + 7200000), // 2 ชั่วโมงจากตอนนี้
        },
        {
          id: 3,
          homeTeam: { name: 'แมนเชสเตอร์ ซิตี้' },
          awayTeam: { name: 'ท็อตแน่ม ฮ็อตสเปอร์' },
          matchTime: new Date(Date.now() + 10800000), // 3 ชั่วโมงจากตอนนี้
        },
        {
          id: 4,
          homeTeam: { name: 'เวสต์แฮม ยูไนเต็ด' },
          awayTeam: { name: 'เลสเตอร์ ซิตี้' },
          matchTime: new Date(Date.now() + 14400000), // 4 ชั่วโมงจากตอนนี้
        },
        {
          id: 5,
          homeTeam: { name: 'นอริช ซิตี้' },
          awayTeam: { name: 'คริสตัล พาเลซ' },
          matchTime: new Date(Date.now() + 18000000), // 5 ชั่วโมงจากตอนนี้
        },
        {
          id: 6,
          homeTeam: { name: 'เอฟเวอร์ตัน' },
          awayTeam: { name: 'เบิร์นลี่ย์' },
          matchTime: new Date(Date.now() + 21600000), // 6 ชั่วโมงจากตอนนี้
        },
        {
          id: 7,
          homeTeam: { name: 'วูล์ฟแฮมป์ตัน' },
          awayTeam: { name: 'เบรนท์ฟอร์ด' },
          matchTime: new Date(Date.now() + 25200000), // 7 ชั่วโมงจากตอนนี้
        },
        {
          id: 8,
          homeTeam: { name: 'บอร์นมัธ' },
          awayTeam: { name: 'นิวคาสเซิล ยูไนเต็ด' },
          matchTime: new Date(Date.now() + 28800000), // 8 ชั่วโมงจากตอนนี้
        },
      ];
  
      // เปลี่ยนสถานะการโหลดเมื่อข้อมูลจำลองถูกสร้าง
      this.loading = false;
    },
  };
  </script>
  
  <style>
  .live-matches-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-family: 'Arial', sans-serif;
    font-size: 24px;
    color: #343a40;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .loading-message,
  .error-message {
    text-align: center;
    color: #ff0000;
    font-weight: bold;
  }
  
  .matches-list {
    list-style-type: none;
    padding: 0;
  }
  
  .match-item {
    background-color: #ffffff;
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .match-details {
    font-size: 18px;
  }
  
  .team-name {
    font-weight: bold;
  }
  
  .vs {
    margin: 0 10px;
  }
  
  .match-time {
    font-size: 14px;
    color: #666;
  }
  
  .no-matches-message {
    text-align: center;
    color: #888;
    font-size: 16px;
  }
  </style>
  