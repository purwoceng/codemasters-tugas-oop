// category.js
import Table from 'cli-table';
export default class Category {
    constructor(categoryId, categoryName) {
      this.categoryId = categoryId;
      this.categoryName = categoryName;
    }
  
    displayInfo() {
        const table = new Table({
          head: ['ID', 'Nama Kategori'],
          colWidths: [15, 40],
        });
    
        table.push([this.categoryId, this.categoryName]);
        console.log('Nama Kategori');
        console.log(table.toString());
      // console.log(`Kategori ID: ${this.categoryId}`);
      // console.log(`Nama Kategori: ${this.categoryName}`);
      // console.log('------------------------');
    }

    updateCategory(categoryName) {
      this.categoryName = categoryName;
    }
    products() {
      console.log(`Nama Produk di Kategori ${this.categoryName}:`);
      this.products.forEach(product => {
        console.log(`${product.productName} (${product.productId})`);
      });
  }
}
  