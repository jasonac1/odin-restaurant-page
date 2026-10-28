import "./styles.css";
import displayHomeTab from "./home.js";
import displayMenuTab from "./menu.js";
import displayContactTab from "./contact.js";

const displayController = (() => {
    const mainDiv = document.querySelector("main");
 
    function displayTab(tab) {
        mainDiv.textContent = "";
        if (tab === "home") displayHomeTab();
        if (tab === "menu") displayMenuTab();
        if (tab === "contact") displayContactTab();
    }
    
    function highlightTab(tab) {
        homeTabButton.classList.remove("current");
        menuTabButton.classList.remove("current");
        contactTabButton.classList.remove("current");

        document.querySelector(`#${tab}`).classList.add("current");
    }

    const homeTabButton = document.querySelector("#home");
    const menuTabButton = document.querySelector("#menu");
    const contactTabButton = document.querySelector("#contact"); 
    
    homeTabButton.addEventListener("click", () => displayTab("home"));
    menuTabButton.addEventListener("click", () => displayTab("menu"));
    contactTabButton.addEventListener("click", () => displayTab("contact"));
    
    homeTabButton.addEventListener("click", () => highlightTab("home"));
    menuTabButton.addEventListener("click", () => highlightTab("menu"));
    contactTabButton.addEventListener("click", () => highlightTab("contact"))

    displayTab("home");

})();