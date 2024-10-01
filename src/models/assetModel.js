const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/db');

class Asset extends Model {}

Asset.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'vessel',
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Asset',
    tableName: 'Assets',
    timestamps: true,
    indexes: [
      {
        fields: ['name'],
      },
    ],
  }
);

module.exports = Asset;
