<template>
  <div class="page shopping-page">
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
      <h1 class="navbar-title">宠物超市</h1>
      <button class="cart-btn" @click="goToCart">
        <span class="icon"><img src="@/assets/svg/Shopping.svg" alt="购物车" /></span>
      </button>
    </div>
    
    <!-- 分类标签 -->
    <div class="categories-section">
      <div class="categories-tabs">
        <button class="category-tab active" @click="selectCategory('pharmacy')">药房</button>
        <button class="category-tab" @click="selectCategory('food')">宠物食品</button>
        <button class="category-tab" @click="selectCategory('accessories')">配饰</button>
        <button class="category-tab" @click="selectCategory('furniture')">家具</button>
      </div>
    </div>
    
    <!-- 优惠横幅 -->
    <div class="banner-section">
      <div class="banner">
        <h2 class="banner-title">优惠30%</h2>
        <p class="banner-description">付款时优惠代码 87412</p>
      </div>
    </div>
    
    <!-- 主要内容 -->
    <div class="shopping-content">
      <!-- 畅销 -->
      <div class="section">
        <div class="section-header">
          <h3 class="section-title">畅销</h3>
          <a href="#" class="view-all">查看全部</a>
        </div>
        <div class="products-scroll">
          <div class="products-row">
            <div class="product-card" @click="viewProductDetail">
              <div class="product-image">
                <img src="@/assets/images/商品3.png" alt="猫爬架" class="img-fluid" />
                <div class="discount-badge">优惠 15%</div>
              </div>
              <h4 class="product-name">毛绒针织款可水洗猫爬架</h4>
              <div class="product-price">
                <span class="price-current">¥29.00</span>
                <span class="price-original">¥34.00</span>
                <button class="add-to-cart-btn">+</button>
              </div>
              
            </div>
            <div class="product-card" >
              <div class="product-image">
                <img src="@/assets/images/商品1.jpg" alt="宠物罐头" class="img-fluid" />
                <div class="discount-badge">优惠 10%</div>
              </div>
              <h4 class="product-name">龙猫大师宠物罐头</h4>
              <div class="product-price">
                <span class="price-current">¥9.90</span>
                <span class="price-original">¥11.00</span>
                <button class="add-to-cart-btn">+</button>
              </div>
              
            </div>
            <div class="product-card" >
              <div class="product-image">
                <img src="@/assets/images/商品2.png" alt="宠物包" class="img-fluid" />
              </div>
              <h4 class="product-name">宠物包</h4>
              <div class="product-price">
                <span class="price-current">¥45.00</span>
                <button class="add-to-cart-btn">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 顶级品牌 -->
      <div class="section">
        <div class="section-header">
          <h3 class="section-title">顶级品牌</h3>
          <a href="#" class="view-all">查看全部</a>
        </div>
        <div class="brands-grid">
          <div class="brand-item">
            <img src="@/assets/images/顶1.jpg" alt="Simparica TRIO" class="img-fluid" />
          </div>
          <div class="brand-item">
            <img src="@/assets/images/顶2.jpg" alt="NexGard" class="img-fluid" />
          </div>
          <div class="brand-item">
            <img src="@/assets/images/顶3.jpg" alt="Hill's" class="img-fluid" />
          </div>
        </div>
      </div>
      
      <!-- 优惠 -->
      <div class="section">
        <div class="section-header">
          <h3 class="section-title">优惠</h3>
          <a href="#" class="view-all">查看全部</a>
        </div>
        <div class="products-scroll">
          <div class="products-row">
            <div class="product-card" >
              <div class="product-image">
                <img src="@/assets/images/商品4.png" alt="猫粮" class="img-fluid" />
                <div class="discount-badge">优惠 10%</div>
              </div>
              <h4 class="product-name">猫猫衣服保暖耐磨毛孩子都喜欢</h4>
              <div class="product-price">
                <span class="price-current">¥54.00</span>
                <span class="price-original">¥60.00</span>
                <button class="add-to-cart-btn">+</button>
              </div>
              
            </div>
            <div class="product-card" >
              <div class="product-image">
                <img src="@/assets/images/商品5.png" alt="狗玩具" class="img-fluid" />
                <div class="discount-badge">优惠 15%</div>
              </div>
              <h4 class="product-name">多功能宠物定时自动投喂机</h4>
              <div class="product-price">
                <span class="price-current">¥180.00</span>
                <span class="price-original">¥200.00</span>
                <button class="add-to-cart-btn">+</button>
              </div>
              
            </div>
            <div class="product-card">
              <div class="product-image">
                <img src="@/assets/images/商品6.png" alt="自动饮水器" class="img-fluid" />
                <div class="discount-badge">优惠 10%</div>
              </div>
              <h4 class="product-name">宠物自动饮水器</h4>
              <div class="product-price">
                <span class="price-current">¥18.00</span>
                <span class="price-original">¥20.00</span>
                <button class="add-to-cart-btn">+</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 底部导航栏 -->
    <div class="tabbar">
      <div class="tabbar-item" @click="goToHome">
        <span class="icon"><img src="@/assets/svg/Home.svg" alt="首页" /></span>
      </div>
      <div class="tabbar-item active">
        <span class="icon"><img src="@/assets/svg/Shopping2.svg" alt="购物" /></span>  
      </div>
      <div class="tabbar-item" @click="goToMyPets">
        <span class="icon"><img src="@/assets/svg/Pet.svg" alt="我的宠物" /></span>
      </div>
      <div class="tabbar-item" @click="goToNotifications">
        <span class="icon"><img src="@/assets/svg/Notifications.svg" alt="通知" /></span>
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
const selectedCategory = ref('pharmacy')

const goBack = () => {
  router.back()
}

const goToCart = () => {
  router.push('/cart')
}

const selectCategory = (category) => {
  selectedCategory.value = category
}

const viewProductDetail = () => {
  router.push('/product-detail')
}

const goToHome = () => {
  router.push('/home')
}

const goToMyPets = () => {
  router.push('/my-pets')
}

const goToNotifications = () => {
  router.push('/notifications')
}

const goToProfile = () => {
  router.push('/profile')
}
</script>

<style scoped>
.shopping-page {
  width: 100%;
  height: 100vh;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.status-bar {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.24);
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
  background-color: rgba(255, 255, 255, 0.199);
  border-bottom: 1px solid #e5e5e500;
}

.back-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
}
.cart-btn {
  width: 40px;
  height: 40px;
  border: 1.5px solid #6d6d6d;
  background-color: rgba(255, 255, 255, 0.342);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1px;
  font-weight: 600;
}

.navbar-title {
  font-size: 17px;
  font-weight: 600;
  margin: 0;
}

.categories-section {
  background-color: rgba(255, 255, 255, 0.212);
  border-bottom: 8px solid #F5F5F5;
}

.categories-tabs {
  display: flex;
  overflow-x: auto;
  padding: 1px;
  gap: 1px;
}

.category-tab {
  background: none;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  color: #8E8E93;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
}

.category-tab.active {
  color: #00000080;
}

.category-tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 16px;
  right: 16px;
  height: 2px;
  background-color: #007AFF;
}

.banner-section {
  padding: 16px;
}

.banner {
  background-color: #4aaae2cb;
  border-radius: 12px;
  padding: 20px;
  color: white;
  text-align: center;
}

.banner-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.banner-description {
  font-size: 14px;
  margin: 0;
}

.shopping-content {
  flex: 1;
  padding: 0 16px 60px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.shopping-content::-webkit-scrollbar {
  display: none;
}

.section {
  margin-bottom: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.view-all {
  font-size: 14px;
  color: #007AFF;
  text-decoration: none;
}

.products-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 8px;
}

.products-scroll::-webkit-scrollbar {
  display: none;
}

.products-row {
  display: flex;
  gap: 16px;
  padding-bottom: 8px;
  min-width: max-content;
}

.product-card {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 150px;
}

.product-image {
  position: relative;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  height: 120px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.discount-badge {
  position: absolute;
  top: 95px;
  left: -1px;
  background-color: #dbcdfd;
  color: rgb(0, 0, 0);
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 12px;
}

.product-name {
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 8px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.price-current {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.price-original {
  font-size: 9px;
  color: #8E8E93;
  text-decoration: line-through;
}

.add-to-cart-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #007AFF;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: 600;
  align-self: flex-end;
  cursor: pointer;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.brand-item {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-item img {
  max-height: 40px;
  object-fit: contain;
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
  z-index: 100;
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