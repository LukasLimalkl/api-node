const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Truck = require('./TruckModels');

const truck = Truck(sequelize, Sequelize.DataTypes);

const db = {
  truck,
  sequelize,
};

module.exports = db;
