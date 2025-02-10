$(document).ready(function() {
    $("#header").load("header.html");
    $("#content").load("why-planner.html"); // Default content
    $("#footer").load("footer.html");

    // Example: Load testimonials when a button is clicked
    $(".cta-button").on("click", function(event) {
        event.preventDefault();
        $("#content").load("testimonials.html");
    });
});

$(".dropdown").hover(
    function () {
        $(this).find(".dropdown-menu").stop(true, true).slideDown(200);
    },
    function () {
        $(this).find(".dropdown-menu").stop(true, true).slideUp(200);
    }
);
