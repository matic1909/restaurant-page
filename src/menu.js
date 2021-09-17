function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Margherita",
      "Tomato sauce, Mozarella"
    )
  );

  menu.appendChild(
    createMenuItem(
      "Romana",
      "Tomato sauce, Mozarella, Mushrooms, Ham"
    )
  );

  menu.appendChild(
    createMenuItem(
      "La Bella",
      "Tomato sauce, Mozarella, Salami, Ham, Garlic, Basil"
    )
  );

  return menu;
}

function createMenuItem(name, desc) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const itemName = document.createElement("p");
  itemName.textContent = name;

  const description = document.createElement("p");
  description.textContent = desc;

  menuItem.appendChild(itemName);
  menuItem.appendChild(description);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.appendChild(createMenu());
}

export default loadMenu;