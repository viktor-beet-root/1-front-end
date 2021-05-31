// const number = +prompt("ведите  число");
// const lastNumber = number * number;
// console.log(lastNumber);
// const ml = 0.621371;
// const km = +prompt("ведите  число");
// const km_ml =km * ml;
// console.log(km_ml);

// const square = +prompt("side of a square");
// const squareArea = square ** 2;
// console.log(squareArea);

// const square = +prompt("side of a square");
// const squareArea = square * square;
// console.log(squareArea);



// 1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
const hello = "Привет, ";
const hame = prompt("Введите Ваше имя");
const point = "!";
const helloName = hello + hame + point;
console.log(helloName);

//  2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

const thisYear = 2021;
let yearOfBirth = prompt("Введите год Вашего рождения");
let fullYears = thisYear - yearOfBirth;
console.log(fullYears);

//  3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
const h = 4;
let a = +prompt("Введите сторону квадрата");
let p = a * h;
console.log(p);

// Запросите у пользователя радиус окружности и выведите площадь такой окружности.

let circleRadiusUser = +prompt("Введите радиус окружности");
const pi = 3.14;
let circleArea = pi * (circleRadiusUser ** 2);
console.log(circleArea);

//  Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

let distanceBetweenCities = +prompt("Введите растояние между городами");
let desiredTravelTime = +prompt("Введите за сколько часов необходимо добраться");
let estimatedTravelSpeed = distanceBetweenCities / desiredTravelTime + " км/час";
console.log(estimatedTravelSpeed);

//  Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const dollars = 27.348;
const euro = 33.205;
let  sumDollars = +prompt("Ведите сумму в долларах");
let sumEuro = (sumDollars * (dollars / euro)).toFixed(2) + " €";
console.log (sumEuro);

//  Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

let totalGb = +prompt("Введите обьем носителя в Гб");
const fileSize = 820
let totalFiles = (Math.floor((totalGb * 1024) / fileSize)) + " файлa";
console.log(totalFiles);

// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

let amountMoney = +prompt("Введите сумму денег в кошельке");
let priceChocolate = +prompt('Введите цену одной шоколадки');
let numberChocolates = ~~(amountMoney / priceChocolate);
let change = numberChocolates * priceChocolate;
let willRemain = amountMoney - change;
let totalChocolat = 'Количество ' + numberChocolates + ' шоколадок.';
let totalChange = 'Ваша сдача ' + willRemain ;
console.log(totalChocolat, totalChange);

// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
let number = +prompt("Введи трехзначное число");
let numberTurnOver = number % 10 * 100 + Math.floor(number / 10) % 10 * 10 + Math.floor(number / 100);
console.log(numberTurnOver);

// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

let bankDeposit = +prompt("Введите сумму вклада на 2 месяца");
const days = 61;
const interestRate = 0.05 / 365;
let masseg = (bankDeposit * (interestRate * days)).toFixed(2) + " $";
console.log(masseg);

