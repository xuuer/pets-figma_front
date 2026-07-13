<template>
  <div class="page edit-pet-page">
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
      <h1 class="navbar-title">编辑宠物信息</h1>
      <div class="navbar-right"></div>
    </div>
    
    <!-- 主要内容 -->
    <div class="edit-content">
      <!-- 宠物头像 -->
      <div class="pet-avatar-section">
        <div class="pet-avatar">
          <img src="@/assets/images/宠物1.jpg" alt="布丁" class="img-fluid" />
          <button class="change-avatar-btn">
            <span class="icon">+</span>
          </button>
        </div>
      </div>
      
      <!-- 信息表单 -->
      <div class="form-section">
        <div class="form-group">
          <input type="text" class="form-input" v-model="petInfo.name" />
        </div>
        
        <div class="form-group">
          <div class="form-select" @click="selectAge">
            <span>{{ petInfo.age }}</span>
            <span class="select-icon">›</span>
          </div>
        </div>
        
        <div class="form-group">
          <div class="form-select" @click="selectType">
            <span>{{ petInfo.type }}</span>
            <span class="select-icon">›</span>
          </div>
        </div>
        
        <div class="form-group">
          <div class="form-select" @click="selectBreed">
            <span>{{ petInfo.breed }}</span>
            <span class="select-icon">›</span>
          </div>
        </div>
        
        <div class="form-group">
          <div class="form-select" @click="selectGender">
            <span>{{ petInfo.gender }}</span>
            <span class="select-icon">›</span>
          </div>
        </div>
      </div>
      
      <!-- 保存按钮 -->
      <div class="save-section">
        <button class="btn-save" @click="savePet">保存</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 宠物信息
const petInfo = ref({
  name: '布丁',
  age: '4岁，2个月',
  type: '狗',
  breed: '边牧',
  gender: '男'
})

const goBack = () => {
  router.back()
}

const selectAge = () => {
  // 选择年龄的逻辑
  console.log('选择年龄')
}

const selectType = () => {
  // 选择种类的逻辑
  console.log('选择种类')
}

const selectBreed = () => {
  // 选择品种的逻辑
  console.log('选择品种')
}

const selectGender = () => {
  // 选择性别的逻辑
  console.log('选择性别')
}

const savePet = () => {
  // 保存宠物信息的逻辑
  console.log('保存宠物信息', petInfo.value)
  router.back()
}
</script>

<style scoped>
.edit-pet-page {
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

.back-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
}

.navbar-title {
  font-size: 17px;
  font-weight: 600;
  margin: 0;
}

.navbar-right {
  width: 24px;
}

.edit-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.edit-content::-webkit-scrollbar {
  display: none;
}

.pet-avatar-section {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  margin-top: 16px;
}

.pet-avatar {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #FF8A00;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pet-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.change-avatar-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #E5E5E5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
}

.form-section {
  margin-bottom: 32px;
}

.form-group {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
}

.form-input {
  width: 100%;
  border: none;
  font-size: 16px;
  padding: 4px 0;
  outline: none;
}

.form-select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.select-icon {
  font-size: 20px;
  color: #C7C7CC;
}

.save-section {
  padding: 0 16px;
  margin-bottom: 32px;
}

.btn-save {
  width: 100%;
  background-color: #333;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
</style>