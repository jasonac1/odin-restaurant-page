import Sandvich from "./images/sandvich.png";
import HolyMackerel from "./images/holy-mackerel.png";
import Bread from "./images/bread.png";
import Bonk from "./images/bonk.png";
import Scrumpy from "./images/bottle.png";
import Jarate from "./images/jarate.png";

import { createEl } from "./utility.js";

export default function() {
    const menuDiv = createEl("div");
    menuDiv.classList.add("menu");
    
    const mainDishesH1 = createEl("h1");
    mainDishesH1.textContent = "Main Dishes";
    
    const mainDishesDiv = createEl("div");
    mainDishesDiv.classList.add("main-dishes");
    
    const beveragesH1 = createEl("h1");
    beveragesH1.textContent = "Beverages";
    
    const beveragesDiv = createEl("div");
    beveragesDiv.classList.add("beverages");
    
    const menuItemCount = 6;
    const menuData = [
        {
            src: Sandvich,
            alt: "sandwich",
            name: "Sandvich",
        },
        {
            src: HolyMackerel,
            alt: "holy mackerel",
            name: "Holy Mackerel",
        },
        {
            src: Bread,
            alt: "bread",
            name: "Bread",
        },
        {
            src: Bonk,
            alt: "can of bonk atomic punch soda",
            name: "Bonk! Atomic Punch",
        },
        {
            src: Scrumpy,
            alt: "bottle of rum",
            name: "Scrumpy",
        },
        {
            src: Jarate,
            alt: "jarate",
            name: "Jarate",
        },
    ];
    const [ menuItemDivs, menuItemImgs, menuItemH2s ] = (() => {
        const divs = [];
        const imgs = [];
        const h2s = [];
        
        for(let i = 0; i < menuItemCount; i++) {
            const div = createEl("div");
            div.classList.add("menu-item"); 
            divs.push(div);

            const img = createEl("img");
            img.src = menuData[i].src;
            img.alt = menuData[i].alt; 
            imgs.push(img);

            const h2 = createEl("h2");
            h2.textContent = menuData[i].name;
            h2s.push(h2);
        }
        
        return [ divs, imgs, h2s ];
    })();

    menuDiv.appendChild(mainDishesH1);

    menuDiv.appendChild(mainDishesDiv);
    for (let i = 0; i < menuItemCount / 2; i++) {
        mainDishesDiv.appendChild(menuItemDivs[i]);   
        menuItemDivs[i].appendChild(menuItemImgs[i]);
        menuItemDivs[i].appendChild(menuItemH2s[i]);
    }

    menuDiv.appendChild(beveragesH1);

    menuDiv.appendChild(beveragesDiv);
    for (let i = menuItemCount / 2; i < menuItemCount; i++) {
        beveragesDiv.appendChild(menuItemDivs[i]);   
        menuItemDivs[i].appendChild(menuItemImgs[i]);
        menuItemDivs[i].appendChild(menuItemH2s[i]);
    }
    
    document.querySelector("main").appendChild(menuDiv);
}