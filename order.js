// order.js
import Table from 'cli-table';
export default class Order {
    constructor(orderId) {
      this.orderId = orderId;
      this.items = [];
      this.totalAmount = 0;
    }
  
    createOrder(cart) {
      this.items = cart.items;
      this.calculateTotalAmount();
    }
  
    calculateTotalAmount() {
      this.totalAmount = this.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    }
  
    displayOrderDetails() {
      const table = new Table({
        head: ['ID', 'Nama Produk', 'Jumlah Produk'],
        colWidths: [15, 20,20],
      });
      console.log('Pesanan');
      this.items.forEach((item) => {
       table.push([this.orderId,item.product.productName,item.quantity]);
      });
      console.log(table.toString());
      console.log(`Total Bayar Rp.  ${this.totalAmount}`);
      console.log('------------------------');
    }
  }
  
