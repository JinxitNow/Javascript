document.addEventListener("DOMContentLoaded", function () {
    const header = document.createElement("header");
    header.classList.add("main-header");

    header.innerHTML = `
        <div class="logo">
            <a href="index.html">MinSide</a>
        </div>
        <nav class="main-nav">
            <ul>
                <li><a href="about.html">Om Os</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle">Services ▼</a>
                    <ul class="dropdown-menu">
                        <li><a href="webdesign.html">Webdesign</a></li>
                        <li><a href="seo.html">SEO</a></li>
                        <li><a href="marketing.html">Marketing</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Kontakt</a></li>
            </ul>
        </nav>
        <button id="menu-toggle" class="menu-btn">☰</button>
    `;

    document.body.prepend(header);

    // Burger-menu toggle (mobil)
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector(".main-nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("open");
    });

    // Dropdown toggle (mobil og desktop)
    document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
        dropdownToggle.addEventListener("click", function (event) {
            event.preventDefault(); // Forhindrer navigation ved klik
            this.parentElement.classList.toggle("open");
        });
    });
});
