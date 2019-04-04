

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
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener
    // call this function on every dragend event

    // onend: function (event) {
    //   var textEl = event.target.querySelector('p');

    //   textEl && (textEl.textContent =
    //     'moved a distance of '
    //     + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
    //                  Math.pow(event.pageY - event.y0, 2) | 0))
    //         .toFixed(2) + 'px');
    // }
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

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

// ************** Draggable End **************




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

$('#addTable' ).click(function() {
    var count = $('.draggable').length + 1;
    $( '.container' ).append( $( '<div id="drag-' + count +'" class="draggable">Table</div>' ) );
});

$('#saveEvent' ).click(function() {
    
});