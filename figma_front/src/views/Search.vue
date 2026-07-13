<template>
  <div class="page search-page">
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
      <h1 class="navbar-title">搜索</h1>
      <div class="navbar-right"></div>
    </div>
    
    <!-- 搜索框 -->
    <div class="search-container">
      <div class="search-box">
        <input type="text" class="search-input" placeholder="搜索" v-model="searchQuery" />
        <button class="search-btn"><img src="@/assets/svg/Search.svg" alt="搜索" /></button>
      </div>
    </div>
    
    <!-- 主要内容 -->
    <div class="search-content">
      <!-- 发现 -->
      <div class="discovery-section">
        <h3 class="section-title">发现</h3>
        <div class="discovery-list">
          <div class="discovery-item">一般宠物护理</div>
          <div class="discovery-item">动物中毒控制</div>
          <div class="discovery-item">宠物规划</div>
          <div class="discovery-item">保护你的宠物</div>
        </div>
      </div>
      
      <!-- 科普文章 -->
      <div class="articles-section">
        <div class="section-header">
          <h3 class="section-title">科普文章</h3>
          <a href="#" class="view-all">查看全部</a>
        </div>
        <div class="articles-scroll">
          <div class="articles-container">
            <div class="article-card">
              <div class="article-image">
                <img src="@/assets/images/科普1.jpg" alt="猫咪护理" class="img-fluid" />
              </div>
              <h4 class="article-title">猫咪护理小贴士</h4>
            </div>
            <div class="article-card">
              <div class="article-image">
                <img src="@/assets/images/科普2.jpg" alt="狗狗训练" class="img-fluid" />
              </div>
              <h4 class="article-title">狗狗的十大表现</h4>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 顶级兽医 -->
      <div class="veterinarians-section">
        <div class="section-header">
          <h3 class="section-title">顶级兽医</h3>
          <a href="#" class="view-all" @click.prevent="goToVeterinaryResults">查看全部</a>
        </div>
        <div class="veterinarians-scroll">
          <div class="veterinarians-container">
            <div class="veterinarian-card" @click="goToVeterinaryProfile">
              <img src="@/assets/images/人物1.jpg" alt="兽医1" class="veterinarian-image" />
              <div class="veterinarian-info-overlay">
                <h4 class="veterinarian-name">陈佑康</h4>
                <div class="veterinarian-rating">
                  <span class="stars">⭐⭐⭐⭐☆</span>
                </div>
              </div>
            </div>
            <div class="veterinarian-card">
              <img src="@/assets/images/人物3.png" alt="兽医2" class="veterinarian-image" />
              <div class="veterinarian-info-overlay">
                <h4 class="veterinarian-name">李鑫宇</h4>
                <div class="veterinarian-rating">
                  <span class="stars">⭐⭐⭐⭐☆</span>
                </div>
              </div>
            </div>
            <div class="veterinarian-card">
              <img src="@/assets/images/人物2.jpg" alt="兽医3" class="veterinarian-image" />
              <div class="veterinarian-info-overlay">
                <h4 class="veterinarian-name">钱佳仪</h4>
                <div class="veterinarian-rating">
                  <span class="stars">⭐⭐⭐⭐☆</span>
                </div>
              </div>
            </div>
          </div>
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

const goBack = () => {
  router.back()
}

const goToVeterinaryResults = () => {
  router.push('/veterinary-results')
}

const goToVeterinaryProfile = () => {
  router.push('/veterinary-detail')
}
</script>

<style scoped>
.search-page {
  width: 100%;
  height: 100vh;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.search-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.search-content::-webkit-scrollbar {
  display: none;
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

.search-container {
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.11);
  border-bottom: 8px solid #F5F5F5;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: white;
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
  color: #8E8E93;
  cursor: pointer;
  padding: 4px;
  margin-left: 8px;
}

.discovery-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
}

.discovery-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.discovery-item {
  padding: 12px 0;
  font-size: 16px;
  border-bottom: 1.2px solid #8f8f8f7a;
}

.discovery-item:last-child {
  border-bottom: none;
}

.articles-section {
  margin-bottom: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.view-all {
  font-size: 14px;
  color: #007AFF;
  text-decoration: none;
}

.articles-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 8px;
}

.articles-scroll::-webkit-scrollbar {
  display: none;
}

.articles-container {
  display: flex;
  gap: 12px;
  padding-bottom: 8px;
}

.article-card {
  flex: 0 0 220px;
  height: 135px;
  background-color: rgba(255, 255, 255, 0.11);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.11);
  display: flex;
  flex-direction: column;
}

.article-image {
  height: 100px;
  margin-bottom: 8px;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-title {
  font-size: 14px;
  font-weight: 500;
  padding: 0 12px 8px;
  margin: 0;
  color: #333;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.veterinarians-section {
  margin-bottom: 24px;
}

.veterinarians-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 16px;
}

.veterinarians-scroll::-webkit-scrollbar {
  display: none;
}

.veterinarians-container {
  display: flex;
  gap: 16px;
  padding-bottom: 8px;
}

.veterinarian-card {
  flex: 0 0 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.veterinarian-image {
  width: 150px;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
}

.veterinarian-info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  border-radius: 0 0 12px 12px;
  padding: 8px 4px 4px;
  color: white;
}

.veterinarian-name {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 2px;
}

.veterinarian-rating {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stars {
  font-size: 10px;
  color: white;
}
</style>