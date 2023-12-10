// app.js

import  {Product} from './product.js';
import  {Category} from './category.js';
import  {Cart} from './cart.js';
import  {Order} from './order.js';

// Example Usage

// Create products
const product1 = new Product(1, 'Chair', 50, 'Comfortable chair for sitting.');
const product2 = new Product(2, 'Table', 100, 'Sturdy table for various uses.');

// Create categories
const category1 = new Category(101, 'Furniture');
const category2 = new Category(102, 'Home Decor');

// Associate products with categories
product1.addToCategory(category1.categoryName);
product1.addToCategory(category2.categoryName);
product2.addToCategory(category1.categoryName);

// Display product and category info
product1.displayInfo();
product2.displayInfo();
category1.displayInfo();
category2.displayInfo();

// Create a cart
const cart = new Cart(201);

// Add products to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 1);

// View the cart
cart.viewCart();

// Create an order from the cart
const order = new Order(301);
order.createOrder(cart);

// Display order details
order.displayOrderDetails();