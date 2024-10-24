<template>
    <div class="schedule-container">
      <h2 class="title">ตารางการแข่งขัน</h2>
      <ul v-if="fixtures.length > 0" class="fixtures-list">
        <li v-for="fixture in fixtures" :key="fixture.id" class="fixture-item">
          {{ fixture.date }}: {{ fixture.homeTeam.name }} vs {{ fixture.awayTeam.name }}
        </li>
      </ul>
      <p v-else class="no-fixtures-message">ไม่พบข้อมูลการแข่งขัน</p> <!-- แสดงข้อความเมื่อไม่มีข้อมูล -->
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p> <!-- แสดงข้อความผิดพลาด -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'SchedulePage', // เปลี่ยนชื่อคอมโพเนนต์ที่นี่ให้ตรงกับชื่อไฟล์
    data() {
      return {
        fixtures: [], // รายการตารางการแข่งขัน
        errorMessage: null, // สำหรับเก็บข้อความข้อผิดพลาด
      };
    },
    created() {
      // สร้างข้อมูลจำลองสำหรับตารางการแข่งขัน
      this.fixtures = [
        {
          id: 1,
          date: '2024-10-22',
          homeTeam: { name: 'แมนเชสเตอร์ ยูไนเต็ด' },
          awayTeam: { name: 'ลิเวอร์พูล' },
        },
        {
          id: 2,
          date: '2024-10-23',
          homeTeam: { name: 'เชลซี' },
          awayTeam: { name: 'อาร์เซนอล' },
        },
        {
          id: 3,
          date: '2024-10-24',
          homeTeam: { name: 'แมนเชสเตอร์ ซิตี้' },
          awayTeam: { name: 'ท็อตแน่ม ฮ็อตสเปอร์' },
        },
        {
          id: 4,
          date: '2024-10-25',
          homeTeam: { name: 'เวสต์แฮม ยูไนเต็ด' },
          awayTeam: { name: 'เลสเตอร์ ซิตี้' },
        },
        {
          id: 5,
          date: '2024-10-26',
          homeTeam: { name: 'นอริช ซิตี้' },
          awayTeam: { name: 'คริสตัล พาเลซ' },
        },
        {
          id: 6,
          date: '2024-10-27',
          homeTeam: { name: 'เอฟเวอร์ตัน' },
          awayTeam: { name: 'เบิร์นลี่ย์' },
        },
        {
          id: 7,
          date: '2024-10-28',
          homeTeam: { name: 'วูล์ฟแฮมป์ตัน' },
          awayTeam: { name: 'เบรนท์ฟอร์ด' },
        },
        {
          id: 8,
          date: '2024-10-29',
          homeTeam: { name: 'บอร์นมัธ' },
          awayTeam: { name: 'นิวคาสเซิล ยูไนเต็ด' },
        },
      ];
    },
  };
  </script>
  
  <style>
  .schedule-container {
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
  
  .fixtures-list {
    list-style-type: none;
    padding: 0;
  }
  
  .fixture-item {
    background-color: #ffffff;
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  
  .no-fixtures-message {
    text-align: center;
    color: #888;
    font-size: 16px;
  }
  
  .error {
    color: red;
    text-align: center;
  }
  </style>
  