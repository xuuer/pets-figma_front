<template>
  <div class="page veterinary-detail-page">
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
      <div class="navbar-right"></div>
    </div>
    
    <!-- 主要内容 -->
    <div class="veterinary-detail-content">
      <!-- 兽医头部大图 -->
      <div class="veterinary-header-image" >
        <img src="@/assets/images/人物1.jpg" alt="陈佑康" class="img-fluid" />
      </div>
      
      <!-- 兽医信息 -->
      <div class="veterinary-info">
        <div class="veterinary-name-section">
          <h2 class="veterinary-name">陈佑康</h2>
          <div class="veterinary-rating">
            <span class="stars">⭐⭐⭐⭐☆</span>
            <span class="review-count">(124)</span>
          </div>
        </div>
        <button class="call-btn">
          <span class="icon"><img src="@/assets/svg/Call.svg" alt="打电话" /></span>
        </button>
      </div>
      
      <!-- 兽医简介 -->
      <div class="veterinary-bio">
        <p>于2016年从德克萨斯农工大学（Texas A&M）兽医专业毕业，2017年在纽约市的AMC（美国动物医疗中心）完成了小动物轮转实习，随后在塔夫茨大学（Tufts University）继续深造，完成了小动物急诊与危重病学的住院医生培训。<a href="#" class="read-more">阅读更多</a></p>
      </div>
      
      <!-- 统计信息 -->
      <div class="stats-section">
        <div class="stat-item">
          <span class="stat-value">6</span>
          <span class="stat-label">经验</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">46</span>
          <span class="stat-label">完成</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">¥52.99</span>
          <span class="stat-label">预约</span>
        </div>
      </div>
      
      <!-- 评论 -->
      <div class="comments-section">
        <div class="section-header">
          <h3 class="section-title">评论</h3>
          <a href="#" class="view-all" @click.prevent="viewAllComments">阅读所有</a>
        </div>
        <div class="comments-scroll">
          <div class="comments-list">
            <!-- 评论1 -->
            <div class="comment-item">
              <div class="comment-header">
                <h4 class="comment-author">刘逸志</h4>
                <p class="comment-date">2天前</p>
              </div>
              <div class="comment-rating">⭐⭐⭐⭐⭐</div>
              <p class="comment-content">对我的狗狗贝拉所受到的照顾印象深刻。惊人的手术技巧加上高水平...<a href="#" class="read-more">阅读更多</a></p>
            </div>
            <!-- 评论2 -->
            <div class="comment-item">
              <div class="comment-header">
                <h4 class="comment-author">朱天浩</h4>
                <p class="comment-date">2天前</p>
              </div>
              <div class="comment-rating">⭐⭐⭐⭐⭐</div>
              <p class="comment-content">我从来不会写评论。我的狗凯莎非常讨厌去兽医那里，以至于她会感到非常紧张...<a href="#" class="read-more">阅读更多</a></p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 预约按钮 -->
      <div class="appointment-section">
        <button class="btn-appointment">预约</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}

const viewAllComments = () => {
  router.push('/comments')
}
</script>

<style scoped>
.veterinary-detail-page {
  background-color: rgba(175, 122, 255, 0);
  width: 100%;
  height: 100vh;
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
  background-color: rgba(175, 122, 255, 0);
  position: relative;
  z-index: 10;
  color: rgb(0, 0, 0);
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
  background-color: transparent;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 10;
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

.veterinary-detail-content {
  flex: 1;
  padding: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.veterinary-detail-content::-webkit-scrollbar {
  display: none;
}

.veterinary-header-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
}

.veterinary-header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.veterinary-info {
  background-color: white;
  border-radius: 20px 20px 0 0;
  margin-top: -40px;
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.veterinary-name-section {
  flex: 1;
}

.veterinary-name {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.veterinary-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.stars {
  font-size: 14px;
  color: #FFD700;
}

.review-count {
  font-size: 14px;
  color: #8E8E93;
}

.call-btn {
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
  font-weight: 500;
}

.veterinary-bio {
  background-color: white;
  padding: 0 16px 16px;
  margin-bottom: 16px;
}

.veterinary-bio p {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  margin: 0;
}

.read-more {
  color: #007AFF;
  text-decoration: none;
}

.stats-section {
  background-color: white;
  margin: 0 16px 16px;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-around;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

.stat-label {
  font-size: 14px;
  color: #8E8E93;
}

.comments-section {
  background-color: white;
  margin: 0 16px 16px;
  border-radius: 12px;
  padding: 16px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.view-all {
  font-size: 14px;
  color: #007AFF;
  text-decoration: none;
}

.comments-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.comments-scroll::-webkit-scrollbar {
  display: none;
}

.comments-list {
  display: flex;
  gap: 16px;
  padding-bottom: 8px;
  min-width: max-content;
}

.comment-item {
  width: 260px;
  height: 130px;
  padding: 12px;
  background-color: #F9F9F9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.comment-author {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.comment-date {
  font-size: 12px;
  color: #8E8E93;
  margin: 0;
}

.comment-rating {
  font-size: 12px;
  margin-bottom: 8px;
  color: #FFD700;
}

.comment-content {
  font-size: 14px;
  line-height: 1.4;
  color: #333;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.appointment-section {
  padding: 16px;
  margin-bottom: 44px;
}

.btn-appointment {
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