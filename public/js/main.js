// ************** Draggable **************

// target elements with the "draggable" class
interact(".draggable").draggable({
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrict({
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    })
  ],
  // enable autoScroll
  autoScroll: false,

  // call this function on every dragmove event
  onmove: dragMoveListener
});

function dragMoveListener(event) {
  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
    y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform = target.style.transform =
    "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

// ************** Draggable End **************

// ************** Slide Show **************

$(function() {
  /* SET PARAMETERS */
  var changeImgTime = 5000;
  var transitionSpeed = 100;

  var simpleSlideshow = $("#exampleSlider"),
    listItems = simpleSlideshow.children("li"),
    listLen = listItems.length,
    i = 0,
    changeList = function() {
      listItems.eq(i).fadeOut(transitionSpeed, function() {
        i += 1;
        if (i === listLen) {
          i = 0;
        }
        listItems.eq(i).fadeIn(transitionSpeed);
      });
    };

  listItems.not(":first").hide();
  setInterval(changeList, changeImgTime);
});

// ************** Slide Show End **************

// ************** Event Tables **************

// Add Table
$("#addTable").click(function() {
  var table = $(".draggable").length + 1;
  $("#eventLayoutItems").append(
    $(
      '<div id="drag-' +
        table +
        '" class="draggable">' +
        table +
        '<button id="deleteTable-' +
        table +
        '" class="deleteTable">X</button></div>'
    )
  );
});

// Delete Table
$(document).on("click", ".deleteTable", function() {
  // Delete the Div
  $(this)
    .parent()
    .closest("div")
    .remove();

  $(".draggable").each(function(i) {
    i++;
    // Reset Table ID
    $("#" + this.id).attr("id", "drag-" + i);

    // Reset Table Data
    $("#" + this.id).html(
      i + '<button id="deleteTable-' + i + '" class="deleteTable">X</button>'
    );
  });
});

// ************ Save Event *****************

$("#saveEvent").click(function() {
  // var tablesArray = [];
  var eventID = window.location.pathname.split("/")[2];
  $(".draggable").each(function() {
    tableID = this.id;
    xCoords = $("#" + this.id).attr("data-x");
    if (xCoords == null) {
      xCoords = 0;
    }
    yCoords = $("#" + this.id).attr("data-y");
    if (yCoords == null) {
      yCoords = 0;
    }
    console.log("EventID " + eventID);
    console.log("TableID " + tableID);
    console.log("x " + xCoords);
    console.log("y " + yCoords);
    // tablesArray.push({
    //   tableID: tableID,
    //   xCoords: xCoords,
    //   yCoords: yCoords
    // });

    // Need to save to DataBase
  });
  // console.log(tablesArray);
  //     $.ajax({
  //       url: "/api/events/",
  //       type: "PUT",
  //       data: {
  //         tables: JSON.stringify(tablesArray),
  //         id: window.location.pathname.split("/")[2]
  //       }
  //     }).then(function() {
  //     })
});

// ************** Event Tables End **************


// ************* Get Event by Date **************
$("#searchEvent").click(function(e) {
  
  // Menu Items Toggle
  e.preventDefault();
  $(this).siblings('ul').slideToggle();

  var date = moment(new Date($("#datepicker").val())).format("MM-DD-YYYY");
  console.log(date);
  $.ajax({
    url: "api/events/" + date,
    type: "GET"
  }).then(function(data) {
    console.log(data);
    var $events = data.map(function(data) {
      var $editButton = $("<a>") 
        .attr("href", "events/" + event.id)
        .attr("type", "button")
        .attr("id", "edit-event")
        .addClass("btn btn-warning adminItemsActionButton edit")
        .text("Edit Event")

      var $deleteButton = $("<button>")
        .addClass("btn btn-danger adminItemsActionButton delete")
        .text("Delete Event");
  
      var $eventActionsDelete = $("<li>")  
        .addClass("adminItemsActions")
        .append($deleteButton)

      var $eventActionsEdit = $("<li>")  
        .addClass("adminItemsActions")
        .append($editButton)  

      var $eventActionsUL = $("<ul>")  
        .addClass("adminItemsActions")
        .append($eventActionsEdit)
        .append($eventActionsDelete)

      var $eventButtonList = $("<li>")  
        .addClass("adminItemsWrapper float-right")
        .append($eventActionsUL)
              
      var $div = $("<div>")
        .attr({
          src: employee.image,
          width: 100,
          height: 100,
          alt: "Employee"
        })
        .attr("data-toggle", "popover")  
        .attr("data-trigger", "hover")
        .attr("title", event.roomName)
        .attr("data-original-title", employee.name)
        .attr("data-content", "Date: " + event.eventDate + ", Guests: " + event.partySize + <h2>event.eventDate</h2>)
       
      var $heading1 = $("<h2>")
        .  

      var $employeeWrapperLI = $("<li>")  
        .addClass("adminItemsWrapper cursorPointer")
        .append($img);

      var $employeeWrapperUL = $("<ul>")  
        .addClass("adminItemsWrapper")
        .append($employeeWrapperLI)
        .append($employeeButtonList)
      
      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": employee.id
        })
        .append($employeeWrapperUL);

      return $li;
    });

    $employeeList.empty();
    $employeeList.append($employees);
  });
});
      
      
      
      
      
//       var $a = $("<a>")
//         .text(data.roomName)
//         .attr("href", "/events/" + data.id)
//         .addClass("reservation")
//         // .attr("href", "#")
//         // .attr("id", data.id)
//         // .attr("data-toggle", "popover")
//         // .attr("data-trigger", "hover")
//         // .attr("data-placement", "right")
//         // .attr("title", data.roomName)
//         // .attr("data-content", "Event info here")

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item list-group-item-action",
//           "data-id": data.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("x");

//       $li.append($button);

//       return $li;
//     });

//     $eventList.empty();
//     $eventList.append($events);
//   });
// });


// // ************* Get employees ***********
// $(".reservation").on("click", function() {
//   $.ajax({
//       url: "api/employees",
//       type: "GET"
//     }).then(function(data) {
//       console.log(data)
//       var $employees = data.map(function(data) {
//         var $a = $("<a>")
//           .text(data.employeeName)
//           .attr("href", "/employee/" + data.id)
  
//         var $li = $("<li>")
//           .attr({
//             class: "list-group-item list-group-item-action",
//             "data-id": data.id
//           })
//           .append($a);
  
//         var $button = $("<button>")
//           .addClass("btn btn-danger float-right delete")
//           .text("x");
  
//         $li.append($button);
  
//         return $li;
//       });
  
//       $employeeList.append($employees);
//     });
//   }); 


// ************* GET LAYOUT **************
$("#edit-event").on("click", function() {
  var eventID = window.location.pathname.split("/")[2];
  $.ajax({
    url: "/api/events/" + eventID,
    type: "GET"
  }).then(function(data) {
    console.log(data)
  })
})


// Enable popovers
$('[data-toggle="popover"]').popover();

// Enable datepicker
$(function() {
  $('#datepicker').datepicker();
});




// ************** Admin Page ********************

// Action Items
$('a.expand').on('click', function(e) {
  e.preventDefault();
  $(this).siblings('ul').slideToggle();
  $(this).parent('ul').siblings('li').slideToggle();
});

// Add Employee
$('#addEmployeeButton').click(function(e){
  e.preventDefault();

  $('#employee-list').hide();
  $('#event-list').hide();

  $('#addEmployeeContainer').fadeIn();
});

// All Employees
$('#showEmployeesButton').click(function(e){
  e.preventDefault();

  $('#addEmployeeContainer').hide();
  $('#event-list').hide();

  $('#employee-list').fadeIn();
});

// All Events
$('#showEventsButton').click(function(e){
  e.preventDefault();

  $('#addEmployeeContainer').hide();
  $('#employee-list').hide();

  $('#event-list').fadeIn();
});

// Search Event
$('#searchEvent').click(function(e){
  e.preventDefault();

  $('#addEmployeeContainer').hide();
  $('#employee-list').hide();

  $('#event-list').fadeIn();
});


// ************** Admin Page ********************
