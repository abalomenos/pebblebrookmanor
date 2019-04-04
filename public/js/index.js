// Get references to page elements
var $eventName = $("#event-name");
var $eventDescription = $("#event-description");
var $eventSize = $("#event-size");
var $submitEvent = $("#submit-event");
var $eventList = $("#event-list");

var $employeeName = $("#employee-name");
var $employeeWage = $("#employee-wage");
var $employeeImage = $("#employee-image");
var $submitEmployee = $("#submit-employee");
var $employeeList = $("#employee-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveEvent: function(event) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/events",
      data: JSON.stringify(event)
    });
  },
  getEvents: function() {
    return $.ajax({
      url: "api/events",
      type: "GET"
    });
  },
  deleteEvent: function(id) {
    return $.ajax({
      url: "api/events/" + id,
      type: "DELETE"
    });
  },
  updateEvent: function() {
    return $.ajax({
      url: "api/events/",
      type: "PUT"
    });
  },
  saveEmployee: function(employee) {
    console.log("index.js employee" + employee);

    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/employees",
      data: JSON.stringify(employee)
    });
  },
  getEmployees: function() {
    return $.ajax({
      url: "api/employees",
      type: "GET"
    });
  },
  deleteEmployee: function(id) {
    return $.ajax({
      url: "api/employees/" + id,
      type: "DELETE"
    });
  },
  updateEmployee: function() {
    return $.ajax({
      url: "api/employees/",
      type: "PUT"
    });
  }
};

// Gets new event from the db and repopulates the list
var refreshEvents = function() {
  API.getEvents().then(function(data) {
    var $events = data.map(function(event) {
      var $a = $("<a>")
        .text(event.name)
        .attr("href", "/event/" + event.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": event.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("Delete Event");

      $li.append($button);

      return $li;
    });

    $eventList.empty();
    $eventList.append($events);
  });
};

// addEvent is called whenever a new event is created
// Save the new event to the db and refresh the list
var addEvent = function(event) {
  event.preventDefault();

  var event = {
    name: $eventName.val().trim(),
    description: $eventDescription.val().trim(),
    size: $eventSize.val().trim()
  };

  if (!(event.name && event.description && event.size)) {
    alert("Please enter an Event Name, Description and Size!");
    return;
  }

  console.log(event);

  API.saveEvent(event).then(function() {
    refreshEvents();
  });

  $eventName.val("");
  $eventDescription.val("");
  $eventSize.val("");
};

var deleteEvent = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteEvent(idToDelete).then(function() {
    refreshEvents();
  });
};

// Gets new employee from the db and repopulates the list
var refreshEmployees = function() {
  API.getEmployees().then(function(data) {
    var $employees = data.map(function(employee) {
      var $a = $("<a>")
        .text(employee.name)
        .attr("href", "/employee/" + employee.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": employee.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("Delete Employee");

      $li.append($button);

      return $li;
    });

    employeeList.empty();
    employeeList.append($employees);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var addEmployee = function(event) {
  event.preventDefault();

  var employee = {
    name: $employeeName.val().trim(),
    wage: $employeeWage.val().trim(),
    image: $employeeImage.val().trim()
  };

  if (!(employee.name && employee.wage && employee.image)) {
    alert("Please enter an Employee Name, Wage and Image!");
    return;
  }

  console.log("Saving new employee " + employee);

  API.saveEmployee(employee).then(function() {
    refreshEmployees();
  });

  $employeeName.val("");
  $employeeWage.val("");
  $employeeImage.val("");
};

// removeEmployee is called when an employee's delete button is clicked
// Remove the employee from the db and refresh the list
var deleteEmployee = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteEmployee(idToDelete).then(function() {
    refreshEmployees();
  });
};

// Add event listeners to the submit and delete buttons
$submitEvent.on("click", addEvent);
$submitEmployee.on("click", addEmployee);
$eventList.on("click", ".delete", deleteEvent);
$employeeList.on("click", ".delete", deleteEmployee);
