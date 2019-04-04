

// ************** Draggable **************

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrict({
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      }),
    ],
    // enable autoScroll
    autoScroll: false,

    // call this function on every dragmove event
    onmove: dragMoveListener
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

// ************** Draggable End **************


// ************** Slide Show **************

$(function () {

  /* SET PARAMETERS */
  var change_img_time     = 5000; 
  var transition_speed    = 100;

  var simple_slideshow    = $('#exampleSlider'),
      listItems           = simple_slideshow.children('li'),
      listLen             = listItems.length,
      i                   = 0,

      changeList = function () {

          listItems.eq(i).fadeOut(transition_speed, function () {
              i += 1;
              if (i === listLen) {
                  i = 0;
              }
              listItems.eq(i).fadeIn(transition_speed);
          });

      };

  listItems.not(':first').hide();
  setInterval(changeList, change_img_time);

});

// ************** Slide Show End **************


// ************** Event Tables **************


// Add Table
$('#addTable').click(function() {
  var table = $('.draggable').length + 1;
  $('.eventLayout').append( $( '<div id="drag-' + table +'" class="draggable">' + table + '<button id="deleteTable-' + table +'" class="deleteTable">X</button></div>' ) );
});

// Delete Table
$(document).on('click', '.deleteTable', function () {
  
  // Delete the Div
  $(this).parent().closest('div').remove();
  
  $('.draggable').each(function(i) {
    i++;
    // Reset Table ID
    $("#" + this.id).attr('id', 'drag-' + i);

    // Reset Table Data
    $('#' + this.id).html(i + '<button id="deleteTable-' + i + '" class="deleteTable">X</button>');
  });
});

// Save Event
$('#saveEvent').click(function() {
    
  var tablesArray =[];
  
  $('.draggable').each(function() {
    
    tableID = this.id;
    xCoords = $('#' + this.id).attr('data-x');
    if (xCoords == null) {
      xCoords = 0;
    }
    yCoords = $('#' + this.id).attr('data-y');
    if (yCoords == null) {
      yCoords = 0;
    }
    tablesArray.push(
      {
        'tableID' : tableID,
        'xCoords' : xCoords,
        'yCoords' : yCoords
      }
    )

    // Need to save to DataBase
    console.log(tablesArray);
  });
});


// ************** Event Tables End **************

$('#searchEvent').click(function() {
  var date = moment(new Date($('#datepicker').val())).format('YYYY-MM-DD')

  console.log(date);
});

$( function() {
  $( '#datepicker' ).datepicker();
} );




// ************** Routing ********************


// Get references to page elements
var $submitEvent = $("#submit-event");
var $eventList = $("#event-list");
var $customerName = $("#customerName");
var $customerEmail = $("#customerEmail");
var $roomName = $("#roomName");
var $partySize = $("#partySize");

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
  }
};

// Gets new event from the db and repopulates the list
var refreshEvents = function() {
  API.getEvents().then(function(data) {
    var $events = data.map(function(event) {
      var $a = $("<a>")
        .text(event.customerName)
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
    customerName: $customerName.val().trim(),
    customerEmail: $customerEmail.val().trim(),
    roomName: $roomName.val().trim(),
    partySize: $partySize.val().trim()
  };

  if (!(event.customerName && event.customerEmail && event.roomName && event.partySize)) {
    alert("Please enter an Event Name, Description and Size!");
    return;
  }

  console.log(event);

  API.saveEvent(event).then(function() {
    refreshEvents();
  });

  $customerName.val("");
  $customerEmail.val("");
  $roomName.val("");
  $partySize.val("");
};

var deleteEvent = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteEvent(idToDelete).then(function() {
    refreshEvents();
  });
};

// Add event listeners to the submit and delete buttons
$submitEvent.on("click", addEvent);
$eventList.on("click", ".delete", deleteEvent);











// ************** Routing ********************