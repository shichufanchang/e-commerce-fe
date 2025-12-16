<template>
  <div class="cart-page-container">
    <h1 class="page-title">您的购物车</h1>

    <div v-if="cartStore.isEmpty" class="empty-cart">
      <p>您的购物车还是空的，快去挑选您喜欢的商品吧！</p>
      <button class="primary-btn" @click="router.push('/')">继续购物</button>
    </div>

    <div v-else class="cart-content">
      <div class="cart-table-wrapper">
        <table class="cart-table">
          <thead>
            <tr>
              <th>商品</th>
              <th>价格</th>
              <th>数量</th>
              <th>小计</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartStore.items" :key="item.id">
              <td class="product-info">
                <img :src="item.image" :alt="item.name" class="product-img-thumb">
                <span>{{ item.name }}</span>
              </td>

              <td class="price">${{ item.price.toFixed(2) }}</td>

              <td class="quantity-control">
                <input 
                  type="number" 
                  min="1" 
                  :value="item.quantity" 
                  @input="handleQuantityChange(item.id, $event.target.value)"
                  class="quantity-input"
                >
              </td>

              <td class="subtotal-item">${{ (item.price * item.quantity).toFixed(2) }}</td>

              <td class="actions">
                <button class="remove-btn" @click="cartStore.removeFromCart(item.id)">
                  ×
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="cart-footer-controls">
        <button class="secondary-btn" @click="router.push('/')">← 继续购物</button>
        <button class="secondary-btn clear-cart-btn" @click="cartStore.clearCart">清空购物车</button>
      </div>
      
      <div class="cart-summary-wrapper">
        <div class="cart-summary">
          <h3>购物车总结</h3>
          
          <div class="summary-line">
            <span>商品小计:</span>
            <span>${{ cartStore.subtotalPrice }}</span>
          </div>

          <div class="summary-line">
            <span>运费:</span>
            <span>${{ cartStore.shippingCost.toFixed(2) }}</span>
          </div>

          <div class="summary-line total">
            <span>总计:</span>
            <span>${{ cartStore.finalTotal }}</span>
          </div>
          
          <button class="primary-btn checkout-btn" @click="router.push('/checkout')">
            去结算
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCartStore } from '@/store/shop/cart'; 

const router = useRouter();
const cartStore = useCartStore();

const handleQuantityChange = (productId, value) => {
  const newQuantity = parseInt(value, 10);
  if (newQuantity && newQuantity >= 1) {
    cartStore.updateQuantity(productId, newQuantity);
  } else if (newQuantity === 0) {
    // 数量设为 0 时，移除商品
    cartStore.removeFromCart(productId);
  }
};
</script>

<style scoped>
/* 页面容器及标题  */
.cart-page-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
}

.empty-cart {
  text-align: center;
  padding: 50px;
  border: 1px dashed #ccc;
  border-radius: 8px;
}

.empty-cart p {
    margin-bottom: 20px;
    font-size: 1.1em;
}

.cart-content {
  display: flex;
  flex-wrap: wrap; /* 保证小屏幕下会换行 */
  gap: 30px;
}

.cart-table-wrapper {
  flex: 2; /* 购物车表格占据更多空间 */
  min-width: 60%; 
}

.cart-summary-wrapper {
  flex: 1; /* 总结区域占据剩余空间 */
  min-width: 300px;
}

/* 购物车样式 */
.cart-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.cart-table th, .cart-table td {
  padding: 15px 10px;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
}

.cart-table thead th {
  background-color: #f8f8f8;
  font-weight: 600;
  color: #333;
}

/* 商品信息列 */
.product-info {
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 250px;
}

.product-img-thumb {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border: 1px solid #f0f0f0;
}

/* 数量控制 */
.quantity-control {
  max-width: 120px;
}

.quantity-input {
  width: 60px;
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* 移除按钮 */
.remove-btn {
  background: none;
  border: none;
  color: #999;
  font-size: 1.5em;
  cursor: pointer;
  transition: color 0.2s;
}

.remove-btn:hover {
  color: #E40000; /* 红色 */
}

/* 购物车总结  */
.cart-summary {
  background-color: #f8f8f8;
  padding: 25px;
  border: 1px solid #eee;
}

.cart-summary h3 {
  font-size: 1.4em;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ddd;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 1.05em;
}

.summary-line.total {
  font-size: 1.3em;
  font-weight: 700;
  color: #E40000;
  border-top: 1px solid #ddd;
  padding-top: 15px;
}

/*  按钮样式 */
.primary-btn, .secondary-btn {
  padding: 12px 30px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  border-radius: 30px; /* 更圆润的按钮 */
  letter-spacing: 0.5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.primary-btn {
  background-color: #E40000;
  color: white;
  box-shadow: 0 4px 10px rgba(228, 0, 0, 0.3);
}

.primary-btn:hover {
  background-color: #c00000;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(228, 0, 0, 0.4);
}

.secondary-btn {
  background-color: #fff;
  color: #333;
  border: 1px solid #e0e0e0;
}

.secondary-btn:hover {
  background-color: #f8f8f8;
  border-color: #333;
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* 结算按钮 */
.checkout-btn {
  width: 100%;
  margin-top: 20px;
  font-size: 1.1em;
  padding: 15px;
}

/* 底部控制按钮 */
.cart-footer-controls {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eee;
    padding-top: 20px;
}

.clear-cart-btn {
    color: #666;
}

.clear-cart-btn:hover {
    background-color: #fff0f0;
    color: #E40000;
    border-color: #E40000;
    box-shadow: 0 4px 10px rgba(228, 0, 0, 0.15);
}

/* 媒体查询：响应式设计 */
@media (max-width: 768px) {
  .cart-content {
    flex-direction: column;
  }

  .cart-table-wrapper, .cart-summary-wrapper {
    min-width: 100%;
  }

  .cart-table thead {
    display: none;
  }

  .cart-table, .cart-table tbody, .cart-table tr, .cart-table td {
    display: block;
    width: 100%;
  }

  .cart-table tr {
    margin-bottom: 15px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  .cart-table td {
    text-align: right;
    border-bottom: 1px dotted #ccc;
  }
  
  /* 在内容前显示标签 */
  .cart-table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

}
</style>