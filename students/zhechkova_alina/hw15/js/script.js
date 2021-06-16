// Замыкание. Таблица умножения, вариант с циклами
function multi(a, valid, invalid, validator) {
    if (validator(a)) return valid(a)
    else return invalid(a);
}

function validator(a) {
    return (a > 0 && a < 10);
}

function createTable(a) {
    let result;
    for (let i = 1, k = 0; i < 10; i++) {
        k = a * i;
        result = `${a} умножить на ${i} =  ${k}`;
        console.log(result);
    }
}

function error(a) {
    console.log('Неправильно! Введите цифру от 1 до 9')
}
const multiRes = multi(9, createTable, error, validator);


/*
1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
Функция для вывода на экран информации об автомобиле;
Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
*/

const carInfo = {
    manufacturer: 'BMW',
    model: 'E-81',
    year: 2009,
    speed: 56,
    getAllInfo: getAllInfo,
}

function getAllInfo() {
    return `Manufacturer: ${this.manufacturer} \nModel: ${this.model}\nYear: ${this.year} \nAverage speed: ${this.speed}`
}

function getTime(s) {
    let time = s * this.speed / 3600;
    let i = 0;
    let result = time;
    while (i < time) {
        i++;
        if (i % 4 === 0) result++;
    }
    return 'Необходимое время для преодоления ' + s + ' км за ' + this.speed + ' км/час равняется: ' + result.toFixed(2) + ' часов';
}
const time = getTime.bind(carInfo);
console.log(carInfo.getAllInfo());
`   `
console.log(time(56));

/*
2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
Функция сложения 2-х объектов-дробей;
Функция вычитания 2-х объектов-дробей;
Функция умножения 2-х объектов-дробей;
Функция деления 2-х объектов-дробей;
Функция сокращения объекта-дроби.
*/

const frac = {
    denomFirst: 1,
    numerFirst: 2,
    denomSecond: 5,
    numerSecond: 9,
}

function commonDiv(a, b) {
    let maxNum = (a > b) ? a : b;
    let minNum = (a < b) ? a : b;
    let delitel = 100;
    let result = null;
    while (--delitel > maxNum) {
        if (delitel % maxNum !== 0 && delitel % minNum !== 0) result = delitel;
    }
    result = delitel;
    return result;
}
console.log(commonDiv(8, 6));

/*
3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
Функция вывода времени на экран;
Функция изменения времени на переданное количество секунд;
Функция изменения времени на переданное количество минут;
Функция изменения времени на переданное количество часов. 
Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
*/
const timeObj = {
    hour: 1,
    minute: 22,
    second: 44,
    getTime: getTimeFormat,
    changeSec: changeSec,
    changeMin: changeMin,
    changeHours: changeHours,
}

function getTimeFormat() {
    return formatTime(this.hour) + ':' + formatTime(this.minute) + ':' + formatTime(this.second);
}

function formatTime(x) {
    let result = x;
    if (x < 10) {
        result = 0 + String(x);
    }
    return result;
}

function changeSec(s) {
    this.second = this.second + s;
    if (this.second > 60) {
        this.minute++;
        this.second = this.second - 60;
    }
    return formatTime(this.hour) + ':' + formatTime(this.minute) + ':' + formatTime(this.second);
}

function changeMin(m) {
    this.minute = this.minute + m;
    if (this.minute > 60) {
        this.hour++;
        this.minute = this.minute - 60;
    }
    return formatTime(this.hour) + ':' + formatTime(this.minute) + ':' + formatTime(this.second);
}

function changeHours(h) {
    this.hour = this.hour + h;
    while (this.hour > 24) {
        this.hour = this.hour - 24;
    }
    return formatTime(this.hour) + ':' + formatTime(this.minute) + ':' + formatTime(this.second);
}


// Общий результат всей задачи
const changeSecRes = changeSec.bind(timeObj);
const changeMinRes = changeMin.bind(timeObj);
const changeHourRes = changeHours.bind(timeObj);
console.log(` ${timeObj.getTime()} \n ${changeSecRes(55)} \n ${changeMinRes(55)} \n ${changeHourRes(55)}`)


/*
// Угадай число
const number =prompt('Введите число от 1 до 100');
let max=  100;
let min= 0;
let answer= '';
let num = 0;
function getNumber(number) {
    if (!validateNumb(number)) return;
         num = number;
    };
    function validateNumb(number) {
        return (number !== null && number !== undefined && !Number.isNaN(+number) && (number < this.max && number > this.min) )
    };
function getNumber() {
    let num1 = min;
    let num2 = max;
    let tmpNum = 0;
    let answer = '';
    while(answer !== '==') {
        tmpNum = ~~((num1 + num2) / 2)
        answer = prompt(`Ваше число ${tmpNum}? Равно: ==, больше: > , меньше: <`);
        if (answer === '=='){ 
            break
        } else if (answer === 'больше') {
            num1 = tmpNum
        } else if (answer === 'меньше') {
            num2 = tmpNum
        };
    }
};
getNumber();
*/
