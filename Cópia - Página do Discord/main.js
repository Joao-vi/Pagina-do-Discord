let toggle = document.querySelector(".menu-mobile");
let collapse = document.querySelectorAll(".collapse");
let changeColor = document.querySelectorAll(".change-color");

let opDownload = document.querySelector(".download-btn");
let down = document.querySelectorAll(".down");

toggle.addEventListener("click", function () {
  collapse.forEach((col) => col.classList.toggle("collapse-toggle"));
  changeColor.forEach((col) => col.classList.toggle("black"));
});
