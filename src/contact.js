function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = '📞 123 456 789';

  const adress = document.createElement("p");
  adress.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';

  contact.appendChild(phoneNumber);
  contact.appendChild(adress);
  
  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  main.appendChild(createContact());
}

export default loadContact;