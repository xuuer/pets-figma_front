<template>
  <div class="addresses-page">
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
      <h1 class="page-title">地址</h1>
      <div class="navbar-right">
        <!-- 占位 -->
      </div>
    </div>

    <!-- 地址列表 -->
    <div class="addresses-content">
      <div 
        v-for="address in addresses" 
        :key="address.id"
        class="address-card"
      >
        <div class="address-type" :class="address.typeClass">
          <span class="type-icon">{{ address.typeIcon }}</span>
          <span class="type-text">{{ address.type }}</span>
        </div>
        <div class="address-details">
          {{ address.details }}
        </div>
      </div>
    </div>

    <!-- 添加地址按钮 -->
    <div class="add-address-container">
      <button class="add-address-button" @click="addAddress">+ 添加地址</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 地址数据
const addresses = ref([
  {
    id: 1,
    type: '家',
    typeIcon: '🏠',
    typeClass: 'home',
    details: '浦东新区居里路289号16栋200室'
  },
  {
    id: 2,
    type: '公司',
    typeIcon: '🏢',
    typeClass: 'company',
    details: '浦东新区居里路289号16栋200室, 21701'
  },
  {
    id: 3,
    type: '其它',
    typeIcon: '📍',
    typeClass: 'other',
    details: '浦东新区居里路289号16栋200室 42300'
  }
])

// 添加地址
const addAddress = () => {
  // 这里可以实现添加地址的逻辑
  alert('添加地址功能')
}

// 返回上一页
const goBack = () => {
  router.back()
}
</script>

<style scoped>
.addresses-page {
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

/* 地址内容 */
.addresses-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.addresses-content::-webkit-scrollbar {
  display: none;
}

.addresses-content {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* 地址卡片 */
.address-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
}

.address-card:hover {
  background-color: #F9F9F9;
}

.address-type {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 12px;
}

.address-type.home {
  background-color: rgba(100, 149, 237, 0.1);
  color: #6495ED;
}

.address-type.company {
  background-color: rgba(144, 238, 144, 0.1);
  color: #90EE90;
}

.address-type.other {
  background-color: rgba(175, 122, 255, 0.1);
  color: #AF7AFF;
}

.type-icon {
  margin-right: 6px;
  font-size: 14px;
}

.address-details {
  font-size: 16px;
  color: #333;
  line-height: 1.4;
}

/* 添加地址按钮容器 */
.add-address-container {
  padding: 45px;
}

/* 添加地址按钮 */
.add-address-button {
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

.add-address-button:hover {
  background-color: #555;
}
</style>