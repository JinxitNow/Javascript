$(document).ready(function() {
    //$("#header").load("header.html");

$( "#header" ).load( "header.html", function() {
    $.getScript("header.js")
  });
    $("#hero").load("hero.html"); 
    $("#products").load("products.html"); 
    $("#slideshow").load("slideshow.html"); 
    $("#pop-up").load("pop-up.html"); 
    $("#footer").load("footer.html");
});

