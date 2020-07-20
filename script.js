// script for carousel

$(document).ready(function () {
  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".carousel-item1").click(function () {
    $("#myCarousel").carousel(0);
  });
  $(".carousel-item2").click(function () {
    $("#myCarousel").carousel(1);
  });
  $(".carousel-item3").click(function () {
    $("#myCarousel").carousel(2);
  });

  // Enable Carousel Controls
  $(".left").click(function () {
    $("#myCarousel").carousel("prev");
    console.log("prev");
  });
  $(".right").click(function () {
    $("#myCarousel").carousel("next");
    console.log("next");
  });
});
