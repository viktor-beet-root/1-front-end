"use strict";

// Домашнее задание 1 по JS.
// 1)   Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
var userAge = +prompt(" Введите свой возраст: ");
var userAgeMessage;

if (userAge >= 0 && userAge <= 12) {
  userAgeMessage = "Вы являетесь: ребёнком.";
} else if (userAge >= 12 && userAge <= 18) {
  userAgeMessage = "Вы являетесь: подростком.";
} else if (userAge >= 18 && userAge <= 60) {
  userAgeMessage = "Вы являетесь: взрослым.";
} else if (userAge >= 60) {
  userAgeMessage = "Вы являетесь: пенсионером.";
} else if (Number.isNaN(userAge)) {
  userAgeMessage = "Неправильный ввод данных, введите число:";
} else if (-userAge) {
  userAgeMessage = "Неправильный ввод данных, введите число:";
}

console.log(userAgeMessage); // 2) Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

var userNumber = +prompt("Введите число от 0 до 9");
var symbolMessage;

switch (userNumber) {
  case 0:
    symbolMessage = ")";
    break;

  case 1:
    symbolMessage = "!";
    break;

  case 2:
    symbolMessage = "@";

  case 3:
    symbolMessage = "#";
    break;

  case 4:
    symbolMessage = "$";
    break;

  case 5:
    symbolMessage = "%";
    break;

  case 6:
    symbolMessage = "^";
    break;

  case 7:
    symbolMessage = "&";
    break;

  case 8:
    symbolMessage = "*";
    break;

  case 9:
    symbolMessage = "(";

  default:
    symbolMessage = "Неправильный ввод, введите число от 0 до 9.";
}

console.log(symbolMessage); // 3) Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

var enterTheNumber = +prompt("Введите трёхзначное число:");
var enterTheNumberMessage;
var number1 = Math.floor(enterTheNumber / 100);
var number2 = Math.floor(enterTheNumber / 10 % 10);
var number3 = enterTheNumber % 10;

if (number1 === number2 || number1 === number3 || number2 === number1 || number2 === number3) {
  enterTheNumberMessage = "В введёном трёхзначном числе есть одинаковые цифры";
} else if (Number.isNaN(enterTheNumber)) {
  enterTheNumberMessage = "Неправильный ввод данных, введите трёхзначое число:";
} else enterTheNumberMessage = "В введёном трёхзначном числе нет одинаковых цифр.";

console.log(enterTheNumberMessage); // 4) Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

var enterYear = +prompt("Введите год:");
var yearMessage;

if (enterYear % 4 === 0 && enterYear % 100 !== 0 || enterYear % 400 === 0) {
  yearMessage = "Год " + enterYear + ", высокосный.";
} else if (Number.isNaN(enterYear)) {
  yearMessage = "Неправильный ввод данных, введите год цифрами.";
} else yearMessage = "Год " + enterYear + ", не высокосный.";

console.log(yearMessage); //5) Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

var enterFiveNumber = +prompt("Введите пятиразрядное число: ");
var fiveNumber1 = Math.floor(enterFiveNumber / 10000);
var fiveNumber2 = Math.floor(enterFiveNumber / 1000) % 10;
var fiveNumber3 = Math.floor(enterFiveNumber / 100) % 10;
var fiveNumber4 = Math.floor(enterFiveNumber / 10) % 10;
var fiveNumber5 = enterFiveNumber % 10;
var fiveNumberMessage;

if (fiveNumber1 === fiveNumber5 && fiveNumber2 === fiveNumber4) {
  fiveNumberMessage = "Число является полиндромом.";
} else if (Number.isNaN(enterFiveNumber)) {
  fiveNumberMessage = "Неправильный ввод данных, введите пятиразрядное число.";
} else if (enterFiveNumber > 99999 || enterFiveNumber < 10000) {
  fiveNumberMessage = "Неправильный ввод данных, введите пятиразрядное число.";
} else fiveNumberMessage = "Число не является полиндромом.";

console.log(fiveNumberMessage); // 6) Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

var usd = +prompt('Введите количество USD:');
var usdConvert = prompt('Введите в какую валюту Вы хотите перевести USD: в EUR, в UAN или в AZN:');
var currencyConvert;

if (usdConvert === "EUR" || usdConvert === "eur" || usdConvert === "Eur" || usdConvert === "EUr" || usdConvert === "euR" || usdConvert === "EuR" || usdConvert === "eUR" || usdConvert === "eUr") {
  currencyConvert = usd * 0.82;
} else if (usdConvert === "UAH" || usdConvert === "uah" || usdConvert === "Uah" || usdConvert === "UAr" || usdConvert === "uaH" || usdConvert === "UaH" || usdConvert === "Uah" || usdConvert === "uAh") {
  currencyConvert = usd * 27.32;
} else if (usdConvert === "AZN" || usdConvert === "azn" || usdConvert === "Azn" || usdConvert === "AZn" || usdConvert === "azN" || usdConvert === "AzN" || usdConvert === "aZN" || usdConvert === "aZn") {
  currencyConvert = usd * 1.70;
} else if (Number.isNaN(usd)) {
  currencyConvert = "Неправильный ввод данных, введите в какую валюту Вы хотите перевести USD: в EUR, в UAN или в AZN.";
} else currencyConvert = "Неправильный ввод данных, введите в какую валюту Вы хотите перевести USD: в EUR, в UAN или в AZN.";

console.log(currencyConvert); // 7) Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

var enterPurchaseAmount = +prompt('Введите сумму покупки:');
var amountWithDiscount = +'';

if (enterPurchaseAmount >= 200 && enterPurchaseAmount < 300) {
  amountWithDiscount = 'Ваша сума к оплате с учётом скидки 3%: ' + (enterPurchaseAmount - enterPurchaseAmount * 0.03);
} else if (enterPurchaseAmount >= 300 && enterPurchaseAmount < 500) {
  amountWithDiscount = 'Ваша сума к оплате с учётом скидки 5%: ' + (enterPurchaseAmount - enterPurchaseAmount * 0.05);
} else if (enterPurchaseAmount >= 500) {
  amountWithDiscount = 'Ваша сума к оплате с учётом скидки 7%: ' + (enterPurchaseAmount - enterPurchaseAmount * 0.07);
} else if (enterPurchaseAmount >= 0 && enterPurchaseAmount <= 199) {
  amountWithDiscount = 'Ваша сума к оплате без учёта скидки: ' + enterPurchaseAmount;
} else if (Number.isNaN(enterPurchaseAmount)) {
  amountWithDiscount = "Неправильный ввод данных, введите сумму покупки цифрами.";
}

console.log(amountWithDiscount); //8.) Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

var сircumference = +prompt('Введите длину окружности:');
var perimeterOfSquare = +prompt('Введите периметр квадрата:');
var сircumferenceCalculate = сircumference / Math.PI;
var perimeterOfSquareCalculate = perimeterOfSquare / 4;
var messageCircumSquare;

if (perimeterOfSquareCalculate <= сircumferenceCalculate) {
  messageCircumSquare = 'Окружность поместиться в указанный квадрат.';
} else if (perimeterOfSquareCalculate > сircumferenceCalculate) {
  messageCircumSquare = 'Окружность не поместиться в указанный квадрат.';
} else if (Number.isNaN(сircumference)) {
  messageCircumSquare = 'Неправильный ввод данных, введите длину окружности и периметр квадрата цифрами.';
} else if (Number.isNaN(perimeterOfSquare)) {
  messageCircumSquare = 'Неправильный ввод данных, введите длину окружности и периметр квадрата цифрами.';
}

console.log(messageCircumSquare); //9.) Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

var capital = +prompt('Назовите столицу Таиланда? Варианты ответов: 1 - Паттайя, 2 - Джакарта, 3 - Бангкок.');
var place = +prompt('Что за место, попав в которое, человек делает селфи на кухне, которую не может себе позволить? Варианты ответов: 1 - Лондон, 2 - Рим, 3 - Икея.');
var uncleDed = +prompt('Какой город объявлен официальной родиной русского Деда Мороза? Варианты ответов: 1 - Малая Вишера, 2 - Великий Устюг, 3 - Лапландия.');
var point = 0;
var errorMsg;

if (capital === 3) {
  point += 2;
} else if (Number.isNaN(capital)) {
  errorMsg = 'Неправильный ввод данных, выберите вариант ответа: 1, 2 или 3.';
  console.log(errorMsg);
}

if (place === 3) {
  point += 2;
} else if (Number.isNaN(place)) {
  errorMsg = 'Неправильный ввод данных, выберите вариант ответа: 1, 2 или 3.';
  console.log(errorMsg);
}

if (uncleDed === 2) {
  point += 2;
} else if (Number.isNaN(uncleDed)) {
  errorMsg = 'Неправильный ввод данных, выберите вариант ответа: 1, 2 или 3.';
  console.log(errorMsg);
}

console.log('Количество набранных Вами баллов: ' + point); //10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

var day = +prompt('Введите день:');
var month = +prompt('Введите месяц:');
var year = +prompt('Введите год:');
var day1 = 0;
var month1 = 0;
var year1 = 0;
var msgDatePlus1;

if (day >= 1 && day < 31) {
  day1 = day + 1;
  month1 = month;
  year1 = year;
  msgDatePlus1 = 'Следующий день: ' + day1 + '.' + month1 + '.' + year + '.';
} else if (day === 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
  day1 = 1;
  month1 = month + 1;
  year1 = year;
  msgDatePlus1 = 'Следующий день: ' + day1 + '.' + month1 + '.' + year + '.';
} else if (day === 31 && (month == 4 || month == 6 || month == 9 || month == 11)) {
  msgDatePlus1 = "Не верный ввод данных, в этом месяце 30 дней";
} else if (day === 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)) {
  day1 = 1;
  month1 = month + 1;
  year1 = year;
  msgDatePlus1 = 'Следующий день: ' + day1 + '.' + month1 + '.' + year + '.';
} else if (day === 31 && month === 12) {
  day1 = 1;
  month1 = 1;
  year1 = year + 1;
  msgDatePlus1 = 'Следующий день: ' + day1 + '.' + month1 + '.' + year + '.';
  console.log(msgDatePlus1);
}

if (day === 28 && month == 2 && year % 4 != 0 || year % 100 === 0 && year % 400 !== 0) {
  day1 = 1;
  month1 = month + 1;
  year1 = year;
  msgDatePlus1 = 'Следующий день: ' + day1 + '.' + month1 + '.' + year + '.';
} else if (day === 29 && month == 2 && year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
  day1 = 1;
  month1 = month + 1;
  year1 = year;
  msgDatePlus1 = 'Следующий день: ' + day1 + '.' + month1 + '.' + year + '.';
} else if (day === 29 && month == 2 && year % 4 != 0 || year % 100 === 0 && year % 400 !== 0) {
  day1 = 1;
  month1 = month + 1;
  year1 = year;
  msgDatePlus1 = 'Следующий день: ' + day1 + '.' + month1 + '.' + year + '.';
} else if (month === 2 && day > 29) {
  msgDatePlus1 = "Не верный ввод данных, в феврале месяце может быть 28 или 29 дней.";
}

if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year) || day > 31 || month > 12 || day <= 0 || month <= 0 || year <= 0) {
  msgDatePlus1 = "Не верный ввод данных";
}

console.log(msgDatePlus1);