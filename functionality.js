let menu = document.getElementById("nav-menu");
let menuBtn = document.getElementById("menu-btn");

let menuTwo = document.getElementById("nav-menu-two");


let navBtn = document.getElementById("nav-btn");
let navBtnTwo = document.getElementById("nav-btn-two");
let navBtnThree = document.getElementById("nav-btn-three");
let navBtnFour = document.getElementById("nav-btn-four");

let toggleMenuBtn = function () {
  if (menu.style.top > "0px") {
    menu.style.top = "";
  } else {
    menu.style.top = "60px";
  }
};

menuBtn.onclick = toggleMenuBtn;

console.log(menuBtn);

navBtn.onclick = toggleMenuBtn;
navBtnTwo.onclick = toggleMenuBtn;
navBtnThree.onclick = toggleMenuBtn;
navBtnFour.onclick = toggleMenuBtn;