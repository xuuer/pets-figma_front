<template>
  <div class="page veterinary-results-page">
    <!-- 状态栏 -->
    <div class="status-bar">
      <div class="time">9:41</div>
      <div class="status-icons">
        <span class="signal"><img src="@/assets/svg/Cellular Connection.svg" alt="信号" /></span>
        <span class="wifi"><img src="@/assets/svg/Wifi.svg" alt="wifi" /></span>
        <span class="battery"><img src="@/assets/svg/Capacity.svg" alt="电池" /></span>
      </div>
    </div>
    
    <!-- 导航栏 -->
    <div class="navbar">
      <button class="back-btn" @click="goBack">
        <span class="icon"><img src="@/assets/svg/Back.svg" alt="返回" /></span>
      </button>
      <h1 class="navbar-title">兽医</h1>
      <div class="navbar-right"></div>
    </div>
    
    <!-- 搜索框 -->
    <div class="search-section">
      <div class="search-box">
        <input type="text" class="search-input" placeholder="搜索" v-model="searchQuery" />
        <button class="search-btn"><img src="@/assets/svg/Search.svg" alt="搜索" /></button>
      </div>
    </div>
    
    <!-- 筛选标签 -->
    <div class="filter-section">
      <div class="filter-tabs">
        <button class="filter-tab active" @click="selectFilter('popular')">受欢迎的</button>
        <button class="filter-tab" @click="selectFilter('nearby')">附近</button>
        <button class="filter-tab" @click="selectFilter('recent')">上次访问</button>
      </div>
    </div>
    
    <!-- 主要内容 -->
    <div class="veterinary-content">
      <!-- 兽医列表 -->
      <div class="veterinary-list">
        <!-- 兽医1 -->
        <div class="veterinary-card" @click="viewVeterinaryDetail">
          <div class="veterinary-info">
            <div class="veterinary-avatar-container">
              <img src="@/assets/images/人物1.jpg" alt="陈佑康" class="veterinary-avatar" />
            </div>
            <div class="veterinary-details">
              <h3 class="veterinary-name">陈佑康</h3>
              <p class="veterinary-specialty">兽医</p>
              <div class="veterinary-rating">
                <span class="stars">⭐⭐⭐⭐☆</span>
                <span class="review-count">(124)</span>
              </div>
            </div>
          </div>
          <button class="appointment-btn">开始预约 | 39.90 ￥</button>
        </div>
        
        <!-- 兽医2 -->
        <div class="veterinary-card">
          <div class="veterinary-info">
            <div class="veterinary-avatar-container">
              <img src="@/assets/images/人物2.jpg" alt="钱佳仪" class="veterinary-avatar" />
            </div>
            <div class="veterinary-details">
              <h3 class="veterinary-name">钱佳仪</h3>
              <p class="veterinary-specialty">兽医</p>
              <div class="veterinary-rating">
                <span class="stars">⭐⭐⭐⭐☆</span>
                <span class="review-count">(124)</span>
              </div>
            </div>
          </div>
          <button class="appointment-btn">开始预约 | 39.90 ￥</button>
        </div>
        
        <!-- 兽医3 -->
        <div class="veterinary-card">
          <div class="veterinary-info">
            <div class="veterinary-avatar-container">
              <img src="@/assets/images/人物3.png" alt="李鑫宇" class="veterinary-avatar" />
            </div>
            <div class="veterinary-details">
              <h3 class="veterinary-name">李鑫宇</h3>
              <p class="veterinary-specialty">兽医</p>
              <div class="veterinary-rating">
                <span class="stars">⭐⭐⭐⭐☆</span>
                <span class="review-count">(124)</span>
              </div>
            </div>
          </div>
          <button class="appointment-btn">开始预约 | 39.90 ￥</button>
        </div>
        
        <!-- 兽医4 -->
        <div class="veterinary-card" >
          <div class="veterinary-info">
            <div class="veterinary-avatar-container">
              <img src="@/assets/images/人物4.png" alt="米拉克尔·施莱弗" class="veterinary-avatar" />
            </div>
            <div class="veterinary-details">
              <h3 class="veterinary-name">米拉克尔·施莱弗</h3>
              <p class="veterinary-specialty">兽医</p>
              <div class="veterinary-rating">
                <span class="stars">⭐⭐⭐⭐☆</span>
                <span class="review-count">(124)</span>
              </div>
            </div>
          </div>
          <button class="appointment-btn">开始预约 | 39.90 ￥</button>
        </div>
        <!-- 兽医5 -->
        <div class="veterinary-card" >
          <div class="veterinary-info">
            <div class="veterinary-avatar-container">
              <img src="@/assets/images/人物5.jpg" alt="何彦" class="veterinary-avatar" />
            </div>
            <div class="veterinary-details">
              <h3 class="veterinary-name">何彦</h3>
              <p class="veterinary-specialty">兽医</p>
              <div class="veterinary-rating">
                <span class="stars">⭐⭐⭐⭐☆</span>
                <span class="review-count">(124)</span>
              </div>
            </div>
          </div>
          <button class="appointment-btn">开始预约 | 39.90 ￥</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const selectedFilter = ref('popular')

const goBack = () => {
  router.back()
}

const selectFilter = (filter) => {
  selectedFilter.value = filter
}

const viewVeterinaryDetail = () => {
  router.push('/veterinary-detail')
}
</script>

<style scoped>
.veterinary-results-page {
  width: 100%;
  height: 100vh;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.status-bar {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.11);
}

.status-icons {
  display: flex;
  gap: 8px;
}

.navbar {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: rgba(255, 255, 255, 0.11);
  border-bottom: 1px solid rgba(255, 255, 255, 0.11);
}

.back-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
}

.navbar-title {
  font-size: 17px;
  font-weight: 600;
  margin: 0;
}

.navbar-right {
  width: 24px;
}

.search-section {
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.11);
  border-bottom: 8px solid rgba(255, 255, 255, 0.11);
}

.search-box {
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  padding: 12px 16px;
}

.search-input {
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
}

.search-btn {
  background: none;
  border: none;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  padding: 4px;
  margin-left: 8px;
}

.filter-section {
  background-color: rgba(255, 255, 255, 0.11);
  border-bottom: 1.2px solid rgba(0, 0, 0, 0.11);
}

.filter-tabs {
  display: flex;
  overflow-x: auto;
  padding: 0px;
  gap: 16px;
}

.filter-tab {
  background: none;
  border: none;
  padding: 8px 4px;
  font-size: 14px;
  color: #8E8E93;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
}

.filter-tab.active {
  color: #8E8E93;
}

.filter-tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 5px;
  right: 5px;
  height: 2px;
  background-color: #007AFF;
}

.veterinary-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.veterinary-content::-webkit-scrollbar {
  display: none;
}

.veterinary-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.veterinary-card {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.veterinary-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.veterinary-avatar-container {
  position: relative;
}

.veterinary-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #4CAF50;
}

.veterinary-details {
  flex: 1;
}

.veterinary-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

.veterinary-specialty {
  font-size: 14px;
  color: #8E8E93;
  margin-bottom: 4px;
}

.veterinary-rating {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stars {
  font-size: 12px;
  color: #FFD700;
}

.review-count {
  font-size: 12px;
  color: #8E8E93;
}

.appointment-btn {
  background-color: #333;
  color: rgba(255, 255, 255, 0.808);
  border: none;
  padding: 9px 60px;
  border-radius: 11px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  align-self: flex-end;
  min-width: 180px;
  text-align: center;
}
</style>