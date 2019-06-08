$(function () {
  function BannerSlide(name, menuYloc) {
    if ($(window).width() > 1100) {
      menuYloc = parseInt($(name).css("top").substring(0, $(name).css("top").indexOf("px")));
      $(window).scroll(function () {
        var offset = menuYloc + $(document).scrollTop() + "px";
        $(name).animate({ top: offset }, { duration: 500, queue: false });
      });
    }
    else {
      $(name).hide();
    }
  }

  $(document).ready(function () {
    $('.marquee').marquee();
    $(".nav-left li").hover(function () {
      $(this).find("ul").stop(true, true).fadeIn("fast");
    }, function () {
      $(this).find("ul").stop(true, true).fadeOut("fast");
    });

    $('.box-partner').jCarouselLite({ 
      visible: 7, 
      start: 0, 
      auto: 2000, 
      speed: 1000, 
      pauseOnHover: true, 
      easing: '' 
    });

    $("#box-news-slide").bxSlider({
      controls: false,
      adaptiveHeight: true,
      auto: true,
      pause: 8000
    });

    $("#slider").nivoSlider({
      controlNav: false,
      pauseTime: 8000
    });

  });

  ddsmoothmenu.init({
    mainmenuid: "nav_top", //menu DIV id
    orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
    classname: 'ddsmoothmenu', //class added to menu's outer DIV
    //customtheme: ["#1c5a80", "#18374a"],
    // contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
  });
});
