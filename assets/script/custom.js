document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const crossIcon = document.querySelector(".cross");

    toggleButton.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    crossIcon.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });
});