/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

var quotes = [
    [
        "Гении узнают ответ раньше, чем вопрос",

        "Игры разума (A Beautiful Mind)"
    ],

    [
        "Ответ существовал, но формулировке не поддавался",

        "Макс Фрай"
    ],

    [
        "Не задавай вопросов — не услышишь лжи.",

        "Стивен Кинг. 11/22/63"
    ],

    [
        "Просто выпей пивка",

        "Твой друг"
    ],

    [
        "Понимаете, главное в жизни – не получать ответы. Главное – выяснить, в чем сегодня заключаются ваши вопросы. Если вы правильно сформулируете вопросы, ответы непременно найдутся.",

        "Джеймс Редфилд"
    ],

    [
        "Отбросьте всё невозможное, то, что останется, и будет ответом, каким бы невероятным он ни казался.",

        "Артур Конан Дойл"
    ],

    [
        "Когда ты правильно задаёшь вопрос, то он сам по себе является ответом",

        "Ричард Бах"
    ],

    [
        "Никакого ответа — тоже ответ",

        "Шолом-Алейхем"
    ],

    [
        "Каков ответ на 99 вопросов из 100? — Деньги!",

        "Ванильное небо (Vanilla Sky)"
    ],

    [
        "Иногда в музыке находятся ответы, которые ищешь, даже когда об этом и не думаешь.",

        "Алессандро Д'Авения"
    ]

];

document.getElementById("next-quote").addEventListener("click", function() {
   
    // выбираем случайную фразу из массива
    // данные в массив могут попадать и через api
    var quote = quotes[ Math.floor( Math.random() * quotes.length ) ];

    // цитата
    var phrase = document.querySelector("#phrase");
   
    // автор
    var author = document.querySelector("#author");

    phrase.innerHTML = quote[0];
    author.innerHTML = quote[1];  
});





function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}