import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [
      {
        id: 1,
        name: "6G Space Silver Apple Phone",
        price: 179,
        quantity:1,
        image: "https://demo4techies.com/mage/magetheme108/pub/media/catalog/product/cache/d788b21752bace4942c3c506321ea543/p/r/product2_1_3.jpg"
      },
      {
        id: 2,
        name: "Wireless Gamepad Controller",
        price: 199,
        quantity:1,
        image: "https://demo4techies.com/mage/magetheme108/pub/media/catalog/product/cache/d788b21752bace4942c3c506321ea543/p/r/product4_1_1_1_2.jpg"
      },
      {
        id: 3,
        name: "Smart Tablet",
        price: 249,
        quantity:1,
        image: "http://demo4techies.com/mage/magetheme108/pub/media/catalog/product/cache/d788b21752bace4942c3c506321ea543/p/r/product2_1_3.jpg"
      },
      {
        id: 4,
        name: "IdeaPad Slim Laptop",
        price: 229,
        quantity:1,
        image: "https://demo4techies.com/mage/magetheme108/pub/media/catalog/product/cache/d788b21752bace4942c3c506321ea543/p/r/product7_1_1_1_2.jpg"
      },
      {
        id: 5,
        name: "Vacuum Cleaner with power",
        price: 219,
        quantity:1,
        image: "https://demo4techies.com/mage/magetheme108/pub/media/catalog/product/cache/d788b21752bace4942c3c506321ea543/p/r/product9_1_3.jpg"
      }
    ], 
  }),

  getters: {
    isEmpty: (state) => state.items.length === 0,

    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),

    subtotalPrice: (state) =>
      state.items.reduce((t, i) => t + i.price * i.quantity, 0).toFixed(2),

    shippingCost: () => 5.00,

    finalTotal(state) {
      return (parseFloat(this.subtotalPrice) + this.shippingCost).toFixed(2);
    }
  },

  actions: {
    addToCart(product, quantity = 1) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ ...product, quantity });
      }
    },

    updateQuantity(id, quantity) {
      const item = this.items.find(i => i.id === id);
      if (item) item.quantity = quantity;
    },

    removeFromCart(id) {
      this.items = this.items.filter(i => i.id !== id);
    },

    clearCart() {
      this.items = [];
    }
  }
});