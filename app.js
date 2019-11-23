$(function() {

  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.height();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function() {

    scrollPos = $(this).scrollTop();

    if (scrollPos + 120 > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }

  });

  header.addClass("fixed");


  // smooth scroll
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top; 

    $("html, body").animate({
      scrollTop: elementOffset - 115
    })
  });

  
  // sort

  // $("[data-btn]").toggleClass("btn-active");
  // $("[data-sort]").toggleClass("card-active");

  $("[data-btn]").on("click", function(event) {
    event.preventDefault();

    $("[data-btn]").removeClass("btn-active");
    $("[data-sort]").removeClass("card-active");

    let atr = $(this).attr("data-btn");

    if (atr === "all") {

      $(this).addClass("btn-active");
      $("[data-sort]").addClass("card-active");

    } else {

      $(this).addClass("btn-active");
      let name = "[data-sort=" + atr + "]"
      $(name).addClass("card-active");

    }

  });



  //slider
  let slider = $("#slider");

  slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    dots: true, 
    arrows: false  });

  
});
