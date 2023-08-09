const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Truck = require('./TruckModels');

const caminhao = Truck(sequelize, Sequelize.DataTypes);

const db = {
  caminhao,
  sequelize,
};

module.exports = db;
