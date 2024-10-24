<template>
    <div>
      <h2>รายละเอียดทีม</h2>
      <p>แสดงรายละเอียดของทีมที่มี ID: {{ teamId }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teamId: this.$route.params.teamId, // รับ teamId จากพารามิเตอร์เส้นทาง
      };
    },
  };
  </script>
  
  <style scoped>
  /* คุณสามารถเพิ่มสไตล์ที่นี่ได้ */
  </style>
  