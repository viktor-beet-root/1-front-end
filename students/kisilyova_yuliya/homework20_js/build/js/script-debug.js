"use strict";

//1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
var userQuestion1Name = prompt("Пожалуйста, введите свое имя");
var userName = "Привет, " + userQuestion1Name + "!";
console.log(userName); //2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

var userQuestion2Year = +prompt("Пожалуйста, введите год рождения");
var currentYear = 2021;
var userYears = currentYear - userQuestion2Year;
console.log(userYears); //3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

var userQuestion3square = +prompt("Пожалуйста, введите длину стороны квадрата");
var perimeterSquare = userQuestion3square * 4;
console.log(perimeterSquare); //4)   Запросите у пользователя радиус окружности и выведите площадь такой окружности.

var userQuestion4circle = +prompt("Пожалуйста, введите радиус окружности");
var circleArea = (Math.PI * Math.pow(userQuestion4circle, 2)).toFixed(2);
console.log(circleArea); //5)   Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

var userQuestion5way = +prompt("Пожалуйста, введите расстояние в км между двумя городами");
var userQuestion5time = +prompt("Пожалуйста, введите за сколько часов необходимо добраться");
var userSpeed = userQuestion5way / userQuestion5time + " км/час";
console.log(userSpeed); //6)   Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

var userQuestion6currency = +prompt("Пожалуйста, введите сумму в долларах");
var rateEur = 33;
var rateUsd = 28;
var amountEur = (userQuestion6currency * (rateUsd / rateEur)).toFixed(2) + " EUR";
console.log(amountEur); //7)   Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

var userQuestion7flashGB = +prompt("Пожалуйста, введите обьем носителя в Гб");
var fileSize = 820;
var fileQuantity = Math.floor(userQuestion7flashGB * 1024 / fileSize) + " файла";
console.log(fileQuantity); //8)   Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

var userQuestion8money = +prompt("Пожалуйста, введите сумму денег в кошельке");
var userQuestion8price = +prompt("Пожалуйста, введите цену одной шоколадки");
var resultBuying = Math.floor(userQuestion8money / userQuestion8price) + " шт. " + (userQuestion8money - Math.floor(userQuestion8money / userQuestion8price) * userQuestion8price) + " грн. сдача";
console.log(resultBuying); //9)   Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

var userQuestion9number = +prompt("Пожалуйста, введите трехзначное число");
var formula1 = userQuestion9number % 10 * 100;
var formula2 = userQuestion9number % 100 - formula1 / 100;
var formula3 = Math.floor(userQuestion9number / 100);
var result = formula1 + formula2 + formula3;
console.log(result); //10)   Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

var userQuestion10amount = +prompt("Пожалуйста, введите сумму вклада в банк");
var bankRate = 0.05 / 365;
var depositDays = 61;
var calculatedAmount = (userQuestion10amount * (bankRate * depositDays)).toFixed(2) + " UAH";
console.log(calculatedAmount);