// order.js

export class Order {
    constructor(orderId) {
      this.orderId = orderId;
      this.items = [];
      this.totalAmount = 0;
    }
  
    createOrder(cart) {
      this.items = [...cart.items];
      this.calculateTotalAmount();
    }
  
    calculateTotalAmount() {
      this.totalAmount = this.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    }
  
    displayOrderDetails() {
      console.log(`Order ID: ${this.orderId}`);
      this.items.forEach((item) => {
        console.log(`Product: ${item.product.productName}, Quantity: ${item.quantity}`);
      });
      console.log(`Total Amount: $${this.totalAmount}`);
      console.log('------------------------');
    }
  }
  
//   module.exports = Order;