$(document).ready(function(ev) {
  var toggle = $('#ss_toggle');
  var menu = $('#ss_menu');
  var rot;

// Push the menu
  toggle.on('click', function(ev) {
    rot = parseInt($(this).data('rot')) - 180;
    if (rot == 0) {
      rot = -180;
    }
    // ver si puedo dejarlo en su sitio
    //menu.css('transform', 'rotate(' + rot + 'deg)');
    menu.css('transform', 'rotate(' + rot + 'deg)');
    if (((rot / 180) % 2 == 0 || rot>=0)) {
      //Moving in
      toggle.parent().removeClass('ss_active');
      toggle.removeClass('close');
    } else {
      //Moving Out // tocar aqui
      toggle.parent().addClass('ss_active');
      toggle.addClass('close');
    }
    $(this).data('rot', rot);
  });
  
});