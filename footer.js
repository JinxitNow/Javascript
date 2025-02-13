$(document).ready(function() {
    let backToTop = {
        button: $("#backToTopBtn"),
        scrollThreshold: 100, // Når man scroller 100px, vises knappen
        steps: 20, // Antal trin i smooth scroll-effekten
        alertMessages: ["Back to the top!", "See you at the top!", "Back to the top we go!"], // Tilfældige beskeder
    
        init() {
            $(window).on("scroll", () => {
                if ($(document).scrollTop() > this.scrollThreshold) {
                    this.button.show();
                } else {
                    this.button.hide();
                }
            });

            this.button.on("click", () => {
                const messageIndex = Math.floor(Math.random() * this.alertMessages.length);
                alert(this.alertMessages[messageIndex]);
                this.smoothScrollToTop();
            });
        },
    
        smoothScrollToTop() {
            let position = $(document).scrollTop();
            const step = position / this.steps; 
    
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
    $("#valuta").change(() => {
        const selected = $("#valuta option:selected").text();
        $("#selectedCurrency").text("Valgt valuta: " + selected);
    });
});
