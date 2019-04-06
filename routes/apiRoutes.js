var db = require("../models");

module.exports = function(app) {
  // Get events relative to specific date
  app.get("/api/events/:date", function(req, res) {
    db.Event.findAll({
      where: {
        eventDate: req.params.date
      }
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  // // Get all Events
  // app.get("/api/events", function(req, res) {
  //   db.Event.findAll({}).then(function(dbEvents) {
  //     res.json(dbEvents);
  //   });
  // });

  
  // Create a new Event
  app.post("/api/events", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Update an Event by id
  app.put("/api/events/", function(req, res) {
    db.Event.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Delete an Event by id
  app.delete("/api/events/:id", function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Get all Employees
  app.get("/api/employees", function(req, res) {
    db.Employee.findAll({}).then(function(dbEmployees) {
      res.json(dbEmployees);
    });
  });

  // Create a new Employee
  app.post("/api/employees", function(req, res) {
    db.Employee.create(req.body).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  // Update an Employee by id
  app.put("/api/employees/", function(req, res) {
    db.Employee.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });
  // Delete an Employee by id
  app.delete("/api/employees/:id", function(req, res) {
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });
};
