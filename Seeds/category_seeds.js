const { Category } = require('../public');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
  {
    category_name: 'Music',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;