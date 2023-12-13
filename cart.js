// cart.js
import Table from 'cli-table';
export default class Cart {
    constructor(cartId) {
      this.cartId = cartId;
      this.items = [];
    }
  
    //method additem untuk menambah keranjang yang berisi produk dan jumlah produk
    addItem(product, quantity) {
      this.items.push({ product, quantity });
    }
  
    //method untuk menghapus keranjang
    removeItem(product) {
      this.items = this.items.filter((item) => item.product !== product);
    }
  
    //method untuk melihat keranjang
    viewCart() {
      const table = new Table({
        head: ['ID', 'Nama', 'Jumlah'],
        colWidths: [15, 20,20],
      });
      console.log('Keranjang');
     
      this.items.forEach((item) => {
        table.push([this.cartId,item.product.productName,item.quantity])
      })
      console.log(table.toString());
    }
  }
  
