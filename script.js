$(document).ready(function() {
    //$("#header").load("header.html");

$( "#pop-up" ).load( "pop-up.html", function() {
    $.getScript("pop-up.js")
    });
$( "#header" ).load( "header.html", function() {
    $.getScript("header.js")
  });
  $( "#hero" ).load( "hero.html", function() {
    $.getScript("hero.js")
  });
  $( "#products" ).load( "products.html", function() {
    $.getScript("products.js")
  });
  $( "#slideshow" ).load( "slideshow.html", function() {
    $.getScript("slideshow.js")
  });
  $( "#footer" ).load( "footer.html", function() {
    $.getScript("footer.js")
  });
});

