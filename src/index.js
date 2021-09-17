import loadMenu from "./menu";
import loadHome from "./home";
import loadContact from "./contact";
import './style.css';


// Header with restaurant title and navigation buttons
function createHeader() {
  const header = document.createElement("header");
  
  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Pizzeria La Mendola";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setButtonToActive(homeButton);
    loadHome();
  });
  
  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setButtonToActive(menuButton);
    loadMenu();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setButtonToActive(contactButton);
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function setButtonToActive(button) {
  const buttons = document.querySelectorAll(".button-nav");
  
  buttons.forEach((btn) => {
    if(btn !== this) {
      btn.classList.remove("active");
    }
  });
  button.classList.add("active");
}

// Main content
function createMain() {
  const main = document.createElement("main");
  main.id = "main";

  return main;
}

// Footer
function createFooter() {
  const footer = document.createElement("footer");

  const footerText = document.createElement("p");
  footerText.textContent = "Copyright © 2021 matic1909";

  const footerLink = document.createElement("a");
  footerLink.setAttribute("href", "https://github.com/matic1909");
  footerLink.textContent = "GitHub";

  footer.appendChild(footerText);
  footer.appendChild(footerLink);

  return footer;
}



// Add everything to the content div
function loadWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setButtonToActive(document.querySelector(".button.nav"));
  loadHome();
}

loadWebsite();

export default loadWebsite;