import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // 引导页
  { path: '/', name: 'Guide1', component: () => import('../views/Guide1.vue') },
  { path: '/guide2', name: 'Guide2', component: () => import('../views/Guide2.vue') },
  { path: '/guide3', name: 'Guide3', component: () => import('../views/Guide3.vue') },
  
  // 认证页
  { path: '/login', name: 'Login', component: () => import('../views/Login.vue') },
  { path: '/register', name: 'Register', component: () => import('../views/Register.vue') },
  { path: '/login-success', name: 'LoginSuccess', component: () => import('../views/LoginSuccess.vue') },
  
  // 主页相关
  { path: '/home', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/search', name: 'Search', component: () => import('../views/Search.vue') },
  
  // 宠物相关
  { path: '/my-pets', name: 'MyPets', component: () => import('../views/MyPets.vue') },
  { path: '/edit-pet', name: 'EditPet', component: () => import('../views/EditPet.vue') },
  
  // 购物相关
  { path: '/shopping', name: 'Shopping', component: () => import('../views/Shopping.vue') },
  { path: '/product-detail', name: 'ProductDetail', component: () => import('../views/ProductDetail.vue') },
  { path: '/cart', name: 'Cart', component: () => import('../views/Cart.vue') },
  
  // 兽医相关
  { path: '/veterinary-results', name: 'VeterinaryResults', component: () => import('../views/VeterinaryResults.vue') },
  { path: '/veterinary-detail', name: 'VeterinaryDetail', component: () => import('../views/VeterinaryDetail.vue') },
  { path: '/comments', name: 'Comments', component: () => import('../views/Comments.vue') },
  
  // 提醒相关
  { path: '/reminders', name: 'Reminders', component: () => import('../views/Reminders.vue') },
  { path: '/add-reminder', name: 'AddReminder', component: () => import('../views/AddReminder.vue') },
  
  // 个人中心
  { path: '/profile', name: 'Profile', component: () => import('../views/Profile.vue') },
  { path: '/payment-methods', name: 'PaymentMethods', component: () => import('../views/PaymentMethods.vue') },
  { path: '/addresses', name: 'Addresses', component: () => import('../views/Addresses.vue') },
  { path: '/orders', name: 'Orders', component: () => import('../views/Orders.vue') },
  { path: '/appointments', name: 'Appointments', component: () => import('../views/Appointments.vue') },
  { path: '/notifications', name: 'Notifications', component: () => import('../views/Notifications.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router