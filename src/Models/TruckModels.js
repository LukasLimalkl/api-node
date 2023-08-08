const truck = (sequelize, DataTypes) => {
  const Truck = sequelize.define(
    'Truck',
    {
      truck: {
        type: DataTypes.STRING,
      },
      model: {
        type: DataTypes.STRING,
      },
      ano: {
        type: DataTypes.STRING,
      },
      media: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'MediaTrucks',
    }
  );
  return Truck;
};

module.exports = truck;
