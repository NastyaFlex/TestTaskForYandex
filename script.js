let buttonNext = document.getElementById('button-next');

let buttonBack = document.getElementById('button-back');
buttonBack.src = "img/button-left-disable.png";

let textStagesCarouselFirstLine = document.getElementById('text-stages-carousel-first-line');
let textStagesCarouselSecondLine = document.getElementById('text-stages-carousel-second-line');

let circleWhiteFirstLine = document.getElementById('circle-white-first-line');
let circleWhiteSecondLine = document.getElementById('circle-white-second-line');

let textStages = ['Строительство железнодорожной магистрали Москва-Васюки ','Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет', 'Строительство дворца для турнира', 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов', 'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн'];
textStagesCarouselFirstLine.innerHTML = textStages[0] 
let i = 0;

let textStageseSecondLine = ['Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов',' ', 'Размещение гаражей для гостевого автотранспорта', ' ', ' '];
textStagesCarouselSecondLine.innerHTML = textStageseSecondLine[0];
let a = 0;

let arrNumbersStagesFirstLine = ['1', '3', '4', '6', '7'];
circleWhiteFirstLine.innerHTML = arrNumbersStagesFirstLine[0];

let arrNumbersStagesSecondLine = ['2', ' ', '5', ' ', ' '];
circleWhiteSecondLine.innerHTML = arrNumbersStagesSecondLine[0];

let levelList = document.getElementById('level-list');
levelList.src = "img/active.png";


function next() {
    i++
    if (i == textStages.length) {
        i = 0;
    }
    textStagesCarouselFirstLine.innerHTML = textStages[i];
    circleWhiteFirstLine.innerHTML = arrNumbersStagesFirstLine[i];
    circleWhiteSecondLine.innerHTML = arrNumbersStagesSecondLine[i];

    if (i > 0) {
        buttonBack.src = "img/button-left.png";
    } else {
        buttonBack.src = "img/button-left-disable.png";
    }

    if (i == 4) {
        buttonNext.src = "img/button-right-disable.png";
    } else {
        buttonNext.src = "img/button-right.png";
    }

    a++
    if (a == textStageseSecondLine.length) {
        a = 0;
    }
    textStagesCarouselSecondLine.innerHTML = textStageseSecondLine[a];

    if (a == 1 || a == 3 || a == 4) {
        circleWhiteSecondLine.style.visibility = 'hidden';
    } else {
        circleWhiteSecondLine.style.visibility = 'visible';
    }
}

function back() {
    i--
    if (i == -1) {
        i = textStages.length - 1;
    }
    textStagesCarouselFirstLine.innerHTML = textStages[i];
    circleWhiteFirstLine.innerHTML = arrNumbersStagesFirstLine[i];
    circleWhiteSecondLine.innerHTML = arrNumbersStagesSecondLine[i];

    if (i > 0) {
        buttonBack.src = "img/button-left.png";
    } else {
        buttonBack.src = "img/button-left-disable.png";
    }

    if (i == 4) {
        buttonNext.src = "img/button-right-disable.png";
    } else {
        buttonNext.src = "img/button-right.png";
    }

    a--
    if (a == -1) {
        a = textStageseSecondLine.length - 1;
    }
    textStagesCarouselSecondLine.innerHTML = textStageseSecondLine[a];

    if (a == 1 || a == 3 || a == 4) {
        circleWhiteSecondLine.style.visibility = 'hidden';
    } else {
        circleWhiteSecondLine.style.visibility = 'visible';
    }
}