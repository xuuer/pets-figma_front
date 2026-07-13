<template>
  <div class="page my-pets-page">
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
      <span class="icon"></span>
      <h1 class="navbar-title">我的宠物</h1>
      <button class="add-btn" @click="addPet">
        <span class="icon">+</span>
      </button>
    </div>
    <div>
      <span class="icon"></span>
      <h1 class="navbar-title"></h1>
      <button class="add-btn2">
        <span class="icon"></span>
      </button>
    </div>
    <!-- 主要内容 -->
    <div class="pets-content">
      <!-- 宠物卡片 -->
      <div class="pet-card">
        <div class="pet-info">
          <div class="pet-name-age">
            <h2 class="pet-name">布丁</h2>
            <p class="pet-age">4岁</p>
          </div>
          <button class="edit-btn" @click="editPet">
            <span class="icon"><img src="@/assets/svg/Edit.svg" alt="编辑" /></span>
          </button>
        </div>
        <div class="pet-image">
          <img src="@/assets/images/宠物1.jpg" alt="布丁" class="img-fluid" />
        </div>
      </div>
      
      <!-- 可以添加更多宠物卡片 -->
    </div>
    
    <!-- 底部导航栏 -->
    <div class="tabbar">
      <div class="tabbar-item" @click="goToHome">
        <span class="icon"><img src="@/assets/svg/Home.svg" alt="首页" /></span>
      </div>
      <div class="tabbar-item" @click="goToShopping">
        <span class="icon"><img src="@/assets/svg/Shopping.svg" alt="购物" /></span>
      </div>
      <div class="tabbar-item active">
        <span class="icon"><img src="@/assets/svg/Pet2.svg" alt="我的宠物" /></span>
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

const addPet = () => {
  // 添加宠物的逻辑
  console.log('添加宠物')
}

const editPet = () => {
  router.push('/edit-pet')
}

const goToHome = () => {
  router.push('/home')
}

const goToShopping = () => {
  router.push('/shopping')
}

const goToNotifications = () => {
  router.push('/notifications')
}

const goToProfile = () => {
  router.push('/profile')
}
</script>

<style scoped>
.my-pets-page {
  width: 100%;
  min-height: 100%;
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
  background-color: white;
  border-bottom: 1px solid #E5E5E5;
}

.navbar-title {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}

.add-btn {
  width: 35px;
  height: 35px;
  border: 1.5px solid #6d6d6d;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
}
.add-btn2{
  width: 35px;
  height: 110px;
  border: 1.5px solid #F5F5F5;
  background-color: #F5F5F5;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
}
.pets-content {
  flex: 1;
  padding: 1px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.pets-content::-webkit-scrollbar {
  display: none;
}

.pet-card {
  background-color: #FF7A00;
  border-radius: 16px;
  overflow: hidden;
  color: white;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  min-height: 500px;
}

.pet-info {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.pet-name-age {
  flex: 1;
}

.pet-name {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.pet-age {
  font-size: 16px;
  margin: 4px 0 0;
  opacity: 0.9;
}

.edit-btn {
  width: 35px;
  height: 35px;
  border: 1.5px solid #6d6d6d;
  background-color: rgba(170, 87, 10, 0.096);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1px;
  font-weight: 600;
}

.pet-image {
  width: 100%;
  flex: 1;
  overflow: hidden;
}

.pet-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tabbar {
  height: 49px;
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
  z-index: 100;
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