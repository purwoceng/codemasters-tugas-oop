// category.js

export class Category {
    constructor(categoryId, categoryName) {
      this.categoryId = categoryId;
      this.categoryName = categoryName;
    }
  
    displayInfo() {
      console.log('Kategori Produk');
      console.log(`Kategori ID: ${this.categoryId}`);
      console.log(`Nama Kategori: ${this.categoryName}`);
      console.log('------------------------');
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
  