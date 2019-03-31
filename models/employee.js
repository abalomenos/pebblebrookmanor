module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define(
    "Employee",
    {
      employeeName: DataTypes.STRING,
      employeeWage: DataTypes.INTEGER,
      employeeImage: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  return Employee;
};
