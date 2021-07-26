//Counter Plugin
$(function(){
  $('.count-num').rCounter({
    duration: 30
  });
});


// Menu list isotope and filter
$(window).on('load', function() {
  var menuIsotope = $('.menu-container').isotope({
    itemSelector: '.menu-item',
    layoutMode: 'fitRows'
  });

  $('#menu-flters li').on('click', function() {
    $("#menu-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    menuIsotope.isotope({
      filter: $(this).data('filter')
    });
    aos_init();
  });
});

//Animate On Scroll
AOS.init({
  offset: 280,
  duration: 600,
});
 