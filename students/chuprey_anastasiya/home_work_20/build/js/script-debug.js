"use strict";

//)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
var yourName = prompt('Ваше ім`я');
var messageName = "Привіт, " + yourName + ".";
console.log(messageName); //  2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

var thisYear = 2021;
var userYear = +prompt('Введіть Ваш рік народження');
var messageYear = "Вам " + (thisYear - userYear) + " роки.";
console.log(messageYear); // 3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

var sideSquare = +prompt('Введіть довжину сторони квадрата:');
var squareArea = 4 * sideSquare;
var count = "Площа квадрата = " + squareArea;
console.log(count); // 4)   Запросите у пользователя радиус окружности и выведите площадь такой окружности.

var numberPi = 3.14;
var radius = +prompt('Введіть радіус:');
var circleArea = Math.pow(radius, 2) * 3.14;
console.log(circleArea); //5) Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя

var distance = +prompt('Введіть відстань між містами в км:');
var time = +prompt('Введіть час в годинах на дорогу:');
var speed = distance / time;
console.log(speed); //6) Реализуйте конвертор валют.Пользователь вводит доллары, программа переводит в евро.Курс валюты храните в константе.

var usdAmount = +prompt('Введіть сумму в долларах:');
var eurСourse = 0.819;
var eurAmount = usdAmount * eurСourse;
console.log(eurAmount + " євро."); //7) Пользователь указывает объем флешки в Гб.Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

var flashVolumeHb = +prompt('Який об`єм флешки?');
var mB = 1024 * flashVolumeHb;
var filesNum = ~~(mB / 820);
console.log("Кількість файлів,які вмістить флешка:" + filesNum); // 8)   Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

var amountUser = +prompt('Введіть сумму:');
var chokoPrise = 22;
var chokoNum = ~~(amountUser / chokoPrise);
var residual = amountUser % chokoPrise;
console.log("Кількість шоколадок:" + chokoNum);
console.log("Решта:" + residual); // // 9)   Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

var userNum = +prompt('Введіть трьохзначне число');
var backNum = userNum % 10 * 100 + ~~(userNum / 10 % 10) * 10 + ~~(userNum / 100);
console.log(backNum); //10)Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

var depositAmount = +prompt('Яка сумма депозиту?');
var yearProcent = 5;
var bankDays = 61;
var accruedfunds = depositAmount * yearProcent * bankDays / 365 / 100;
console.log(accruedfunds);