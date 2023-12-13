// product.js
import Table from 'cli-table';

export default class Product {
    constructor(productId, productName, price, description) {
      this.productId = productId;
      this.productName = productName;
      this.price = price;
      this.description = description;
      this.categories = [];
    }
  
    displayInfo() {
      const table = new Table({
        head: ['ID', 'Nama', 'Harga', 'Deskripsi','Kategori'],
        colWidths: [5, 20, 15,29,40],
      });
  
      table.push([this.productId, this.productName, `Rp. ${this.price}`, this.description, this.description]);
      console.log('Nama Produk');
      console.log(table.toString());
      // console.log('Daftar Produk Cantika Fashion');
      // console.log('-----------------------');
      // console.log(`Product ID: ${this.productId}`);
      // console.log(`Nama Produk: ${this.productName}`);
      // console.log(`Harga Rp. ${this.price}`);
      // console.log(`Deskripsi Produk: ${this.description}`);
      // console.log(`Kategori Produk: ${this.categories.join(', ')}`);
      // console.log('------------------------');
    }

    updateProduct(productName, price, description) {
      this.productName = productName;
      this.price = price;
      this.description = description;
    }
  
    addToCategory(category) {
      this.categories.push(category);
    }
  
    removeFromCategory(category) {
      this.categories = this.categories.filter((cat) => cat !== category);
    }
  }
  