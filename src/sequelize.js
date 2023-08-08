const Sequelize = require('sequelize');
const { sequelize } = require('./database');

const sequelizeInstance = new Sequelize({
  database: sequelize.config.database,
  username: sequelize.config.username,
  password: sequelize.config.password,
  host: sequelize.config.host,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelizeInstance;
