// cart.js

export class Cart {
    constructor(cartId) {
      this.cartId = cartId;
      this.items = [];
    }
  
    addItem(product, quantity) {
      this.items.push({ product, quantity });
    }
  
    removeItem(product) {
      this.items = this.items.filter((item) => item.product !== product);
    }
  
    viewCart() {
      console.log(`ID Keranjang: ${this.cartId}`);
      this.items.forEach((item) => {
        console.log(`Product: ${item.product.productName}, Jumlah Pesanan: ${item.quantity}`);
      });
      console.log('------------------------');
    }
  }
  
