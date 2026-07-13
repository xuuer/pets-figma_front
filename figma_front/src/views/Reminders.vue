<template>
  <div class="reminders-page">
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
      <div class="navbar-center">
        <h1 class="page-title">提醒</h1>
        <p class="page-subtitle">今天 2023年9月</p>
      </div>
      <button class="add-btn" @click="goToAddReminder">
        <span class="icon">+</span>
      </button>
    </div>

    <!-- 日期选择器 -->
    <div class="date-selector">
      <div class="date-item" v-for="date in dates" :key="date.day">
        <div class="date-week">{{ date.week }}</div>
        <div class="date-day" :class="{ 'active': date.active }">{{ date.day }}</div>
      </div>
    </div>

    <!-- 提醒列表 -->
    <div class="reminders-content">
      <div class="reminder-item" v-for="reminder in reminders" :key="reminder.id">
        <div class="reminder-time">
          <span class="time">{{ reminder.time }}</span>
        </div>
        <div class="reminder-content">
          <div class="reminder-line"></div>
          <div class="reminder-details">
            <h3 class="reminder-title">{{ reminder.title }}</h3>
            <p class="reminder-description">{{ reminder.description }}</p>
            <div class="reminder-time-range">
              <span class="time-range"><img src="@/assets/svg/Clock.svg" alt="时钟" /> {{ reminder.timeRange }}</span>
            </div>
          </div>
          <div class="reminder-bell">
            <span class="bell-icon"><img src="@/assets/svg/Notifications.svg" alt="提醒" /></span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部进度条 -->
    <div class="bottom-progress">
      <div class="progress-bar"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 日期数据
const dates = ref([
  { week: '一', day: '22', active: false },
  { week: '二', day: '23', active: false },
  { week: '三', day: '24', active: true },
  { week: '四', day: '25', active: false },
  { week: '五', day: '26', active: false },
  { week: '六', day: '27', active: false },
  { week: '日', day: '28', active: false }
])

// 提醒数据
const reminders = ref([
  {
    id: 1,
    time: '上午9:00',
    title: '欣宠克可咀嚼片，12毫克',
    description: '每天1片',
    timeRange: '02:20-02:50'
  },
  {
    id: 2,
    time: '下午2:00',
    title: '顺毛可咀嚼片，10毫克',
    description: '每天1片',
    timeRange: '02:20-02:50'
  },
  {
    id: 3,
    time: '晚上8:00',
    title: '磨牙棒',
    description: '每天1次',
    timeRange: '02:20-02:50'
  },
  {
    id: 4,
    time: '晚上8:00',
    title: '肠康片，一粒',
    description: '每天1片',
    timeRange: '02:20-02:50'
  }
])

// 返回上一页
const goBack = () => {
  router.back()
}

// 跳转到添加提醒页面
const goToAddReminder = () => {
  router.push('/add-reminder')
}
</script>

<style scoped>
.reminders-page {
  width: 100%;
  height: 100vh;
  background-color: #F5F5F5;
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
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
  height: 60px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid #E5E5E5;
}

.back-btn,
.add-btn {
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

.add-btn {
  border: 1px solid #E5E5E5;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 600;
}

.navbar-center {
  text-align: center;
}

.page-title {
  font-size: 17px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 2px 0;
}

.page-subtitle {
  font-size: 12px;
  color: #8E8E93;
  margin: 0;
}

/* 日期选择器 */
.date-selector {
  background-color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 8px solid #F5F5F5;
}

.date-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 8px;
}

.date-week {
  font-size: 12px;
  color: #8E8E93;
}

.date-day {
  font-size: 16px;
  font-weight: 500;
  color: #8E8E93;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.date-day.active {
  background-color: #007AFF;
  color: white;
  font-weight: 600;
}

/* 提醒内容 */
.reminders-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.reminders-content::-webkit-scrollbar {
  display: none;
}

.reminder-item {
  display: flex;
  margin-bottom: 24px;
}

.reminder-time {
  width: 80px;
  padding-right: 16px;
}

.time {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.reminder-content {
  flex: 1;
  position: relative;
  padding-left: 16px;
}

.reminder-line {
  position: absolute;
  left: 23px;
  top: 10%;
  bottom: 20%;
  width: 3px;
  background-color: #1861ff3a;
}

.reminder-details {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.reminder-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0 0 4px 0;
}

.reminder-description {
  font-size: 14px;
  color: #8E8E93;
  margin: 0 0 8px 0;
}

.reminder-time-range {
  display: flex;
  align-items: center;
  gap: 8px;
}

.time-range {
  font-size: 12px;
  color: #8E8E93;
}

.reminder-bell {
  position: absolute;
  right: 16px;
  top: 66px;
  font-size: 16px;
}

/* 底部进度条 */
.bottom-progress {
  height: 4px;
  background-color: white;
  border-top: 1px solid #E5E5E5;
  position: relative;
}

.progress-bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 40%;
  background-color: #007AFF;
}
</style>