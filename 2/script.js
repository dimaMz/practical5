window.onload = function() {
  // Отримання посилань на кнопки
  var buttonG = document.getElementById("G");
  var buttonGr = document.getElementById("Gr");
  var buttonC = document.getElementById("C");
  var buttonCI = document.getElementById("CI");
  var buttonSH = document.getElementById("SH");

  // Додавання обробників подій для кожної кнопки
  buttonG.addEventListener("click", function() {
    alert("М. Гоголь Дивуєшся дорогоцінності мови нашої: в ній щоне звук, то подарунок, все крупно, зернисто, як самі перла.");
  });

  buttonGr.addEventListener("click", function() {
    alert("Українці — стародавній народ, а мова їхня мова багатша івсеосяжніша, ніж персидська, китайська, монгольська івсілякі інші.");
  });

  buttonC.addEventListener("click", function() {
    alert("Раби — це нація, котра не має Слова. Тому й не зможе"+
      "захистить себе.");
  });

  buttonCI.addEventListener("click", function() {
    alert("Відчуваю й усвідомлюю, яка це красива й легка українська"+
    "мова.");
  });

  buttonSH.addEventListener("click", function() {
    alert("Для всіх ти мертва і смішна, Для всіх ти бідна і нещасна,"+
    "Моя Україно пре-красна, Пісень і волі сторона.");
  });
};
