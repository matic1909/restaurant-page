import PizzaChef from "./img/pizza-chef.jpg";

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const image = new Image();
  image.src = PizzaChef;
  image.alt = "Chef";

  home.appendChild(createParagraph("Enjoy authentic Italian Pizza"));
  home.appendChild(createParagraph("Family owned since 1921"));
  home.appendChild(image);
  home.appendChild(createParagraph("Dine in or order online!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.appendChild(createHome());
}

export default loadHome;