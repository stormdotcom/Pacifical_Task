const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");


const Asset = sequelize.define("Asset", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:true
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"v1"
    },
    description:{
        type:DataTypes.STRING
    }
});

module.exports = Asset