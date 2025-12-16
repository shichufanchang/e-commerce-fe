import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [
      {
        id: 1,
        name: "6G Space Silver Apple Phone",
        price: 179,
        image: "https://demo4techies.com/mage/magetheme108/pub/media/catalog/product/cache/d788b21752bace4942c3c506321ea543/p/r/product2_1_3.jpg"
      },
      {
        id: 2,
        name: "Wireless Gamepad Controller",
        price: 199,
        image: "https://demo4techies.com/mage/magetheme108/pub/media/catalog/product/cache/d788b21752bace4942c3c506321ea543/p/r/product4_1_1_1_2.jpg"
      },
      {
        id: 3,
        name: "Smart Tablet",
        price: 249,
        image: "http://demo4techies.com/mage/magetheme108/pub/media/catalog/product/cache/d788b21752bace4942c3c506321ea543/p/r/product2_1_3.jpg"
      },
      {
        id: 4,
        name: "IdeaPad Slim Laptop",
        price: 229,
        image: "https://demo4techies.com/mage/magetheme108/pub/media/catalog/product/cache/d788b21752bace4942c3c506321ea543/p/r/product7_1_1_1_2.jpg"
      },
      {
        id: 5,
        name: "Vacuum Cleaner with power",
        price: 219,
        image: "https://demo4techies.com/mage/magetheme108/pub/media/catalog/product/cache/d788b21752bace4942c3c506321ea543/p/r/product9_1_3.jpg"
      }
    ]
  }),
})
