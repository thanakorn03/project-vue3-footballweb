<template>
    <div class="search-component">
      <h2>ข่าวเด่น</h2>
      <div class="trending-news">
        <div v-for="(news, index) in trendingNews" :key="index" class="news-item">
          <h3>{{ news.title }}</h3>
          <p>{{ news.summary }}</p>
        </div>
      </div>
      
      <div class="search-section">
        <input
          v-model="query"
          @keyup.enter="search"
          placeholder="ค้นหาข่าว"
          class="search-input"
        />
        <button @click="search" class="search-button">ค้นหา</button>
      </div>
  
      <div class="search-results">
        <div v-if="results.length === 0 && query">
          <p>ไม่พบผลลัพธ์ที่เกี่ยวข้องกับ "{{ query }}"</p>
        </div>
        <ul>
          <li v-for="(result, index) in results" :key="index">
            <h4>{{ result.title }}</h4>
            <p>{{ result.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchComponent',
    data() {
      return {
        query: '',
        results: [],
        trendingNews: [], 
      };
    },
    mounted() {
      this.fetchTrendingNews();
    },
    methods: {
      async fetchTrendingNews() {
        try {
          const response = await fetch('c1b630bdd2724cf7926b57b6198bfa80');
          if (!response.ok) {
            throw new Error('ไม่สามารถดึงข้อมูลข่าวเด่น');
          }
          this.trendingNews = await response.json();
        } catch (error) {
          console.error(error);
        }
      },
      async search() {
        try {
          const response = await fetch(`c1b630bdd2724cf7926b57b6198bfa80?q=${encodeURIComponent(this.query)}`);
          if (!response.ok) {
            throw new Error('ไม่สามารถดึงข้อมูลผลการค้นหา');
          }
          this.results = await response.json();
        } catch (error) {
          console.error(error);
          this.results = []; // รีเซ็ตผลลัพธ์หากเกิดข้อผิดพลาด
        }
      },
    },
  };
  </script>
  
  <style>
  .search-component {
    padding: 20px;
    text-align: center;
    background-color: #f5f5f5;
  }
  
  .trending-news {
    background-color: #e9ecef;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 8px;
  }
  
  .news-item {
    margin: 10px 0;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .search-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .search-input {
    padding: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 10px;
  }
  
  .search-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
  
  .search-results {
    text-align: left;
  }
  
  .search-results ul {
    list-style: none;
    padding: 0;
  }
  
  .search-results li {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .search-results h4 {
    margin: 0;
    font-size: 18px;
  }
  
  .search-results p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #555;
  }
  </style>
  