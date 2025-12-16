<template>
  <div class="home-page-content">
    <!-- 轮播图 -->
    <imageCarousel />
    <!-- 第一个产品展示区域 -->
    <oneProduct />
    <!-- 第二个产品展示区域 -->
    <twoProduct />
    <!-- 第三个展示区(介绍，logo) -->
    <h2 class="section-title">LATEST POSTS</h2>
    <threeProduct />
  </div>
</template>
<script setup>
import imageCarousel from '@/components/imageCarousel.vue';
import oneProduct from '@/components/oneProduct.vue';
import twoProduct from '@/components/twoProduct.vue';
import threeProduct from '@/components/threeProduct.vue';



</script>
<style scoped>
/* #region 内容区 */
.home-page-content {
  margin: 0 auto;
  color: #333;
  background: white;
}

/* 标题样式 */
.section-title {
  font-size: 24px;
  margin: 50px 0 25px;
  text-align: center;
  font-weight: bold;
}

/* #endregion  */
</style>