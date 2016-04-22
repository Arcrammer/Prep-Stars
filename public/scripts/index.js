$(document).ready(function () {
  // Slick Slideshow
  $('.slideshow').slick({
    dots: true,
    autoplay: true
  });

  // Dropdown Menu
  if ($(window).width() >= 964) {
      $('.dropbtn, .dropbtn a, .dropdown-content').hover(function () {
      $('.dropbtn').addClass('is-showing');
      $('.dropdown-content').css('display', 'inline');
    }, function () {
      $('.dropbtn').removeClass('is-showing');
      $('.dropdown-content').css('display', 'none');
    });
  }
});
