$(document).ready(function () {
  // Thin Layout Navigation Menu
  var pancakeButton = $('.pancake-button');
  var navMenu = $('.site-nav > ul');

  // Show the navigation list
  // when the button is tapped
  // and prevent body scrolling
  pancakeButton.click(function () {
    navMenu.show();
    $('body').css('overflow', 'hidden');
  });

  // Hide the navigation list
  // when it's tapped and
  // allow body scrolling
  if ($(window).width() <= 964) {
    navMenu.click(function (e) {
      if (e.target == this) {
        // Clicked the navigation menu
        // rather than a child
        navMenu.hide();

        $('body').css('overflow', 'visible');
      }
    });
  }
});
