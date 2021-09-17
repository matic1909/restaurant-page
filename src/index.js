import './style.css';
import PizzaChef from "./img/pizza-chef.jpg"

const content = document.getElementById("content");

// Header with restaurant title and navigation buttons
const header = document.createElement("header");

const restaurantName = document.createElement("h1");
restaurantName.classList.add("restaurant-name");
restaurantName.textContent = "Pizzeria La Mendola";

const nav = document.createElement("nav");
const buttons = ["Home", "Menu", "Contact"];
buttons.forEach((btn) => {
  const button = document.createElement("button");
  button.classList.add("button-nav");
  button.textContent = btn;
  nav.appendChild(button);
})

header.appendChild(restaurantName);
header.appendChild(nav);

// Main content
const main = document.createElement("main");
main.id = "main";

const mainContent = document.createElement("div");
mainContent.classList.add("main-content");

const firstLine = document.createElement("p");
firstLine.textContent = "Enjoy authentic Italian Pizza";
const secondLine = document.createElement("p");
secondLine.textContent = "Family owned since 1921";

const image = new Image();
image.src = PizzaChef;

const bottom = document.createElement("p");
bottom.textContent = "Dine in or order online!";

mainContent.appendChild(firstLine);
mainContent.appendChild(secondLine);
mainContent.appendChild(image);
mainContent.appendChild(bottom);
main.appendChild(mainContent);


// Footer
const footer = document.createElement("footer");

const footerText = document.createElement("p");
footerText.textContent = "Copyright © 2021 matic1909";

const footerLink = document.createElement("a");
footerLink.setAttribute("href", "https://github.com/matic1909");
footerLink.textContent = "GitHub";

footer.appendChild(footerText);
footer.appendChild(footerLink);

// Add everything to the content div
content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);