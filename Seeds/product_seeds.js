const { Product } = require('../public');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 12.99,
    stock: 25,
    category_id: 1,
  },
  {
    product_name: 'Jean Shorts',
    price: 29.99,
    stock: 30,
    category_id: 2,
  },
  {
    product_name: 'Top 20 Pop Music Compilation Record',
    price: 9.99,
    stock: 40,
    category_id: 3,
  },
  {
    product_name: 'Branded Hat',
    price: 19.99,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'Athletic Sneakers',
    price: 79.99,
    stock: 20,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;