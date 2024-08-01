let slideNumbers = document.getElementById('slide-numbers');
slideNumbers.innerText = '3';

let arrNameFirstLine = ['Хозе-Рауль Капабланка', 'Эммануил Ласкер', 'Александр Алехин'];
let arrNameSecondLine = ['Арон Нимцович', 'Рихард Рети', 'Остап Бендер'];
let nameMan1 =  document.getElementById('name-man1');
let nameMan2 =  document.getElementById('name-man2');
let nameMan3 =  document.getElementById('name-man3');

nameMan1.innerHTML = arrNameFirstLine[0];
nameMan2.innerHTML = arrNameFirstLine[1];
nameMan3.innerHTML = arrNameFirstLine[2];

let statusMan1 = document.getElementById('status-man1');
let statusMan2 = document.getElementById('status-man2');
let statusMan3 = document.getElementById('status-man3');
let arrStatusMen = ['Чемпион мира по шахматам', 'Гроссмейстер'];

statusMan1.innerHTML = arrStatusMen[0];
statusMan2.innerHTML = arrStatusMen[0];
statusMan3.innerHTML = arrStatusMen[0];

let step = 0;

function bigButtonNext() {
    step++;
    if (step == arrNameFirstLine.length) {
        step = 1;
    }
    if (step == 1) {
        nameMan1.innerHTML = arrNameSecondLine[0];
        nameMan2.innerHTML = arrNameSecondLine[1];
        nameMan3.innerHTML = arrNameSecondLine[2];
        statusMan3.innerHTML = arrStatusMen[1];
        slideNumbers.innerText = '6';
    } else {
        nameMan1.innerHTML = arrNameFirstLine[0];
        nameMan2.innerHTML = arrNameFirstLine[1];
        nameMan3.innerHTML = arrNameFirstLine[2];
        statusMan3.innerHTML = arrStatusMen[0];
        slideNumbers.innerText = '3';
    }
    console.log(step);
}

setInterval(bigButtonNext, 4000);

function bigButtonBack() {
    step--;
    if (step == -1 || step == 0) {
        step = arrNameFirstLine.length - 1;
    }
    if (step == 1) {
        nameMan1.innerHTML = arrNameSecondLine[0];
        nameMan2.innerHTML = arrNameSecondLine[1];
        nameMan3.innerHTML = arrNameSecondLine[2];
        statusMan3.innerHTML = arrStatusMen[1];
        slideNumbers.innerText = '6';
    } else {
        nameMan1.innerHTML = arrNameFirstLine[0];
        nameMan2.innerHTML = arrNameFirstLine[1];
        nameMan3.innerHTML = arrNameFirstLine[2];
        statusMan3.innerHTML = arrStatusMen[0];
        slideNumbers.innerText = '3';
    }
    console.log(step)
}