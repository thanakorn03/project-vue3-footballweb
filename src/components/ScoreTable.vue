<template>
    <div>
      <h2>ตารางคะแนน</h2>
      <table>
        <thead>
          <tr>
            <th>ทีม</th>
            <th>คะแนน</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in standings" :key="team.id">
            <td>{{ team.name }}</td> <!-- แสดงชื่อทีม -->
            <td>{{ team.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        standings: [
          { id: 1, name: "แมนเชสเตอร์ ซิตี้", points: 28 },
          { id: 2, name: "ลิเวอร์พูล", points: 25 },
          { id: 3, name: "อาร์เซนอล", points: 22 },
          { id: 4, name: "แมนเชสเตอร์ ยูไนเต็ด", points: 20 },
          { id: 5, name: "เชลซี", points: 18 },
          { id: 6, name: "ท็อตแน่ม ฮ็อทสเปอร์", points: 16 },
          { id: 7, name: "นิวคาสเซิล ยูไนเต็ด", points: 15 },
          { id: 8, name: "เลสเตอร์ ซิตี้", points: 14 },
          { id: 9, name: "แอสตัน วิลล่า", points: 12 },
          { id: 10, name: "ไบรท์ตัน", points: 11 },
          { id: 11, name: "เบรนท์ฟอร์ด", points: 10 },
          { id: 12, name: "ฟูแล่ม", points: 9 },
          { id: 13, name: "เวสต์แฮม ยูไนเต็ด", points: 8 },
          { id: 14, name: "วูล์ฟแฮมป์ตัน", points: 7 },
          { id: 15, name: "คริสตัล พาเลซ", points: 6 },
          { id: 16, name: "เอฟเวอร์ตัน", points: 5 },
          { id: 17, name: "บอร์นมัธ", points: 4 },
          { id: 18, name: "เชฟฟิลด์ ยูไนเต็ด", points: 3 },
          { id: 19, name: "น็อตติ้งแฮม ฟอเรสต์", points: 2 },
          { id: 20, name: "ลูตัน ทาวน์", points: 1 },
        ],
      };
    },
  };
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  th {
    background-color: #ff5e5e;
    color: white;
  }
  
  .router-link {
    color: #007bff;
    text-decoration: none;
  }
  
  .router-link:hover {
    text-decoration: underline;
  }
  </style>
  