module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define(
    "Employee",
    {
      name: DataTypes.STRING,
      wage: DataTypes.INTEGER,
      image: DataTypes.STRING
    },
    {
      timestamps: true
    }
  );
  return Employee;
};
