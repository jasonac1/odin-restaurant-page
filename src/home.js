import Sandvich from "./images/sandvich.png";
import { createEl } from "./utility.js";

export default function() {
    const homeDiv = createEl("div");
    homeDiv.classList.add("home");

    const heroDiv = createEl("div");
    heroDiv.classList.add("hero");

    const heroTextDiv = createEl("div");
    heroTextDiv.classList.add("hero-text");
    const heroTextH1 = createEl("h1");
    heroTextH1.textContent = "Dustbowl Diner";
    const heroTextH2 = createEl("h2");
    heroTextH2.textContent = "Mann (Co.) Made Meals";
    
    const heroImgDiv = createEl("div");
    heroImgDiv.classList.add("hero-img");
    const heroImgImg = createEl("img");
    heroImgImg.src = Sandvich;   
    heroImgImg.alt = "sandwich";   
    heroImgImg.width = "300";   
    
    const reviewsDiv = createEl("div");
    reviewsDiv.classList.add("reviews");
    const reviewsH1 = createEl("h1");
    reviewsH1.textContent = "Reviews";
    const reviewDivs = [ createEl("div"), createEl("div"), createEl("div") ];
    reviewDivs.forEach(div => { div.classList.add("review") } );
    
    const reviewData = [
        {
            quote: "Sandvich make me strong.",
            author: "Heavy Weapons Guy",
        },
        {
            quote: "That's good scrumpeh.",
            author: "Demolitions Man",
        },
        {
            quote: "I have done nothing but teleport bread for three days.",
            author: "Jane Doe",
        },
    ];

    const quotePs = [ createEl("p"), createEl("p"), createEl("p") ];
    quotePs.forEach((p, index) => {
        p.classList.add("quote");
        p.textContent = reviewData[index].quote;
    } );
    
    
    const authorPs = [ createEl("p"), createEl("p"), createEl("p") ];
    authorPs.forEach((p, index) => {
        p.classList.add("author");
        p.textContent = reviewData[index].author;
    } );

    homeDiv.appendChild(heroDiv);
    
    heroDiv.appendChild(heroTextDiv);
    heroTextDiv.appendChild(heroTextH1);
    heroTextDiv.appendChild(heroTextH2);
    
    heroDiv.appendChild(heroImgDiv);  
    heroImgDiv.appendChild(heroImgImg);  
    
    homeDiv.appendChild(reviewsDiv);
    
    reviewsDiv.appendChild(reviewsH1);
    reviewDivs.forEach((div, index) => {
        reviewsDiv.appendChild(div);
        div.appendChild(quotePs[index]);
        div.appendChild(authorPs[index]);
    });

    document.querySelector("main").appendChild(homeDiv);
};