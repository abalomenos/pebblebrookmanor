module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    size: DataTypes.INTEGER
  });
  return Event;
};
