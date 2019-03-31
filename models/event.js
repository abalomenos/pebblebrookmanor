module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define(
    "Event",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      size: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  return Event;
};
