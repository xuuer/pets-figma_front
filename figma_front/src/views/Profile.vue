<template>
  <div class="profile-page">
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
      <div class="navbar-left"></div>
      <h1 class="page-title">简介</h1>
      <div class="navbar-right">
        <button class="edit-button">
          <span class="edit-icon"><img src="@/assets/svg/Edit.svg" alt="编辑" /></span>
        </button>
      </div>
    </div>

    <!-- 用户信息区域 -->
    <div class="user-info-card">
      <div class="user-info-item">
        <div class="info-icon gray">
          <span class="icon"><img src="@/assets/svg/User3.svg" alt="用户" /></span>
        </div>
        <div class="info-content">大帅哥</div>
      </div>
      <div class="user-info-item">
        <div class="info-icon">
          <span class="icon"><img src="@/assets/svg/Email.svg" alt="邮箱" /></span>
        </div>
        <div class="info-content">wohaoshuai@mail.com</div>
      </div>
      <div class="user-info-item">
        <div class="info-icon ">
          <span class="icon"><img src="@/assets/svg/Mobile.svg" alt="电话" /></span>
        </div>
        <div class="info-content">15629766120</div>
      </div>
    </div>

    <!-- 功能菜单 -->
    <div class="menu-card">
      <div class="menu-item" @click="goToPaymentMethods">
        <div class="menu-icon blue">
          <span class="icon"><img src="@/assets/svg/Payment.svg" alt="付款方式" /></span>
        </div>
        <div class="menu-content">付款方式</div>
      </div>
      <div class="menu-item" @click="goToAddresses">
        <div class="menu-icon orange">
          <span class="icon"><img src="@/assets/svg/Home.svg" alt="地址" /></span>
        </div>
        <div class="menu-content">地址</div>
      </div>
      <div class="menu-item" @click="goToOrders">
        <div class="menu-icon purple">
          <span class="icon"><img src="@/assets/svg/Shopping.svg" alt="订单" /></span>
        </div>
        <div class="menu-content">订单</div>
      </div>
      <div class="menu-item" @click="goToAppointments">
        <div class="menu-icon green">
          <span class="icon"><img src="@/assets/svg/Calendar.svg" alt="预约" /></span>
        </div>
        <div class="menu-content">预约</div>
      </div>
      <div class="menu-item">
        <div class="menu-icon red">
        </div>
        <div class="menu-content" @click="logout">退出</div>
      </div>
    </div>

    <!-- 底部导航栏 -->
    <div class="tabbar">
      <div class="tabbar-item" @click="goToHome">
        <span class="icon"><img src="@/assets/svg/Home.svg" alt="首页" /></span>
      </div>
      <div class="tabbar-item" @click="goToCart">
        <span class="icon"><img src="@/assets/svg/Shopping.svg" alt="购物" /></span>  
      </div>
      <div class="tabbar-item" @click="goToPets">
        <span class="icon"><img src="@/assets/svg/Pet.svg" alt="我的宠物" /></span>
      </div>
      <div class="tabbar-item" @click="goToNotifications">
        <span class="icon"><img src="@/assets/svg/Notifications.svg" alt="通知" /></span>
      </div>
      <div class="tabbar-item active" >
        <span class="icon"><img src="@/assets/svg/User2.svg" alt="我的" /></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 导航到付款方式页面
const goToPaymentMethods = () => {
  router.push('/payment-methods')
}

// 导航到地址页面
const goToAddresses = () => {
  router.push('/addresses')
}

// 导航到订单页面
const goToOrders = () => {
  router.push('/orders')
}

// 导航到预约页面
const goToAppointments = () => {
  router.push('/appointments')
}

// 导航到首页
const goToHome = () => {
  router.push('/home')
}

// 导航到购物车
const goToCart = () => {
  router.push('/shopping')
}

// 导航到宠物页面
const goToPets = () => {
  router.push('/my-pets')
}

// 导航到通知页面
const goToNotifications = () => {
  router.push('/notifications')
}

// 退出登录
const logout = () => {
  if (confirm('确定要退出登录吗？')) {
    router.push('/login')
  }
}
</script>

<style scoped>
.profile-page {
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

.navbar-left {
  width: 44px;
}

.navbar-right {
  width: 44px;
  display: flex;
  justify-content: flex-end;
}

.page-title {
  font-size: 17px;
  font-weight: 600;
  color: #000000;
  margin: 0;
}

.edit-button {
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

/* 用户信息卡片 */
.user-info-card {
  background-color: white;
  margin: 16px;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.user-info-item {
  display: flex;
  align-items: center;
  padding: 10px ;
  border-bottom: 1px solid #F0F0F0;
}

.user-info-item:last-child {
  border-bottom: none;
}

.info-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1px;
  margin-right: 16px;
}

.info-icon.gray {
  background-color: rgba(158, 158, 158, 0.1);
  color: #9E9E9E;
}

.info-content {
  flex: 1;
  font-size: 16px;
  color: #333;
}

/* 菜单卡片 */
.menu-card {
  background-color: white;
  margin: 0 16px 16px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid #F0F0F0;
}


.menu-item:last-child {
  border-bottom: none;
}

.menu-item:hover {
  background-color: #F5F5F5;
}

.menu-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1px;
  margin-right: 16px;
}

.menu-icon.blue {
  background-color: #C3E4F2;
  color: #C3E4F2;
}

.menu-icon.orange {
  background-color: #FFE4C4;
  color: #FFA500;
}

.menu-icon.purple {
  background-color: #Dfd4fb;
  color: #AF7AFF;
}

.menu-icon.green {
  background-color: #D3EFC3;
  color: #90EE90;
}

.menu-icon.red {
  background-color: #ffffff;
  color: #FF5722;
   margin-right: -35px;
}

.menu-content {
  flex: 1;
  font-size: 16px;
  color: #333;
}

.menu-item:last-child .menu-content {
  color: #FF3B30;
}

/* 底部导航栏 */
.bottom-nav {
  height: 130px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #E5E5E5;
  padding: 0 16px;
  margin-top: auto;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-item.active {
  color: #007AFF;
}

.nav-icon {
  font-size: 20px;
  margin-bottom: 4px;
}

.nav-text {
  font-size: 12px;
}

/* 滚动内容 */
.profile-page {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.profile-page::-webkit-scrollbar {
  display: none;
}

.profile-page {
  scrollbar-width: none;
  -ms-overflow-style: none;
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