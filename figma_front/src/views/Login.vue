<template>
  <div class="page auth-page">
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
    <div class="auth-content">
      <!-- 标签切换 -->
      <div class="auth-tabs">
        <button class="tab active" @click="activeTab = 'login'">登录</button>
        <button class="tab"  @click="handleRegister">注册</button>
      </div>
      
      <!-- 登录表单 -->
      <div v-if="activeTab === 'login'" class="form-container">
        <h2 class="auth-title">欢迎回来<br>宠物爱好者...</h2>
        
        <form class="auth-form">
          <div class="form-group">
            <input type="email" class="input" placeholder="邮箱" v-model="email" />
          </div>
          <div class="form-group">
            <input type="password" class="input" placeholder="密码" v-model="password" />
          </div>
          
          <div class="form-actions">
            <a href="#" class="forgot-password">忘记密码?</a>
          </div>
        </form>
        
        <!-- 第三方登录和登录按钮 -->
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
          
          <button type="button" class="btn btn-primary btn-login" @click="handleLogin">登录</button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 标签状态
const activeTab = ref('login')

// 登录表单数据
const email = ref('')
const password = ref('')


const handleLogin = () => {
  // 模拟登录成功
  router.push('/home')
}

const handleRegister = () => {
  // 模拟登录成功
  router.push('/register')
}

</script>

<style scoped>
.auth-page {
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
  position: relative;
  z-index: 10;
}

.status-icons {
  display: flex;
  gap: 8px;
}

.auth-content {
  flex: 1;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
}

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

.form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
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

.auth-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 40px;
  line-height: 1.2;
  padding: 0 16px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
}

.form-group {
  width: 100%;
}

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

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
  padding: 0 16px;
}

.forgot-password {
  font-size: 14px;
  color: #007AFF;
  text-decoration: none;
}

.btn-block {
  width: 100%;
  padding: 18px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  background-color: #333333;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 32px;
  transition: background-color 0.2s;
}

.btn-block:hover {
  background-color: #555555;
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
</style>