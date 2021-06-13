"use strict";

// //1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
var yourName = prompt('Ваше ім`я');
var messageName = "Привіт, " + yourName + ".";
console.log(messageName); //  //  2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

var thisYear = 2021;
var userYear = +prompt('Введіть свій рік нaродження');
var massageYear = "Вам " + (thisYear - userYear) + " роки.";
console.log(massageYear); // // 3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

var sideSquare = prompt('Введіть довжину сторони квадрата');
var squarePerimeter = 4 * sideSquare;
var count = "Периметр квадрата = " + squarePerimeter;
console.log(count); //  4)   Запросите у пользователя радиус окружности и выведите площадь такой окружности.

var radius = prompt('Введіть радиус круга');
console.log(Math.PI * Math.pow(radius, 2)); //5) Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

var distance = prompt('Введіть відстань в км');
var time = prompt('Введіть час у годинах');
console.log(distance / time + ' км/г'); //6) Реализуйте конвертор валют.Пользователь вводит доллары, программа переводит в евро.Курс валюты храните в константе.

var kurs = 0.82;
var dollars = prompt('Введіть сума в доларах');
console.log(dollars * kurs + ' Євро'); //7) Пользователь указывает объем флешки в Гб.Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

var volumeHb = prompt('Введіть об`єм флешки в Гб');
var mbFile = Math.floor(volumeHb * 1024 / 820);
console.log(mbFile + ' файли'); // 8)   Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

var money = prompt('Введіть суму грошей на покупку');
var price = prompt('Введіть ціну шоколадки');
var buyAble = money / price - money / price % 1;
var left = money - buyAble * price;
console.log('кількість шоколадок:' + buyAble);
console.log('залишок коштів:' + left); // 9)   Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

var userNum = +prompt('Введіть трьохзначне число');
var backNum = userNum % 10 * 100 + ~~(userNum / 10 % 10) * 10 + ~~(userNum / 100);
console.log(backNum); // 10)Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

var depositAmount = +prompt(' Введіть сумму депозиту?');
var yearProcent = 5;
var bankDays = 61;
var accruedfunds = depositAmount * yearProcent * bankDays / 365 / 100;
console.log(accruedfunds);