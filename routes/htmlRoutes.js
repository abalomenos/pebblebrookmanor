var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Event.findAll({}).then(function(dbEvents) {
      db.Employee.findAll({}).then(function(dbEmployees) {
        res.render("index", {
          events: dbEvents,
          employees: dbEmployees
        });
      });
    });
  });

  // Load Events page
  app.get("/events", function(req, res) {
    db.Event.findAll({}).then(function(dbEvents) {
      res.render("events", {
        events: dbEvents
      });
    });
  });
  // Load Events page and pass in an Event by id
  app.get("/event/:id", function(req, res) {
    db.Event.findOne({ where: { id: req.params.id } }).then(function(dbEvent) {
      res.render("event", {
        event: dbEvent
      });
    });
  });

  // app.get("/employees", function(req, res) {
    
  // });

  // Load Employee page and pass in an Employee by id
  app.get("/employee/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Employee.findOne({ where: { id: req.params.id } }).then(function(dbEmployee) {
      res.render("employee", {
        employee: dbEmployee
      });
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  //   console.log(req.path);
  // });
};
