// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом: 

const car = {
    manufacturer: 'Tesla',
    model: 'Model S',
    yerarManufact: 2018,
    averageSpeed: 100,
}

// 1.1. Функция для вывода на экран информации об автомобиле;

function getCarInfo(){
    console.log('Manufacturer: ' + car.manufacturer);
    console.log('Model: ' + car.model);
    console.log('Production year: ' + car.yerarManufact + ' year');
    console.log('Average speed: ' + car.averageSpeed + ' km/h');
}

getCarInfo();

// 1.2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

function calcTime(distance) {

    if (distance === undefined || isNaN(distance) || distance <= 0) return 'Data no correct !';

    let time = distance / car.averageSpeed;

    if(time > 4)
    time = time + Math.floor( time / 4 );

    let timeResult = 'Time to distenation: ' + time + ' hours';

    return timeResult;
}

console.log(calcTime(300));
console.log(calcTime(500));
console.log(calcTime(0));

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

const firstFraction = {
    numerator: 1,
    denominator: 2,
};

const secondFraction = {
    numerator: 1,
    denominator: 2,
};

// 2.1. Функция сложения 2-х объектов-дробей;

function validFraction(fraction) {
    for (let key in fraction) {
        return (fraction[key] === undefined || +fraction[key] === 0 || isNaN(fraction[key]));
    }
}

function fractionTotal() {
    if (validFraction(firstFraction) || validFraction(firstFraction)) return "Error";

    const numerator = firstFraction.numerator * secondFraction.denominator + secondFraction.numerator * firstFraction.denominator;
    const denominator = firstFraction.denominator * secondFraction.denominator;

    return fractionReduction(numerator, denominator);
}
console.log(fractionTotal());

// 2.2. Функция вычитания 2-х объектов-дробей;

function fractionSubtraction() {
    if (validFraction(firstFraction) || validFraction(firstFraction)) return "Error";

    const numerator = firstFraction.numerator * secondFraction.denominator - secondFraction.numerator * firstFraction.denominator;
    const denominator = firstFraction.denominator * secondFraction.denominator;

    return fractionReduction(numerator, denominator);
}
console.log(fractionSubtraction());

// 2.3. Функция умножения 2-х объектов-дробей;

function fractionMultiplication() {

    if (validFraction(firstFraction) || validFraction(firstFraction)) return "Error";
    const numerator = firstFraction.numerator * secondFraction.numerator;
    const denominator = firstFraction.denominator * secondFraction.denominator;

    return fractionReduction(numerator, denominator);
}
console.log(fractionMultiplication());

// 2.4. Функция деления 2-х объектов-дробей;

function fractionDivision() {

    if (validFraction(firstFraction) || validFraction(firstFraction)) return "Error";

    const numerator = firstFraction.numerator * secondFraction.denominator;
    const denominator = firstFraction.denominator * secondFraction.numerator;

    return fractionReduction(numerator, denominator);
}
console.log(fractionDivision());

// 2.5.Функция сокращения объекта-дроби.


// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// 3.1. Функция вывода времени на экран;
// 3.2. Функция изменения времени на переданное количество секунд;
// 3.3. Функция изменения времени на переданное количество минут;
// 3.4. Функция изменения времени на переданное количество часов. 
// 3.5. Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».*/



