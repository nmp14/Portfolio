const cube = document.querySelector('.cube');
const downArrow = document.getElementById("downArrow");
// navbar opener icon
const navItems = document.querySelectorAll("nav i");
// portfolio
const port = document.getElementById("port");
// Nav page container
const navPage = document.getElementById("navPage");
// Nav bar btns and link events
const navCloseBtns = document.querySelectorAll(".nav-close");
const home = document.getElementById("home");
const aboutMePage = document.getElementById("aboutMePage");
const resumePage = document.getElementById("resumePage");

let currentClass = 'show-front';

// const defaultFace = () => {
//     const showClass = currentClass;
//     cube.classList.add(showClass);
// }
// defaultFace();

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

const goToAboutMe = (e) => {
    e.preventDefault();
    e.stopPropagation();

    cube.classList.remove(currentClass);
    const showClass = "show-left";
    cube.classList.add(showClass);
    currentClass = "show-left"

    if (!navPage.classList.contains("hidden")) {
        navPage.classList.add("hidden");
    }
}

const goToResume = e => {
    e.preventDefault();
    e.stopPropagation();

    cube.classList.remove(currentClass);
    const showClass = "show-right";
    cube.classList.add(showClass);
    currentClass = "show-right"

    if (!navPage.classList.contains("hidden")) {
        navPage.classList.add("hidden");
    }
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
if (aboutMePage) aboutMePage.addEventListener("click", goToAboutMe);
if (resumePage) resumePage.addEventListener("click", goToResume);