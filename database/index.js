require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    logging: (...msg)=> process.env.NODE_ENV === 'dev' ? console.log(msg[0]) : false
    // ,    benchmark: process.env.NODE_ENV === 'dev' ? true : false
});

module.exports = sequelize;