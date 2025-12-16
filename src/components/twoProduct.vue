<template>
    <div class="product-section">
        <div class=" product-section-inner">
            <h2 class="title">Featured Products</h2>

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
    z-index: 10; /* 提高层级 */
}

.cart-btn:hover {
    background: #E40000; /* 增加 hover 效果 */
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
</style>
