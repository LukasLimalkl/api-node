const truck = (sequelize, DataTypes) => {
  const Truck = sequelize.define(
    'Truck',
    {
      placa: {
        type: DataTypes.STRING,
      },
      media: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'PlatesTruck',
    }
  );
  return Truck;
};

module.exports = truck;
