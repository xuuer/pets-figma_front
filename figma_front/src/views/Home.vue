<template>
  <div class="page home-page">
    <!-- 状态栏 -->
    <div class="status-bar">
      <div class="time">9:41</div>
      <div class="status-icons">
        <span class="signal"><img src="@/assets/svg/Cellular Connection.svg" alt="信号" /></span>
        <span class="wifi"><img src="@/assets/svg/Wifi.svg" alt="wifi" /></span>
        <span class="battery"><img src="@/assets/svg/Capacity.svg" alt="电池" /></span>
      </div>
    </div>
    
    <!-- 顶部栏 -->
    <div class="top-bar">
      <h1 class="welcome-text">你好，杰杰</h1>
      <button class="search-btn" @click="goToSearch">
        <span class="icon"><img src="@/assets/svg/Search.svg" alt="搜索" /></span>
      </button>
    </div>
    
    <!-- 主要内容 -->
    <div class="home-content">
      <!-- 智能宠物护理 -->
      <div class="care-section">
        <div class="care-card">
          <div class="care-info">
            <h2 class="care-title">智能宠物护理</h2>
            <p class="care-description">为您的宠物找到完美的兽医</p>
            <button class="btn-care">现在预约</button>
          </div>
          <div class="care-image">
            <img src="@/assets/images/主页.png" alt="猫咪" class="img-fluid" />
          </div>
        </div>
      </div>
      
      <!-- 选择你的宠物 -->
      <div class="pets-section">
        <h3 class="section-title1">选择您的宠物</h3>
        <div class="pets-grid">
          <button class="pet-item add-pet" @click="goToMyPets">
            <span class="add-icon">+</span>
          </button>
          <div class="pet-item active">
            <img src="@/assets/images/宠物1.jpg" alt="布丁" class="pet-image" @click="goToMyPets"/>
          </div>
          <div class="pet-item">
            <img src="@/assets/images/宠物2.jpg" alt="宠物2" class="pet-image" />
          </div>
          <div class="pet-item">
            <img src="@/assets/images/宠物3.jpg" alt="宠物3" class="pet-image" />
          </div>
        </div>
      </div>
      
      <!-- 宠物超市 -->
      <div class="shop-section">
        <div class="section-header">
          <h3 class="section-title">宠物超市</h3>
          <a href="#" class="view-all" @click.prevent="goToShopping">查看全部</a>
        </div>
        <div class="products-scroll">
          <div class="products-container">
            <div class="product-card">
              <div class="product-image">
                <img src="@/assets/images/商品3.png" alt="猫爬架" class="img-fluid" @click="viewProductDetail"/>
                <div class="discount-badge">优惠 10%</div>
              </div>
              <h4 class="product-name">毛绒针织款可水洗猫爬架</h4>
              <div class="product-price">
                <span class="price-current">¥29.00</span>
                <span class="price-original">¥34.00</span>
              </div>
              <button class="add-to-cart">+</button>
            </div>
            <div class="product-card">
              <div class="product-image">
                <img src="@/assets/images/商品1.jpg" alt="宠物罐头" class="img-fluid" />
              </div>
              <h4 class="product-name">龙猫大师宠物罐头</h4>
              <div class="product-price">
                <span class="price-current">¥29.00</span>
              </div>
              <button class="add-to-cart">+</button>
            </div>
            <div class="product-card">
              <div class="product-image">
                <img src="@/assets/images/商品2.png" alt="宠物零食" class="img-fluid" />
                <div class="discount-badge">优惠 10%</div>
              </div>
              <h4 class="product-name">宠物零食多口味，毛孩子都爱吃</h4>
              <div class="product-price">
                <span class="price-current">¥29.00</span>
                <span class="price-original">¥34.00</span>
              </div>
              <button class="add-to-cart">+</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 兽医 -->
    <div class="veterinary-section">
      <div class="section-header">
        <h3 class="section-title">兽医</h3>
        <a href="#" class="view-all" @click.prevent="goToVeterinaryResults">查看全部</a>
      </div>
      <div class="veterinary-scroll">
        <div class="veterinary-container">
          <div class="veterinary-card"  @click="viewVeterinaryDetail">
            <img src="@/assets/images/人物1.jpg" alt="兽医1" class="veterinary-image" />
            <div class="veterinary-info-overlay">
              <h4 class="veterinary-name">陈佑康</h4>
              <div class="veterinary-rating">
                <span class="stars">⭐⭐⭐⭐☆</span>
              </div>
            </div>
          </div>
          <div class="veterinary-card">
            <img src="@/assets/images/人物3.png" alt="兽医2" class="veterinary-image" />
            <div class="veterinary-info-overlay">
              <h4 class="veterinary-name">李鑫宇</h4>
              <div class="veterinary-rating">
                <span class="stars">⭐⭐⭐⭐☆</span>
              </div>
            </div>
          </div>
          <div class="veterinary-card">
            <img src="@/assets/images/人物2.jpg" alt="兽医3" class="veterinary-image" />
            <div class="veterinary-info-overlay">
              <h4 class="veterinary-name">钱佳仪</h4>
              <div class="veterinary-rating">
                <span class="stars">⭐⭐⭐⭐☆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 提醒事项 -->
    <div class="reminders-section">
      <div class="section-header">
        <h3 class="section-title" >提醒事项</h3>
        <a href="#" class="view-all" @click.prevent="goToReminders">查看全部</a>
      </div>
      <div class="reminders-scroll">
        <div class="reminders-container">
          <div class="reminder-card add-reminder-card" @click="goToReminders">
            <button class="add-reminder">+</button>
          </div>
          <div class="reminder-card">
            <div class="reminder-content">
              <h4 class="reminder-title">欣宠克可咀嚼片，12毫克</h4>
              <p class="reminder-description">每天1片</p>
              <div class="reminder-time">
                <span class="time-range"><img src="@/assets/svg/Clock.svg" alt="时间" />02:20-02:50</span>
                <button class="reminder-alarm"><img src="@/assets/svg/Notifications.svg" alt="提醒" /></button>
              </div>
            </div>
          </div>
          <div class="reminder-card">
            <div class="reminder-content">
              <h4 class="reminder-title">顺毛可咀嚼片，10毫克</h4>
              <p class="reminder-description">每天1片</p>
              <div class="reminder-time">
                <span class="time-range">02:20-02:50</span>
                <button class="reminder-alarm"><img src="@/assets/svg/Notifications.svg" alt="提醒" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    <!-- 底部导航栏 -->
    <div class="tabbar">
      <div class="tabbar-item active">
        <span class="icon"><img src="@/assets/svg/Home2.svg" alt="首页" /></span>
      </div>
      <div class="tabbar-item" @click="goToShopping">
        <span class="icon"><img src="@/assets/svg/Shopping.svg" alt="购物" /></span>
      </div>
      <div class="tabbar-item" @click="goToMyPets">
        <span class="icon"><img src="@/assets/svg/Pet.svg" alt="我的宠物" /></span>
      </div>
      <div class="tabbar-item" @click="goToNotifications">
        <span class="icon"><img src="@/assets/svg/Notifications.svg" alt="通知" /></span>
      </div>
      <div class="tabbar-item" @click="goToProfile">
        <span class="icon"><img src="@/assets/svg/User.svg" alt="我的" /></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSearch = () => {
  router.push('/search')
}

const viewVeterinaryDetail = () => {
  router.push('/veterinary-detail')
}

const goToShopping = () => {
  router.push('/shopping')
}

const viewProductDetail = () => {
  router.push('/product-detail')
}

const goToVeterinaryResults = () => {
  router.push('/veterinary-results')
}

const goToMyPets = () => {
  router.push('/my-pets')
}

const goToNotifications = () => {
  router.push('/notifications')
}

const goToProfile = () => {
  router.push('/profile')
}

const goToReminders = () => {
  router.push('/reminders')
}
</script>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
}

.status-bar {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-size: 14px;
  background-color: white;
  position: relative;
  z-index: 10;
}

.status-icons {
  display: flex;
  gap: 8px;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: white;
  border-bottom: 1px solid #E5E5E5;
}

.welcome-text {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.search-btn {
  width: 38px;
  height: 38px;
  border: 1px solid #353535;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1px;
  font-weight: 600;
}

.icon {
  font-size: 16px;
}

.home-content {
  width: 100%;
  max-height: calc(100vh - 133px);
  padding: 16px;
  padding-bottom: 80px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.home-content::-webkit-scrollbar {
  display: none;
}

.care-section {
  margin-bottom: 24px;
}

.care-card {
  background-color: #F5E5C0;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(0, 0, 0);
  margin-bottom: 24px;
}

.care-info {
  flex: 1;
  margin-right: 16px;
}

.care-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.care-description {
  font-size: 14px;
  margin-bottom: 16px;
  opacity: 0.9;
}

.btn-care {
  background-color: rgba(0, 0, 0, 0.726);
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
}

.care-image {
  width: 120px;
  height: 120px;
  top: 10px;
}



.care-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pets-section {
  margin-bottom: 24px;
}
.section-title1 {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 16px;
}
.section-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
}

.pets-grid {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.pet-item {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #E5E5E5;
  flex-shrink: 0;
  cursor: pointer;
}

.pet-item.active {
  border-color: #007AFF;
}

.add-pet {
  background-color: #F5F5F5;
  border: 1.4px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #8E8E93;
  cursor: pointer;
}

.pet-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.shop-section {
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

.products-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 24px;
}

.products-scroll::-webkit-scrollbar {
  display: none;
}

.products-container {
  display: flex;
  gap: 12px;
  padding-bottom: 8px;
}

.products-container .product-card {
  flex: 0 0 150px;
  height: 210px;
}

.product-card {
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.product-image {
  position: relative;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
}

.product-image img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.discount-badge {
  position: absolute;
  top: 80px;
  left: 8px;
  background-color: #DFD4FB;
  color: #333;
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 12px;
}

.product-name {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  flex: 1;
  line-height: 1.3;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.price-current {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.price-original {
  font-size: 12px;
  color: #8E8E93;
  text-decoration: line-through;
}

.add-to-cart {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #007AFF;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  bottom: 12px;
  right: 12px;
}

.veterinary-section {
  margin-bottom: 24px;
}

.veterinary-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 16px;
}

.veterinary-scroll::-webkit-scrollbar {
  display: none;
}

.veterinary-container {
  display: flex;
  gap: 16px;
  padding-bottom: 8px;
}

.veterinary-card {
  flex: 0 0 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.veterinary-image {
  width: 150px;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
}

.veterinary-info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  border-radius: 0 0 12px 12px;
  padding: 8px 4px 4px;
  color: white;
}

.veterinary-name {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 2px;
}

.veterinary-rating {
  display: flex;
  align-items: center;
  justify-content: center;
}

.stars {
  font-size: 10px;
  color: white;
}

.reminders-section {
  margin-bottom: 24px;
}

.reminders-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.reminders-scroll::-webkit-scrollbar {
  display: none;
}

.reminders-container {
  display: flex;
  gap: 12px;
  padding-bottom: 8px;
}

.reminder-card {
  flex: 0 0 200px;
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.add-reminder-card {
  flex: 0 0 44px;
  height: 122px;
  background-color: white;
  border: none;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.add-reminder {
  width: 100%;
  height: 100%;
  background-color: white;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reminder-content {
  position: relative;
  padding-left: 12px;
}

.reminder-content::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: #C3E4F2;
  border-radius: 2px;
}

.reminder-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  color: #333;
}

.reminder-description {
  font-size: 12px;
  color: #8E8E93;
  margin-bottom: 12px;
}

.reminder-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.time-range {
  font-size: 12px;
  color: #8E8E93;
  display: flex;
  align-items: center;
  gap: 4px;
}

.reminder-alarm {
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #8E8E93;
}

.tabbar {
  height: 53px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: 1px solid #E5E5E5;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  z-index: 99;
  padding-bottom: 5px;
}

.tabbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  color: #8E8E93;
  cursor: pointer;
}

.tabbar-item.active {
  color: #007AFF;
}

.tabbar-item .icon {
  font-size: 20px;
  margin-bottom: 4px;
}
</style>