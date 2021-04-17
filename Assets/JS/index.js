const cube = document.querySelector('.cube');
let currentClass = 'show-front';
const downArrow = document.getElementById("downArrow");
const navItems = document.querySelectorAll("nav");
const port = document.getElementById("port");
const navPage = document.getElementById("navPage");
const navCloseBtns = document.querySelectorAll(".nav-close");
const home = document.getElementById("home");

// Go to portfolio page when down arrow is clicked
const goToPortfolio = (e) => {
    e.preventDefault();
    e.stopPropagation();
    cube.classList.remove(currentClass);
    const showClass = "show-bottom";
    cube.classList.add(showClass);
    currentClass = "show-bottom"

    if (!navPage.classList.contains("hidden")) {
        navPage.classList.add("hidden");
    }
}
// Go to front of cube (home)
const goHome = (e) => {
    e.preventDefault();
    e.stopPropagation();
    cube.classList.remove(currentClass);
    const showClass = "show-front";
    cube.classList.add(showClass);
    currentClass = "show-front"

    if (!navPage.classList.contains("hidden")) {
        navPage.classList.add("hidden");
    }
}

// Open navbar menu
const openNavBar = (e) => {
    e.preventDefault()
    e.stopPropagation();

    navPage.classList.remove("hidden");
    navPage.classList.add("slideIn");
}
// Close navbar menu
const closeNavBar = (e) => {
    e.preventDefault();

    navPage.classList.add("slideOut");
    navPage.classList.remove("slideIn");
    setTimeout(() => {
        navPage.classList.add("hidden");
        navPage.classList.remove("slideOut");
    }, 700)
}

if (downArrow) downArrow.addEventListener("click", goToPortfolio);
if (navItems) {
    navItems.forEach(navItem => navItem.addEventListener("click", openNavBar));
}
if (port) port.addEventListener("click", goToPortfolio);
if (navCloseBtns) {
    navCloseBtns.forEach(btn => btn.addEventListener("click", closeNavBar));
}
if (home) {
    home.addEventListener("click", goHome);
}