<template>
  <div class="home-page">
    <h2 class="title">ข่าวล่าสุด</h2>
    <ul v-if="news.length > 0" class="news-list">
      <li v-for="(article, index) in paginatedNews" :key="index" class="news-item">
        <img :src="article.imageUrl" alt="News Image" class="news-image" />
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
        <a :href="article.url" target="_blank">อ่านเพิ่มเติม</a>
      </li>
    </ul>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">ย้อนกลับ</button>
      <span>หน้า {{ currentPage }} จาก {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">ถัดไป</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      news: [
        { 
          description: "โปรแกรมพรีเมียร์ลีก อังกฤษ สัปดาห์ที่ 9 พร้อมเวลาแข่งทุกคู่", 
          url: "https://www.amarintv.com/news/detail/236748", 
          imageUrl: "https://static.amarintv.com/images/upload/editor/source/nut2024/web-2024-10-24t113941.511.png"
        },
        { 
          
          description: "ทีมชุดอื่นยังทำไม่ได้! สล็อต ภูมิใจ ลิเวอร์พูล สร้างสถิติสุดสวยหรู", 
          url: "https://www.siamsport.co.th/football-international/premierleague/65268/", 
          imageUrl: "https://www.siamsport.co.th/static/65268/856x452.webp"
        },
        { 
          
          description: "เลี่ยงได้เลี่ยง!เป๊ป กวาร์ดิโอล่า ชี้ทีมเดียวไม่อยากบู๊ถ้วยแชมเปี้ยนส์ลีก", 
          url: "https://www.siamsport.co.th/football-international/ucl/64674/#google_vignette", 
          imageUrl: "https://www.siamsport.co.th/static/64674/856x452.webp"
        },
        { 
           
          description: "ซินเชนโก้ แฉโดน แมนฯ ซิตี้ จ่ายค่าแรงสัญญาเยาวชนมานาน 3 ปี", 
          url: "https://www.90min.com/th/zinchenko-said-manchester-city-used-him-as-youngster-contract-for-3-years", 
          imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_3580,h_2013,x_0,y_415/c_fill,w_360,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_th_international_web%2F01javq4g8kdgg01j01ms.jpg"
        },
        { 
          
          description: "ตัดเกรดนักเตะ เชลซี เกมบุกแพ้ ลิเวอร์พูล 1-2 ศึก พรีเมียร์ลีก คืนวันอาทิตย์ : Player Ratings", 
          url: "https://www.90min.com/th/player-ratings-chelsea-lost-liverpool-2-1-premier-league-2024-25?dicbo=v2-PXbYKS1", 
          imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_2721,h_1530,x_0,y_184/c_fill,w_360,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_th_international_web%2F01jang326f34zsk3zp9f.jpg"
        },
        {
          
          description: "เนวิลล์ วิเคราะห์โอกาสคว้าแชมป์ของ ลิเวอร์พูล หลังนำจ่าฝูง พรีเมียร์ลีก", 
          url: "https://www.90min.com/th/neville-said-to-soon-to-say-liverpool-will-be-champion?dicbo=v2-UJBMDvB", 
          imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_4462,h_2509,x_0,y_0/c_fill,w_360,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_th_international_web%2F01jaw13cjxgjwfb7hcvv.jpg"
        },
        
      ],
      currentPage: 1,
      newsPerPage: 5, // จำนวนข่าวต่อหน้า
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.news.length / this.newsPerPage);
    },
    paginatedNews() {
      const start = (this.currentPage - 1) * this.newsPerPage;
      return this.news.slice(start, start + this.newsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>

<style>
.home-page {
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
}

.title {
  font-family: 'Arial', sans-serif;
  font-size: 36px;
  color: #343a40;
  margin-bottom: 20px;
}

.news-list {
  list-style-type: none;
  padding: 0;
}

.news-item {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: left;
  display: flex;
  align-items: center;
}

.news-image {
  width: 100px;
  height: 100px;
  margin-right: 15px;
  border-radius: 5px;
  object-fit: cover;
}

.news-item h3 {
  font-size: 20px;
  color: #333;
}

.news-item p {
  font-size: 16px;
  color: #666;
}

.news-item a {
  text-decoration: none;
  color: #007bff;
  transition: color 0.3s;
}

.news-item a:hover {
  color: #0056b3;
}

.pagination {
  margin-top: 20px;
}

.pagination button {
  padding: 10px 15px;
  background-color: #4e0fe2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination button:hover:not(:disabled) {
  background-color: #0056b3;
}
</style>
