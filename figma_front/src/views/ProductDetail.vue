<template>
  <div class="page product-detail-page">
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
      <h1 class="navbar-title">详细资料</h1>
      <button class="cart-btn" @click="goToCart">
        <span class="icon"><img src="@/assets/svg/Shopping.svg" alt="购物车" /></span>
      </button>
    </div>
    
    <!-- 主要内容区域 -->
    <div class="product-content">
      <!-- 产品图片轮播 -->
      <div class="product-images-section">
        <div class="product-image-container">
          <div class="product-image">
            <img src="@/assets/images/商品3.png" alt="猫爬架" class="img-fluid" />
          </div>
          <!-- 数量控制 -->
          <div class="quantity-control-side">
            <button class="quantity-btn increase" @click="increaseQuantity">+</button>
            <span class="quantity">{{ quantity }}</span>
            <button class="quantity-btn decrease" @click="decreaseQuantity">-</button>
          </div>
        </div>
        <!-- 轮播指示器 -->
        <div class="carousel-indicators">
          <div class="indicator active"></div>
          <div class="indicator"></div>
          <div class="indicator"></div>
          <div class="indicator"></div>
        </div>
      </div>
      
      <!-- 产品信息 -->
      <div class="product-info-section">
        <div class="product-name-container">
          <h2 class="product-name-main">毛绒针织款</h2>
          <h3 class="product-name-sub">可水洗猫爬架</h3>
        </div>
        <button class="favorite-btn">
          <span class="icon"><img src="@/assets/svg/Like.svg" alt="收藏" /></span>
        </button>
      </div>
      
      <!-- 选择店铺 -->
      <div class="shop-selection-section">
        <h3 class="section-title">选择店铺</h3>
        <div class="shop-item active">
          <div class="shop-info">
            <h4 class="shop-name">宠物世界</h4>
            <div class="shop-delivery">
              <span class="delivery-time">到达: 15 min</span>
            </div>
          </div>
          <div class="shop-price">$14.36<p><span class="free-delivery"><img src="@/assets/svg/Delivery2.svg" alt="配送费" /> 免费配送</span></p></div>
          
        </div>
        <div class="shop-item">
          <div class="shop-info">
            <h4 class="shop-name">爱宠之家</h4>
            <div class="shop-delivery">
              <span class="delivery-time">到达: 15 min</span>
              
            </div>
          </div>
          <div class="shop-price">$14.36<p><span class="paid-delivery"><img src="@/assets/svg/Delivery.svg" alt="配送费" /> 配送费 ¥5</span></p></div>
        </div>
      </div>
      
      <!-- 详细资料 -->
      <div class="details-section">
        <h3 class="section-title">详细资料</h3>
        <div class="details-content-scroll">
          <div class="details-content">
            <p>精选耐磨剑麻柱，健康磨爪乐趣无穷。搭配柔软毛绒平台与趣味悬挂玩具，完美满足攀爬、休憩与玩耍天性。整体采用环保加厚板材，安全无异味，既是猫咪的健康游乐场，也能和谐融入您的家居空间。</p>
          </div>
        </div>
      </div>
      
      <!-- 底部操作栏 -->
      <div class="bottom-action-bar">
        <button class="add-to-cart-btn">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const quantity = ref(1)

const goBack = () => {
  router.back()
}

const goToCart = () => {
  router.push('/cart')
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const increaseQuantity = () => {
  quantity.value++
}
</script>

<style scoped>
.product-detail-page {
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

.back-btn{
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
}

.cart-btn{
  width: 40px;
  height: 40px;
  border: 1.5px solid #6d6d6d;
  background-color: white;
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

.product-images-section {
  position: relative;
  background-color: white;
  border-bottom: 8px solid #F5F5F5;
}

.product-image-container {
  position: relative;
  width: 100%;
  height: 400px;
}

.product-image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.quantity-control-side {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.quantity-control-side .quantity-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #E5E5E5;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
}

.quantity-control-side .quantity {
  font-size: 18px;
  font-weight: 600;
  min-width: 30px;
  text-align: center;
}

.carousel-indicators {
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
}

.indicator.active {
  background-color: white;
  width: 20px;
  border-radius: 4px;
}

.product-content {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: calc(100vh - 88px);
}

.product-content::-webkit-scrollbar {
  display: none;
}

.product-info-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  background-color: white;
  border-bottom: 8px solid #F5F5F5;
}

.product-name-container {
  flex: 1;
}

.product-name-main {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.product-name-sub {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #333;
}

.favorite-btn {
  width: 45px;
  height: 45px;
  border: 1.5px solid #6d6d6d;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1px;
  font-weight: 600;
}

.shop-selection-section {
  padding: 16px;
  background-color: white;
  border-bottom: 8px solid #F5F5F5;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}

.shop-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 12px;
  border: 2px solid transparent;
  cursor: pointer;
}

.shop-item.active {
  border-color: #007AFF;
}

.shop-name {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
}

.shop-delivery {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.delivery-time {
  font-size: 14px;
  color: #333;
}

.free-delivery {
  font-size: 12px;
  color: #34C759;
}

.paid-delivery {
  font-size: 12px;
  color: #8E8E93;
}

.shop-price {
  font-size: 18px;
  font-weight: 600;
}

.details-section {
  padding: 16px;
  background-color: white;
  border-bottom: 8px solid #F5F5F5;
}

.details-content-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 8px;
}

.details-content-scroll::-webkit-scrollbar {
  display: none;
}

.details-content {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  white-space: nowrap;
  min-width: max-content;
}

.bottom-action-bar {
  background-color: white;
  border-top: 1px solid #E5E5E5;
  padding: 45px;
  margin-top: 8px;
}

.add-to-cart-btn {
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

.quantity-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
}

.quantity {
  font-size: 16px;
  font-weight: 500;
  min-width: 30px;
  text-align: center;
}
</style>