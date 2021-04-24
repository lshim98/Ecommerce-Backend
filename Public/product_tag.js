const { Model, DataTypes } = require('sequelize');

const sequelize = require('./connection.js');

class Product_Tag extends Model {}

Product_Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Tag',
          id: 'id',
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = Product_Tag;