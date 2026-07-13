<template>
  <div class="notifications-page">
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
    <div class="navbar" @click="addNotification">
      <div class="navbar-center">
        <h1 class="page-title">通知</h1>
      </div>
      <div class="navbar-right">
        <button class="add-button">
          <span class="icon">+</span>
        </button>
      </div>
    </div>

    <!-- 通知列表 -->
    <div class="notifications-content">
      <!-- 今天 -->
      <div class="notification-group">
        <h2 class="group-title">今天</h2>
        <div 
          v-for="notification in todayNotifications" 
          :key="notification.id"
          class="notification-item"
        >
          <div class="notification-icon" :class="notification.iconClass">
            <span class="icon">{{ notification.icon }}</span>
          </div>
          <div class="notification-content">
            <h3 class="notification-title">{{ notification.title }}</h3>
            <p class="notification-time">{{ notification.time }}</p>
          </div>
          <div class="notification-badge" v-if="notification.unread">
            <span class="badge">{{ notification.badge }}</span>
          </div>
        </div>
      </div>

      <!-- 2024年5月28日 -->
      <div class="notification-group">
        <h2 class="group-title">2024年5月28日</h2>
        <div 
          v-for="notification in may28Notifications" 
          :key="notification.id"
          class="notification-item"
        >
          <div class="notification-icon" :class="notification.iconClass">
            <span class="icon">{{ notification.icon }}</span>
          </div>
          <div class="notification-content">
            <h3 class="notification-title">{{ notification.title }}</h3>
            <p class="notification-time">{{ notification.time }}</p>
          </div>
        </div>
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
      <div class="tabbar-item active" @click="goToNotifications">
        <span class="icon"><img src="@/assets/svg/Notifications2.svg" alt="通知" /></span>
      </div>
      <div class="tabbar-item" @click="goToProfile">
        <span class="icon"><img src="@/assets/svg/User.svg" alt="我的" /></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 今天的通知数据
const todayNotifications = ref([
  {
    id: 1,
    title: '及时给你的宠物接种疫苗',
    time: '2分钟前',
    icon: '💉',
    iconClass: 'purple',
    unread: true,
    badge: '1'
  },
  {
    id: 2,
    title: '你明天晚上七点半有兽医预约。',
    time: '18分钟前',
    icon: '🩺',
    iconClass: 'yellow'
  }
])

// 2024年5月28日的通知数据
const may28Notifications = ref([
  {
    id: 3,
    title: '您的付款成功了，产品在路上了。',
    time: '下午08:20',
    icon: '📦',
    iconClass: 'blue'
  },
  {
    id: 4,
    title: '宠物添加成功！',
    time: '下午05:43',
    icon: '🐱',
    iconClass: 'green'
  },
  {
    id: 5,
    title: '及时给你的宠物接种疫苗',
    time: '上午11:15',
    icon: '💉',
    iconClass: 'purple'
  },
  {
    id: 6,
    title: '你明天上午9点15分有兽医预约。',
    time: '上午09:15',
    icon: '🩺',
    iconClass: 'yellow'
  }
])

// 导航方法
const goToHome = () => {
  router.push('/home')
}

const goToCart = () => {
  router.push('/shopping')
}

const goToPets = () => {
  router.push('/my-pets')
}

const goToNotifications = () => {
  // 已经在通知页面
}

const goToProfile = () => {
  router.push('/profile')
}
const addNotification = () => {
  router.push('/reminders')
}

</script>

<style scoped>
.notifications-page {
  width: 100%;
  height: 100vh;
  background-color: #F5F5F5;
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
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
  position: relative;
  z-index: 10;
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
  justify-content: flex-end;
  padding: 0 16px;
  border-bottom: 1px solid #E5E5E5;
  position: relative;
  z-index: 10;
}

.navbar-center {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.add-button {
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

.page-title {
  font-size: 17px;
  font-weight: 600;
  color: #000000;
  margin: 0;
}

/* 通知内容 */
.notifications-content {
  position: absolute;
  top: 88px;
  left: 0;
  right: 0;
  bottom: 56px;
  padding: 16px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.notification-group {
  margin-bottom: 24px;
}

.group-title {
  font-size: 14px;
  font-weight: 600;
  color: #8E8E93;
  margin: 0 0 12px 0;
}

/* 通知项 */
.notification-item {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.notification-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  flex-shrink: 0;
}

.notification-icon.purple {
  background-color: rgba(175, 122, 255, 0.1);
}

.notification-icon.yellow {
  background-color: rgba(255, 189, 105, 0.1);
}

.notification-icon.blue {
  background-color: rgba(100, 149, 237, 0.1);
}

.notification-icon.green {
  background-color: rgba(144, 238, 144, 0.1);
}

.notification-icon .icon {
  font-size: 20px;
}

.notification-content {
  flex: 1;
  min-width: 0;
}

.notification-title {
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  margin: 0 0 4px 0;
}

.notification-time {
  font-size: 14px;
  color: #8E8E93;
  margin: 0;
}

.notification-badge {
  margin-left: 12px;
}

.badge {
  background-color: #FF3B30;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
}

/* 底部导航栏 */
.bottom-nav {
  height: 120px;
  background-color: #ffffff;
  border-top: -120px solid #E5E5E5;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.nav-item {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 4px;
  position: relative;
}

.nav-item.active {
  color: #007AFF;
}

.nav-icon {
  font-size: 20px;
}

.nav-badge {
  position: absolute;
  top: 0;
  right: -8px;
  background-color: #FF3B30;
  color: white;
  font-size: 10px;
  font-weight: 600;
  padding: 1px 5px;
  border-radius: 8px;
  min-width: 14px;
  text-align: center;
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