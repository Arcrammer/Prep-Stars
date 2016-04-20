$(document).ready(function () {
  // Slick Slideshow
  $('.slideshow').slick({
    dots: true,
    autoplay: true
  });

  // Dropdown Menu
  $('.dropbtn, .dropdown-content').hover(function () {
    $('.dropdown-content').css('display', 'inline');
  }, function () {
    $('.dropdown-content').css('display', 'none');
  });
});
