var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Event.findAll({}).then(function(dbEvents) {
      res.render("index", {
        msg: "Welcome!",
        events: dbEvents
      });
    });
  });

  // Load Event page
  app.get("/events", function(req, res) {
    db.Event.findAll({}).then(function(dbEvents) {
      res.render("events", {
        events: dbEvents
      });
    });
  });
  // Load Event page and pass in an Event by id
  app.get("/event/:id", function(req, res) {
    db.Event.findOne({ where: { id: req.params.id } }).then(function(dbEvent) {
      res.render("event", {
        event: dbEvent
      });
    });
  });

  app.get("/employees", function(req, res) {
    db.Employee.findAll({}).then(function(dbEmployees) {
      res.render("employees", {
        employees: dbEmployees
      });
    });
  });

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
  app.get("*", function(req, res) {
    res.render("404");
  });
};
