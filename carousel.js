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
        slideNumbers.innerText = '3';
    } else {
        nameMan1.innerHTML = arrNameFirstLine[0];
        nameMan2.innerHTML = arrNameFirstLine[1];
        nameMan3.innerHTML = arrNameFirstLine[2];
        slideNumbers.innerText = '6';
    }
    console.log(step);
}

function bigButtonBack() {
    step--;
    if (step == -1 || step == 0) {
        step = arrNameFirstLine.length - 1;
    }
    if (step == 1) {
        nameMan1.innerHTML = arrNameSecondLine[0];
        nameMan2.innerHTML = arrNameSecondLine[1];
        nameMan3.innerHTML = arrNameSecondLine[2];
        slideNumbers.innerText = '6';
    } else {
        nameMan1.innerHTML = arrNameFirstLine[0];
        nameMan2.innerHTML = arrNameFirstLine[1];
        nameMan3.innerHTML = arrNameFirstLine[2];
        slideNumbers.innerText = '3';
    }
    console.log(step)
}