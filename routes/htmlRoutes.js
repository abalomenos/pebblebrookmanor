var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Grande Room Page
  app.get("/grande", function(req, res) {
    res.render("grande");
  });

  // Venti Room Page
  app.get("/venti", function(req, res) {
    res.render("venti");
  });

  // Luxor Room Page
  app.get("/luxor", function(req, res) {
    res.render("luxor");
  });

  // Reservation Page
  app.get("/reservation", function(req, res) {
    res.render("reservation");
  });

  // All Events Page
  app.get("/events", function(req, res) {
    db.Event.findAll({}).then(function(dbEvents) {
      res.render("allevents", {
        // Need Plural
        events: dbEvents
      });
    });
  });

  // Load Events page and pass in an Event by id
  app.get("/events/:id", function(req, res) {
    db.Event.findOne({ where: { id: req.params.id } }).then(function(dbEvent) {
      res.render("event", {
        // Need single
        event: dbEvent
      });
    });
  });

  // All Employees Page
  app.get("/employees", function(req, res) {
    db.Employee.findAll({}).then(function(dbEmployees) {
      res.render("allemployees", {
        // Need Plural
        employees: dbEmployees
      });
    });
  });

  // Load Employee page and pass in an Employee by id
  app.get("/employees/:id", function(req, res) {
    db.Employee.findOne({ where: { id: req.params.id } }).then(function(
      dbEmployees
    ) {
      res.render("employee", {
        // Need single
        employee: dbEmployees
      });
    });
  });

  // Add Employee Page
  app.get("/addemployee", function(req, res) {
      res.render("addemployee")
  });

  // Load Admin Page
  app.get("/admin", function(req, res) {
    res.render("admin");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
