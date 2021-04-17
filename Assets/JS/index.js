var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = 'show-front';
const downArrow = document.getElementById("downArrow");
const navItems = document.querySelectorAll("nav");
const port = document.getElementById("port");
const navPage = document.getElementById("navPage");
const navCloseBtns = document.querySelectorAll(".nav-close");

function changeSide() {
    if (radioGroup) var checkedRadio = radioGroup.querySelector(':checked');
    const showClass = radioGroup ? 'show-' + checkedRadio.value : "show-front"
    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
    console.log(currentClass);
}
// set initial side
changeSide();

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

if (radioGroup) radioGroup.addEventListener('change', changeSide);
if (downArrow) downArrow.addEventListener("click", goToPortfolio);
if (navItems) {
    navItems.forEach(navItem => navItem.addEventListener("click", openNavBar));
}
if (port) port.addEventListener("click", goToPortfolio);
if (navCloseBtns) {
    navCloseBtns.forEach(btn => btn.addEventListener("click", closeNavBar));
}