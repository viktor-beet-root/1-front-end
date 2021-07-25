1. /* Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
и следующие функции для работы с этим объектом:

Функция для вывода на экран информации об автомобиле;
Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час. */

const carDescription = {
    brand: "AUDI",
    model: "RS7 Sportback",
    year: 2021,
    speed: 100, 
};

function timeInfoCar(distance, speed) {
    let timeCalc = distance / speed
    return timeCalc + Math.floor(timeCalc / 4) + ' hours total with distance ' + distance + ' km';
}

let wayInfo = timeInfoCar(1300, carDescription.speed);

function getCarInfo() {
    return `Brand of car is: ${this.brand}, \nModel: ${this.model}, \nYear: ${this.year}, \nAverage speed km per hour: ${this.speed}
    \nThe way takes ${wayInfo}`;
}


console.log(getCarInfo.call(carDescription));


3. /*Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

Функция вывода времени на экран;

Функция изменения времени на переданное количество секунд;

Функция изменения времени на переданное количество минут;

Функция изменения времени на переданное количество часов. 

Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. 
Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75». */


const timeInfo = {
    hour: 12,
    minutes: 0,
    seconds: 0, 
    changeSec: changeSec,
    changeMin: changeMin,
    changeHour: changeHour,
}

function timeScreen (time) {
    let rez = time;
    if (time < 10) {
    rez = '0' + time;
}
return rez
}

function timeOnScreen(time) {
    return `${timeScreen(this.hour)}:${timeScreen(this.minutes)}:${timeScreen(this.seconds)}`;
}
console.log(timeOnScreen.call(timeInfo));


function changeSec(sec) {
    this.seconds = this.seconds + sec;
    while (this.seconds > 59) {
        this.seconds = this.seconds - 60;
        this.changeMin(true);
    }
}
timeInfo.changeSec(8000);
console.log(timeOnScreen.call(timeInfo));

function changeMin(min) {
    this.minutes = this.minutes + min
    while (this.minutes > 59) {
        this.minutes = this.minutes - 60;
        this.changeHour(true);
    } 
}
timeInfo.changeMin(500);
console.log(timeOnScreen.call(timeInfo));

function changeHour(hour) {
    this.hour = this.hour + hour
    while (this.hour > 23) {
        this.hour = this.hour - 24;
    } 
}
timeInfo.changeHour(200);
console.log(timeOnScreen.call(timeInfo));
