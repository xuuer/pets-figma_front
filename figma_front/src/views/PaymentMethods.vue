<template>
  <div class="payment-methods-page">
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
      <button class="back-button" @click="goBack">
        <span class="icon"><img src="@/assets/svg/Back.svg" alt="返回" /></span>
      </button>
      <h1 class="page-title">付款方式</h1>
      <div class="navbar-right">
        <!-- 占位 -->
      </div>
    </div>

    <!-- 付款方式列表 -->
    <div class="payment-methods-content">
      <div 
        v-for="method in paymentMethods" 
        :key="method.id"
        class="payment-method-card"
      >
        <div class="payment-method-icon" :class="method.iconClass">
          <span class="icon">{{ method.icon }}</span>
        </div>
        <div class="payment-method-info">
          <h3 class="payment-method-type">{{ method.type }}</h3>
          <p class="payment-method-details">{{ method.details }}</p>
        </div>
      </div>
    </div>


    <!-- 添加新卡按钮 -->
    <div class="add-card-container">
      <button class="add-card-button" @click="addPaymentMethod">+ 添加新卡</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 付款方式数据
const paymentMethods = ref([
  {
    id: 1,
    type: '万事达卡',
    details: '**** 1994',
    icon: '💳',
    iconClass: 'mastercard'
  },
  {
    id: 2,
    type: 'Visa卡',
    details: '**** 1981',
    icon: '💳',
    iconClass: 'visa'
  },
  {
    id: 3,
    type: 'PayPal账户',
    details: 'wohaoshuai@mail.com',
    icon: 'P',
    iconClass: 'paypal'
  }
])

// 添加付款方式
const addPaymentMethod = () => {
  // 这里可以实现添加付款方式的逻辑
  alert('添加新卡功能')
}

// 返回上一页
const goBack = () => {
  router.back()
}
</script>

<style scoped>
.payment-methods-page {
  width: 100%;
  height: 100vh;
  background-color: #F5F5F5;
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 状态栏 */
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

/* 导航栏 */
.navbar {
  height: 44px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid #E5E5E5;
}

.back-button {
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.page-title {
  font-size: 17px;
  font-weight: 600;
  color: #000000;
  margin: 0;
}

.navbar-right {
  width: 32px;
}

/* 付款方式内容 */
.payment-methods-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.payment-methods-content::-webkit-scrollbar {
  display: none;
}

.payment-methods-content {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* 付款方式卡片 */
.payment-method-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  transition: all 0.2s;
}

.payment-method-card:hover {
  background-color: #F9F9F9;
}

.payment-method-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  margin-right: 16px;
  flex-shrink: 0;
}

.payment-method-icon.mastercard {
  background-color: rgba(0, 122, 255, 0.1);
  color: #FF4500;
}

.payment-method-icon.visa {
  background-color: rgba(0, 122, 255, 0.1);
  color: #007AFF;
}

.payment-method-icon.paypal {
  background-color: rgba(0, 153, 255, 0.1);
  color: #0099FF;
}

.payment-method-info {
  flex: 1;
}

.payment-method-type {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0 0 4px 0;
}

.payment-method-details {
  font-size: 14px;
  color: #8e8e93;
  margin: 0;
}

/* 添加新卡按钮容器 */
.add-card-container {
  padding: 45px;
}

/* 添加新卡按钮 */
.add-card-button {
  width: 100%;
  background-color: #333;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-card-button:hover {
  background-color: #555;
}
</style>