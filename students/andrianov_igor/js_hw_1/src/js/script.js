// Домашнее задание 1 по JS.

// 1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

const userName = prompt(" Введите своё имя ");
const hello = " Привет, ";
const exclamationMark = "!";
const message = hello + userName + exclamationMark;
console.log(message);

// 2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

const howOldAreYou = +prompt("Введите год своего рождения");
const currentYear = 2021;
const yourAge = currentYear - howOldAreYou;
const youMessage = " Вам: ";
const yourAgeMessage = " лет.";
const yourAllAgeMessage = youMessage + yourAge + yourAgeMessage;
console.log(yourAllAgeMessage);


// 3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

const sideSquare = +prompt(" Введите сторону квадрата: ");
const sideResult = 4 * sideSquare;
const perimetrMessage = (" Периметр квадрата: ");
const perimetrMessagePoint = ".";
const perimetrAllMessage = perimetrMessage + sideResult + perimetrMessagePoint;
console.log(perimetrAllMessage);

// 4) Запросите у пользователя радиус окружности и выведите площадь такой окружности.

const circleRadius = +prompt(" Введите радиус окружности: ");
const pi = Math.PI;
const radiusResult = Math.PI * circleRadius ** 2;
const messageCircleRadius = " Радиус окружности: ";
const messageCircleRadiusPoint = ".";
const messageAllCircleRadius = messageCircleRadius + radiusResult + messageCircleRadiusPoint;
console.log(messageAllCircleRadius);


// 5) Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

const distance = +prompt(" Введите расстояние в км между двумя городами: ");
const howMuchToGet = +prompt(" Введи количество часов, за которое, Вам необходимо добраться до места назначения. ");
const speedCalculate = distance / howMuchToGet;
const messageSpeed = (" Вам необходимо двигаться со скоростью, ");
const messageSpeed1 = (" км/ч, чтобы успеть вовремя. ");
const messageAllspeed = messageSpeed + speedCalculate + messageSpeed1;
console.log(messageAllspeed);


// 6)   Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

const dollarEuro = +prompt(" Введите сумму в долларах: ");
const euroRate = 0.82;
const dollarEuroCalculate = dollarEuro * euroRate;
const dollarMessage = (" За ");
const dollarMessage1 = (", Вы можете приобрести: ");
const dollarMessage2 = (" USD");
const dollarMessage3 = (" EURO. ");
const dollarAllmessage = dollarMessage + dollarEuro + dollarMessage2 + dollarMessage1 + dollarEuroCalculate + dollarMessage3;
console.log(dollarAllmessage);


// 7)   Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

const flashSize = +prompt(" Укажите объём флешки в (Гб): ");
const gbInMb = 1024;
const fileSize = 820;
const filesPlacedOnUsbCalculate = (flashSize * gbInMb) / fileSize;
const filesPlacedOnUsbCalculateFloor = Math.floor(filesPlacedOnUsbCalculate);
const flashSizeMessage = (" На флешку размером ");
const flashSizeMessage1 = (" Гб, ");
const flashSizeMessage2 = ("помещается ");
const flashSizeMessage3 = (" файла(ов), размером 820 Мб. ");
const flashSizeAllmessage = flashSizeMessage + flashSize + flashSizeMessage1 + flashSizeMessage2 + filesPlacedOnUsbCalculateFloor + flashSizeMessage3;
console.log(flashSizeAllmessage);


// 8)   Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

const howManyMoney = +prompt(" Введите сумму денег в кошельке: ");
const howManyChocolate = +prompt(" Введите цену одной шоколадки: ");
const howManyBuyCalculate = howManyMoney / howManyChocolate;
const howManyBuyChocolateCalcFloor = Math.floor(howManyBuyCalculate);
const howManyMoneyCalculate = howManyMoney - (howManyBuyChocolateCalcFloor * howManyChocolate);
const howManyChocolateMessage = (" Вы сможете купить: ");
const howManyChocolateMessage1 = (" шоколадки (-у,-ок).");
const howManyChocolateMessage2 = (" Количество денег, которое у Вас останется: ");
const howManyChocolateMessage3 = (". ");
const howManyChocolateMessage4 = (" У Вас в кошельке: ");
const howManyChocolateMessage5 = (" денег. ");
const howManyChocolateAllMessage = howManyChocolateMessage4 + howManyMoney + howManyChocolateMessage5 + howManyChocolateMessage + howManyBuyChocolateCalcFloor + howManyChocolateMessage1 + howManyChocolateMessage2 + howManyMoneyCalculate + howManyChocolateMessage3;
console.log(howManyChocolateAllMessage);

// 9)   Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

const number = +prompt(" Введите трехзначное число: ");
const numberCalculate = number % 10;
const numberCalculate1 = Math.floor(number / 10) % 10;
const numberCalculate2 = Math.floor(number / 100);
const numberMessage = (" Ваше трёхзначное число задом наперед: ");
const numberMessage1 = (". ");
const numberAllMessage = numberMessage + numberCalculate + numberCalculate1 + numberCalculate2 + numberMessage1;
console.log(numberAllMessage);

// 10) Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

const bankDeposite = +prompt(" Введите сумму вклада в банк на 2 месяца: ");
const interestRateYear = 5;
const yearMonths = 12;
const depositeMonthNumber = 2;
const interestRateCalculation = depositeMonthNumber * interestRateYear / yearMonths;
const interestRateCalculation1 = ((bankDeposite * interestRateCalculation) / 100) + bankDeposite;
const depositeMessage = (" Начисленный процент за два месяца составит: ");
const depositeMessage1 = (" Итоговая сумма вклада с учётом процентов за два месяца составит: ");
const depositeMessage2 = (".");
const depositeMessage3 = ("%");
const depositeAllMessage = depositeMessage + interestRateCalculation + depositeMessage3 + depositeMessage2 + depositeMessage1 + interestRateCalculation1 + depositeMessage2;
console.log(depositeAllMessage);
