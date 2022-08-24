const menubtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const menuNave = document.querySelector(".menu-nav");
const menuItems = document.querySelectorAll(".menu-nav-item");
const navlink = document.querySelector(".menu-nav-link");

menubtn.addEventListener("click", (e) => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  menuNave.classList.toggle("open");

  menuItems.forEach((element) => {
    element.classList.toggle("open");
    console.log(element.childNodes);
  });

  console.log(e.target);
  console.log(navlink);
});
