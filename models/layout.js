module.exports = function(sequelize, DataTypes) {
    var Layout = sequelize.define(
      "Layout",
      {
        eventRef: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1]
          }
        },  
        tableID: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },  
        xCoords: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1]
          }
        },  
        yCoords: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1]
          }
        }  
      });

    Layout.associate = function(models) {
      Layout.belongsTo(models.Event, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    
    return Layout;
  };
  