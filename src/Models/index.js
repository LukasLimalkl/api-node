const Sequelize = require('sequelize');
const sequilize = require('../sequelize');

const Truck = require('./TruckModels');

const truck = Truck(sequilize, Sequelize.DataTypes);

const db = {
  truck,
  sequilize,
};

module.exports = { db };
