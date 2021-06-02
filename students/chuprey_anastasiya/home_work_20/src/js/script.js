//)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

const yourName = prompt('Ваше ім`я');
const messageName = "Привіт, " + yourName + ".";
console.log(messageName);

//  2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

const thisYear = 2021;
let userYear = +prompt('Введіть Ваш рік народження');
let messageYear = "Вам " + (thisYear - userYear) + " роки.";
console.log(messageYear);

// 3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

const sideSquare = +prompt('Введіть довжину сторони квадрата:');
const squareArea = (4 * sideSquare);
const count = ("Площа квадрата = " + squareArea);
console.log(count);

// 4)   Запросите у пользователя радиус окружности и выведите площадь такой окружности.

const numberPi = 3.14;
const radius = +prompt('Введіть радіус:');
const circleArea = (radius ** 2) * 3.14;
console.log(circleArea);

//5) Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя

let distance = +prompt('Введіть відстань між містами в км:');
let time = +prompt('Введіть час в годинах на дорогу:');
const speed = distance / time;
console.log(speed);

//6) Реализуйте конвертор валют.Пользователь вводит доллары, программа переводит в евро.Курс валюты храните в константе.

let usdAmount = +prompt('Введіть сумму в долларах:');
const eurСourse = 0.819;
const eurAmount = usdAmount * eurСourse;
console.log(eurAmount + " євро.");

//7) Пользователь указывает объем флешки в Гб.Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

let flashVolumeHb = +prompt('Який об`єм флешки?');
const mB = 1024 * flashVolumeHb;
const filesNum = ~~(mB / 820);
console.log("Кількість файлів,які вмістить флешка:" + filesNum);

// 8)   Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

let amountUser = +prompt('Введіть сумму:');
const chokoPrise = 22;
const chokoNum = ~~(amountUser / chokoPrise);
const residual = (amountUser % chokoPrise);
console.log("Кількість шоколадок:" + chokoNum);
console.log("Решта:" + residual);


// // 9)   Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

let userNum = +prompt('Введіть трьохзначне число');
const backNum = (userNum % 10) * 100 + ~~((userNum / 10) % 10) * 10 + ~~(userNum / 100);
console.log(backNum);

//10)Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

let depositAmount = +prompt('Яка сумма депозиту?');
const yearProcent = 5;
const bankDays = 61;
const accruedfunds = ((depositAmount * yearProcent * bankDays / 365) / 100);
console.log(accruedfunds);


