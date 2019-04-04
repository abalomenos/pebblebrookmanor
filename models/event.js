module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define(
    "Event",
    {
      customerName: DataTypes.STRING,
      customerEmail: DataTypes.STRING,
      tables: DataTypes.STRING,
      employees: DataTypes.STRING,
      roomName: DataTypes.STRING,
      partySize: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );
  return Event;
};
