var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = 'show-front';
const downArrow = document.getElementById("downArrow");

function changeSide() {
    var checkedRadio = radioGroup.querySelector(':checked');
    var showClass = 'show-' + checkedRadio.value;
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
}

radioGroup.addEventListener('change', changeSide);
if (downArrow) downArrow.addEventListener("click", goToPortfolio);