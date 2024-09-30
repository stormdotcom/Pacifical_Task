const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
});


const connectPG = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true })
    console.log("Database connected...");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};


connectPG()
module.exports = sequelize;
