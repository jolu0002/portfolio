// BURGERMENU

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".burger.active");
const overlay = document.querySelector(".blurry");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("body-blur");
}

menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}


