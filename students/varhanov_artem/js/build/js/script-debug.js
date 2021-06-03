// 1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

/* const hello = "Привет, ";
const hame = prompt("Введите Ваше имя");
const point = "!";
const helloName = hello + hame + point;
console.log(helloName); */
//  2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

/* const thisYear = 2021;
const yearOfBirth = prompt("Введите год Вашего рождения");
const fullYears = thisYear - yearOfBirth;
console.log(fullYears); */
//  3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

/*  const h = 4;
const a = +prompt("Введите сторону квадрата");
const p = a * h;
console.log(p);  */
// Запросите у пользователя радиус окружности и выведите площадь такой окружности.

/* const circleRadiusUser = +prompt("Введите радиус окружности");
const pi = 3.14;
const circleArea = pi * (circleRadiusUser ** 2);
console.log(circleArea); */
//  Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

/* const distanceBetweenCities = +prompt("Введите растояние между городами");
const desiredTravelTime = +prompt("Введите за сколько часов необходимо добраться");
const estimatedTravelSpeed = distanceBetweenCities / desiredTravelTime + " км/час";
console.log(estimatedTravelSpeed); */
//  Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

/* const dollars = 27.348;
const euro = 33.205;
const  sumDollars = +prompt("Ведите сумму в долларах");
const sumEuro = (sumDollars * (dollars / euro)).toFixed(2) + " €";
console.log (sumEuro); */
//  Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

/* const totalGb = +prompt("Введите обьем носителя в Гб");
const fileSize = 820
const totalFiles = (Math.floor((totalGb * 1024) / fileSize)) + " файлa";
console.log(totalFiles); */
// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

/* const amountMoney = +prompt("Введите сумму денег в кошельке");
const priceChocolate = +prompt('Введите цену одной шоколадки');
const numberChocolates = ~~(amountMoney / priceChocolate);
const change = numberChocolates * priceChocolate;
const willRemain = amountMoney - change;
const totalChocolat = 'Количество ' + numberChocolates + ' шоколадок.';
const totalChange = 'Ваша сдача ' + willRemain ;
console.log(totalChocolat, totalChange); */
// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

/* const number = +prompt("Введи трехзначное число");
const numberTurnOver = number % 10 * 100 + Math.floor(number / 10) % 10 * 10 + Math.floor(number / 100);
console.log(numberTurnOver); */
// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

/* const bankDeposit = +prompt("Введите сумму вклада на 2 месяца");
const days = 61;
const interestRate = 0.05 / 365;
const masseg = (bankDeposit * (interestRate * days)).toFixed(2) + " $";
console.log(masseg); */
"use strict";