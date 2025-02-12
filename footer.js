$(document).ready(function() {
    let backToTop = {
        button: $("#backToTopBtn"),
        scrollThreshold: 100, // Når man scroller 100px, vises knappen
        steps: 20, // Antal trin i smooth scroll-effekten
        alertMessages: ["Back to the top!", "See you at the top!", "Back to the top we go!"], // Tilfældige beskeder
    
        init: function () {
            let self = this;
    
            $(window).on("scroll", function() {
                if ($(document).scrollTop() > self.scrollThreshold) {
                    self.button.show();
                } else {
                    self.button.hide();
                }
            });
    
            this.button.on("click", function() {
                let messageIndex = Math.floor(Math.random() * self.alertMessages.length);
                alert(self.alertMessages[messageIndex]);
                self.smoothScrollToTop();
            });
        },
    
        smoothScrollToTop: function () {
            let position = $(document).scrollTop();
            let step = position / this.steps;
    
            let interval = setInterval(() => {
                if (position > 0) {
                    position -= step;
                    $("html, body").scrollTop(position);
                } else {
                    clearInterval(interval);
                }
            }, 10);
        }
    };

    // Start objektet
    backToTop.init();

    // Drop down i footeren
    $("#valuta").change(function() {
        var selected = $("#valuta option:selected").text();
        $("#selectedCurrency").text("Valgt valuta: " + selected);
    });
});
