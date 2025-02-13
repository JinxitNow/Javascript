$(document).ready(function() {
    let backToTop = {
        button: $("#backToTopBtn"),
        scrollThreshold: 100, // Når man scroller 100px, vises knappen
        steps: 20, // Antal trin i smooth scroll-effekten
        alertMessages: ["Back to the top!", "See you at the top!", "Back to the top we go!"], // Tilfældige beskeder
    
        init() {
            console.log("Initializing Back to Top button...");
            
            $(window).on("scroll", () => {
                const scrollPosition = $(document).scrollTop();
                console.log("Scroll position:", scrollPosition);
                
                if (scrollPosition > this.scrollThreshold) {
                    this.button.show();
                    console.log("Button is visible");
                } else {
                    this.button.hide();
                    console.log("Button is hidden");
                }
            });

            this.button.on("click", () => {
                const messageIndex = Math.floor(Math.random() * this.alertMessages.length);
                console.log("Random message index:", messageIndex);
                alert(this.alertMessages[messageIndex]);
                this.smoothScrollToTop();
            });
        },
    
        smoothScrollToTop() {
            let position = $(document).scrollTop();
            const step = position / this.steps; 
            console.log("Starting smooth scroll, initial position:", position, "step size:", step);
    
            let interval = setInterval(() => {
                if (position > 0) {
                    position -= step;
                    $("html, body").scrollTop(position);
                    console.log("Scrolling, current position:", position);
                } else {
                    clearInterval(interval);
                    console.log("Smooth scroll complete.");
                }
            }, 10);
        }
    };

    // Start objektet
    backToTop.init();

    // Drop down i footeren
    $("#valuta").change(() => {
        const selected = $("#valuta option:selected").text();
        console.log("Selected currency:", selected);
        $("#selectedCurrency").text("Valgt valuta: " + selected);
    });
});
