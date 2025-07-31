import { createElement } from "react";
import { menuElemanlari } from "./../../resources.js";

/*
Adım 1: MenuBuilder component fonksiyonu yazmak
Stringlerden oluşan bir arrayden, bir menü oluşturmak için MenuBuilder adında bir component (fonksiyon) yazın.

MenuBuilder aşağıdaki yapıya sahip bir içerik oluşturmalı ve return etmeli:

<div class="menu">
  <ul>
    {... Adım 2 ...}
  </ul>
</div>

Adım 2: Menü ögelerini oluşturmak
MenuBuilder fonksiyonu, parametre olarak aldığı arrayin her bir elemanı için <li> oluşturmalı ve bunları yukarıdaki <ul> içine eklemeli.

Adım 3: Menüyü açıp kapatmak
index.html içindeki menu-button classına sahip elemana tıklandığında, MenuBuilder içinde oluşturduğunuz menu classına sahip elemanda 'isOpen' classı varsa çıkarmalı, yoksa eklemeli. (Yani isOpen classını toggle etmeli)

Adım 4: MenuBuilder'ı kullanmak
MenuBuilder fonksiyonu ve resouces.js dosyasından gelen menuElemanlari arrayini kullanarak oluşturduğunuz menüyü, header classına sahip elemana ekleyin.
Not 1: İlk 3 adım MenuBuilder içinde yapılmalı.
Not 2: MenuBuilder fonksiyonunda oluşturduklarınızı return etmeyi unutmayın.
*/
function MenuBuilder(menuItems) {
  const menuDiv = createElement("div");
  menuDiv.classList.add("menu");
  menuDiv.classList.remove("isOpen");
  const liste = document.createElement("ul");

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    liste.appendChild(li);
  });

  menuDiv.appendChild(liste);

  const menuButton = document.getElementsByClassName("menu-button");
  menuButton.addEventListener("click", () => {
    menuDiv.classList.toggle("isOpen");
  });

  return menuDiv;
}

const menu = MenuBuilder(menuElemanlari);
const headerElement = document.getElementsByClassName("header");
headerElement.appendChild(menu);

/*
menuElemanlari.forEach((menuItems) => {
  const menuelement = MenuBuilder(menuItems);
  headerElement.appendChild(menuelement);
});
*/
