module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      admin: DataTypes.BOOLEAN
    },
    {
      timestamps: false
    }
  );
  return User;
};
