

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

  var simple_slideshow    = $("#exampleSlider"),
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
    $("#" + this.id).attr("id", "drag-" + i);

    // Reset Table Data
    $("#" + this.id).html(i + '<button id="deleteTable-' + i + '" class="deleteTable">X</button>');
  });
});

// Save Event
$('#saveEvent').click(function() {
    
  var tablesArray =[];
  
  $('.draggable').each(function() {
    
    tableID = this.id;
    xCoords = $("#" + this.id).attr("data-x");
    if (xCoords == null) {
      xCoords = 0;
    }
    yCoords = $("#" + this.id).attr("data-y");
    if (yCoords == null) {
      yCoords = 0;
    }
    tablesArray.push(
      {
        "tableID" : tableID,
        "xCoords" : xCoords,
        "yCoords" : yCoords
      }
    )

    // Need to save to DataBase
    console.log(tablesArray);
  });
});


// ************** Event Tables End **************