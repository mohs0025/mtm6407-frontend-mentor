document.addEventListener("DOMContentLoaded", function() {
    const featuresToggle = document.querySelector(".features-toggle");
    const companyToggle = document.querySelector(".company-toggle");
    const featuresDropdown = document.getElementById("featuresDropdown");
    const companyDropdown = document.getElementById("companyDropdown");
    const featuresArrow = document.getElementById("featuresArrow");
    const companyArrow = document.getElementById("companyArrow");

    const navbarMenu = document.getElementById("navbarMenu");
    const overlay = document.getElementById("overlay");

    // Toggle Features dropdown and arrow icon on large screens
    featuresToggle.addEventListener("click", function(event) {
        event.preventDefault();
        featuresDropdown.classList.toggle("show");
        companyDropdown.classList.remove("show");

        // Toggle arrow icon
        if (featuresDropdown.classList.contains("show")) {
            featuresArrow.src = "images/icon-arrow-up.svg";
        } else {
            featuresArrow.src = "images/icon-arrow-down.svg";
        }

        // Reset the Company arrow to down position
        companyArrow.src = "images/icon-arrow-down.svg";
    });

    // Toggle Company dropdown and arrow icon on large screens
    companyToggle.addEventListener("click", function(event) {
        event.preventDefault();
        companyDropdown.classList.toggle("show");
        featuresDropdown.classList.remove("show");

        // Toggle arrow icon
        if (companyDropdown.classList.contains("show")) {
            companyArrow.src = "images/icon-arrow-up.svg";
        } else {
            companyArrow.src = "images/icon-arrow-down.svg";
        }

        // Reset the Features arrow to down position
        featuresArrow.src = "images/icon-arrow-down.svg";
    });

    // Close dropdowns when clicking outside (large screen)
    document.addEventListener("click", function(event) {
        if (!featuresToggle.contains(event.target) && !featuresDropdown.contains(event.target)) {
            featuresDropdown.classList.remove("show");
            featuresArrow.src = "images/icon-arrow-down.svg"; // Reset arrow
        }
        if (!companyToggle.contains(event.target) && !companyDropdown.contains(event.target)) {
            companyDropdown.classList.remove("show");
            companyArrow.src = "images/icon-arrow-down.svg"; // Reset arrow
        }
    });

    // Show overlay when mobile menu is opened
    $('#navbarMenu').on('show.bs.collapse', function () {
        overlay.style.display = "block";
    });
  
    // Hide overlay when mobile menu is closed
    $('#navbarMenu').on('hide.bs.collapse', function () {
        overlay.style.display = "none";
    });

    // Close the mobile menu when clicking on the overlay
    overlay.addEventListener("click", function () {
        $('#navbarMenu').collapse('hide');
    });
});


