"use strict";

// Домашнее задание 1 по JS.
// 1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
var userName = prompt(" Введите своё имя ");
var hello = " Привет, ";
var exclamationMark = "!";
var message = hello + userName + exclamationMark;
console.log(message); // 2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

var howOldAreYou = +prompt("Введите год своего рождения");
var currentYear = 2021;
var yourAge = currentYear - howOldAreYou;
var youMessage = " Вам: ";
var yourAgeMessage = " лет.";
var yourAllAgeMessage = youMessage + yourAge + yourAgeMessage;
console.log(yourAllAgeMessage); // 3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

var sideSquare = +prompt(" Введите сторону квадрата: ");
var sideResult = 4 * sideSquare;
var perimetrMessage = " Периметр квадрата: ";
var perimetrMessagePoint = ".";
var perimetrAllMessage = perimetrMessage + sideResult + perimetrMessagePoint;
console.log(perimetrAllMessage); // 4) Запросите у пользователя радиус окружности и выведите площадь такой окружности.

var circleRadius = +prompt(" Введите радиус окружности: ");
var pi = Math.PI;
var radiusResult = Math.PI * Math.pow(circleRadius, 2);
var messageCircleRadius = " Радиус окружности: ";
var messageCircleRadiusPoint = ".";
var messageAllCircleRadius = messageCircleRadius + radiusResult + messageCircleRadiusPoint;
console.log(messageAllCircleRadius); // 5) Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

var distance = +prompt(" Введите расстояние в км между двумя городами: ");
var howMuchToGet = +prompt(" Введи количество часов, за которое, Вам необходимо добраться до места назначения. ");
var speedCalculate = distance / howMuchToGet;
var messageSpeed = " Вам необходимо двигаться со скоростью, ";
var messageSpeed1 = " км/ч, чтобы успеть вовремя. ";
var messageAllspeed = messageSpeed + speedCalculate + messageSpeed1;
console.log(messageAllspeed); // 6)   Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

var dollarEuro = +prompt(" Введите сумму в долларах: ");
var euroRate = 0.82;
var dollarEuroCalculate = dollarEuro * euroRate;
var dollarMessage = " За ";
var dollarMessage1 = ", Вы можете приобрести: ";
var dollarMessage2 = " USD";
var dollarMessage3 = " EURO. ";
var dollarAllmessage = dollarMessage + dollarEuro + dollarMessage2 + dollarMessage1 + dollarEuroCalculate + dollarMessage3;
console.log(dollarAllmessage); // 7)   Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

var flashSize = +prompt(" Укажите объём флешки в (Гб): ");
var gbInMb = 1024;
var fileSize = 820;
var filesPlacedOnUsbCalculate = flashSize * gbInMb / fileSize;
var filesPlacedOnUsbCalculateFloor = Math.floor(filesPlacedOnUsbCalculate);
var flashSizeMessage = " На флешку размером ";
var flashSizeMessage1 = " Гб, ";
var flashSizeMessage2 = "помещается ";
var flashSizeMessage3 = " файла(ов), размером 820 Мб. ";
var flashSizeAllmessage = flashSizeMessage + flashSize + flashSizeMessage1 + flashSizeMessage2 + filesPlacedOnUsbCalculateFloor + flashSizeMessage3;
console.log(flashSizeAllmessage); // 8)   Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

var howManyMoney = +prompt(" Введите сумму денег в кошельке: ");
var howManyChocolate = +prompt(" Введите цену одной шоколадки: ");
var howManyBuyCalculate = howManyMoney / howManyChocolate;
var howManyBuyChocolateCalcFloor = Math.floor(howManyBuyCalculate);
var howManyMoneyCalculate = howManyMoney - howManyBuyChocolateCalcFloor * howManyChocolate;
var howManyChocolateMessage = " Вы сможете купить: ";
var howManyChocolateMessage1 = " шоколадки (-у,-ок).";
var howManyChocolateMessage2 = " Количество денег, которое у Вас останется: ";
var howManyChocolateMessage3 = ". ";
var howManyChocolateMessage4 = " У Вас в кошельке: ";
var howManyChocolateMessage5 = " денег. ";
var howManyChocolateAllMessage = howManyChocolateMessage4 + howManyMoney + howManyChocolateMessage5 + howManyChocolateMessage + howManyBuyChocolateCalcFloor + howManyChocolateMessage1 + howManyChocolateMessage2 + howManyMoneyCalculate + howManyChocolateMessage3;
console.log(howManyChocolateAllMessage); // 9)   Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

var number = +prompt(" Введите трехзначное число: ");
var numberCalculate = number % 10;
var numberCalculate1 = Math.floor(number / 10) % 10;
var numberCalculate2 = Math.floor(number / 100);
var numberMessage = " Ваше трёхзначное число задом наперед: ";
var numberMessage1 = ". ";
var numberAllMessage = numberMessage + numberCalculate + numberCalculate1 + numberCalculate2 + numberMessage1;
console.log(numberAllMessage); // 10) Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

var bankDeposite = +prompt(" Введите сумму вклада в банк на 2 месяца: ");
var interestRateYear = 5;
var yearMonths = 12;
var depositeMonthNumber = 2;
var interestRateCalculation = depositeMonthNumber * interestRateYear / yearMonths;
var interestRateCalculation1 = bankDeposite * interestRateCalculation / 100 + bankDeposite;
var depositeMessage = " Начисленный процент за два месяца составит: ";
var depositeMessage1 = " Итоговая сумма вклада с учётом процентов за два месяца составит: ";
var depositeMessage2 = ".";
var depositeMessage3 = "%";
var depositeAllMessage = depositeMessage + interestRateCalculation + depositeMessage3 + depositeMessage2 + depositeMessage1 + interestRateCalculation1 + depositeMessage2;
console.log(depositeAllMessage);
