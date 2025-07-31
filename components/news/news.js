// Haberleri üretmek için aşağıdaki newsData objesini kullanacağız. Önce inceleyin.
import { newsData } from "./../../resources.js";

const sampleNewsItem = {
  baslik: "örnek başlık",
  tarih: "11 Kasım 2026",
  ilkParagraf: "Örnek paragraf 1",
  ikinciParagraf: "Örnek paragraf 2",
  ucuncuParagraf: "Örnek paragraf 3",
};

/*
Adım 1: NewsBuilder component fonksiyonu yazmak
Yazacağınız NewsBuilder fonksiyonu, yukarıdaki sampleNewsItem yapısındaki bir objeyi parametre olarak almalı ve alttaki yapıya sahip bir içerik oluşturup return etmeli:

<div class="article">
  <h2>{haber başlığı}</h2>
  <p class="tarih">{haber tarihi}</p>

  {üç ayrı paragraf elementi}

  <button class="expandButton">+</button>
</div>*/

/*
Adım 2:
Oluşturulan expandButton classına sahip elemana tıklandığında, içinde bulunduğu article classına sahip elemanda isOpen classı yoksa eklemeli, varsa çıkarmalı.
*/

/*
Adım 3:
newsData, sampleNewsItem yapısına benzeyen objelerden oluşan bir array ve sayfada göstermek istediğimiz haberleri içeriyor.
newsData'nın her bir elemanını NewsBuilder ile kullanmak için bir döngü yazın. Döngü her çalıştığında:
- o anki eleman ve NewsBuilder kullanılarak içerik hazırlanmalı,
- hazırlanan içerik, index.html'de bulunan articleList classına sahip elemanın içine yerleştirilmeli.


Not 1: İlk 2 adım NewsBuilder içinde yapılmalı.
Not 2: NewsBuilder fonksiyonunda oluşturduklarınızı return etmeyi unutmayın.
*/
function NewsBuilder(articleObj) {
  const art = document.createElement("div");
  art.classList.add("article");

  const title = document.createElement("h2");
  title.textContent = articleObj.baslik;
  art.appendChild(title);

  const date = document.createElement("p");
  date.classList.add("date");
  date.textContent = articleObj.tarih;
  art.appendChild(date);

  const paragraf1 = document.createElement("p");
  paragraf1.textContent = articleObj.ilkParagraf;
  art.appendChild(paragraf1);

  const paragraf2 = document.createElement("p");
  paragraf2.textContent = articleObj.ikinciParagraf;
  art.appendChild(paragraf2);

  const paragraf3 = document.createElement("p");
  paragraf3.textContent = articleObj.ucuncuParagraf;
  art.appendChild(paragraf3);

  const button = document.createElement("button");
  button.classList.add("expandButton");
  art.appendChild(button);
  button.textContent = "+";

  button.addEventListener("click", () => {
    article.classList.toggle("isOpen");
  });
  return art;
}

const articleList = document.querySelector(".articleList");

newsData.forEach((articleObj) => {
  const articleElement = NewsBuilder(articleObj);
  articleList.appendChild(articleElement);
});
