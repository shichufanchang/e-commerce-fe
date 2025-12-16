<template>
    <div class="product-section">
        <div class=" product-section-inner">
            <h2 class="title">NEW PRODUCTS</h2>

            <div class="carousel-container">
                <!-- 滑动区域 -->
                <div class="carousel-track" :style="trackStyle">
                    <div class="product-card" v-for="product in productStore.products" :key="product.id">
                        <img :src="product.image" class="product-img" />

                        <p class="name">{{ product.name }}</p>
                        <p class="price">${{ product.price.toFixed(2) }}</p>

                        <button class="cart-btn" @click="handleAddToCart(product)">ADD TO CART</button>
                    </div>
                </div>

                <!-- 左右按钮 -->
                <button class="arrow left" @click="prev">‹</button>
                <button class="arrow right" @click="next">›</button>
            </div>
        </div>
    </div>
    <div class="image-flex">
        <div class="image-flex-inner">
            <div class="left-box">
                <!-- 左侧图片 -->
                <div class="image-left">
                    <img src="https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/advertisement/adv-image-1.png"
                        alt="">
                </div>
                <!-- 左侧叠加在图片上的文字内容 -->
                <div class="left-text">
                    <p class="left-up">Up to</p>
                    <p class="left-discount">70%</p>
                    <p class="left-off">Off</p>
                </div>
            </div>
            <div class="right-box">
                <!-- 右侧图片 -->
                <div class="image-right">
                    <img src="https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/advertisement/adv-image-2.png"
                        alt="">
                </div>
                <!-- 右侧叠加在图片上的文字内容 -->
                <div class="right-text">
                    <p class="right-sound">Headphone Premium Sound</p>
                    <p class="right-price">Starting From: $245.00</p>
                    <button class="shop-btn">SHOP NOW</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router" // 新增引入
import { useProductStore } from "@/store/shop/product"
import { useCartStore } from "@/store/shop/cart"

const router = useRouter() // 获取路由实例
const productStore = useProductStore()
const cartStore = useCartStore()

const currentIndex = ref(0)
const showCount = 4 // 一行展示数量

const next = () => {
    currentIndex.value =
        (currentIndex.value + 1) %
        (productStore.products.length - showCount + 1)
}

const prev = () => {
    currentIndex.value =
        (currentIndex.value - 1 + productStore.products.length) %
        (productStore.products.length - showCount + 1)
}

const trackStyle = computed(() => ({
    transform: `translateX(-${currentIndex.value * (100 / showCount)}%)`,
}))

// 添加到购物车方法
const handleAddToCart = (product) => {
    cartStore.addToCart(product)
    alert("已添加到购物车！")
}
</script>

<style scoped>
.product-section {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    background: white;
}

.product-section-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2px 20px;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-size: 32px;
    font-weight: 700;
    position: relative;
    display: inline-block;
    margin-bottom: 30px;
}

.title::after {
    content: "";
    width: 70px;
    height: 3px;
    background: red;
    display: block;
    margin: 5px auto 0;
}

.carousel-container {
    position: relative;
    overflow: hidden;
    padding: 10px 0;
}

.carousel-track {
    display: flex;
    transition: transform 0.3s ease-in-out;
}

.product-card {
    width: 300px;
    padding: 27px;
    box-sizing: border-box;
    flex-shrink: 0; /* 防止被挤压 */
}

.product-card:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.product-img {
    width: 235px;
    height: 260px;
    object-fit: contain;
    background: #f5f5f5;
}

.name {
    margin-top: 12px;
    font-size: 16px;
    color: #222;
}

.price {
    color: #e53935;
    font-size: 20px;
    margin: 5px 0;
}

.cart-btn {
    margin-top: 10px;
    padding: 10px 20px;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
    position: relative; /* 确保 z-index 生效 */
    z-index: 10; /* 提高层级，防止被遮挡 */
}

.cart-btn:hover {
    background: #E40000; /* 增加 hover 效果提示可点击 */
}

.arrow {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    background: black;
    color: white;
    font-size: 28px;
    padding: 10px 15px;
    cursor: pointer;
    border: 0;
}

.arrow.left {
    left: 5px;
}

.arrow.right {
    right: 5px;
}
/* 1. 容器样式：实现左右分栏 */
.image-flex-inner {
  display: flex;
  width: 100%;
  max-width: 1200px; /* 限制最大宽度，或者使用 100% 占满父容器 */
  margin: 0 auto; /* 居中 */
  gap: 20px; /* 两个分栏之间的间距 */
  padding: 20px;
}

/* 2. 分栏基础样式 */
.left-box,
.right-box {
  flex: 1; /* 均分父容器空间 */
  position: relative; /* 核心：为内部绝对定位的文字提供参考 */
  overflow: hidden; /* 裁剪溢出的内容 */
  min-height: 400px; /* 确保分栏有足够的高度 */
  display: flex; /* 让图片填充内部空间 */
}

/* 3. 图片样式：确保图片填充容器并保持比例 */
.image-left,
.image-right {
  width: 100%;
  height: 100%;
}

.image-left img,
.image-right img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例同时覆盖整个容器 */
  display: block;
}

/* --- 左侧文字样式 --- */
.left-text {
  position: absolute;
  top: 15%; /* 垂直定位 */
  left: 10%; /* 水平定位 */
  z-index: 10; /* 确保文字在图片上方 */
  font-family: Arial, sans-serif;
  color: #333; /* 文字颜色 */
  line-height: 1.1;
  text-align: left;
}

.left-up {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
}

.left-discount {
  font-size: 6rem; /* 特大号数字强调 */
  font-weight: 900;
  margin: 0;
}

.left-off {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
}

/* --- 右侧文字样式 --- */
.right-text {
  position: absolute;
  bottom: 10%; /* 垂直定位（底部） */
  left: 50%; /* 居中辅助 */
  transform: translateX(-50%); /* 居中对齐 */
  z-index: 10;
  font-family: Arial, sans-serif;
  color: #fff; /* 右侧图片颜色较深，使用白色文字 */
  text-align: center;
  width: 80%; /* 限制文字宽度 */
}

.right-sound {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.right-price {
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 15px;
}

.shop-btn {
  padding: 10px 20px;
  background-color: transparent; /* 透明背景 */
  color: #fff; /* 白色文字 */
  border: 2px solid #fff; /* 白色边框 */
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.shop-btn:hover {
  background-color: #fff;
  color: #000;
}

/* 4. 响应式优化 (可选，但推荐) */
@media (max-width: 768px) {
  .image-flex-inner {
    flex-direction: column; /* 小屏幕堆叠 */
    gap: 10px;
    padding: 10px;
  }
  
  .left-box, .right-box {
    min-height: 300px;
  }

  .left-discount {
    font-size: 15vw; /* 适应小屏幕 */
  }

  .right-sound {
    font-size: 5vw;
  }
}
</style>
