const { DataTypes, Model } = require('sequelize');
const sequelize = require('../utils/db');

class Position extends Model {}

Position.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: -90,
        max: 90,
      },
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: -180,
        max: 180,
      },
    },
    status: {
      type: DataTypes.ENUM('online', 'offline'),
      allowNull: false,
    },
    assetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Assets',
        key: 'id',
      },
      onDelete: 'CASCADE', 
    },
  },
  {
    sequelize,
    modelName: 'Position',
    tableName: 'Positions',
    timestamps: true,
    indexes: [
      {
        fields: ['assetId'],
      },
    ],
  }
);

module.exports = Position;
