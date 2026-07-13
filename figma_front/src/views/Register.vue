<template>
  <div class="register-page">
    <!-- 状态栏 -->
    <div class="status-bar">
      <div class="time">9:41</div>
      <div class="status-icons">
        <span class="signal"><img src="@/assets/svg/Cellular Connection.svg" alt="信号" /></span>
        <span class="wifi"><img src="@/assets/svg/Wifi.svg" alt="wifi" /></span>
        <span class="battery"><img src="@/assets/svg/Capacity.svg" alt="电池" /></span>
      </div>
    </div>
    
    <!-- 标签切换 -->
    <div class="auth-tabs">
      <button class="tab" @click="goToLogin">登录</button>
      <button class="tab active">注册</button>
    </div>
    
    <!-- 主要内容 -->
    <div class="form-container">
      <h2 class="auth-title">欢迎加入！<p class="auth-subtitle">注册请继续</p></h2>
      
      <form class="auth-form">
        <div class="form-group">
          <input type="text" class="input" placeholder="名字" v-model="form.username" />
        </div>
        <div class="form-group">
          <input type="email" class="input" placeholder="邮箱" v-model="form.email" />
        </div>
        <div class="form-group">
          <input type="tel" class="input" placeholder="电话号码" v-model="form.phone" />
        </div>
        <div class="form-group">
          <input type="password" class="input" placeholder="密码" v-model="form.password" />
        </div>
      </form>
      
      <!-- 注册按钮和第三方登录 -->
      <div class="login-actions">
        <!-- 第三方登录 -->
        <div class="third-party-login">
          <button class="third-party-btn apple-btn">
            <span class="icon"><img src="@/assets/svg/Apple Pay.svg" alt="Apple" /></span>
          </button>
          <button class="third-party-btn google-btn">
            <span class="icon"><img src="@/assets/svg/Google Pay.svg" alt="Google" /></span>
          </button>
        </div>
        
        <button type="button" class="btn btn-primary btn-login" @click="register">注册</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 表单数据
const form = ref({
  username: '',
  email: '',
  phone: '',
  password: ''
})

// 注册
const register = () => {
  if (!form.value.username) {
    alert('请输入名字')
    return
  }
  if (!form.value.email) {
    alert('请输入邮箱')
    return
  }
  if (!form.value.phone) {
    alert('请输入电话号码')
    return
  }
  if (!form.value.password) {
    alert('请输入密码')
    return
  }
  
  // 注册成功后跳转到登录成功页面
  router.push('/login-success')
}

// 跳转到登录页面
const goToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
.register-page {
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* 状态栏 */
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

/* 标签切换 */
.auth-tabs {
  display: flex;
  margin-bottom: 40px;
  border-bottom: 1px solid #E5E5E5;
  padding: 0 16px;
  justify-content: flex-start;
  gap: 32px;
}

.tab {
  padding: 12px 0;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #8E8E93;
  position: relative;
  cursor: pointer;
}

.tab.active {
  color: #007AFF;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20px;
  height: 2px;
  background-color: #007AFF;
}

/* 表单容器 */
.form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* 标题 */
.auth-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 40px;
  line-height: 1.2;
  padding: 0 16px;
}

.auth-subtitle {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 40px;
  padding: 10px 0px;
}
/* 表单 */
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
}

/* 表单项 */
.form-group {
  width: 100%;
}

/* 输入框 */
.input {
  width: 100%;
  padding: 16px;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  background-color: white;
}

.input:focus {
  border-color: #007AFF;
}

/* 登录操作容器 */
.login-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: auto;
  margin-bottom: 44px;
}

/* 第三方登录 */
.third-party-login {
  display: flex;
  gap: 16px;
}

/* 第三方登录按钮 */
.third-party-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;
}

.third-party-btn:hover {
  opacity: 0.8;
}

.apple-btn {
  background-color: #cbe5f1;
}

.google-btn {
  background-color: #cbe5f1;
}

.icon {
  font-size: 24px;
}

.apple-btn .icon {
  color: white;
}

.google-btn .icon {
  color: #333;
}

/* 登录按钮 */
.btn-login {
  flex: 1;
  padding: 18px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  background-color: #333333;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 16px;
  transition: background-color 0.2s;
}

.btn-login:hover {
  background-color: #555555;
}
</style>