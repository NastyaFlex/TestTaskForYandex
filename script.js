let textCarousel = document.getElementById('text-carousel');

let textStages = ['Строительство железнодорожной магистрали Москва-Васюки ','Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет', 'Строительство дворца для турнира', 'Размещение гаражей для гостевого автотранспорта', 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов', 'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн'];
textCarousel.innerHTML = textStages[0] 
let i = 0;

function farther() {
    i++
    if (i == textStages.length) {
        i = 0;
    }
    textCarousel.innerHTML = textStages[i];
}
function back() {
    i--
    if (i == -1) {
        i = textStages.length - 1;
    }
    textCarousel.innerHTML = textStages[i];
}