<template>
  <div class="page guide-page">
    <!-- 状态栏 -->
    <div class="status-bar">
      <div class="time">9:41</div>
      <div class="status-icons">
        <span class="signal"><img src="@/assets/svg/Cellular Connection.svg" alt="信号" /></span>
        <span class="wifi"><img src="@/assets/svg/Wifi.svg" alt="wifi" /></span>
        <span class="battery"><img src="@/assets/svg/Capacity.svg" alt="电池" /></span>
      </div>
    </div>
    
    <!-- 主要内容 -->
    <div class="guide-content">
      <div class="circle-bg left"></div>
      <div class="circle-bg right"></div>
      <div class="pet-image">
        <img src="@/assets/images/引导页3.png" alt="小猫" class="img-fluid" />
      </div>
      <h1 class="guide-title">快速找到兽医</h1>
      <p class="guide-description">如果你的宠物生病了，你可以随时根据兽医专家的名单来选择治疗方法</p>
    </div>
    
    <!-- 页码指示器 -->
    <div class="page-indicator">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot active"></div>
    </div>
    
    <!-- 按钮 -->
    <div class="guide-actions">
      <button class="btn btn-primary" @click="goToLogin">开始吧</button>
      <a href="#" class="skip-link" ></a>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()



const goToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
.guide-page {
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
}

.status-bar {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-size: 14px;
  position: relative;
  z-index: 10;
}

.status-icons {
  display: flex;
  gap: 8px;
}

.guide-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  position: relative;
}

.circle-bg {
  position: absolute;
  border-radius: 60%;
  z-index: 0;
}

.circle-bg.left {
  top: 11px;
  left: -110px;
  width: 180px;
  height: 180px;
  background-color: #E8F4FD;
}

.circle-bg.right {
  top: 50px;
  right: -100px;
  width: 350px;
  height: 350px;
  background-color: #d7ecfe;
}

.pet-image {
  position: relative;
  z-index: 2;
  margin-bottom: 10px;
  margin-top: 58px;
}

.pet-image img {
  width: 280px;
  height: 280px;
  object-fit: contain;
}

.guide-title {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
  color: #333;
  position: relative;
  z-index: 2;
}

.guide-description {
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #000000;
  max-width: 280px;
  position: relative;
  z-index: 2;
  margin-bottom: 64px;
}

.page-indicator {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 0 0 48px;
  position: relative;
  z-index: 2;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #E5E5E5;
}

.dot.active {
  background-color: #007AFF;
  width: 24px;
  border-radius: 4px;
}

.guide-actions {
  padding: 0 32px 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;
  z-index: 2;
}

.btn-primary {
  width: 100%;
  padding: 18px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  background-color: #333333;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #555555;
}

.skip-link {
  text-align: center;
  color: #007AFF;
  font-size: 16px;
  text-decoration: none;
  display: block;
  margin-top: 8px;
}

.skip-link:hover {
  text-decoration: underline;
}
</style>