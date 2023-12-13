// app.js

import  Product from './product.js';
import  Category from './category.js';
import  Cart from './cart.js';
import Order from './order.js';

// Example Usage

// kelas product
const product1 = new Product(1, 'Baju Batik Pria', 150000, 'Baju Batik Premium.');
const product2 = new Product(2, 'Baju Anak ', 40000, 'Baju Anak Bahan Adem.');
const product3 = new Product(3, 'Rok Wanita ', 30000, 'Rok Wanita Premium.');
const product4 = new Product(4, 'Sabun Muka Pria dan Wanita ', 30000, 'Sabun Muka Unisex.');

// kelas category
const category1 = new Category(1, 'Fashion Pria');
const category2 = new Category(2, 'Fashion Wanita');
const category3 = new Category(3, 'Perlengkapan Ibu dan Anak');

// add product to class category
product1.addToCategory(category1.categoryName);
product2.addToCategory(category1.categoryName);
product2.addToCategory(category3.categoryName);
product3.addToCategory(category2.categoryName);
product3.addToCategory(category3.categoryName);
product4.addToCategory(category1.categoryName);
product4.addToCategory(category2.categoryName);

// menampilkan info produk ke kategori produk
product1.displayInfo();
product2.displayInfo();
product3.displayInfo();
product4.displayInfo();
category1.displayInfo();
category2.displayInfo();
category3.displayInfo();

// membuat variabel keranjang
const cart = new Cart(1);

// Add products to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 1);
cart.addItem(product3, 1);

// View the cart
cart.viewCart();

// Create an order from the cart
const order = new Order(301);
order.createOrder(cart);

// Display order details
order.displayOrderDetails();