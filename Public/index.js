// import models
const Product = require('./product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./product_tag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: product_tag,
});

Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: product_tag,
});

module.exports = {
  product,
  category,
  tag,
  product_tag,
};