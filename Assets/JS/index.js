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
// Query project images
const getProjectInfo = document.querySelectorAll(".portfolio .card .card-body img");

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

// Project class constructor
class Project {
    constructor(title, description, techArr, url, role) {
        this.title = title;
        this.description = description;
        this.tech = [...techArr];
        this.url = url;
        this.role = role;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getUrl() {
        return this.url;
    }
}

// Function to determine which project to display
const getProject = function (e) {
    e.preventDefault();

    var title;
    var description;
    var techArr;
    var url;
    var role;

    switch (e.target.getAttribute("data-title")) {
        case "moods":
            title = "#Moods";
            description = `#Moods is a social media based platform focused on sharing music and your thoughts on certain songs. The app will feature the ability to listen to music and add songs to playlists. You will also be able to write note entries almost like diary entries or posts on social media. The notes will be able to be linked to a song of your choice if you choose to so when you later look at notes, you can listen to that song again easily. You can add friends and view their posts as well as chat (direct messages currently in developement).`;
            techArr = ["JavaScript", "Handlebars.js", "Express.js", "Sequelize ORM", "Bulma CSS", "Bcrypt", "Socket.io", "Express-sessions"];
            url = "https://lychee-sundae-06249.herokuapp.com/";
            role = "Responsible for creating data organization and flow, all social media aspects, and overall CSS design."
            displayProject(title, description, techArr, url, role);
            break;
        case "stiegman-lab":
            title = "Stiegman Lab Database";
            description = `Site and database for the Stiegman Lab at Florida State University (FSU) Chemistry Department. Requires current member to register new accounts (guests cant register themselves).

            Update: Only currently will be used as a database for lab chemicals. Informational site will be deployed through university (WIP).`
            techArr = ["JavaScript, Handlebars.js", "Sequelize"];
            url = "https://stiegman-lab.herokuapp.com/"
            displayProject(title, description, techArr, url, role);
            break;
        case "budge-grub":
            title = "BudgeGrub";
            description = `An app to help you list budget as well as find restaurants suitable for your price range! Simply enter your monthly net income and current location (or a location you may wish to move to). You will be provided an expense form that will allow you to add an expense to a list that will be deducted from your budget. At any time after you provide an income and location, you can request a list of a few restaurants near that location.`;
            techArr = ["JavaScript", "Bootstrap CSS", "Anime.css", "Jquery", "Local storage", "Yelp API"];
            url = "https://www.youtube.com/watch?v=RPriWCY9QIw";
            role = "Responsible for retrieving form input, updating budget and querying the Yelp API with current budget info."
            displayProject(title, description, techArr, url, role);
            break;
        case "ani-moves":
            title = "AniMoves";
            description = `WIP clone of myanimelist.org for keeping track of my own anime and movies all in one app. Can register and add animes / movies that are in the database to a favorite lists or to watch list. Primarily for practice with Mongoose ODM.
            
            Not deloyed yet`;
            techArr = ["JavaScript", "Mongoose ODM", "Express.js", "Particles.js"];
            url = "#";
            displayProject(title, description, techArr, url, role);
            break;
        case "blog-posts":
            title = "BlogPosts";
            description = "A webapp for creating and reading otherss blog posts. You can register/login to create your own posts or comment on other user posts. A guest user can still read through blogs but won't be able to comment.";
            techArr = ["JavaScript", "Sequelize", "Express.js", "Bulma CSS"];
            url = "https://blog-posts-nmp14.herokuapp.com/";
            displayProject(title, description, techArr, url, role);
            break;
    }
}

// Display selected project info
const displayProject = (title, description, techArr, url, role = "Individual project") => {
    const ProjectToDisplay = new Project(title, description, techArr, url, role);
    console.log(ProjectToDisplay);
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

if (getProjectInfo) {
    getProjectInfo.forEach(project => project.addEventListener("click", getProject));
}