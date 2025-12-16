<template>
  <div class="carousel-container">
    <!-- 轮播区域 -->
    <div class="carousel-wrapper" :style="trackStyle">

      <div class="carousel-slide" v-for="(item, index) in slides" :key="index">

        <!-- 背景图片层 -->
        <div class="image-right">
          <img :src="item.image" alt="banner">
        </div>

        <!-- 叠加在图片上的文字内容 -->
        <div class="content-left" :class="item.textAlign">
          <h2>{{ item.title }}</h2>
          <h1>{{ item.subtitle }}</h1>
          <p>{{ item.description }}</p>
          <button class="shop-btn">SHOP NOW</button>
        </div>

      </div>
    </div>

    <!-- 左右箭头 -->
    <button class="arrow left" @click="prev">‹</button>
    <button class="arrow right" @click="next">›</button>

    <!-- 圆点 -->
    <div class="dots">
      <span v-for="(item, i) in slides" :key="i" :class="{ active: i === currentIndex }" @click="goTo(i)"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const slides = [
  {
    title: "New Experience",
    subtitle: "GREAT PRICE",
    description: "Save now 20% off on VR box",
    textAlign: "left",
    image: "https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/slider/next-home-banner-1.png"
  },
  {
    title: "Exclusive Deals",
    subtitle: "BIG SALE",
    description: "Grab the offers before they end",
    textAlign: "right",
    image: "https://demo4techies.com/mage/magetheme108/pub/media/wysiwyg/slider/next-home-banner-2.png"
  }
]

const currentIndex = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}
const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}
const goTo = (i) => {
  currentIndex.value = i
}

const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}))

</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 480px;
  overflow: hidden;
}

.carousel-wrapper {
  display: flex !important;
  height: 100%;
  flex-direction: row;
}


.carousel-slide {
  position: relative;
  width: 100%;
  height: 100%;
  flex: 0 0 100%;
}


.image-right {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.image-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.content-left {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 40%;
  color: #000;
}

.content-left.left {
  left: 60px;
  text-align: left;
}

.content-left.right {
  right: 60px;
  text-align: right;
}

.content-left h2 {
  font-size: 24px;
  color: #444;
}

.content-left h1 {
  font-size: 48px;
  font-weight: bold;
}

.content-left p {
  margin-top: 8px;
  font-size: 16px;
  color: #444;
}

.shop-btn {
  margin-top: 20px;
  padding: 10px 26px;
  border: 2px solid black;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
}

/* 箭头 */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: black;
  color: white;
  font-size: 28px;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

.arrow.left {
  left: 20px;
}

.arrow.right {
  right: 20px;
}

/* 圆点 */
.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #bbb;
  border-radius: 50%;
  margin: 0 4px;
}

.dots .active {
  background: #000;
}
</style>
