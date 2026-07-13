<template>
  <div class="page comments-page">
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
      <h1 class="navbar-title">评论</h1>
      <div class="navbar-right"></div>
    </div>
    
    <!-- 筛选标签 -->
    <div class="filter-section">
      <div class="filter-tabs">
        <button class="filter-tab active" @click="selectFilter('recent')">最近</button>
        <button class="filter-tab" @click="selectFilter('negative')">差评</button>
        <button class="filter-tab" @click="selectFilter('positive')">好评</button>
      </div>
    </div>
    
    <!-- 评分统计 -->
    <div class="rating-section">
      <div class="overall-rating">
        <span class="rating-value">4,6</span>
      </div>
      <div class="rating-bars">
        <div class="rating-bar">
          <span class="rating-label">5</span>
          <div class="bar-container">
            <div class="bar" style="width: 60%"></div>
          </div>
        </div>
        <div class="rating-bar">
          <span class="rating-label">4</span>
          <div class="bar-container">
            <div class="bar" style="width: 80%"></div>
          </div>
        </div>
        <div class="rating-bar">
          <span class="rating-label">3</span>
          <div class="bar-container">
            <div class="bar" style="width: 40%"></div>
          </div>
        </div>
        <div class="rating-bar">
          <span class="rating-label">2</span>
          <div class="bar-container">
            <div class="bar" style="width: 15%"></div>
          </div>
        </div>
        <div class="rating-bar">
          <span class="rating-label">1</span>
          <div class="bar-container">
            <div class="bar" style="width: 5%"></div>
          </div>
        </div>
      </div>
      <div class="review-count">124条评价</div>
    </div>
    
    <!-- 主要内容 -->
    <div class="comments-content">
      <!-- 评论列表 -->
      <div class="comments-list">
        <!-- 评论1 -->
        <div class="comment-item">
          <div class="comment-header">
            <h4 class="comment-author">刘逸志</h4>
            <p class="comment-date">2天前</p>
          </div>
          <div class="comment-rating">⭐⭐⭐⭐☆</div>
          <p class="comment-content">对我的狗狗贝拉所受到的照顾印象深刻。惊人的手术技能，再加上高标准的护理同理心。Susie非常出色，让这段紧张的时光变得轻松了许多。非常感谢...<a href="#" class="read-more">阅读更多</a></p>
        </div>
        
        <!-- 评论2 -->
        <div class="comment-item">
          <div class="comment-header">
            <h4 class="comment-author">朱天浩</h4>
            <p class="comment-date">7天前</p>
          </div>
          <div class="comment-rating">⭐⭐⭐⭐⭐</div>
          <p class="comment-content">我从来不会写评论，但这次我觉得必须写。我的狗凯莎非常讨厌去兽医那里，以至于她会感到非常紧张，她会躲在椅子下面，拒绝出来，她会颤抖，尾巴也会...<a href="#" class="read-more">阅读更多</a></p>
        </div>
        
        <!-- 评论3 -->
        <div class="comment-item">
          <div class="comment-header">
            <h4 class="comment-author">储永岫</h4>
            <p class="comment-date">12天前</p>
          </div>
          <div class="comment-rating">⭐⭐⭐⭐⭐</div>
          <p class="comment-content">我有一只像小牛一样强壮的斯塔福克罗犬（一种杂交犬），它总是到处乱窜。今年到目前为止，你们已经从我家的狗的眼皮上取下了一只蜱虫，并给了我一些关于如何防止这种情况再次发生的有用建议。非常感谢！</p>
        </div>
      </div>
    </div>
    
    <!-- 写评论按钮 -->
    <div class="write-comment-section">
      <button class="btn-write-comment">写评论</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedFilter = ref('recent')

const goBack = () => {
  router.back()
}

const selectFilter = (filter) => {
  selectedFilter.value = filter
}
</script>

<style scoped>
.comments-page {
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
  background-color: rgba(255, 255, 255, 0.247);
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
  background-color: rgba(255, 255, 255, 0.24);
  border-bottom: 1px solid #e5e5e548;
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

.filter-section {
  background-color: rgba(255, 255, 255, 0.24);
  border-bottom: 8px solid #F5F5F5;
}

.filter-tabs {
  display: flex;
  overflow-x: auto;
  padding: 16px;
  gap: 16px;
}

.filter-tab {
  background: none;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  color: #8E8E93;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
}

.filter-tab.active {
  color: #007AFF;
}

.filter-tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 16px;
  right: 16px;
  height: 2px;
  background-color: #007AFF;
}

.rating-section {
  background-color: rgba(255, 255, 255, 0.274);
  border-radius: px;
  padding: 20px;
  margin: 1px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.overall-rating {
  flex-shrink: 0;
}

.rating-value {
  font-size: 46px;
  font-weight: 600;
}

.rating-bars {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.rating-bar {
  display: flex;
  align-items: center;
  gap: 1px;
}

.rating-label {
  font-size: 9px;
  width: 12px;
}

.bar-container {
  flex: 1;
  height: 4px;
  background-color: #F5F5F5;
  border-radius: 4px;
  overflow: hidden;
}

.bar {
  height: 100%;
  background-color: #0000007c;
  border-radius: 4px;
}

.review-count {
  font-size: 12px;
  color: #8E8E93;
  position: absolute;
  right: 32px;
  top: 140px;
}

.comments-content {
  flex: 1;
  padding: 0 16px 80px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.comments-content::-webkit-scrollbar {
  display: none;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.comment-item {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.comment-author {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.comment-date {
  font-size: 12px;
  color: #8E8E93;
  margin: 0;
}

.comment-rating {
  font-size: 14px;
  margin-bottom: 8px;
  color: #FFD700;
}

.comment-content {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  margin: 0;
}

.read-more {
  color: #007AFF;
  text-decoration: none;
}

.write-comment-section {
  padding: 16px;
  margin-bottom: 24px;
}

.btn-write-comment {
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