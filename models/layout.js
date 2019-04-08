module.exports = function(sequelize, DataTypes) {
    var Layout = sequelize.define(
      "Layout",
      {
        eventID: DataTypes.INTEGER,
        tableID: DataTypes.INTEGER,
        xCoords: DataTypes.INTEGER,
        yCoords: DataTypes.INTEGER
      }
    );
    return Layout;
  };
  