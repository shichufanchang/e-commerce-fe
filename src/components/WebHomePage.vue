<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()


const goLogin = () => router.push('/Login')
const goRegister = () => router.push('/Register')
const goHome = () => router.push('/')

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
          <div class="cart">搜索icon</div>
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
    <!-- 内容区域且切换登录注册页面 -->
    <router-view />
  </main>
  <footer></footer>
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
  border-right: none;
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
  font-size: 22px;
  cursor: pointer;
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
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  z-index: 999;
}

.menu-item:hover .dropdown {
  display: block;
}

.dropdown li {
  padding: 10px 20px;
  white-space: nowrap;
}
/* #endregion  */
</style>
