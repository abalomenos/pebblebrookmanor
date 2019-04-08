module.exports = function(sequelize, DataTypes) {
    var Layout = sequelize.define(
      "Layout",
      {
        eventID: DataTypes.INTEGER,
        tableID: DataTypes.STRING,
        xCoords: DataTypes.INTEGER,
        yCoords: DataTypes.INTEGER
      }
    );

    Layout.associate = function(models) {
      Layout.belongsTo(models.Event, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    
    return Layout;
  };
  