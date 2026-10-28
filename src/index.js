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
    
    const homeTabButton = document.querySelector("#home");
    homeTabButton.addEventListener("click", () => displayTab("home"));
    const menuTabButton = document.querySelector("#menu");
    menuTabButton.addEventListener("click", () => displayTab("menu"));
    const contactTabButton = document.querySelector("#contact");
    contactTabButton.addEventListener("click", () => displayTab("contact"));


})();