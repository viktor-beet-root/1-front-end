//1) Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

const yourName = prompt("Ваше имя?");
const hello = "Привет, ";
const messageHello = hello  + yourName + "!" ;
console.log(messageHello);

//2) Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

const yourBirthday = +prompt("Год вашего рождения?");
const presentYear = 2021;
const yourAge = presentYear - yourBirthday ;
const messageAge = "Вам: " + yourAge;
console.log(messageAge);

//3) Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

const square_side_length = +prompt("Введите дилину стороны квадрата");
const perimeter = 4 * square_side_length;
const messagePerimeter = "Периметр квадрата: " + perimeter;
console.log(messagePerimeter);

//4) Запросите у пользователя радиус окружности и выведите площадь такой окружности.

const circleRadius = +prompt("Введите радиус окружности");
const circleArea = Math.PI * Math.pow(circleRadius, 2);
const messageArea = "Площадь окружности: " + circleArea;
console.log(messageArea);

//5) Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

const distance = +prompt("Введите расстояние в км между двумя городами");
const time = +prompt("Введите время в часах закоторое хотите добраться в пункт назначения");
const speed = distance / time ;
const messageSpeed = "Чтобы успеть вовремя,ваша скорость должна быть : " + speed + " км/ч";
console.log(messageSpeed);

///6) Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

const usdQuantity =  +prompt("Введите сумму в USD");
const euroValue = 0.83;
const euroQuantity = usdQuantity * euroValue ;
const messageQuantity = "Вы получите EURO: " + euroQuantity;
console.log(messageQuantity);

//7) Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

const flashDrive_volume = +prompt("Введите объем флешки в Гб");
const fileSize = 820;
const fileQuantity = ( (flashDrive_volume * 1024 ) / 820 ) ;
const messageFlashDrive = "На флешку обьемом: " + flashDrive_volume + " Гб," + " файлов размером в 820 Мб помещается " + Math.floor(fileQuantity) ;
console.log(messageFlashDrive);

//8) Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

const moneyQuantity = +prompt("Введите сумму денег в кошельке");
const chocolateCost = +prompt("Введите цену одной шоколадки");
const canBuy = ~~(moneyQuantity / chocolateCost);
const revenueOll = canBuy * chocolateCost;
const remainMoney = moneyQuantity - revenueOll;
const messageBuy = "Вы можете купить: " + canBuy + " шоколадок.";
const messageRemain = "У вас останиться денег " + remainMoney;
console.log(messageBuy,messageRemain);

//9) Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

const number = +prompt("Введите трехзначное число");
const numberRevert_1 = ~~(number) % 10 ;
const numberRevert_2 = ~~(number / 10 ) % 10;
const numberRevert_3 =  ~~(number / 100 ) % 10;
const messageRevert = "Число задом наперед: " + numberRevert_1 + numberRevert_2 + numberRevert_3 ;
console.log(messageRevert);

//10) Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

const moneyDeposite = +prompt("Введите сумму вклада в банк на 2 месяца");
const depositeTime = 2;
const yearPercent = 5;
const year = 12;
const moneyPercent = (moneyDeposite * yearPercent * depositeTime / year) / 100 ;
const messagePercent = "Сумма начисленных процентов: " + moneyPercent ;
console.log(messagePercent);
