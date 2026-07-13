<template>
  <div class="orders-page">
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
      <h1 class="page-title">订单</h1>
      <div class="navbar-right">
        <!-- 占位 -->
      </div>
    </div>

    <!-- 订单列表 -->
    <div class="orders-content">
      <!-- 今天订单组 -->
      <div class="order-group">
        <div class="group-title">今天</div>
        <div 
          v-for="order in todayOrders" 
          :key="order.id"
          class="order-card"
        >
          <div class="order-status-header">
            <span class="status-badge" :class="order.statusClass">
              {{ order.status }}
            </span>
            <span class="arrow">›</span>
          </div>
          <div class="order-date">
            {{ order.date }}
          </div>
          <div class="order-address">
            {{ order.address }}
          </div>
          <div class="order-items">
            <div 
              v-for="(item, index) in order.items" 
              :key="index"
              class="order-item"
            >
              <div class="item-image">
                <span class="item-icon">{{ item.icon }}</span>
              </div>
            </div>
            <div v-if="order.moreItems" class="more-items">
              <span class="more-badge">+{{ order.moreItems }}</span>
            </div>
          </div>
          <div class="order-footer">
            <div class="order-total">
              ¥{{ order.total }}
            </div>
            <button class="rebuy-button" @click="rebuyOrder(order.id)">再买一单</button>
          </div>
        </div>
      </div>

      <!-- 这个月订单组 -->
      <div class="order-group">
        <div class="group-title">这个月</div>
        <div 
          v-for="order in thisMonthOrders" 
          :key="order.id"
          class="order-card"
        >
          <div class="order-status-header">
            <span class="status-badge" :class="order.statusClass">
              {{ order.status }}
            </span>
            <span class="arrow">›</span>
          </div>
          <div class="order-date">
            {{ order.date }}
          </div>
          <div class="order-address">
            {{ order.address }}
          </div>
          <div class="order-items">
            <div 
              v-for="(item, index) in order.items" 
              :key="index"
              class="order-item"
            >
              <div class="item-image">
                <span class="item-icon">{{ item.icon }}</span>
              </div>
            </div>
          </div>
          <div class="order-footer">
            <div class="order-total">
              ¥{{ order.total }}
            </div>
            <button class="rebuy-button" @click="rebuyOrder(order.id)">再买一单</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 今天的订单
const todayOrders = ref([
  {
    id: 1,
    status: '空运',
    statusClass: 'air',
    date: '2025年8月21日 · 下午04点48分',
    address: '浦东新区居里路289号',
    items: [
      { icon: '🥫' },
      { icon: '🎯' },
      { icon: '🧺' }
    ],
    moreItems: 2,
    total: '64.95'
  }
])

// 这个月的订单
const thisMonthOrders = ref([
  {
    id: 2,
    status: '完成',
    statusClass: 'completed',
    date: '2025年8月14日 · 下午12点36分5610',
    address: '浦东新区居里路289号',
    items: [
      { icon: '🥫' },
      { icon: '🍖' }
    ],
    total: '35.45'
  },
  {
    id: 3,
    status: '完成',
    statusClass: 'completed',
    date: '2025年8月14日 · 下午12点36分5610',
    address: '浦东新区居里路289号',
    items: [
      { icon: '💧' },
      { icon: '🥫' }
    ],
    total: '27.89'
  }
])

// 再买一单
const rebuyOrder = (orderId) => {
  alert(`订单 ${orderId} 再买一单`)
}

// 返回上一页
const goBack = () => {
  router.back()
}
</script>

<style scoped>
.orders-page {
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

.back-button {
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

/* 订单内容 */
.orders-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.orders-content::-webkit-scrollbar {
  display: none;
}

.orders-content {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* 订单组 */
.order-group {
  margin-bottom: 24px;
}

.group-title {
  font-size: 14px;
  font-weight: 600;
  color: #8E8E93;
  margin-bottom: 12px;
}

/* 订单卡片 */
.order-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
}

.order-card:hover {
  background-color: #F9F9F9;
}

/* 订单状态头部 */
.order-status-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.status-badge {
  font-size: 14px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 16px;
  display: inline-block;
}

.status-badge.air {
  background-color: rgba(100, 149, 237, 0.1);
  color: #6495ED;
}

.status-badge.completed {
  background-color: rgba(144, 238, 144, 0.1);
  color: #90EE90;
}

.arrow {
  font-size: 16px;
  font-weight: 600;
  color: #8E8E93;
}

/* 订单日期 */
.order-date {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
}

/* 订单地址 */
.order-address {
  font-size: 14px;
  color: #8E8E93;
  margin-bottom: 12px;
}

/* 订单商品 */
.order-items {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 12px;
}

.order-item {
  display: flex;
  align-items: center;
}

.item-image {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.more-items {
  margin-left: 4px;
}

.more-badge {
  font-size: 12px;
  font-weight: 500;
  color: #8E8E93;
  background-color: #F5F5F5;
  padding: 2px 8px;
  border-radius: 10px;
}

/* 订单底部 */
.order-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #F0F0F0;
}

.order-total {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.rebuy-button {
  font-size: 14px;
  font-weight: 500;
  color: #ffffffe7;
  background-color: #000000d3;
  border: none;
  padding: 7px 32px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}

.rebuy-button:hover {
  background-color: #E5E5E5;
}
</style>