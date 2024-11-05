document.addEventListener("DOMContentLoaded", function() {
    const featuresLink = document.querySelector("[data-target='#featuresDropdown']");
    const companyLink = document.querySelector("[data-target='#companyDropdown']");
    const featuresArrow = document.getElementById("featuresArrow");
    const companyArrow = document.getElementById("companyArrow");
  
    featuresLink.addEventListener("click", function() {
      if (featuresArrow.src.includes("icon-arrow-down.svg")) {
        featuresArrow.src = "images/icon-arrow-up.svg";
      } else {
        featuresArrow.src = "images/icon-arrow-down.svg";
      }
    });
  
    companyLink.addEventListener("click", function() {
      if (companyArrow.src.includes("icon-arrow-down.svg")) {
        companyArrow.src = "images/icon-arrow-up.svg";
      } else {
        companyArrow.src = "images/icon-arrow-down.svg";
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const navbarMenu = document.getElementById("navbarMenu");
    const overlay = document.getElementById("overlay");
  
    // Show overlay when menu is opened
    navbarMenu.addEventListener("show.bs.collapse", function () {
      overlay.style.display = "block";
    });
  
    // Hide overlay when menu is closed
    navbarMenu.addEventListener("hide.bs.collapse", function () {
      overlay.style.display = "none";
    });
  
    // Close the menu when clicking on the overlay
    overlay.addEventListener("click", function () {
      $(navbarMenu).collapse('hide');
    });
  });
  