var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  // Grande Room Page
  app.get("/grande", function(req, res) {
    res.render("grande", {});
  });

  // Venti Room Page
  app.get("/venti", function(req, res) {
    res.render("venti", {});
  });

  // Luxor Room Page
  app.get("/luxor", function(req, res) {
    res.render("luxor", {});
  });

  // Reservation Page
  app.get("/reservation", function(req, res) {
    db.Event.findAll({}).then(function(dbEvents) {
      res.render("reservation", {
        events: dbEvents
      });
    });  
  });

  // // admin Page
  // app.get("/admin", function(req, res) {
  //   db.Event.findAll({}).then(function(dbEvents) {
  //     res.render("admin", {
  //       events: dbEvents
  //     });
  //   });  
  // });

  // Temp for now
  app.get("/temp", function(req, res) {
    db.Event.findAll({}).then(function(dbEvents) {
      db.Employee.findAll({}).then(function(dbEmployees) {
        res.render("temp", {
          events: dbEvents,
          employees: dbEmployees
        });
      });
    });
  });

  // Load Events for admin
  app.get("/admin", function(req, res) {
      res.render("admin", {});
  });

  // Load Events page and pass in an Event by id
  app.get("/event/:id", function(req, res) {
    db.Event.findOne({ where: { id: req.params.id } }).then(function(dbEvent) {
      res.render("event", {
        event: dbEvent
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
