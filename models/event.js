module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define(
    "Event",
    {
      eventDate: DataTypes.STRING,
      customerName: DataTypes.STRING,
      customerEmail: DataTypes.STRING,
      tables: { 
        type: DataTypes.STRING, 
        get: function() {
          try{
            return JSON.parse(this.getDataValue('tables'));
          }
          catch(err) {
            console.log(err)
          }
            
        }, 
        set: function(val) {
          console.log(val)
          console.log(JSON.stringify(val))
          try {
            return this.setDataValue('tables', JSON.stringify(val));
          }
          catch(err) {
            console.log(err)
          }
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
