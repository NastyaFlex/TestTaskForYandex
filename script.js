let textStagesCarouselFirstLine = document.getElementById('text-stages-carousel-first-line');
let textStagesCarouselSecondLine = document.getElementById('text-stages-carousel-second-line');
let circleWhite = document.getElementById('circle-white-first-line');

let textStages = ['Строительство железнодорожной магистрали Москва-Васюки ','Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет', 'Строительство дворца для турнира', 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов', 'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн'];
textStagesCarouselFirstLine.innerHTML = textStages[0] 
let i = 0;

let textStageseSecondLine = ['Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов',' ', 'Размещение гаражей для гостевого автотранспорта', ' ', ' '];
textStagesCarouselSecondLine.innerHTML = textStageseSecondLine[0];
let a = 0;

function next() {
    i++
    if (i == textStages.length) {
        i = 0;
    }
    textStagesCarouselFirstLine.innerHTML = textStages[i];

    a++
    if (a == textStageseSecondLine.length) {
        a = 0;
    }
    textStagesCarouselSecondLine.innerHTML = textStageseSecondLine[i];

    //if (i == 2) {
    //    circleWhite.style.visibility = "hidden";
    //} else {
    //    circleWhite.style.visibility = "visible";
    //}
}
function back() {
    i--
    if (i == -1) {
        i = textStages.length - 1;
    }
    textStagesCarouselFirstLine.innerHTML = textStages[i];

    //if (i == 2) {
    //    circleWhite.style.visibility = "hidden";
    //} else {
    //    circleWhite.style.visibility = "visible";
    //}
}