<template>
  <div class="page cart-page">
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
      <h1 class="navbar-title">你的购物车</h1>
      <button class="delete-btn">
        <span class="icon"><img src="@/assets/svg/Trash.svg" alt="删除" /></span>
      </button>
    </div>
    
    <!-- 主要内容区域 -->
    <div class="cart-content">
      <!-- 商品列表 -->
      <div class="cart-items">
        <!-- 商品1 -->
        <div class="cart-item">
          <div class="item-image">
            <img src="@/assets/images/商品3.png" alt="猫爬架" class="img-fluid" />
          </div>
          <div class="item-info">
            <h3 class="item-name">毛绒针织款可水洗猫爬架</h3>
            <div class="item-price">
              <span class="current-price">¥29.00</span>
              <span class="original-price">¥34.00</span>
            </div>
          </div>
          <div class="item-quantity">
            <button class="quantity-btn increase" @click="increaseQuantity(0)">+</button>
            <span class="quantity">{{ cartItems[0].quantity }}</span>
            <button class="quantity-btn decrease" @click="decreaseQuantity(0)">-</button>
          </div>
        </div>
        
        <!-- 商品2 -->
        <div class="cart-item">
          <div class="item-image">
            <img src="@/assets/images/商品1.jpg" alt="宠物罐头" class="img-fluid" />
          </div>
          <div class="item-info">
            <h3 class="item-name">龙猫大师 宠物罐头</h3>
            <div class="item-price">
              <span class="current-price">¥9.90</span>
            </div>
          </div>
          <div class="item-quantity">
            <button class="quantity-btn increase" @click="increaseQuantity(1)">+</button>
            <span class="quantity">{{ cartItems[1].quantity }}</span>
            <button class="quantity-btn decrease" @click="decreaseQuantity(1)">-</button>
          </div>
        </div>
        
        <!-- 商品3 -->
        <div class="cart-item">
          <div class="item-image">
            <img src="@/assets/images/商品4.png" alt="宠物衣服" class="img-fluid" />
          </div>
          <div class="item-info">
            <h3 class="item-name">猫猫衣服保暖耐磨孩子都喜欢</h3>
            <div class="item-price">
              <span class="current-price">¥54.00</span>
              <span class="original-price">¥60.00</span>
            </div>
          </div>
          <div class="item-quantity">
            <button class="quantity-btn increase" @click="increaseQuantity(2)">+</button>
            <span class="quantity">{{ cartItems[2].quantity }}</span>
            <button class="quantity-btn decrease" @click="decreaseQuantity(2)">-</button>
          </div>
        </div>
      </div>
      
      <!-- 小计 -->
      <div class="subtotal-section">
        <div class="subtotal-item">
          <span class="subtotal-label">小计</span>
          <span class="subtotal-amount">{{ subtotal }}</span>
        </div>
      </div>
      
      <!-- 底部操作栏 -->
      <div class="bottom-action-bar">
        <button class="add-more-btn">+</button>
        <button class="checkout-btn">结算</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 购物车商品数据
const cartItems = ref([
  {
    id: 1,
    name: '毛绒针织款可水洗猫爬架',
    price: 29.00,
    originalPrice: 34.00,
    quantity: 1
  },
  {
    id: 2,
    name: '龙猫大师 宠物罐头',
    price: 9.90,
    quantity: 1
  },
  {
    id: 3,
    name: '猫猫衣服保暖耐磨孩子都喜欢',
    price: 54.00,
    originalPrice: 60.00,
    quantity: 1
  }
])

// 计算小计
const subtotal = computed(() => {
  const total = cartItems.value.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)
  return `¥${total.toFixed(2)}`
})

const goBack = () => {
  router.back()
}

const decreaseQuantity = (index) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--
  }
}

const increaseQuantity = (index) => {
  cartItems.value[index].quantity++
}
</script>

<style scoped>
.cart-page {
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

.back-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
}
.delete-btn {
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

.cart-content {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 16px;
}

.cart-content::-webkit-scrollbar {
  display: none;
}

.cart-items {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #F5F5F5;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 12px;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-name {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
}

.item-price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.current-price {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.original-price {
  font-size: 12px;
  color: #8E8E93;
  text-decoration: line-through;
}

.item-quantity {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #E5E5E5;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.quantity {
  font-size: 16px;
  font-weight: 500;
  min-width: 30px;
  text-align: center;
}

.subtotal-section {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
}

.subtotal-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subtotal-label {
  font-size: 16px;
  font-weight: 500;
}

.subtotal-amount {
  font-size: 18px;
  font-weight: 600;
}

.bottom-action-bar {
  background-color: white;
  border-top: 1px solid #E5E5E5;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 130px;
}

.add-more-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #007AFF;
  color: white;
  border: none;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.checkout-btn {
  flex: 1;
  background-color: #333;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
</style>