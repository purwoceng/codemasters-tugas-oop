// category.js

export class Category {
    constructor(categoryId, categoryName) {
      this.categoryId = categoryId;
      this.categoryName = categoryName;
    }
  
    displayInfo() {
      console.log(`Category ID: ${this.categoryId}`);
      console.log(`Category Name: ${this.categoryName}`);
      console.log('------------------------');
    }
  }
  