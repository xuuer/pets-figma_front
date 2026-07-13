<template>
  <div class="add-reminder-page">
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
      <h1 class="page-title">添加提醒</h1>
      <div class="navbar-right">
        <!-- 占位 -->
      </div>
    </div>

    <!-- 提醒类型选择 -->
    <div class="reminder-types">
      <div class="type-item" v-for="type in reminderTypes" :key="type.id" :class="{ 'active': selectedType === type.id }" @click="selectType(type.id)">
        <div class="type-icon" :class="type.iconClass">
          <span class="icon">{{ type.icon }}</span>
        </div>
        <div class="type-name">{{ type.name }}</div>
      </div>
    </div>

    <!-- 表单内容 -->
    <div class="form-content">
      <!-- 提醒名称 -->
      <div class="form-group">
        <label class="form-label">提醒名称</label>
        <input 
          type="text" 
          class="form-input" 
          v-model="reminder.title" 
          placeholder="咀嚼片"
        >
      </div>

      <!-- 期间 -->
      <div class="form-group">
        <label class="form-label">期间</label>
        <div class="form-selector">
          <span class="select-value">{{ reminder.period }}</span>
          <span class="select-arrow">›</span>
        </div>
      </div>

      <!-- 时间 -->
      <div class="form-group">
        <label class="form-label">时间</label>
        <div class="form-selector">
          <span class="select-value">{{ reminder.time }}</span>
          <span class="select-arrow">›</span>
        </div>
      </div>

      <!-- 数量 -->
      <div class="form-group">
        <label class="form-label">数量</label>
        <div class="quantity-control">
          <button class="quantity-btn decrease" @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
          <span class="quantity">{{ quantity }}颗药</span>
          <button class="quantity-btn increase" @click="increaseQuantity">+</button>
        </div>
      </div>
    </div>

    <!-- 底部保存按钮 -->
    <div class="bottom-action">
      <button class="save-btn" @click="saveReminder">保存</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 提醒类型数据
const reminderTypes = ref([
  {
    id: 1,
    name: '药物',
    icon: '💊',
    iconClass: 'blue'
  },
  {
    id: 2,
    name: '疫苗',
    icon: '💉',
    iconClass: 'purple'
  },
  {
    id: 3,
    name: '运动',
    icon: '🏃',
    iconClass: 'green'
  },
  {
    id: 4,
    name: '其他',
    icon: '📝',
    iconClass: 'yellow'
  }
])

// 选中的类型
const selectedType = ref(1)

// 提醒数据
const reminder = ref({
  title: '',
  period: '3天',
  time: '上午09:20'
})

// 数量
const quantity = ref(2)

// 选择类型
const selectType = (typeId) => {
  selectedType.value = typeId
}

// 减少数量
const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

// 增加数量
const increaseQuantity = () => {
  quantity.value++
}

// 保存提醒
const saveReminder = () => {
  if (!reminder.title) {
    alert('请输入提醒名称')
    return
  }
  
  // 这里可以实现保存逻辑
  console.log('保存提醒:', {
    ...reminder.value,
    quantity: quantity.value,
    type: selectedType.value
  })
  
  // 保存成功后返回提醒列表页面
  router.push('/reminders')
}

// 返回上一页
const goBack = () => {
  router.back()
}
</script>

<style scoped>
.add-reminder-page {
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

.back-btn {
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

/* 提醒类型选择 */
.reminder-types {
  background-color: white;
  padding: 20px 16px;
  display: flex;
  gap: 20px;
  border-bottom: 8px solid #F5F5F5;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.reminder-types::-webkit-scrollbar {
  display: none;
}

.type-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.type-item.active .type-icon {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.type-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.2s ease;
}

.type-icon.blue {
  background-color: rgba(100, 149, 237, 0.1);
  color: #6495ED;
}

.type-icon.purple {
  background-color: rgba(175, 122, 255, 0.1);
  color: #AF7AFF;
}

.type-icon.green {
  background-color: rgba(144, 238, 144, 0.1);
  color: #90EE90;
}

.type-icon.yellow {
  background-color: rgba(255, 235, 59, 0.1);
  color: #FFEB3B;
}

.type-name {
  font-size: 12px;
  color: #333;
}

.type-item.active .type-name {
  font-weight: 600;
  color: #000;
}

/* 表单内容 */
.form-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.form-content::-webkit-scrollbar {
  display: none;
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 16px;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  font-size: 16px;
  color: #000000;
  background-color: #ffffff;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #007AFF;
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}

.form-selector {
  background-color: white;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.2s;
}

.form-selector:hover {
  border-color: #007AFF;
}

.select-value {
  font-size: 16px;
  color: #333;
}

.select-arrow {
  font-size: 20px;
  font-weight: 600;
  color: #8E8E93;
}

/* 数量控制 */
.quantity-control {
  background-color: white;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #E5E5E5;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.quantity-btn:hover:not(:disabled) {
  background-color: #F5F5F5;
  border-color: #007AFF;
}

.quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

/* 底部保存按钮 */
.bottom-action {
  background-color: white;
  padding: 16px;
  border-top: 1px solid #E5E5E5;
}

.save-btn {
  width: 100%;
  background-color: #333;
  color: white;
  border: none;
  padding: 26px;
  border-radius: 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.save-btn:hover {
  background-color: #555;
}

.save-btn:active {
  transform: scale(0.98);
}
</style>