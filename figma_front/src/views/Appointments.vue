<template>
  <div class="appointments-page">
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
      <h1 class="page-title">预约</h1>
      <div class="navbar-right">
        <button class="add-button" @click="addAppointment">
          <span class="icon">+</span>
        </button>
      </div>
    </div>

    <!-- 宠物选择 -->
    <div class="pet-selection">
      <div class="section-title">选择您的宠物</div>
      <div class="pets-container">
        <div 
          v-for="pet in pets" 
          :key="pet.id"
          class="pet-item"
          :class="{ 'selected': selectedPetId === pet.id }"
          @click="selectPet(pet.id)"
        >
          <div class="pet-avatar">
            <span class="avatar-icon">{{ pet.icon }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 日历选择器 -->
    <div class="calendar-container">
      <div class="calendar-header">
        <button class="calendar-nav" @click="previousMonth">
          <span class="icon">‹</span>
        </button>
        <div class="calendar-title">{{ currentYearMonth }}</div>
        <button class="calendar-nav" @click="nextMonth">
          <span class="icon">›</span>
        </button>
      </div>
      <div class="calendar-weekdays">
        <div class="weekday" v-for="day in weekdays" :key="day">{{ day }}</div>
      </div>
      <div class="calendar-days">
        <div 
          v-for="day in calendarDays" 
          :key="day.date"
          class="calendar-day"
          :class="{ 
            'empty': !day.isCurrentMonth, 
            'selected': selectedDate === day.date 
          }"
          @click="selectDate(day.date, day.isCurrentMonth)"
        >
          {{ day.day }}
        </div>
      </div>
    </div>

    <!-- 预约列表 -->
    <div class="appointments-content">
      <div class="section-title">2025年8月</div>
      <div class="appointment-card">
        <div class="veterinary-info">
          <div class="veterinary-name">张博士</div>
          <div class="service-type">家访</div>
        </div>
        <div class="appointment-time">
          <span class="time-icon"><img src="@/assets/svg/Clock.svg" alt="时间" /></span>
          上午09:20
          <span class="notification-icon"><img src="@/assets/svg/Notifications2.svg" alt="提醒" /></span>
        </div>
      </div>

      <div class="section-title">以前的</div>
      
    </div>
    
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 宠物数据
const pets = ref([
  { id: 1, icon: '🐶', name: '狗狗' },
  { id: 2, icon: '🐱', name: '猫咪' },
  { id: 3, icon: '🐰', name: '兔子' }
])

// 当前选中的宠物
const selectedPetId = ref(1)

// 选择宠物
const selectPet = (petId) => {
  selectedPetId.value = petId
}

// 当前日期
const currentDate = ref(new Date(2025, 7, 2)) // 2025年8月2日

// 星期几
const weekdays = ['一', '二', '三', '四', '五', '六', '日']

// 当前年月
const currentYearMonth = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth() + 1
  return `${year}.${month.toString().padStart(2, '0')}`
})

// 生成日历天数
const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  
  // 当月第一天
  const firstDay = new Date(year, month, 1)
  // 当月最后一天
  const lastDay = new Date(year, month + 1, 0)
  // 当月第一天是星期几 (0-6, 0是星期日)
  let firstDayWeek = firstDay.getDay()
  // 调整为周一为第一天
  firstDayWeek = firstDayWeek === 0 ? 6 : firstDayWeek - 1
  // 日历开始日期
  const startDate = new Date(firstDay)
  startDate.setDate(firstDay.getDate() - firstDayWeek)
  
  const days = []
  
  // 生成42天 (6周)
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    days.push({
      date: date.toISOString().split('T')[0],
      day: date.getDate(),
      isCurrentMonth: date.getMonth() === month
    })
  }
  
  return days
})

// 选中的日期
const selectedDate = ref('2025-08-02')

// 选择日期
const selectDate = (date, isCurrentMonth) => {
  if (isCurrentMonth) {
    selectedDate.value = date
  }
}

// 上一月
const previousMonth = () => {
  const newDate = new Date(currentDate.value)
  newDate.setMonth(newDate.getMonth() - 1)
  currentDate.value = newDate
}

// 下一月
const nextMonth = () => {
  const newDate = new Date(currentDate.value)
  newDate.setMonth(newDate.getMonth() + 1)
  currentDate.value = newDate
}

// 添加预约
const addAppointment = () => {
  alert('添加预约功能')
}

// 返回上一页
const goBack = () => {
  router.back()
}
</script>

<style scoped>
.appointments-page {
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

.back-button,
.add-button {
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
  display: flex;
  justify-content: flex-end;
}

/* 宠物选择 */
.pet-selection {
  padding: 16px;
  background-color: white;
  margin-bottom: 16px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: #8E8E93;
  margin-bottom: 12px;
}

.pets-container {
  display: flex;
  gap: 16px;
}

.pet-item {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.pet-item.selected {
  border-color: #007AFF;
  background-color: rgba(0, 122, 255, 0.1);
}

.pet-avatar {
  font-size: 24px;
}

/* 日历容器 */
.calendar-container {
  background-color: white;
  margin: 0 16px 16px;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* 日历头部 */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.calendar-nav {
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
}

.calendar-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

/* 日历星期 */
.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 12px;
}

.weekday {
  font-size: 14px;
  color: #8E8E93;
  text-align: center;
  padding: 4px 0;
}

/* 日历天数 */
.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.calendar-day {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.calendar-day.empty {
  color: #E0E0E0;
  cursor: default;
}

.calendar-day.selected {
  background-color: #007AFF;
  color: white;
  font-weight: 600;
}

.calendar-day:not(.empty):hover {
  background-color: #F5F5F5;
}

/* 预约内容 */
.appointments-content {
  flex: 1;
  padding: 0 16px 16px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.appointments-content::before {
  content: '';
  position: absolute;
  left: 22px;
  top: 695px;
  bottom: 65px;
  width: 3px;
  background-color: #C3E4F2;
  border-radius: 2px;
}
.appointments-content::-webkit-scrollbar {
  display: none;
}

.appointments-content {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* 预约卡片 */
.appointment-card {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
}

.appointment-card:hover {
  background-color: #F9F9F9;
}

.veterinary-info {
  margin-bottom: 12px;
}

.veterinary-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.service-type {
  font-size: 14px;
  color: #8E8E93;
}

.appointment-time {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333;
}

.time-icon,
.notification-icon {
  font-size: 16px;
}

.notification-icon {
  margin-left: auto;
}
</style>