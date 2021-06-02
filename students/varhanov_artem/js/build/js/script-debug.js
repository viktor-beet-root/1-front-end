"use strict";

// 1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
var hello = "Привет, ";
var hame = prompt("Введите Ваше имя");
var point = "!";
var helloName = hello + hame + point;
console.log(helloName); //  2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

var thisYear = 2021;
var yearOfBirth = prompt("Введите год Вашего рождения");
var fullYears = thisYear - yearOfBirth;
console.log(fullYears); //  3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

var h = 4;
var a = +prompt("Введите сторону квадрата");
var p = a * h;
console.log(p); // Запросите у пользователя радиус окружности и выведите площадь такой окружности.

var circleRadiusUser = +prompt("Введите радиус окружности");
var pi = 3.14;
var circleArea = pi * Math.pow(circleRadiusUser, 2);
console.log(circleArea); //  Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

var distanceBetweenCities = +prompt("Введите растояние между городами");
var desiredTravelTime = +prompt("Введите за сколько часов необходимо добраться");
var estimatedTravelSpeed = distanceBetweenCities / desiredTravelTime + " км/час";
console.log(estimatedTravelSpeed); //  Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

var dollars = 27.348;
var euro = 33.205;
var sumDollars = +prompt("Ведите сумму в долларах");
var sumEuro = (sumDollars * (dollars / euro)).toFixed(2) + " €";
console.log(sumEuro); //  Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

var totalGb = +prompt("Введите обьем носителя в Гб");
var fileSize = 820;
var totalFiles = Math.floor(totalGb * 1024 / fileSize) + " файлa";
console.log(totalFiles); // Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

var amountMoney = +prompt("Введите сумму денег в кошельке");
var priceChocolate = +prompt('Введите цену одной шоколадки');
var numberChocolates = ~~(amountMoney / priceChocolate);
var change = numberChocolates * priceChocolate;
var willRemain = amountMoney - change;
var totalChocolat = 'Количество ' + numberChocolates + ' шоколадок.';
var totalChange = 'Ваша сдача ' + willRemain;
console.log(totalChocolat, totalChange); // Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

var number = +prompt("Введи трехзначное число");
var numberTurnOver = number % 10 * 100 + Math.floor(number / 10) % 10 * 10 + Math.floor(number / 100);
console.log(numberTurnOver); // Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

var bankDeposit = +prompt("Введите сумму вклада на 2 месяца");
var days = 61;
var interestRate = 0.05 / 365;
var masseg = (bankDeposit * (interestRate * days)).toFixed(2) + " $";
console.log(masseg);