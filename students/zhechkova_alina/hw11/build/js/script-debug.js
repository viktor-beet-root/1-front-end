"use strict";

// 1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
var userName = prompt('Введите Ваше имя');
var messageForUser = 'Привет, ' + userName;
console.log(messageForUser); // 2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

var birthYear = +prompt('Введите Ваш год рождения');
var year = 2020;
var userAge = year - birthYear;
console.log(userAge); // 3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

var side = +prompt('Введите сторону квадрата');
var perimeter = side * 4;
console.log(perimeter); //4)   Запросите у пользователя радиус окружности и выведите площадь такой окружности.

var radius = +prompt('Введите радиус окружности');
var area = Math.PI * Math.pow(radius, 2);
console.log(area); // 5)   Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

var km = +prompt('Введите расстояние между городами А и Б');
var time = +prompt('За сколько часов вы хотите добраться из города А в город Б');
var speed = km / time;
var messsageSpeed = 'Необходимая скорость: ' + speed + ' км/час.';
console.log(messsageSpeed); // 6)   Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

var usd = +prompt('Введите сумму в долларах');
var usdEur = 0.82;
var eur = usd * usdEur;
console.log(eur); // 7)   Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

var gb = +prompt('Введите объем флешки в ГБ');
var mb = gb * 1024 / 820;
var messageMb = 'В вашей флешке столько файлов размером в 820 Мб помещается: ' + mb;
console.log(messageMb); // 8) Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

var inVallet = +prompt('Введите вашу сумму денег в кошельке');
var chocolatePrice = +prompt('Введите цену одной шоколадки');
var mayBuy = ~~(inVallet / chocolatePrice);
var revenue = mayBuy * chocolatePrice;
var willRemain = inVallet - revenue;
var messageBuy = 'На эту сумму можно купить ' + mayBuy + ' шоколадок.';
var messageRemain = 'У Вас останется ' + willRemain + ' денег после покупки.';
console.log(messageBuy, messageRemain); // 9)   Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

var number = +prompt('Введите трехзначное число');
var reverse1 = number % 10 * 100;
var reverse2 = number % 100 - number % 10;
var reverse3 = ~~(number / 100);
var messageReverse = reverse1 + reverse2 + reverse3;
console.log(messageReverse); // 10) Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

var depositSum = +prompt('Введите сумма вклада на 2 месяца');
var depRate = 0.05 * 2 / 12;
var rate = depositSum * depRate;
console.log(rate);