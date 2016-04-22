$(document).ready(function () {
  // Thin Layout Navigation Menu
  var pancakeButton = $('.pancake-button');
  var navMenu = $('.site-nav > ul');

  // Show the navigation list
  // when the button is tapped
  pancakeButton.click(function () {
    navMenu.show();
  });

  // Hide the navigation list
  // when it's tapped
  navMenu.click(function () {
    navMenu.hide();
  });
});
