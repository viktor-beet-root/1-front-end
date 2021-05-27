"use strict";

//1) Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
var yourName = prompt(" Ваше имя? ");
var hello = " Привет , ";
var messageHello = hello + yourName + "!";
console.log(messageHello); //2) Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

var yourBirthday = +prompt(" Год вашего рождения? ");
var presentYear = 2021;
var yourAge = presentYear - yourBirthday;
var messageAge = "Вам: " + yourAge;
console.log(messageAge); //3) Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

var square_side_length = +prompt(" Введите дилину стороны квадрата ");
var perimeter = 4 * square_side_length;
var messagePerimeter = "Периметр квадрата: " + perimeter;
console.log(messagePerimeter); //4) Запросите у пользователя радиус окружности и выведите площадь такой окружности.

var circleRadius = +prompt(" Введите радиус окружности ");
var circleArea = 2 * Math.PI * circleRadius;
var messageArea = "Площадь окружности: " + circleArea;
console.log(messageArea); //5) Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

var distance = +prompt(" Введите расстояние в км между двумя городами ");
var time = +prompt(" Введите время в часах закоторое хотите добраться в пункт назначения ");
var speed = distance / time;
var messageSpeed = "Чтобы успеть вовремя,ваша скорость должна быть : " + speed + " км/ч";
console.log(messageSpeed); ///6) Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

var usdQuantity = +prompt(" Введите сумму в USD ");
var euroValue = 0.83;
var euroQuantity = usdQuantity * euroValue;
var messageQuantity = "Вы получите EURO: " + euroQuantity;
console.log(messageQuantity); //7) Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

var flashDrive_volume = +prompt(" Введите объем флешки в Гб ");
var fileSize = 820;
var fileQuantity = flashDrive_volume * 1024 / 820;
var messageFlashDrive = "На флешку обьемом: " + flashDrive_volume + " Гб," + " файлов размером в 820 Мб помещается " + Math.floor(fileQuantity);
console.log(messageFlashDrive); //8) Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

var moneyQuantity = +prompt(" Введите сумму денег в кошельке ");
var chocolateCost = +prompt(" Введите цену одной шоколадки ");
var canBuy = ~~(moneyQuantity / chocolateCost);
var revenueOll = canBuy * chocolateCost;
var remainMoney = moneyQuantity - revenueOll;
var messageBuy = "Вы можете купить: " + canBuy + " шоколадок.";
var messageRemain = " У вас останиться денег " + remainMoney;
console.log(messageBuy, messageRemain); //9) Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

var number = +prompt(" Введите трехзначное число ");
var numberRevert_1 = ~~(number / 1) % 10;
var numberRevert_2 = ~~(number / 10) % 10;
var numberRevert_3 = ~~(number / 100) % 10;
var messageRevert = "Число задом наперед: " + numberRevert_1 + numberRevert_2 + numberRevert_3;
console.log(messageRevert); //10) Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

var moneyDeposite = +prompt(" Введите сумму вклада в банк на 2 месяца ");
var depositeTime = 2;
var yearPercent = 5;
var year = 12;
var moneyPercent = moneyDeposite * yearPercent * depositeTime / year / 100;
var messagePercent = "Сумма начисленных процентов: " + moneyPercent;
console.log(messagePercent);