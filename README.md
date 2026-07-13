# PetCare - 宠物护理一站式管理应用

一款面向 25-40 岁年轻养宠人群的一站式宠物管理工具，整合购物、健康提醒、兽医预约、个人中心等核心功能，打造便捷高效的养宠体验。

## 技术栈

- **前端框架**：Vue 3 + Composition API
- **构建工具**：Vite 6
- **路由管理**：Vue Router 4
- **布局方案**：Flexbox，固定 375px 宽度模拟移动端
- **样式方案**：Scoped CSS
- **设计工具**：Figma（高保真原型）

## 项目结构

```
figma_front/
├── src/
│   ├── views/              # 页面组件
│   │   ├── Guide1~3.vue        # 引导页
│   │   ├── Login.vue           # 登录
│   │   ├── Register.vue        # 注册
│   │   ├── Home.vue            # 首页
│   │   ├── Shopping.vue        # 商城
│   │   ├── ProductDetail.vue   # 商品详情
│   │   ├── Cart.vue            # 购物车
│   │   ├── Reminders.vue       # 健康提醒列表
│   │   ├── AddReminder.vue     # 添加提醒
│   │   ├── VeterinaryResults.vue  # 兽医搜索结果
│   │   ├── VeterinaryDetail.vue   # 兽医详情
│   │   ├── Comments.vue        # 兽医评论
│   │   ├── MyPets.vue          # 我的宠物
│   │   ├── EditPet.vue         # 编辑宠物信息
│   │   ├── Profile.vue         # 个人中心
│   │   ├── PaymentMethods.vue  # 付款方式
│   │   ├── Addresses.vue       # 收货地址
│   │   ├── Orders.vue          # 订单历史
│   │   ├── Appointments.vue    # 预约管理
│   │   ├── Notifications.vue   # 通知列表
│   │   └── Search.vue          # 宠物问题搜索
│   ├── router/
│   │   └── index.js            # 路由配置（21 条路由）
│   ├── assets/
│   │   ├── images/             # 图片资源
│   │   └── svg/                # SVG 图标
│   ├── App.vue                 # 根组件（全局样式 & 布局）
│   └── main.js                 # 入口文件
figma/                          # Figma 原型设计文件
报告.docx                        # 软件原型设计实践实验报告
```

## 功能模块

### 购物功能
- 商品列表浏览与详情查看
- 购物车管理（数量调整、小计计算）
- 购物车结算

### 健康提醒
- 宠物健康提醒设置（药物、疫苗、运动）
- 提醒时间和数量自定义
- 提醒列表按日期分组显示
- 滑动操作管理提醒

### 兽医预约
- 宠物选择与日历日期选择
- 兽医搜索、详情浏览与评论查看
- 兽医和服务类型选择
- 预约状态跟踪

### 个人中心
- 个人信息管理
- 付款方式与收货地址管理
- 订单历史与预约历史查看

### 其他
- 引导页（3 页滑动引导）
- 登录 / 注册
- 通知列表（按日期分组）
- 宠物信息管理与编辑
- 宠物问题搜索

## 快速开始

```bash
# 进入前端项目目录
cd figma_front

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 设计规范

- **主色调**：黑色
- **辅助色**：柔和蓝色
- **视觉风格**：温馨简洁，配合萌宠素材营造情感化设计
- **交互设计**：智能动画跳转（移入、移出等过渡效果）

## 截图预览

> 前端页面基于 Figma 高保真原型开发，保持了极高的还原度。

详细的设计稿、IA 图、组件全览、颜色与字体系统请参阅 `报告.docx`。
