const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database username
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Database host (e.g., 'db' for Docker service name)
    port: process.env.DB_PORT, // Database port (usually 5432 for Postgres)
    dialect: 'postgres',
    logging: false,
  }
);




module.exports = sequelize;
