// mobile menu btn
const menuBtn = document.querySelector(".menu-btn");
// search btn
const searchBtn = document.querySelector(".search-btn");
// all sidebar content
const sideItems = document.querySelectorAll(".list-box");
// mobile navigation
const mobileMenu = document.createElement("div");
mobileMenu.classList.add("mobile-menu");
document.body.appendChild(mobileMenu);

const mobileMenuClose = document.createElement("button");
mobileMenuClose.classList.add("mobile-menu-close");
mobileMenuClose.innerHTML = `<i class="bi bi-arrow-left"></i>`;
mobileMenu.prepend(mobileMenuClose);

const mobileMenuOverlay = document.createElement("div");
mobileMenuOverlay.classList.add("mobile-menu-overlay");
document.body.appendChild(mobileMenuOverlay);

const searchBox = document.querySelector(".nav-menu-search");
const searchBoxContainer = document.createElement("div");
searchBoxContainer.classList.add("mobile-search-box");
searchBoxContainer.append(searchBox.cloneNode(true));
document.body.appendChild(searchBoxContainer);

const searchBoxOverlay = document.createElement("div");
searchBoxOverlay.classList.add("mobile-search-box-overlay");
document.body.append(searchBoxOverlay);

// clone all side item and add append to the body
sideItems.forEach((item) => {
  const clone = item.cloneNode(true);
  mobileMenu.append(clone);
});

// open sidebar
menuBtn.addEventListener("click", () => {
  document.body.classList.add("mobile-menu-active");
});

// close sidebar
mobileMenuClose.addEventListener("click", () => {
  document.body.classList.remove("mobile-menu-active");
});

mobileMenuOverlay.addEventListener("click", () => {
  document.body.classList.remove("mobile-menu-active");
});

// open mobile search box
searchBtn.addEventListener("click", () => {
  document.body.classList.add("mobile-search-active");
});

// close mobile search box
searchBoxOverlay.addEventListener("click", () => {
  document.body.classList.remove("mobile-search-active");
});

// show post menu
function handleMenu(elm) {
  const menus = document.getElementsByClassName("post-menu");
  const thisMenu = elm.nextElementSibling;

  if (!thisMenu.classList.contains("open")) {
    let i;
    for (i = 0; i < menus.length; i++) {
      menus[i].classList.remove("open");
    }
    thisMenu.classList.add("open");
  }
}
// hide post menu
window.onclick = function (event) {
  if (!event.target.matches(".post-menu-btn")) {
    var dropdowns = document.getElementsByClassName("post-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("open")) {
        openDropdown.classList.remove("open");
      }
    }
  }
};
