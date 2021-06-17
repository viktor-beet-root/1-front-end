"use strict";

// 1)Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
// const age =+prompt('Введіть свій вік');
// let ageD;
// if (age >= 0 && age < 12) {
//     ageD = 'Ребенок';
// } else if ( age >=12 && age <=18 ) {
//     ageD = 'Подросток';
// } else if (age > 18 && age <=60)  {
//     ageD = 'Взрослий';
// } else if (age >=60 && age < 119) {
//     ageD = 'Пенсионер';
// } else {
//     ageD = 'not correct data';
// }
// console.log(ageD);
// 2)Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// const numberUser =+prompt('Введіть число');
// let specialS = null;
// switch(numberUser){
//     case 1:
//         specialS = '!';
//         break;
//     case 2:
//         specialS = '@';
//         break;
//     case 3:
//         specialS = '#';
//         break;
//     case 4:
//         specialS = '$';
//         break;
//     case 5:
//         specialS = '%';
//         break;
//     case 6:
//         specialS = '^';
//         break;
//     case 7:
//         specialS = '&';
//         break;
//     case 8:
//         specialS = '*';
//         break;
//     case 9:
//         specialS = '(';
//         break;
//     case 0:
//         specialS =')';
//         break;
//     default:
//         specialS ='not correct';
// }
// console.log(specialS);
// 3)Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
// const numberUser3 =+prompt('Введіть трьохзначне число');
// const number1 = ~~(numberUser3 / 100);
// const number2 = ~~(numberUser3 / 10) % 10;
// const number3 = numberUser3 % 10;
// let message3;
// if (number1 === number2 || number1 === number3 || number2 === number3) {
//     message3 = "Присутні однакові числа";
// } else {
//     message3 = 'Цифри не однакові';
// }
// console.log(message3);
// 4)Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// const year =+prompt('Введіть рік');
// let yearLeap;
// if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
//       yearLeap = 'Високосний рік';
// } else {
//     yearLeap = 'Не високосний';
// }
// console.log(yearLeap);
// 5)Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
var numberUserFive = +prompt('Введіть пятизначне число');
var numberOne = ~~(numberUserFive / 10000);
var numberTwo = ~~(numberUserFive / 1000) % 10;
var numberThree = ~~(numberUserFive / 100) % 10;
var numberFour = ~~(numberUserFive / 10) % 10;
var numberFiva = numberUserFive % 10;
var palindrom; // 6)Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
// 7)Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
// 8)Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
// 9)Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
// 10)Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.