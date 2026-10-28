import MannCoLogo from "./images/mannco.png";

import { createEl } from "./utility.js";

export default function() {    
    const contactDiv = createEl("div");
    contactDiv.classList.add("contact");
    
    const contactImg = createEl("img");
    contactImg.src = MannCoLogo;
    contactImg.alt = "Mann Co logo";
    contactImg.width = "800";

    const contactP = createEl("p");
    contactP.classList.add("phone");
    contactP.textContent = "800-555-0100";

    contactDiv.appendChild(contactImg);
    contactDiv.appendChild(contactP);

    document.querySelector("main").appendChild(contactDiv);
}