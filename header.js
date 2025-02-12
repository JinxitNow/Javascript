document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");

    // Menu data
    const menuItems = [
        { name: "New Arrivals", link: "#" },
        { name: "Best Sellers", link: "#", dropdown: [
            { name: "Panda Classic - 3 Month Daily Planner", link: "#" },
            { name: "Panda Pro - 6 Month Daily Planner", link: "#" },
            { name: "Panda Planner - 12 Month Weekly Planner", link: "#" }
        ] },
        { name: "Planners", link: "#", dropdown: [
            { name: "Classic Productivity Planners", link: "#" },
            { name: "Business Planners", link: "#" },
            { name: "Diet & Fitness Planners", link: "#" },
            { name: "Student Planners", link: "#" }
        ]},
        { name: "More Products", link: "#", dropdown: [
            { name: "Bundles", link: "#" },
            { name: "Password Keeper", link: "#" },
            { name: "Apparel", link: "#" },
            { name: "Accessories", link: "#" },
            { name: "Digital Course", link: "#" },
            { name: "Gift Card", link: "#" }
        ]},
        { name: "About Us", link: "#" }
    ];

    function generateMenu() {
        navLinks.innerHTML = ""; // Rens menuen først
        menuItems.forEach(item => {
            const li = document.createElement("li");

            if (item.dropdown) {
                li.classList.add("dropdown");
                const a = document.createElement("a");
                a.href = item.link;
                a.textContent = item.name;
                li.appendChild(a);

                const dropdownMenu = document.createElement("ul");
                dropdownMenu.classList.add("dropdown-menu");

                item.dropdown.forEach(subItem => {
                    const subLi = document.createElement("li");
                    const subA = document.createElement("a");
                    subA.href = subItem.link;
                    subA.textContent = subItem.name;
                    subLi.appendChild(subA);
                    dropdownMenu.appendChild(subLi);
                });

                li.appendChild(dropdownMenu);
            } else {
                const a = document.createElement("a");
                a.href = item.link;
                a.textContent = item.name;
                li.appendChild(a);
            }

            navLinks.appendChild(li);
        });
    }

    // Generer menu ved load
    generateMenu();
});
