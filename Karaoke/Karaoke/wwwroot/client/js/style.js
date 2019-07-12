$(function(){
    
      $('.room-list').owlCarousel({
          loop: false,
          autoplay: false,
          items: 1,
          margin: 20,
          autoplayHoverPause: false,
          dots: false,
          nav: true,
          navText: [
                "<i class = 'fa fa-angle-double-left'></i>Vip Room",
                "Deluxe Lounge<i class = 'fa fa-angle-double-right'></i>"
            ],
      });
     $('#datetimepicker1').datetimepicker({
         format:'DD/MM/YYYY',
     });
    $('#datetimepicker2').datetimepicker({
         format: 'LT'
     });
    
});

$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

$(function(){
    $('.slide_').owlCarousel({
        loop: false,
        autoplay: false,
        items: 1,
        autoplayHoverPause: true,
        margin: 20,
        dots: true,
        nav: true,
        navText: [
                "<i class = 'fa fa-angle-double-left'></i>",
                "<i class = 'fa fa-angle-double-right'></i>"
            ],
      });
});

