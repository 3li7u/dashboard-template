// Header Menue Toggler
document
  .querySelector(".header-menu-icon")
  .addEventListener("click", (event) => {
    document.querySelector(".header-menu").classList.toggle("top-hide");
    document.querySelector(".header-menu").classList.toggle("top-100");
    document.querySelector(".header-menu").classList.toggle("opacity-0");
  });
