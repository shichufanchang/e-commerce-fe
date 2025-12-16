<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/store/shop/cart'

const router = useRouter()
const cartStore = useCartStore()


const goLogin = () => router.push('/login')
const goRegister = () => router.push('/register')
const goHome = () => router.push('/')
const goCart = () => router.push('/cart')

</script>

<template>
  <header class="header">

    <!-- 顶部红条 -->
    <div class="top-bar">
      网站名称及介绍
    </div>


    <!-- 语言 + 欢迎登录注册 -->
    <div class="top-nav">
      <div class="top-inner">
        <div class="left-area">
          <select>
            <option>中文</option>
            <option>English</option>
          </select>
        </div>

        <ul class="right-area">
          <li>欢迎！</li>
          <li @click="goLogin">登录</li>
          <li @click="goRegister">注册</li>
        </ul>
      </div>
    </div>

    <!-- logo + 搜索 + 购物车 -->
    <div class="logo-row">
      <div class="logo-inner">
        <div class="logo">logo.icon</div>

        <div class="search-area">
          <input type="text" placeholder="搜索商品…" />

          <div class="cart" @click="goCart">
            <img src="/购物车.png" alt="">
            <span v-if="cartStore.totalItems > 0" class="cart-count">{{ cartStore.totalItems }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 黑色导航栏 -->
    <nav class="main-nav">
      <div class="main-inner">
        <ul class="menu">
          <li class="menu-item" @click="goHome">首页</li>

          <li class="menu-item">
            商店
            <ul class="dropdown">
              <li>服饰</li>
              <li>饰品</li>
              <li>鞋子</li>
            </ul>
          </li>

          <li class="menu-item">
            电子设备
            <ul class="dropdown">
              <li>手机</li>
              <li>电脑</li>
              <li>耳机</li>
            </ul>
          </li>

          <li class="menu-item">
            运动 & 书籍
            <ul class="dropdown">
              <li>运动</li>
              <li>书籍</li>
            </ul>
          </li>

          <li class="menu-item">特价</li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="footer-top-inner">
      <div class="footer-column">
        <h3>联系我们</h3>
        <p>地址:<br>XXXXXXXXXXXXXXXXXXXXXX</p>
        <p>邮箱地址:<br>info@yourdomain.com</p>
        <p>联系方式:<br>+1 234-567-8901</p>
      </div>
      <div class="footer-column">
        <h3>我的账户</h3>
        <ul>
          <li>我的账户</li>
          <li>登录</li>
          <li>我的购物车</li>
          <li>My Compare</li>
          <li>我的清单</li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>快速链接</h3>
        <ul>
          <li>隐私与cookie政策</li>
          <li>搜索</li>
          <li>联系我们</li>
          <li>订单与退换货</li>
          <li>高级搜索</li>
        </ul>
      </div>
      <div class="footer-column newsletter-col">
        <h3>新闻通讯</h3>
        <p>XXXXXXXXXXXXXXXXXXXXXX</p>
        <div class="newsletter-form">
          <input type="email" placeholder="请输入您的电子邮箱">
          <button>→</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>版权归XXXXX所有</p>
      <div class="payment-icons">logo</div>
    </div>
  </footer>
</template>

<style scoped>
/* 整体字体 */
.header {
  font-family: "Open Sans", Arial, sans-serif;
}


/* #region 顶部红条 strat */
.top-bar {
  width: 100%;
  padding: 10px 0;
  background: #E40000;
  color: #fff;
  text-align: center;
}

/* #endregion  */


/* #region 中英切换+登录+注册 */
.top-nav {
  width: 100%;
  border-bottom: 1px solid #ddd;
  background: white;
  /* 保持样式一致 */
}

.top-nav .top-inner {
  max-width: 1200px;
  /* 内容最大宽度 */
  margin: 0 auto;
  /* 水平居中 */
  padding: 2px 20px;
  /* 左右留白 */
  display: flex;
  justify-content: space-between;
  align-items: center;
}


/* 左边语言 */
.left-area select {
  border: none;
  background: transparent;
  font-size: 14px;
  cursor: pointer;
}

/* 右边登录注册 */
.right-area {
  display: flex;
  gap: 22px;
  list-style: none;
  font-size: 14px;
}

.right-area li {
  cursor: pointer;
}

.right-area li:hover {
  color: #E40000;
}

/* #endregion  end */


/* #region logo + 搜索 + 购物车 */
.logo-row {
  width: 100%;
  padding: 12px 22px;
}

.logo-row .logo-inner {
  max-width: 1200px;
  /* 内容最大宽度 */
  margin: 0 auto;
  /* 水平居中 */
  padding: 18px 18px;
  /* 左右留白 */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

/* 搜索 */
.search-area {
  display: flex;
  width: 380px;
}

.search-area input {
  flex: 1;
  height: 38px;
  padding: 0 15px;
  border: 1px solid #aaa;
}

.search-area button {
  width: 70px;
  background: black;
  color: #fff;
  border: none;
  cursor: pointer;
}

.search-area button:hover {
  background: #E40000;
}

/* 购物车 */
.cart {
  position: relative;
  padding: 0 5px;
  font-size: 22px;
  cursor: pointer;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #E40000;
  color: white;
  font-size: 12px;
  font-weight: bold;
  height: 18px;
  min-width: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}

.cart img {
  width: 38px;
  height: 38px;
}

/* #endregion  end */

/* #region 黑色导航栏 */
.main-nav {
  width: 100%;
  background: #000;
  height: 56px;
}

.main-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
}

/* 一级菜单 */
.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.menu-item {
  position: relative;
  height: 100%;
  padding: 0 24px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.menu-item:hover {
  background: #E40000;
}

/* 下拉菜单 */
.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background: #fff;
  padding: 10px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  z-index: 999;
  list-style: none;
  margin: 0;
  padding: 10px 0;
}

.menu-item:hover .dropdown {
  display: block;
}

.dropdown li {
  padding: 10px 20px;
  white-space: nowrap;
  color: #000;
}

.dropdown li:hover {
  background-color: #f0f0f0;
  color: #E40000;
  cursor: pointer;
}

/* #endregion  */

/* #region 底部 */
footer {
  background: #222;
  color: #ccc;
  padding-top: 50px;
  font-size: 14px;
}

.footer-top-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #444;
  gap: 30px;
}

.footer-column {
  flex: 1;
  max-width: 25%;
}

.footer-column h3 {
  color: white;
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 600;
  border-bottom: 1px solid #444;
  padding-bottom: 8px;
}

.footer-column p,
.footer-column li {
  line-height: 1.8;
  margin: 0;
  color: white;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li:before {
  content: "›";
  margin-right: 5px;
  color: white;
}

.newsletter-form {
  display: flex;
  margin-top: 15px;
}

.newsletter-form input {
  flex: 1;
  padding: 10px;
  border: none;
  background: white;
  color: #333;
}

.newsletter-form button {
  width: 40px;
  background: #E40000;
  color: white;
  border: none;
  padding: 0;
  font-size: 20px;
  border-radius: 0;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.payment-icons {
  color: #aaa;
}

/* #endregion  */
</style>