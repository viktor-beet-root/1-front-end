//1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
const userQuestion1Name = prompt("Пожалуйста, введите свое имя");
const userName = "Привет, " + userQuestion1Name +"!";
console.log(userName);

//2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
const userQuestion2Year = +prompt("Пожалуйста, введите год рождения");
const currentYear = 2021;
const userYears = currentYear - userQuestion2Year;
console.log(userYears);

//3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
const userQuestion3square = +prompt("Пожалуйста, введите длину стороны квадрата");
const perimeterSquare = userQuestion3square * 4;
console.log(perimeterSquare);

//4)   Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const userQuestion4circle = +prompt("Пожалуйста, введите радиус окружности");
const circleArea = (Math.PI * (userQuestion4circle ** 2)).toFixed(2);
console.log(circleArea);

//5)   Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
const userQuestion5way = +prompt("Пожалуйста, введите расстояние в км между двумя городами");
const userQuestion5time = +prompt("Пожалуйста, введите за сколько часов необходимо добраться");
const userSpeed = (userQuestion5way / userQuestion5time) + " км/час";
console.log(userSpeed);

//6)   Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const userQuestion6currency = +prompt("Пожалуйста, введите сумму в долларах");
const rateEur = 33;
const rateUsd = 28;
const amountEur = (userQuestion6currency * (rateUsd/rateEur)).toFixed(2) + " EUR";
console.log(amountEur); 

//7)   Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
const userQuestion7flashGB = +prompt("Пожалуйста, введите обьем носителя в Гб");
const fileSize = 820
const fileQuantity = (Math.floor((userQuestion7flashGB * 1024) / fileSize)) + " файла";
console.log(fileQuantity); 

//8)   Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
const userQuestion8money = +prompt("Пожалуйста, введите сумму денег в кошельке");
const userQuestion8price = +prompt("Пожалуйста, введите цену одной шоколадки");
const resultBuying = (Math.floor(userQuestion8money / userQuestion8price)) + " шт. " + (userQuestion8money - ((Math.floor(userQuestion8money / userQuestion8price))*userQuestion8price)) + " грн. сдача";
console.log(resultBuying); 

//9)   Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
const userQuestion9number = +prompt("Пожалуйста, введите трехзначное число");
const formula1 = (userQuestion9number % 10) * 100;
const formula2 = (userQuestion9number % 100) - (formula1 / 100);
const formula3 = Math.floor(userQuestion9number / 100); 
const result = formula1 + formula2 + formula3;
console.log(result); 

//10)   Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
const userQuestion10amount = +prompt("Пожалуйста, введите сумму вклада в банк");
const bankRate = 0.05 / 365;
const depositDays = 61;
const calculatedAmount = (userQuestion10amount * (bankRate * depositDays)).toFixed(2) + " UAH";
console.log(calculatedAmount); 
