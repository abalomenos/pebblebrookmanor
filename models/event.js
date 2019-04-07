module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define(
    "Event",
    {
      eventDate: DataTypes.STRING,
      customerName: DataTypes.STRING,
      customerEmail: DataTypes.STRING,
      tables: { 
        type: DataTypes.TEXT, 
        get: function() {
            return JSON.parse(this.getDataValue('tables'));
        }, 
        set: function(val) {
          console.log(val)
          console.log(JSON.stringify(val))
            return this.setDataValue('tables', JSON.stringify(val));
        }
      },
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
