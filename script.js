$(document).ready(function() {
    $("#header").load("header.html");
    $("#nav").load("navigation.html");
    $("#content").load("why-planner.html"); // Default content
    $("#footer").load("footer.html");

    // Example: Load testimonials when a button is clicked
    $(".cta-button").on("click", function(event) {
        event.preventDefault();
        $("#content").load("testimonials.html");
    });
});

