module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define(
    "Room",
    {
      name: DataTypes.STRING,
      capacity: DataTypes.INTEGER
    },
  );
  return Room;
};
