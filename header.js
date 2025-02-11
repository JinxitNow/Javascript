$(document).ready(function () {
    // Mobilmenu toggle
    $("#mobile-menu-btn").click(function () {
        $(".nav-links").toggleClass("open");
    });

    // Dropdown toggle (kun for mobil)
    $(".dropdown > a").click(function (e) {
        if ($(window).width() < 768) {
            e.preventDefault();
            $(this).next(".dropdown-menu").slideToggle();
        }
    });

    // Luk dropdowns ved klik udenfor
    $(document).click(function (event) {
        if (!$(event.target).closest(".dropdown").length) {
            $(".dropdown-menu").slideUp();
        }
    });
});
