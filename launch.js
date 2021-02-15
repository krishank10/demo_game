document.body.innerhtml= "this is working"

$(document).ready(function() {
  // Add the active class. You can also just use :active
 $(".foo").click(function() {
   $(this).toggleClass('active');
  });
 $(".fire-away").click(function() {
   $('.foo').toggleClass('active');
   $('.fire-away').toggleClass('fired');
 });

});

