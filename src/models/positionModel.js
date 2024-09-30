const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const Asset = require("./assetModel");

const Position = sequelize.define("Position", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
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
    status:{
        type: DataTypes.ENUM("online", "offline"),
        allowNull:false
    }
})

Asset.hasMany(Position, { foreignKey:'assetId'});
Position.belongsTo(Asset, {foreignKey:'assetId'});

module.exports = Position;