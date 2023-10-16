const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementsByClassName("nav_m");

let isNavVisible = false; // Use a boolean to track the visibility of the navigation menu

menuButton.addEventListener("click", function () {
    if (isNavVisible) {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.opacity = 0;
        }
        isNavVisible = false;
    } else {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.opacity = 1;
        }
        isNavVisible = true;
    }
});


// popup

const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}


