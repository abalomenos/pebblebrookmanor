module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define(
    "Event",
    {
      date: DataTypes.INTEGER,
      room: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      size: DataTypes.INTEGER,
      tables: DataTypes.STRING,
      employees: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return Event;
};
