<template>
  <div class="page success-page">
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
    <div class="success-content">
      <div class="success-icon">
        <img src="@/assets/images/成功登录.jpg" alt="成功图标" class="img-fluid" />
      </div>
      <h1 class="success-title">已成功注册！</h1>
      <p class="success-description">现在您可以享受我们的所有服务。</p>
      
      <button class="btn btn-primary btn-block" @click="goToHome">登录</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/login')
}
</script>

<style scoped>
.success-page {
  width: 100%;
  height: 100%;
  background-color: white;
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
}

.status-icons {
  display: flex;
  gap: 8px;
}

.success-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
}

.success-icon {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 40px;
}

.success-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.success-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.success-description {
  font-size: 16px;
  text-align: center;
  color: #666;
  margin-bottom: 64px;
}

.btn-block {
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}
</style>