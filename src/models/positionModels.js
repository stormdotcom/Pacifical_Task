const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const Asset = require("./assetModel");

const Position = sequelize.define("Position", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    coordinates:{
        type: DataTypes.GEOGRAPHY("POINT"),
        allowNull:false
    },
    status:{
        type: DataTypes.ENUM("online", "offline"),
        allowNull:false
    }
})

Asset.hasMany(Position, { foreignKey:'assetId'});
Position.belongsTo(Asset, {foreignKey:'assetId'});

module.exports = Position;